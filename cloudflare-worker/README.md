# EduHawk Decap CMS — Cloudflare Worker OAuth Proxy

This Cloudflare Worker handles the GitHub OAuth server-side token exchange for Decap CMS across EduHawk production and Vercel preview environments.

---

## 1. Architecture & Security Controls

1. **Server-Side Secret Isolation:** `GITHUB_CLIENT_SECRET` is stored exclusively in Cloudflare Worker encrypted secrets. It is never exposed to the frontend or repository.
2. **Exact Origin Allowlist (No Wildcards):** Only requests originating from the following approved domains are accepted:
   - `https://eduhawk.in`
   - `https://www.eduhawk.in`
   - `https://edu-hawkstudyabbroad2.vercel.app`
   - `https://eduhawkwebsite.vercel.app`
   - `http://localhost:5173`
   - `http://localhost:3000`
3. **Cryptographic Anti-CSRF Protection:** State parameter is signed with HMAC-SHA256 and verified upon callback, enforcing a 10-minute expiration window and matching origin validation.
4. **Decap CMS PostMessage Protocol:** Fully compliant with standard `window.opener.postMessage("authorization:github:success:...", origin)` handshake.

---

## 2. Deployment Instructions

### Prerequisites
- Node.js 18+ installed.
- Access to the team Cloudflare account.

### Step 1: Install Wrangler CLI (Local Dev / Deployment Machine)
```bash
cd cloudflare-worker
npm install
```

### Step 2: Authenticate with Cloudflare
```bash
npx wrangler login
```

### Step 3: Add Encrypted Secrets to Cloudflare
Run the following commands and paste the respective secrets when prompted:
```bash
npx wrangler secret put GITHUB_CLIENT_ID
# Prompt: Enter GITHUB_CLIENT_ID (e.g. Ov23li...)

npx wrangler secret put GITHUB_CLIENT_SECRET
# Prompt: Enter GITHUB_CLIENT_SECRET (e.g. 8f4e2b...)
```

### Step 4: Deploy the Worker
```bash
npx wrangler deploy
```

Upon successful deployment, Wrangler will output your live URL:
```text
Published eduhawk-cms-auth (1.23 sec)
  https://eduhawk-cms-auth.<your-subdomain>.workers.dev
```

---

## 3. GitHub OAuth Application Configuration

In GitHub Developer Settings (`https://github.com/settings/developers`):

| Setting | Value |
| :--- | :--- |
| **Application name** | `EduHawk Decap CMS` |
| **Homepage URL** | `https://eduhawk.in` |
| **Application description** | Decap CMS Content Management Provider for EduHawk |
| **Authorization callback URL** | `https://eduhawk-cms-auth.<your-subdomain>.workers.dev/callback` |

---

## 4. Decap CMS `config.yml` Binding

Update `public/admin/config.yml`:
```yaml
backend:
  name: github
  repo: aiknotsitsolution/Edu_hawk-server
  branch: master
  base_url: https://eduhawk-cms-auth.<your-subdomain>.workers.dev
  auth_endpoint: auth

publish_mode: editorial_workflow
```
