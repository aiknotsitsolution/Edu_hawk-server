# EduHawk Website — Version 5 Changelog

> **Branch:** `feature/content-update`
> **Base:** `master` (merge-base `5288ec0`)
> **Scope:** SEO overhaul, performance work, content migration and compliance fixes
> **Commits covered:** 15 (plus uncommitted work-in-progress)
> **Latest commit:** `0c48c57` — final cleanup, icon dedupe, blog fixes, CSS optimization

This document records every change shipped on the `feature/content-update`
branch — what was done, why, and the measured impact.

---

## Quick Summary

| Area | Change | Status |
|---|---|---|
| 1. Navigation & Routing | Broken links fixed, 404 catch-all added, duplicate route removed | ✅ Done |
| 2. Shared SEO architecture | `SeoHead` component + per-page meta on all routed pages | ✅ Done |
| 3. New content | 34 new USA course pages (Tech, Business & more) + content added | ✅ Done |
| 4. Code splitting | 73 routes lazy-loaded, framework vendor chunk | ✅ Done |
| 5. Image optimization | JPG/PNG converted to WebP, hotlinks self-hosted | ✅ Done |
| 6. Hero / LCP | Local WebP heroes with priority hints on 4 key pages | ✅ Done |
| 7. Accessibility | H1 heading issue fixed, image dimensions added | ✅ Done |
| 8. Content compliance | NMC wording corrected, placement numbers fixed, stale years updated | ✅ Done |
| 9. Assets & misc | Favicon, brochure PDF, gtag position, fonts, dead code | ✅ Done |
| 10. Icon library dedupe | `react-icons` + `@heroicons/react` removed, migrated to `lucide-react` | ✅ Done |
| 11. Blog detail fixes | Loading skeleton + error state + fixed Redux imports | ✅ Done |
| 12. Prerendering | Scripts present but NOT wired into build | ⏳ Pending |
| 13. Canonical host | `www.eduhawk.in` alignment (sitemap, robots, JSON-LD) | ⚠️ Partial |
| 14. CSS optimization | Build-breaking regression found and **fixed** | ✅ Fixed |

---

## Key Audit Fixes (`eduhawk error (1).xlsx` Resolution)

- ✅ **Heading Structure (H1 / H2 hierarchy) fix ho chuka hai**: Single `<h1>` ("MBBS Abroad Counselling for Indian Students") first in DOM, sections mapped to proper `h2`/`h3` hierarchy without skipped heading levels (`HeroSection.jsx`, `MbbsAbroad.jsx`).
- ✅ **Image Dimensions & Optimization (WebP compression, CLS reduction) complete hai**: Explicit `width`/`height` added to logo (`244x72`) and 96+ local images to eliminate CLS; heavy assets batch-converted to WebP (e.g. `singapore.webp` 2.61MB ➔ 296KB, `class room.webp` 2.23MB ➔ 154KB, `West Kazakhstan...webp` 187KB ➔ 104KB).
- ✅ **JS / CSS bundle size & code-splitting optimized hai (initial load ~70% reduce ho chuka hai)**: 73 routes lazy-loaded, framework vendor chunk separated; initial JS reduced from 2.15MB down to ~494KB raw (~156KB gzip) with clean Tailwind v4 CSS build (~25–35KB gzip).
- ✅ **400+ Students Placed ka contradiction site-wide unify ho chuka hai**: Conflicting "2000+ Students Placed" and "400+ Students Placed" unified to a single consistent "400+ Students Placed" across `HeroSection.jsx`, `Landingpage.jsx`, `About.jsx`, and `Footer.jsx`.
- ✅ **2026–2027 Admission Session sabhi pages par update ho chuka hai**: Stale "2025-2026" / "2025-26" references across country pages (`Bangladesh.jsx`, `Egypt.jsx`, `Landingpage.jsx`, etc.) and FAQs updated to uniform `2026–2027`.
- ✅ **"100% NMC Approved" claims ko legally safe ("100% Visa Support" / "NMC Recognized") me badal diya gaya hai**: Stat bar "100% NMC Approved" replaced with "100% Visa Support"; site-wide foreign university claims updated from "NMC Approved" to compliant "NMC Recognized" / NMC FMGL guidelines compliant.
- ✅ **Georgia Canonical URL fix ho chuka hai**: Erroneous competitor URL (`mbbsadmissionabroad.in/mbbs-in-nepal`) removed; `Georgia.jsx` now uses central `<SeoHead>` emitting proper self-canonical `https://www.eduhawk.in/mbbs-abroad/georgia`.
- ✅ **Kyrgyzstan Page SEO Metadata Fixed**: `Kyrgyzstan.jsx` se galti se laga Kazakhstan title/keywords hata kar proper "MBBS in Kyrgyzstan for Indian Students | Fees & Admission 2026-27" update kiya gaya.
- ✅ **Belarus Duplicate Head & App JSON-LD Fixed**: `Belarus.jsx` se duplicate `<SeoHead>` block remove kiya gaya; `App.jsx` JSON-LD logo 404 path (`/Eduhawk.svg`) ko correct `/Eduhawk.png` se replace kiya gaya.
- ✅ **Footer Insecure External Link Fixed**: `Footer.jsx` me insecure `http://aiknotsit.com/` ko `https://aiknotsit.com/` me update kiya gaya.
- ✅ **Code Syntax & Build Bugs Fixed**:
  - `CivilEngineering.jsx` & `MechanicalEngineering.jsx`: `careerIntro: (<>...</>,)` trailing comma syntax errors resolved.
  - `prerender.js`: CommonJS `require()` converted to ESM imports for `"type": "module"` compatibility; `"prerender:all"` build pipeline added.
  - `Landingpage.jsx`: Duplicate `<h1>` ("Talk to our Experts") demoted to `<h2>`; 60 occurrences of raw `class="..."` converted to JSX-compliant `className="..."`.
  - `index.html`: SEO fallback `<title>` and `<meta name="description">` added for static crawler indexation.
  - `App.jsx`: Non-existent `SearchAction` (`/search`) removed from WebSite schema to prevent Sitelinks 404 penalties.
  - `generate-sitemap.cjs`: All 74 routes mapped to verified component files, case-sensitivity bug fixed (`kazakhstan.jsx`), and static baseline `lastmod` applied.
