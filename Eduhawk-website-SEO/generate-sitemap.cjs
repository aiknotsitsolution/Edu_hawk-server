// generate-sitemap.cjs
const fs = require("fs");
const path = require("path");

// === Keep in sync with routeList in src/routes/routes.jsx ===
const routes = [
  "/",
  "/about",
  "/study-abroad",
  "/mbbsabroad/russia",
  "/mbbsabroad/bangladesh",
  "/mbbsabroad/kazakhstan",
  "/mbbsabroad/armernia",
  "/mbbsabroad/belarus",
  "/mbbsabroad/china",
  "/mbbsabroad/kyrgyzstan",
  "/mbbsabroad/egypt",
  "/mbbsabroad/georgia",
  "/mbbsabroad/iran",
  "/mbbsabroad/nepal",
  "/mbbsabroad/tajikistan",
  "/mbbsabroad/uzbekistan",
  "/mbbsabroad/vietnam",
  "/mbbsabroad/italy",
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
  "/cookies-policy",
  "/landingpage",
];

const baseUrl = "https://www.eduhawk.in";

// Helper function to get last modified date of corresponding route component
function getLastModDate(route) {
  try {
    let relPath = "";
    if (route === "/") relPath = "src/pages/HeroSection.jsx";
    else if (route === "/about") relPath = "src/pages/About.jsx";
    else if (route === "/blog") relPath = "src/pages/Component/Blog.jsx";
    else if (route === "/services") relPath = "src/pages/Component/Services.jsx";
    else if (route === "/contact") relPath = "src/pages/Component/Contact.jsx";
    else if (route.startsWith("/mbbsabroad/")) {
      const country = route.replace("/mbbsabroad/", "");
      relPath = `src/pages/Country/${country.charAt(0).toUpperCase() + country.slice(1)}.jsx`;
    }

    if (relPath && fs.existsSync(path.join(__dirname, relPath))) {
      const stat = fs.statSync(path.join(__dirname, relPath));
      return stat.mtime.toISOString().split("T")[0];
    }
  } catch (e) {
    // Fallback to build time
  }
  return new Date().toISOString().split("T")[0];
}

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `
  <url>
    <loc>${baseUrl}${route}</loc>
    <lastmod>${getLastModDate(route)}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`,
  )
  .join("")}
</urlset>`;

fs.writeFileSync(path.join(__dirname, "public", "sitemap.xml"), sitemap);
console.log("✅ sitemap.xml generated with dynamic lastmod!");
