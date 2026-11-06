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
  // Finland Routes
  "/study-abroad/finland/architecture",
  "/study-abroad/finland/bba",
  "/study-abroad/finland/bbs",
  "/study-abroad/finland/business-management",
  "/study-abroad/finland/it",
  "/study-abroad/finland/pg/aerospace-engineering",
  "/study-abroad/finland/pg/automobile-engineering",
  "/study-abroad/finland/pg/biomedical-engineering",
  "/study-abroad/finland/pg/chemical-engineering",
  "/study-abroad/finland/pg/civil-engineering",
  "/study-abroad/finland/pg/computer-engineering",
  "/study-abroad/finland/pg/computer-science",
  "/study-abroad/finland/pg/electrical-engineering",
  "/study-abroad/finland/pg/electronics-communication",
  "/study-abroad/finland/pg/mechanical-engineering",
  "/study-abroad/finland/ug/aerospace-engineering",
  "/study-abroad/finland/ug/automobile-engineering",
  "/study-abroad/finland/ug/biomedical-engineering",
  "/study-abroad/finland/ug/chemical-engineering",
  "/study-abroad/finland/ug/civil-engineering",
  "/study-abroad/finland/ug/computer-engineering",
  "/study-abroad/finland/ug/computer-science",
  "/study-abroad/finland/ug/electrical-engineering",
  "/study-abroad/finland/ug/electronics-communication",
  "/study-abroad/finland/ug/mechanical-engineering",
  "/study-abroad/finland/ug/engineering",
  "/study-abroad/finland/executive-mba",
  "/study-abroad/finland/hospitality-management",
  "/study-abroad/finland/international-business",
  "/study-abroad/finland/language-courses",
  "/study-abroad/finland/law",
  "/study-abroad/finland/mba",
  "/study-abroad/finland/biotechnology",
  "/study-abroad/finland/dentistry",
  "/study-abroad/finland/nursing",
  "/study-abroad/finland/pharmacy",
  "/study-abroad/finland/physiotherapy",
  "/study-abroad/finland/public-health",
  "/study-abroad/finland/mbs",
  "/study-abroad/finland/summer-courses",
  "/study-abroad/finland/winter-courses",
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
      const { html, helmet } = await render(route);

      // Clean base template: remove default title, description, and any leftover SEO tags
      let pageHtml = baseTemplate;
      pageHtml = pageHtml.replace(/<title[^>]*>[\s\S]*?<\/title>/i, "");
      pageHtml = pageHtml.replace(/<meta\s+name="description"[\s\S]*?>/i, "");
      pageHtml = pageHtml.replace(/<meta\s+name="robots"[\s\S]*?>/gi, "");
      pageHtml = pageHtml.replace(/<link\s+rel="canonical"[\s\S]*?>/gi, "");
      pageHtml = pageHtml.replace(/<meta\s+property="og:[^"]*"[\s\S]*?>/gi, "");
      pageHtml = pageHtml.replace(/<meta\s+name="twitter:[^"]*"[\s\S]*?>/gi, "");

      // Assemble head tags directly from react-helmet-async SSR context
      const titleTag = helmet?.title?.toString() || "";
      const metaTags = helmet?.meta?.toString() || "";
      const linkTags = helmet?.link?.toString() || "";
      const scriptTags = helmet?.script?.toString() || "";

      const injectedTags = [titleTag, metaTags, linkTags, scriptTags].filter(Boolean).join("\n    ");

      // Inject tags right after <head>
      pageHtml = pageHtml.replace("<head>", `<head>\n    ${injectedTags}`);

      // Inject rendered body into <div id="root"></div>
      pageHtml = pageHtml.replace('<div id="root"></div>', `<div id="root">${html}</div>`);

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

  // Generate static 404.html using the existing NotFound component
  try {
    console.log("📄 Generating static 404.html error page...");
    const { html: notFoundHtml, helmet: notFoundHelmet } = await render("/404-page-not-found");

    let notFoundPage = baseTemplate;
    notFoundPage = notFoundPage.replace(/<title[^>]*>[\s\S]*?<\/title>/i, "");
    notFoundPage = notFoundPage.replace(/<meta\s+name="description"[\s\S]*?>/i, "");
    notFoundPage = notFoundPage.replace(/<meta\s+name="robots"[\s\S]*?>/gi, "");
    notFoundPage = notFoundPage.replace(/<link\s+rel="canonical"[\s\S]*?>/gi, "");
    notFoundPage = notFoundPage.replace(/<meta\s+property="og:[^"]*"[\s\S]*?>/gi, "");
    notFoundPage = notFoundPage.replace(/<meta\s+name="twitter:[^"]*"[\s\S]*?>/gi, "");

    const notFoundTitle = notFoundHelmet?.title?.toString() || "<title>Page Not Found (404) | Edu Hawk</title>";
    const notFoundMeta = notFoundHelmet?.meta?.toString() || '<meta name="robots" content="noindex, nofollow"/>';
    const notFoundLink = notFoundHelmet?.link?.toString() || "";
    const notFoundScript = notFoundHelmet?.script?.toString() || "";

    const injectedTags = [notFoundTitle, notFoundMeta, notFoundLink, notFoundScript].filter(Boolean).join("\n    ");

    notFoundPage = notFoundPage.replace("<head>", `<head>\n    ${injectedTags}`);
    notFoundPage = notFoundPage.replace('<div id="root"></div>', `<div id="root">${notFoundHtml}</div>`);

    const notFoundFile = path.join(distDir, "404.html");
    fs.writeFileSync(notFoundFile, notFoundPage, "utf-8");
    console.log("✅ Generated static 404 error page -> dist/404.html");
  } catch (err) {
    console.error("❌ Failed to generate 404.html:", err.message);
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
