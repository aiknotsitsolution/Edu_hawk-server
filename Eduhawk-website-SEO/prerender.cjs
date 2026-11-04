const { JSDOM } = require("jsdom");
const fs = require("fs");
const path = require("path");
const { renderToString } = require("react-dom/server");
const React = require("react");

// Setup DOM environment
const dom = new JSDOM("<!DOCTYPE html><html><head></head><body><div id='root'></div></body></html>", {
  url: "http://localhost:5173",
});
global.window = dom.window;
global.document = dom.window.document;
global.navigator = dom.window.navigator;
global.requestAnimationFrame = dom.window.requestAnimationFrame || (cb => setTimeout(cb, 0));

// Now we need to use ESM modules. Since this is .cjs, we'll use dynamic import.
async function main() {
  // Read the route list
  const { routeList } = await import("./src/routes/routes.jsx");

  // Import the server entry
  const { default: render } = await import("./src/entry-server.jsx");

  const distDir = path.join(__dirname, "dist");

  // Ensure dist exists
  if (!fs.existsSync(distDir)) {
    console.error("dist directory not found. Run vite build first.");
    process.exit(1);
  }

  // Read the base index.html
  const template = fs.readFileSync(path.join(distDir, "index.html"), "utf-8");

  let successCount = 0;
  let failCount = 0;

  for (const route of routeList) {
    // Skip noindex routes
    if (route === "/landingpage") {
      console.log(`⏭️  Skipping noindex route: ${route}`);
      continue;
    }

    try {
      const { html, helmet } = await render(route);

      // Build the HTML with Helmet metadata
      let pageHtml = template;

      // Extract helmet data
      const title = helmet?.title?.toString() || "";
      const meta = helmet?.meta?.toString() || "";
      const link = helmet?.link?.toString() || "";

      // Replace the title tag
      if (title) {
        pageHtml = pageHtml.replace(/<title>.*?<\/title>/s, title);
      }

      // Insert meta tags before </head>
      const headTags = [meta, link].filter(Boolean).join("\n");
      if (headTags) {
        pageHtml = pageHtml.replace("</head>", `${headTags}\n</head>`);
      }

      // Insert rendered HTML into the root div
      pageHtml = pageHtml.replace(
        '<div id="root"></div>',
        `<div id="root">${html}</div>`
      );

      // Determine output path
      const routePath = route === "/" ? "" : route;
      const outputDir = path.join(distDir, routePath);
      const outputFile = path.join(outputDir, "index.html");

      // Create directory if needed
      if (route !== "/") {
        fs.mkdirSync(outputDir, { recursive: true });
      }

      fs.writeFileSync(outputFile, pageHtml);
      successCount++;
      console.log(`✅ Prerendered: ${route}`);
    } catch (err) {
      failCount++;
      console.error(`❌ Failed to prerender ${route}:`, err.message);
    }
  }

  console.log(`\n📊 Prerender complete: ${successCount} succeeded, ${failCount} failed`);
}

main().catch((err) => {
  console.error("Prerender script failed:", err);
  process.exit(1);
});