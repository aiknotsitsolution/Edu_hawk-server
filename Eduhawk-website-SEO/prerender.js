import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Routes to prerender
const routes = [
  '/',
  '/about',
  '/study-abroad',
  '/mbbsabroad/russia',
  '/mbbsabroad/bangladesh',
  '/mbbsabroad/kazakhstan',
  '/mbbsabroad/armernia',
  '/mbbsabroad/belarus',
  '/mbbsabroad/china',
  '/mbbsabroad/kyrgyzstan',
  '/mbbsabroad/egypt',
  '/mbbsabroad/georgia',
  '/mbbsabroad/iran',
  '/mbbsabroad/nepal',
  '/mbbsabroad/tajikistan',
  '/mbbsabroad/uzbekistan',
  '/mbbsabroad/vietnam',
  '/blog',
  '/services',
  '/contact',
  '/allcollege',
  '/courses/mbbs',
  '/courses/medical-abroad',
  '/courses/dentistry',
  '/courses/nursing',
  '/courses/pharmacy',
  '/courses/physiotherapy',
  '/courses/public-health',
  '/courses/biotechnology',
  '/courses/engineering',
  '/courses/business-management',
  '/courses/mba',
  '/courses/mbs',
  '/courses/bba',
  '/courses/bbs',
  '/courses/executive-mba',
  '/courses/international-business',
  '/courses/marketing-management',
  '/courses/law',
  '/courses/architecture',
  '/courses/hospitality-management',
  '/courses/ug/engineering',
  '/courses/ug/computer-engineering',
  '/courses/ug/mechanical-engineering',
  '/courses/ug/civil-engineering',
  '/courses/ug/electrical-engineering',
  '/courses/ug/electronics-communication',
  '/courses/ug/chemical-engineering',
  '/courses/ug/aerospace-engineering',
  '/courses/pg/engineering',
  '/courses/pg/computer-engineering',
  '/courses/pg/mechanical-engineering',
  '/courses/pg/civil-engineering',
  '/courses/pg/electrical-engineering',
  '/courses/pg/electronics-communication',
  '/courses/pg/chemical-engineering',
  '/courses/pg/aerospace-engineering',
  '/courses/pg/biomedical-engineering',
  '/courses/pg/automobile-engineering',
  '/terms-conditions',
  '/privacy-policy',
  '/cookies-policy',
  '/landingpage'
];

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  for (const route of routes) {
    try {
      const page = await browser.newPage();
      await page.goto(`http://localhost:5173${route}`, {
        waitUntil: 'networkidle2',
        timeout: 60000
      });
      
      const html = await page.content();
      const prerenderDir = path.join(__dirname, 'dist', 'prerendered');
      
      if (!fs.existsSync(prerenderDir)) {
        fs.mkdirSync(prerenderDir, { recursive: true });
      }
      
      fs.writeFileSync(path.join(prerenderDir, `${route.replace(/\//g, '-')}.html`), html);
      console.log(`Prerendered: ${route}`);
      
      await page.close();
    } catch (error) {
      console.error(`Error prerendering ${route}:`, error.message);
    }
  }

  await browser.close();
  console.log('Prerendering complete.');
})();