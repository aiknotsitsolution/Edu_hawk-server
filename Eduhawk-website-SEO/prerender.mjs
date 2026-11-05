import { createServer } from "vite";
import fs from "fs";
import path from "path";

// List of all 71 public static routes (excluding dynamic /blog/:slugOrId and paid noindex /landingpage)
const routes = [
  "/",
  "/about",
  "/study-abroad",
  "/mbbs-abroad/russia",
  "/mbbs-abroad/bangladesh",
  "/mbbs-abroad/kazakhstan",
  "/mbbs-abroad/armenia",
  "/mbbs-abroad/belarus",
  "/mbbs-abroad/china",
  "/mbbs-abroad/kyrgyzstan",
  "/mbbs-abroad/egypt",
  "/mbbs-abroad/georgia",
  "/mbbs-abroad/iran",
  "/mbbs-abroad/nepal",
  "/mbbs-abroad/tajikistan",
  "/mbbs-abroad/uzbekistan",
  "/mbbs-abroad/vietnam",
  "/mbbs-abroad/italy",
  "/blog/education-blog",
  "/blog",
  "/services",
  "/contact",
  "/allcollege",
  "/courses/mbbs",
  "/courses/medical-abroad",
  "/courses/dentistry",
  "/courses/nursing",
  "/courses/pharmacy",
  "/courses/physiotherapy",
  "/courses/public-health",
  "/courses/biotechnology",
  "/courses/engineering",
  "/courses/business-management",
  "/courses/mba",
  "/courses/mbs",
  "/courses/bba",
  "/courses/bbs",
  "/courses/executive-mba",
  "/courses/international-business",
  "/courses/marketing-management",
  "/courses/hospitality-management",
  "/courses/architecture",
  "/courses/law",
  "/study-abroad/language-courses",
  "/study-abroad/summer-courses",
  "/study-abroad/winter-courses",
  "/study-abroad/working-professionals",
  "/courses/accounting-finance",
  "/courses/ug/engineering",
  "/courses/ug/computer-engineering",
  "/courses/ug/mechanical-engineering",
  "/courses/ug/civil-engineering",
  "/courses/ug/electrical-engineering",
  "/courses/ug/electronics-communication",
  "/courses/ug/chemical-engineering",
  "/courses/ug/aerospace-engineering",
  "/courses/ug/biomedical-engineering",
  "/courses/ug/automobile-engineering",
  "/courses/pg/engineering",
  "/courses/pg/computer-engineering",
  "/courses/pg/mechanical-engineering",
  "/courses/pg/civil-engineering",
  "/courses/pg/electrical-engineering",
  "/courses/pg/electronics-communication",
  "/courses/pg/chemical-engineering",
  "/courses/pg/aerospace-engineering",
  "/courses/pg/biomedical-engineering",
  "/courses/pg/automobile-engineering",
  "/terms-conditions",
  "/privacy-policy",
  "/cookies-policy"
];

