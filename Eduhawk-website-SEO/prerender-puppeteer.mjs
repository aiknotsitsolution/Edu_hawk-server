import puppeteer from "puppeteer";
import fs from "fs";
import path from "path";
import { spawn } from "child_process";

const distDir = path.join(process.cwd(), "dist");

const routes = [
  "/", "/about", "/study-abroad", "/mbbs-abroad/russia", "/mbbs-abroad/bangladesh",
  "/mbbs-abroad/kazakhstan", "/mbbs-abroad/armenia", "/mbbs-abroad/belarus",
  "/mbbs-abroad/china", "/mbbs-abroad/kyrgyzstan", "/mbbs-abroad/egypt",
  "/mbbs-abroad/georgia", "/mbbs-abroad/iran", "/mbbs-abroad/nepal",
  "/mbbs-abroad/tajikistan", "/mbbs-abroad/uzbekistan", "/mbbs-abroad/vietnam",
  "/mbbs-abroad/italy", "/blog/education-blog", "/blog", "/services", "/contact",
  "/allcollege", "/courses/mbbs", "/courses/medical-abroad", "/courses/dentistry",
  "/courses/nursing", "/courses/pharmacy", "/courses/physiotherapy",
  "/courses/public-health", "/courses/biotechnology", "/courses/engineering",
  "/courses/business-management", "/courses/mba", "/courses/mbs", "/courses/bba",
  "/courses/bbs", "/courses/executive-mba", "/courses/international-business",
  "/courses/marketing-management", "/courses/hospitality-management",
  "/courses/architecture", "/courses/law", "/study-abroad/language-courses",
  "/study-abroad/summer-courses", "/study-abroad/winter-courses", "/study-abroad/working-professionals",
  "/courses/accounting-finance", "/courses/ug/engineering",
  "/courses/ug/computer-engineering", "/courses/ug/mechanical-engineering",
  "/courses/ug/civil-engineering", "/courses/ug/electrical-engineering",
  "/courses/ug/electronics-communication", "/courses/ug/chemical-engineering",
  "/courses/ug/aerospace-engineering", "/courses/ug/biomedical-engineering",
  "/courses/ug/automobile-engineering", "/courses/pg/engineering",
  "/courses/pg/computer-engineering", "/courses/pg/mechanical-engineering",
  "/courses/pg/civil-engineering", "/courses/pg/electrical-engineering",
  "/courses/pg/electronics-communication", "/courses/pg/chemical-engineering",
  "/courses/pg/aerospace-engineering", "/courses/pg/biomedical-engineering",
  "/courses/pg/automobile-engineering", "/terms-conditions", "/privacy-policy",
  "/cookies-policy",
];

const prerenderRoutes = routes.filter(r => r !== "/landingpage");

