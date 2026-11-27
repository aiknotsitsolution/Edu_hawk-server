/**
 * EduHawk Decap CMS GitHub OAuth Proxy — Cloudflare Worker
 * 
 * Strict Security Architecture:
 * 1. Server-side GitHub Client ID & Secret via Cloudflare Environment Secrets.
 * 2. Strict exact origin allowlist (No open wildcards).
 * 3. Cryptographic HMAC-SHA256 signed state validation with TTL (Anti-CSRF).
 * 4. Decap CMS window.postMessage protocol compliant.
 */

// Exact approved EduHawk CMS Origins (Strictly no wildcards)
const ALLOWED_ORIGINS = new Set([
  "https://eduhawk.in",
  "https://www.eduhawk.in",
  "https://edu-hawkstudyabbroad2.vercel.app",
  "https://eduhawkwebsite.vercel.app",
  "eduhawk.in",
  "www.eduhawk.in",
  "edu-hawkstudyabbroad2.vercel.app",
  "eduhawkwebsite.vercel.app",
  "http://localhost:5173",
  "http://localhost:3000",
  "http://127.0.0.1:5173",
  "http://127.0.0.1:3000",
  "localhost:5173",
  "localhost:3000"
]);

const OAUTH_AUTHORIZE_URL = "https://github.com/login/oauth/authorize";
const OAUTH_TOKEN_URL = "https://github.com/login/oauth/access_token";
const STATE_TTL_MS = 10 * 60 * 1000; // 10 minutes

/**
 * Generate HMAC-SHA256 signature for OAuth state
 */