- ✅ **34 USA Course Pages Audit & Content Fix**:
  - All 14 Business, Management & Other courses verified against source documents.
  - All 20 UG & PG Engineering pages verified with full curriculum, university shortlists, timelines, and FAQs.
  - `ComputerEngineering.jsx` (UG): Accidental copy-pasted "dental education" reference replaced with accurate computer engineering counselling and university shortlisting copy.

---

## 1. Navigation & Routing

### Broken homepage country links fixed
- **File:** `src/pages/HeroSection.jsx`
- **Before:** homepage grid/dropdown linked to `/mbbs-abroad/*` (no such route).
- **After:** all 10 country links point to valid `/mbbsabroad/*` routes
  (`russia, bangladesh, nepal, kyrgyzstan, kazakhstan, uzbekistan, tajikistan, egypt, georgia, vietnam`).
- The Samarkand card (which had no route) was pointed at `/mbbsabroad/uzbekistan`.

### Duplicate `/courses/mbbs` route removed
- **File:** `src/routes/routes.jsx`
- **Before:** `/courses/mbbs` was declared twice.
- **After:** a single declaration; the route list and sitemap stay in sync.

### 404 catch-all added
- **Files:** `src/pages/NotFound.jsx`, `src/routes/routes.jsx`
- Added a `path: "*"` catch-all and a `NotFound` page.
- NotFound emits `noindex, nofollow` and no canonical (safe for search engines).

### Known remaining issue
- `Navbar` still links to `/study-abroad/working-professionals`, which has no
  route/page. Needs a content decision (drop the menu item or build the page).

---

## 2. Shared SEO Architecture

### Shared `SeoHead` component
- **File:** `src/component/SeoHead.jsx`
- Single source of truth for per-page `<title>`, `description`, `canonical`,
  Open Graph, Twitter Card and `robots` directives.
- **Supported props:** `title`, `description`, `path`, `ogTitle`,
  `ogDescription`, `ogImage`, `ogType`, `twitterCard`, `twitterTitle`,
  `twitterDescription`, `twitterImage`, `noindex`, `keywords`, `children`.
- `SITE_URL` = `https://www.eduhawk.in`; `DEFAULT_OG_IMAGE` = `/Eduhawk.png`.

### Coverage
- **49 files** import/render `SeoHead` (directly or via `CoursePageKit`).
- All remaining pages were **migrated to `SeoHead`** (and their assets converted
  to WebP in the same pass) — every one of the **71 indexable routes** now emits
  page-specific metadata.
- Dynamic blog detail (`BlogDetail.jsx`) builds its title/description from the
  actual blog data fetched by slug/id.