async function main() {
  console.log("Starting Vite preview server...");
  const server = spawn("npx", ["vite", "preview", "--port", "5173"], {
    cwd: process.cwd(),
    stdio: "pipe",
    shell: true,
  });

  await new Promise((resolve) => {
    let resolved = false;
    server.stdout.on("data", (data) => {
      const output = data.toString();
      if (!resolved && (output.includes("Local:") || output.includes("ready") || output.includes("http://"))) {
        resolved = true;
        setTimeout(resolve, 3000);
      }
    });
    setTimeout(() => { if (!resolved) { resolved = true; resolve(); } }, 10000);
  });

  console.log("Server started. Launching browser...");

  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  // Read the template and extract the head (without any meta tags)
  const template = fs.readFileSync(path.join(distDir, "index.html"), "utf-8");

  // Extract the base template parts
  const headStart = template.indexOf("<head>");
  const headEnd = template.indexOf("</head>");
  const bodyStart = template.indexOf("<body>");
  const bodyEnd = template.indexOf("</body>");

  // Get the head content without meta tags (keep styles, scripts, etc.)
  let headContent = template.substring(headStart + 6, headEnd);
  // Remove any existing meta tags for title, description, canonical, og, twitter, robots
  headContent = headContent.replace(/<title[^>]*>.*?<\/title>/gs, "");
  headContent = headContent.replace(/<meta name="description"[^>]*>/g, "");
  headContent = headContent.replace(/<meta name="robots"[^>]*>/g, "");
  headContent = headContent.replace(/<link rel="canonical"[^>]*>/g, "");
  headContent = headContent.replace(/<meta property="og:[^"]*"[^>]*>/g, "");
  headContent = headContent.replace(/<meta name="twitter:[^"]*"[^>]*>/g, "");

  // Get body content
  const bodyContent = template.substring(bodyStart + 6, bodyEnd);

  let successCount = 0;
  let failCount = 0;
  const failedRoutes = [];

  for (const route of prerenderRoutes) {
    try {
      const page = await browser.newPage();
      await page.goto(`http://localhost:5173${route}`, {
        waitUntil: "networkidle0",
        timeout: 540000,
      });

      await page.waitForSelector("#root", { timeout: 10000 });
      // Wait for Helmet to update meta tags
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Extract metadata from the rendered page
      const metadata = await page.evaluate(() => {
        const title = document.title;
        const description = document.querySelector('meta[name="description"]')?.content || "";
        const canonical = document.querySelector('link[rel="canonical"]')?.href || "";
        const robots = document.querySelector('meta[name="robots"]')?.content || "index, follow";
        const ogTitle = document.querySelector('meta[property="og:title"]')?.content || "";
        const ogDescription = document.querySelector('meta[property="og:description"]')?.content || "";
        const ogImage = document.querySelector('meta[property="og:image"]')?.content || "";
        const ogType = document.querySelector('meta[property="og:type"]')?.content || "website";
        const ogUrl = document.querySelector('meta[property="og:url"]')?.content || "";
        const ogSiteName = document.querySelector('meta[property="og:site_name"]')?.content || "";
        const twitterCard = document.querySelector('meta[name="twitter:card"]')?.content || "summary_large_image";
        const twitterTitle = document.querySelector('meta[name="twitter:title"]')?.content || "";
        const twitterDescription = document.querySelector('meta[name="twitter:description"]')?.content || "";
        const twitterImage = document.querySelector('meta[name="twitter:image"]')?.content || "";

        // Get rendered body HTML
        const rootEl = document.getElementById("root");
        const bodyHtml = rootEl ? rootEl.innerHTML : "";

        return {
          title, description, canonical, robots,
          ogTitle, ogDescription, ogImage, ogType, ogUrl, ogSiteName,
          twitterCard, twitterTitle, twitterDescription, twitterImage,
          bodyHtml,
        };
      });

      // Build meta tags
      const metaTags = [];
      if (metadata.description) metaTags.push(`<meta name="description" content="${metadata.description.replace(/"/g, '&quot;')}">`);
      metaTags.push(`<meta name="robots" content="${metadata.robots}">`);
      if (metadata.canonical) metaTags.push(`<link rel="canonical" href="${metadata.canonical}">`);
      if (metadata.ogTitle) metaTags.push(`<meta property="og:title" content="${metadata.ogTitle.replace(/"/g, '&quot;')}">`);
      if (metadata.ogDescription) metaTags.push(`<meta property="og:description" content="${metadata.ogDescription.replace(/"/g, '&quot;')}">`);
      if (metadata.ogImage) metaTags.push(`<meta property="og:image" content="${metadata.ogImage}">`);
      if (metadata.ogType) metaTags.push(`<meta property="og:type" content="${metadata.ogType}">`);
      if (metadata.ogUrl) metaTags.push(`<meta property="og:url" content="${metadata.ogUrl}">`);
      if (metadata.ogSiteName) metaTags.push(`<meta property="og:site_name" content="${metadata.ogSiteName}">`);
      metaTags.push(`<meta name="twitter:card" content="${metadata.twitterCard}">`);
      if (metadata.twitterTitle) metaTags.push(`<meta name="twitter:title" content="${metadata.twitterTitle.replace(/"/g, '&quot;')}">`);
      if (metadata.twitterDescription) metaTags.push(`<meta name="twitter:description" content="${metadata.twitterDescription.replace(/"/g, '&quot;')}">`);
      if (metadata.twitterImage) metaTags.push(`<meta name="twitter:image" content="${metadata.twitterImage}">`);

      // Build the final HTML
      const finalHtml = `<!DOCTYPE html>
<html lang="en">
<head>
${headContent}
<title>${metadata.title}</title>
${metaTags.join("\n")}
</head>
<body>
${bodyContent.replace('<div id="root"></div>', `<div id="root">${metadata.bodyHtml}</div>`)}
</body>
</html>`;

      // Determine output path
      const routePath = route === "/" ? "" : route.replace(/^\//, "");
      const outputDir = path.join(distDir, routePath);
      const outputFile = path.join(outputDir, "index.html");

      if (route !== "/") {
        fs.mkdirSync(outputDir, { recursive: true });
      }

      fs.writeFileSync(outputFile, finalHtml);
      successCount++;
      console.log(`✅ Prerendered: ${route}`);
      await page.close();
    } catch (err) {
      failCount++;
      failedRoutes.push({ route, error: err.message });
      console.error(`❌ Failed to prerender ${route}:`, err.message);
    }
  }

  await browser.close();
  server.kill();

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