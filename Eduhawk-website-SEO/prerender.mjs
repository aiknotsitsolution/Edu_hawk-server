import { JSDOM } from "jsdom";
import fs from "fs";
import path from "path";
import { renderToString } from "react-dom/server";
import React from "react";
import { routeList } from "./src/routes/routes.jsx";

// Setup DOM environment before importing React components
const dom = new JSDOM("<!DOCTYPE html><html><head></head><body><div id='root'></div></body></html>", {
  url: "http://localhost:5173",
});
global.window = dom.window;
global.document = dom.window.document;
global.navigator = dom.window.navigator;
global.requestAnimationFrame = dom.window.requestAnimationFrame || (cb => setTimeout(cb, 0));

async function main() {
  // Dynamic import of server entry
  const { render } = await import("./src/entry-server.jsx");

  const distDir = path.join(process.cwd(), "dist");

  if (!fs.existsSync(distDir)) {
    console.error("dist directory not found. Run vite build first.");
    process.exit(1);
  }

  const template = fs.readFileSync(path.join(distDir, "index.html"), "utf-8");

  // Filter routes: exclude noindex routes and dynamic blog detail
  const prerenderRoutes = routeList.filter(route => {
    if (route === "/landingpage") return false; // noindex
    if (route.includes(":")) return false; // dynamic routes
    return true;
  });

  let successCount = 0;
  let failCount = 0;
  const failedRoutes = [];

  for (const route of prerenderRoutes) {
    try {
      const { html, helmet } = await render(route);

      let pageHtml = template;

      // Extract helmet data
      const titleHtml = helmet?.title?.toString() || "";
      const metaHtml = helmet?.meta?.toString() || "";
      const linkHtml = helmet?.link?.toString() || "";

      // Replace title
      if (titleHtml) {
        pageHtml = pageHtml.replace(/<title>.*?<\/title>/s, titleHtml);
      }

      // Insert meta and link tags before </head>
      const headTags = [metaHtml, linkHtml].filter(Boolean).join("\n");
      if (headTags) {
        pageHtml = pageHtml.replace("</head>", `${headTags}\n</head>`);
      }

      // Insert rendered HTML
      pageHtml = pageHtml.replace(
        '<div id="root"></div>',
        `<div id="root">${html}</div>`
      );

      // Determine output path
      const routePath = route === "/" ? "" : route.replace(/^\//, "");
      const outputDir = path.join(distDir, routePath);
      const outputFile = path.join(outputDir, "index.html");

      if (route !== "/") {
        fs.mkdirSync(outputDir, { recursive: true });
      }

      fs.writeFileSync(outputFile, pageHtml);
      successCount++;
      console.log(`✅ Prerendered: ${route}`);
    } catch (err) {
      failCount++;
      failedRoutes.push({ route, error: err.message });
      console.error(`❌ Failed to prerender ${route}:`, err.message);
    }
  }

  console.log(`\n📊 Prerender complete: ${successCount} succeeded, ${failCount} failed`);
  if (failedRoutes.length > 0) {
    console.log("\nFailed routes:");
    failedRoutes.forEach(({ route, error }) => {
      console.log(`  - ${route}: ${error}`);
    });
  }
}

main().catch((err) => {
  console.error("Prerender script failed:", err);
  process.exit(1);
});