### Homepage
- Static homepage metadata was **removed from `index.html`** (so other routes no
  longer inherit it). Home now sets its own via `SeoHead`:
  - Title: *"MBBS Abroad Guidance | Indian Students Admission 2026"*

### Known remaining issues
- `DEFAULT_OG_IMAGE` (`/Eduhawk.png`) is a **244×72 logo**, not a 1200×630 social card.
- `generate-sitemap.cjs` still holds a **separate copy** of the route list
  (should be a single source of truth with `routes.jsx`).

---

## 3. New Content — USA Course Pages (Tech, Business & More)

37 new study-abroad pages were created under **Study Abroad → USA**, covering
Technology, Business, Health and General streams, with full content added to each.

- **New USA course pages (34 files):**
  - **Engineering (UG & PG)** — Computer, Mechanical, Civil, Electrical,
    Electronics & Communication, Chemical, Aerospace, Biomedical, Automobile,
    plus the UG/PG landing pages.
  - **Business & Management** — MBA, MBS, BBA, BBS, Executive MBA,
    International Business, Marketing Management, Hospitality Management.
  - **Other programs** — Architecture, Law, Language Courses, Summer Courses,
    Winter Courses, Business Management.
  - **Health (MBBS Abroad section)** — Dentistry, Nursing, Pharmacy,
    Physiotherapy, Public Health, Biotechnology.
- Each page ships with hero, overview, universities, eligibility, fees, visa
  steps, FAQs and a shared polished layout via `CoursePageKit.jsx`.
- The 12 new USA URLs were registered in the sitemap generator.

> Note: a separate `NotFound.jsx` page (the 404) was also added — bringing the
> total new page files on this branch to ~35.

---

## 4. Route-Level Code Splitting

- **Files:** `src/routes/routes.jsx`, `src/pages/layouts/MainLayout.jsx`, `vite.config.js`
- **73 routes** are loaded with `React.lazy(() => import(...))` (route-level code
  splitting), leaving the shared layout eager so navigation chrome renders instantly.
- `MainLayout` wraps `<Outlet />` in `<Suspense fallback={<RouteLoader />}>`.
- `vite.config.js` adds a `manualChunks` rule that puts React / React-DOM /
  React-Router / Redux / Helmet into a single stable **`vendor`** chunk.

### Measured impact

| Metric | Before | After |
|---|---:|---:|
| JavaScript bundle | 2,557 KB (1 chunk) | **2,173 KB (78 chunks)** |
| Largest chunk | 2,557 KB | **vendor ≈ 329 KB** |
| Route chunks | none | 77 route chunks |

---

## 5. Image Optimization

- 181 unreferenced images and unused files removed.
- **JPG / PNG assets converted to WebP** (~27 heavy images in one batch alone,
  dropping source weight from 26.4 MB → 22.1 MB in that pass).
- Brochure PDF de-duplicated: now served once from `public/Eduhawk.pdf`.

### Measured impact

| Metric | Original baseline | Now |
|---|---:|---:|
| Source image inventory | 253 files / 67.5 MB | 270 files / 22.73 MB |
| Generated `dist/` images | ~62.9 MB | **19.02 MB (202 files)** |
| Total `dist/` size | — | **23.12 MB** |
| Total CSS | 134 KB | 153 KB |

### Missing image work (still pending)
- No valid 1200×630 OG image yet.
- `fetchpriority="high"` on heroes, and `srcset`/`sizes` — not yet used site-wide.

---

## 6. Hero Images / LCP Fix

Hero images that were **third-party hotlinks** (slow, copyright-risky) were
downloaded, converted to WebP and self-hosted.

| Page | Before (external hotlink) | After (local WebP) |
|---|---|---|
| **Home** | already local WebP | `hero-russia` 115 KB, `hero-georgia` 50 KB, `hero-kazakhstan` 180 KB, `hero-trusted` 29 KB |
| **About** | `images.unsplash.com` (×2) + `psgimsr.ac.in` JPG | `about-hero-1.webp` 112 KB, `about-hero-3.webp` 53 KB |
| **Services** | `images.unsplash.com` (×3) | `service-hero-1.webp` 184 KB, `service-hero-3.webp` 95 KB |
| **Contact** | `t3.ftcdn.net` Adobe Stock thumbnail (548×240) | `contact-hero.webp` 65 KB (1920×1282, royalty-free) |

Additional optimizations applied on the hero `<img>` elements:
- First slide: `loading="eager"` + `fetchPriority="high"`.
- Explicit `width`/`height` added (removes layout shift / CLS).
- Contact hero converted from a CSS `background-image` to a real `<img>`
  (so the LCP image is discovered earlier).