async function signData(data, secret) {
  const enc = new TextEncoder();
  const key = await crypto.subtle.importKey(
    "raw",
    enc.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const signature = await crypto.subtle.sign("HMAC", key, enc.encode(data));
  return btoa(String.fromCharCode(...new Uint8Array(signature)))
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

/**
 * Verify HMAC-SHA256 signature
 */
async function verifySignature(data, signature, secret) {
  const expected = await signData(data, secret);
  return expected === signature;
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // 1. Health check endpoint
    if (url.pathname === "/" || url.pathname === "/health") {
      return new Response(JSON.stringify({ status: "healthy", service: "eduhawk-decap-oauth-proxy" }), {
        status: 200,
        headers: { "Content-Type": "application/json" }
      });
    }

    // 2. Auth initiation endpoint (/auth)
    if (url.pathname === "/auth") {
      const siteId = url.searchParams.get("site_id");
      const provider = url.searchParams.get("provider") || "github";
      const scope = url.searchParams.get("scope") || "repo";

      if (provider !== "github") {
        return new Response("Unsupported provider", { status: 400 });
      }

      // Origin validation
      let targetOrigin = null;
      if (siteId) {
        let normalized = siteId.trim();
        if (!normalized.startsWith("http://") && !normalized.startsWith("https://")) {
          normalized = (normalized.includes("localhost") || normalized.includes("127.0.0.1"))
            ? `http://${normalized}`
            : `https://${normalized}`;
        }
        try {
          const parsed = new URL(normalized);
          targetOrigin = parsed.origin;
        } catch {
          targetOrigin = normalized;
        }
      }

      // Check against strict allowlist
      if (!targetOrigin || (!ALLOWED_ORIGINS.has(targetOrigin) && !ALLOWED_ORIGINS.has(siteId))) {
        return new Response(`Forbidden: Origin '${targetOrigin}' is not in the EduHawk allowed origins list.`, {
          status: 403,
          headers: { "Content-Type": "text/plain" }
        });
      }

      // Ensure secrets are configured
      if (!env.GITHUB_CLIENT_ID || !env.GITHUB_CLIENT_SECRET) {
        return new Response("Server error: GitHub OAuth credentials are not configured on this Worker.", {
          status: 500,
          headers: { "Content-Type": "text/plain" }
        });
      }

      // Generate tamper-proof state containing origin and timestamp
      const statePayload = JSON.stringify({
        origin: targetOrigin,
        ts: Date.now(),
        nonce: crypto.randomUUID()
      });
      const encodedPayload = btoa(statePayload)
        .replace(/\+/g, "-")
        .replace(/\//g, "_")
        .replace(/=+$/, "");
      const signature = await signData(encodedPayload, env.GITHUB_CLIENT_SECRET);
      const state = `${encodedPayload}.${signature}`;

      // Construct GitHub authorize URL
      const callbackUrl = `${url.origin}/callback`;
      const authUrl = new URL(OAUTH_AUTHORIZE_URL);
      authUrl.searchParams.set("client_id", env.GITHUB_CLIENT_ID);
      authUrl.searchParams.set("redirect_uri", callbackUrl);
      authUrl.searchParams.set("scope", scope);
      authUrl.searchParams.set("state", state);

      return Response.redirect(authUrl.toString(), 302);
    }

    // 3. Callback endpoint (/callback)
    if (url.pathname === "/callback") {
      const code = url.searchParams.get("code");
      const state = url.searchParams.get("state");
      const error = url.searchParams.get("error");
      const errorDescription = url.searchParams.get("error_description");

      if (error) {
        return renderPostMessageHtml("error", { error, error_description: errorDescription }, "*");
      }

      if (!code || !state) {
        return new Response("Invalid request: Missing code or state parameter", { status: 400 });
      }

      // Validate state signature
      const stateParts = state.split(".");
      if (stateParts.length !== 2) {
        return new Response("Invalid state format", { status: 400 });
      }

      const [encodedPayload, signature] = stateParts;
      const isValid = await verifySignature(encodedPayload, signature, env.GITHUB_CLIENT_SECRET);
      if (!isValid) {
        return new Response("Security violation: Invalid state signature", { status: 403 });
      }

      // Decode state payload
      let parsedState;
      try {
        const decoded = atob(encodedPayload.replace(/-/g, "+").replace(/_/g, "/"));
        parsedState = JSON.parse(decoded);
      } catch {
        return new Response("Failed to decode state payload", { status: 400 });
      }

      // Validate TTL
      if (Date.now() - parsedState.ts > STATE_TTL_MS) {
        return new Response("OAuth state has expired. Please try logging in again.", { status: 400 });
      }

      // Validate target origin again
      if (!ALLOWED_ORIGINS.has(parsedState.origin)) {
        return new Response("Forbidden origin in state", { status: 403 });
      }

      // Exchange temporary code for GitHub access token
      const tokenResponse = await fetch(OAUTH_TOKEN_URL, {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "User-Agent": "EduHawk-Decap-OAuth-Proxy"
        },
        body: JSON.stringify({
          client_id: env.GITHUB_CLIENT_ID,
          client_secret: env.GITHUB_CLIENT_SECRET,
          code
        })
      });

      const tokenData = await tokenResponse.json();

      if (tokenData.error) {
        return renderPostMessageHtml("error", tokenData, parsedState.origin);
      }

      // Render standard Decap CMS postMessage receiver HTML
      return renderPostMessageHtml("success", {
        token: tokenData.access_token,
        provider: "github"
      }, parsedState.origin);
    }

    return new Response("Not found", { status: 404 });
  }
};

/**
 * Render postMessage HTML required by Decap CMS
 */
function renderPostMessageHtml(status, content, targetOrigin) {
  const contentString = JSON.stringify(content);
  const message = `authorization:github:${status}:${contentString}`;
  const originConstraint = targetOrigin && targetOrigin !== "*" ? targetOrigin : "*";

  const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>EduHawk CMS Authorization</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; display: flex; align-items: center; justify-content: center; height: 100vh; margin: 0; background: #f8fafc; color: #1e293b; }
    .card { background: white; padding: 2rem; border-radius: 8px; box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1); text-align: center; max-width: 400px; }
  </style>
</head>
<body>
  <div class="card">
    <h3>Authenticating with EduHawk CMS...</h3>
    <p>Please wait while your authentication completes.</p>
  </div>
  <script>
    (function() {
      function receiveMessage(e) {
        window.opener.postMessage(
          ${JSON.stringify(message)},
          ${JSON.stringify(originConstraint)}
        );
        window.close();
      }
      window.addEventListener("message", receiveMessage, false);
      window.opener.postMessage("authorizing:github", "*");
    })();
  </script>
</body>
</html>`;

  return new Response(html, {
    status: 200,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "no-store, no-cache, must-revalidate"
    }
  });
}