async function prerender() {
  const distDir = path.join(process.cwd(), "dist");
  const templatePath = path.join(distDir, "index.html");
  const cleanTemplatePath = path.join(distDir, "template.html");

  if (!fs.existsSync(distDir) || !fs.existsSync(templatePath)) {
    console.error("❌ dist/index.html not found! Run 'npm run build' first.");
    process.exit(1);
  }

  // Preserve clean SPA shell template so subsequent runs don't accumulate injected tags
  if (!fs.existsSync(cleanTemplatePath)) {
    fs.copyFileSync(templatePath, cleanTemplatePath);
  }
  const baseTemplate = fs.readFileSync(cleanTemplatePath, "utf-8");

  console.log("🚀 Initializing Vite SSR renderer...");
  const vite = await createServer({
    root: process.cwd(),
    server: { middlewareMode: true },
    appType: "custom",
  });

  const { render } = await vite.ssrLoadModule("/src/entry-server.jsx");

  console.log(`📄 Starting static HTML generation for ${routes.length} routes...`);

  let successCount = 0;
  let failCount = 0;
  const failures = [];

  for (const route of routes) {
    try {
      const { html } = await render(route);

      const firstDivIndex = html.indexOf("<div");
      const headSnippet = firstDivIndex !== -1 ? html.substring(0, firstDivIndex) : "";
      const bodySnippet = firstDivIndex !== -1 ? html.substring(firstDivIndex) : html;

      // Extract SEO head tags
      const titleMatch = headSnippet.match(/<title[^>]*>[\s\S]*?<\/title>/i);
      const descMatch = headSnippet.match(/<meta\s+name="description"[\s\S]*?>/i);
      const robotsMatch = headSnippet.match(/<meta\s+name="robots"[\s\S]*?>/i);
      const canonMatch = headSnippet.match(/<link[^>]*rel="canonical"[\s\S]*?>/i);
      const keywordsMatch = headSnippet.match(/<meta\s+name="keywords"[\s\S]*?>/i);
      const ogMatches = headSnippet.match(/<meta\s+property="og:[^"]*"[\s\S]*?>/gi) || [];
      const twitterMatches = headSnippet.match(/<meta\s+name="twitter:[^"]*"[\s\S]*?>/gi) || [];
      const jsonLdMatches = headSnippet.match(/<script\s+type="application\/ld\+json"[\s\S]*?<\/script>/gi) || [];

      // Clean base template: remove default title, description, and any leftover SEO tags
      let pageHtml = baseTemplate;
      pageHtml = pageHtml.replace(/<title[^>]*>[\s\S]*?<\/title>/i, "");
      pageHtml = pageHtml.replace(/<meta\s+name="description"[\s\S]*?>/i, "");
      pageHtml = pageHtml.replace(/<meta\s+name="robots"[\s\S]*?>/gi, "");
      pageHtml = pageHtml.replace(/<link\s+rel="canonical"[\s\S]*?>/gi, "");
      pageHtml = pageHtml.replace(/<meta\s+property="og:[^"]*"[\s\S]*?>/gi, "");
      pageHtml = pageHtml.replace(/<meta\s+name="twitter:[^"]*"[\s\S]*?>/gi, "");

      // Assemble new head tags
      const injectedTags = [
        titleMatch ? titleMatch[0] : "",
        descMatch ? descMatch[0] : "",
        robotsMatch ? robotsMatch[0] : "",
        canonMatch ? canonMatch[0] : "",
        keywordsMatch ? keywordsMatch[0] : "",
        ...ogMatches,
        ...twitterMatches,
        ...jsonLdMatches
      ].filter(Boolean).join("\n    ");

      // Inject tags right after <head>
      pageHtml = pageHtml.replace("<head>", `<head>\n    ${injectedTags}`);

      // Inject rendered body into <div id="root"></div>
      pageHtml = pageHtml.replace('<div id="root"></div>', `<div id="root">${bodySnippet}</div>`);

      // Determine output directory & file path
      const routePath = route === "/" ? "" : route.replace(/^\//, "");
      const outputDir = path.join(distDir, routePath);
      const outputFile = path.join(outputDir, "index.html");

      if (route !== "/" && !fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
      }

      fs.writeFileSync(outputFile, pageHtml, "utf-8");
      successCount++;
      console.log(`✅ [${successCount}/${routes.length}] Generated: ${route} -> ${path.relative(distDir, outputFile)}`);
    } catch (err) {
      failCount++;
      failures.push({ route, error: err.message });
      console.error(`❌ Failed: ${route} - ${err.message}`);
    }
  }

  await vite.close();

  console.log("\n==========================================");
  console.log(`🎉 Static prerender complete!`);
  console.log(`✅ Successful: ${successCount}`);
  console.log(`❌ Failed:     ${failCount}`);
  console.log("==========================================");

  if (failures.length > 0) {
    console.error("\nFailed routes details:");
    failures.forEach((f) => console.error(`  - ${f.route}: ${f.error}`));
    process.exit(1);
  }
}

prerender().catch((err) => {
  console.error("Prerender fatal error:", err);
  process.exit(1);
});