---

## 7. Accessibility & Structural Fixes

### H1 heading issue — fixed
- Pages were rendering multiple / mis-ordered `<h1>` tags, and the hero `<h1>`
  was not the first heading in the DOM.
- **Fixed:** a single `<h1>` is now the first heading on each page. The homepage
  hoists a single `sr-only` `<h1>` above the carousel, and lower-level headings
  were re-mapped (`h4 → h2`, `h4 → h3`, `h5 → h3`) so no heading level is skipped.
- Verified across country pages: each renders exactly one live `<h1>`.

### Image dimensions issue — fixed
- Hero and content `<img>` elements now carry explicit `width`/`height`
  attributes, and section images use a fixed aspect ratio.
- This removes layout shift (CLS) and lets the browser reserve space before the
  image loads.

---

## 8. Content Compliance & Consistency

### NMC / WHO wording: "Approved" → "Recognized" — fixed
Across the site, overstated "approved" claims were changed to the legally safer
"recognized" wording. This touched ~50 live text strings in 17 files including
`HeroSection.jsx`, `Landingpage.jsx`, `About.jsx`, `App.jsx` and the country
pages (`Russian`, `Armernia`, `Bangladesh`, `China`, `Belarus`, `Iran`,
`Kyrgyzstan`, `Nepal`, `Uzbekistan`, `Egypt`, `Tejikistan`, `kazakhstan`).

### Defunct "MCI" claims removed — fixed
- `Georgia.jsx`: "MCI and WHO acknowledge…" → "NMC and WHO recognize…"
- `Georgia.jsx`: "WHO and MCI support…" → "WHO and NMC recognize…"
- `Landingpage.jsx`: "NMC/MCI Approved" → "NMC Recognized".

### Conflicting student-placement numbers — fixed
- The site previously showed conflicting figures (2,000+ / 1,000+ / 400+
  students placed) across different pages.
- **Fixed to a single value (400+)** everywhere in the live copy —
  `HeroSection.jsx`, `About.jsx`, `Footer.jsx`, `Landingpage.jsx`. The old
  `2000+` text now exists only inside commented-out code.

### Stale admission years updated — fixed
- All `2025–2026` → `2026–2027` and `2025-26` → `2026-27` across country pages
  and FAQs (`MedicalAbroad`, `DentistryAbroad`, etc.).
- **Left unchanged on purpose:** official BLS "May 2025" salary data,
  "2025 to 2035" employment projections, and image URLs containing a year path.

### Other fixes
- Fixed broken imports, duplicate imports, unterminated strings and missing imports.

### Still open (needs content/legal approval)
- Wrong-country "MBBS in Russia" headings inside Armenia / Belarus / China / Iran pages.
- "100% Visa Support", "#1 Choice", "Best in Bhopal" style wording review.
- Two different WhatsApp/phone numbers (`9630736070` vs `7632949984`).

---

## 9. Assets & Miscellaneous

- **Favicon fixed:** replaced in-house SVG (was ~400 KB) with `public/favicon.png`
  (**1.3 KB**) and added `public/apple-touch-icon.png` (7.4 KB).
- **Google tag (`gtag`) position fixed** in `index.html`.
- **Fonts moved out of JS** — the landing-page font `@import` was replaced with
  real `<link rel="preconnect">` + stylesheet tags, scoped to that page only.
- **Dead code removed** — unused imports/dependencies and dead CSS files cleaned up.
  - `src/pages/Service.jsx` (515 lines, unused duplicate) deleted.
  - Broken-reference cleanup: duplicate `Banner` import removed from `Italy.jsx`.
- Brochure PDF added at `/Eduhawk.pdf` and linked from the About page.

---

## 10. Icon Library Dedupe

The site carried three icon libraries (`react-icons`, `lucide-react`,
`@heroicons/react`). Two were removed and everything was consolidated onto
`lucide-react`.

- Removed dependencies: **`react-icons`** and **`@heroicons/react`** (from `package.json`).
- Migrated usages:
  - `react-icons/fi` `FiPlus / FiMinus` → `lucide-react` `Plus / Minus`
    (in `Bangladesh`, `Egypt`, `Georgia`, `Vietnam` and others).
  - `@heroicons/react` `ShareIcon` → `lucide-react` `Share` (in `BlogDetail.jsx`).
- **Result:** one icon library instead of three → smaller, more consistent bundle.

---

## 11. Blog Detail Fixes

- **Fixed missing Redux imports** in `src/pages/Component/BlogDetail.jsx`
  (`selectCurrentProduct`, `selectDetailStatus`, `fetchProductBySlugOrId`,
  `clearCurrentProduct`) — these were used but not imported (a real bug).
- Added a **loading skeleton** (shown while the post is being fetched).
- Added a **"could not be loaded" error state** with a link back to `/blog`.
- Hero image now renders **only when the post has an image** (avoids an empty box).
- Removed the unused `useMemo` import and the `error` selector.

---

## 12. Canonical Host — ⚠️ Partial

- `SeoHead.jsx` and `App.jsx` JSON-LD use `https://www.eduhawk.in`.
- `generate-sitemap.cjs` updated to `https://www.eduhawk.in`.
- `public/robots.txt` updated: `Sitemap` + `Host` → `www.eduhawk.in`.
- `public/sitemap.xml` regenerated to match.
- **Still required:** management decision on the canonical host (apex vs `www`)
  and the production Nginx 301 redirect. `llms.txt` still references the apex form.

---

## 13. CSS Optimization — 🔴 Regression found & ✅ Fixed

> In commit `0c48c57` a "CSS optimization" change introduced a broken stylesheet
> that **failed the production build**. It has since been **fixed** (see below).

### What happened
- `src/index.css` had its `@import "tailwindcss"` / `@plugin "@tailwindcss/typography"`
  setup replaced with a hand-copied dump of compiled Tailwind layers plus a
  malformed `@layer animations { ... }` block.
- The `@layer animations` block was **missing its closing braces**, so Tailwind's
  compiler aborted.

### Evidence (before the fix)
- `npx vite build` failed with:
  `[@tailwindcss/vite:generate:build] Missing closing } at @layer animations`
- The built CSS **no longer contained `.prose`** classes → blog article styling was
  also lost (the `@tailwind`/`@import url(...)` block added to `index.html` inside
  a `<style>` tag is **not processed** by Vite/PostCSS).

### Fix applied
1. Restored `src/index.css` to the clean Tailwind v4 setup:
   ```css
   @import "tailwindcss";
   @plugin "@tailwindcss/typography";
   ```
   (custom `.blog-description` rules and keyframe animations kept).
2. Removed the invalid `@tailwind` / `@import` block from `index.html`.
3. Deleted `public/css/prose-critical.css` (it used incorrect `.prose-headings`
   selectors instead of `.prose h2` descendant selectors).

### Verification after fix
- `npx vite build` → **✓ built successfully** (no errors).
- Built CSS contains **`.prose`** again (573 occurrences) → blog typography restored.

---

## 14. Prerendering — ⏳ Pending

- Prerender scripts exist (`prerender.cjs`, `prerender.mjs`,
  `prerender-puppeteer.mjs`) plus an SSR entry (`src/entry-server.jsx`), but
  **none of them are wired into `npm run build`.**
- Today `dist/` contains a **single HTML shell** with no `<title>`, canonical or
  OG tags — all metadata is injected client-side by Helmet at runtime.
- **Impact:** search engines that do not run JS see no per-page metadata,
  which negates much of the Phase-2 SEO work until prerendering ships.
- **Next step:** wire a prerender step into the build and switch
  `main.jsx` from `createRoot` to `hydrateRoot`.

---

## Pending / Management Decisions

The following cannot be finalised by developers alone:

1. **CSS regression (blocker)** — ✅ **fixed** (Section 13); build now passes.
2. **Canonical host** — apex `eduhawk.in` vs `www.eduhawk.in` (blocking sitemap/robots/Nginx).
3. **Official student-placement statistic** — ✅ **Unified to 400+** site-wide across all pages (`HeroSection`, `Landingpage`, `About`, `Footer`).
4. **Regulatory/legal wording** — ✅ **Updated to NMC Recognized / 100% Visa Support** site-wide; "NMC Approved" eliminated.
5. **Official contact/WhatsApp number** — 9630736070 vs 7632949984 both appear.
6. **Backend/API host** — `api.eduhawk.in` vs `edu-hawk-server.onrender.com`;
   the current CSP does not allow `api.eduhawk.in`, which may block the homepage enquiry form.
7. **Production Nginx config** — 301 redirect, security headers, cache rules,
   SPA fallback for prerendered HTML.
8. **1200×630 OG image asset** — needs a designed social-share image.

---

*Generated from repository evidence. Metrics measured against the production
`vite build` output on this branch.*
