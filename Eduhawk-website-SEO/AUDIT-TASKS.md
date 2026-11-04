# EduHawk SEO & Performance Audit — Task Tracker

Derived from the READ-ONLY technical audit (Nov 2026). Source of truth: audit report in chat.
Rules: preserve React + Vite architecture · no AWS/Nginx changes from repo · no business-content edits without manager sign-off.

---

## PHASE 1 — Critical Navigation & Routing (IN PROGRESS)

- [x] 1. Fix broken homepage country links (`/mbbs-abroad/*` → `/mbbsabroad/*`) — `src/pages/HeroSection.jsx` (dropdown done first pass; the 8 TOP MEDICAL COLLEGES grid links completed this pass → `/mbbsabroad/{russia,bangladesh,nepal,kyrgyzstan,kazakhstan,uzbekistan,tajikistan,egypt}`. Samarkand card had no route at all → pointed at `/mbbsabroad/uzbekistan`, judgment call)
- [x] 2. Remove duplicate `/courses/mbbs` route declaration — `src/routes/routes.jsx`
- [x] 3. Add NotFound (404) page + catch-all `*` route + noindex — `src/pages/NotFound.jsx`, `src/routes/routes.jsx`
- [x] 4. Restore Tailwind v4 typography (`prose`) via v4-native `@plugin` directive — `src/index.css`
- [x] 5. Heading hierarchy: single `<h1>` first in DOM, no skipped levels — `src/pages/HeroSection.jsx` (sr-only `h1` hoisted above the modal, `h4→h2` "TOP MEDICAL COLLEGES", `h4→h3` feature cards, `h5→h3` classroom cards; live sequence now `h1 h2 h2 h2 h2 h2 h3 h3 h3 h2 h3 h2 h2 h3 h3 h4 h2`)
- [x] Validation: `npm run build`, `npm run lint` (37 errors, all pre-existing `no-unused-vars`), dev-server route checks, `.prose` present in dist CSS
- [ ] Link audit residual: Navbar "Working Professionals" → `/study-abroad/working-professionals` has no route/page (needs decision: drop the menu item or write the page). Other 5 unresolved literals sit in commented-out code.

## PHASE 2 — Shared SEO Component & Per-Page Meta (COMPLETE — 4 open content decisions listed below)

- [x] Create shared `<SeoHead>` component (title, description, canonical, OG, Twitter, robots) — `src/component/SeoHead.jsx` (+ `keywords` prop, `DEFAULT_OG_IMAGE` = `/Eduhawk.png`)
- [x] Add Helmets to ~26 zero-meta pages: `Study Abroad/MbbsAbroad.jsx` (also `/courses/mbbs`), `MedicalAbroad`, `Engineering`, `ComputerScienceAbroad`, `InformationTechnologyAbroad`, `AccountingFinance`, `BiotechnologyAbroad`, `PhysiotherapyAbroad`, `PublicHealthAbroad`, `USA/MBBS Abroad/*` (5), `Country/{Armernia,Belarus,China,Iran,Italy,Uzbekistan}`, `Component/BlogDetail.jsx` (per-post meta), legal pages ×3, `Landingpage.jsx`
- [x] Complete partial Helmets (add canonical/OG/Twitter): `HeroSection`, `About`, `Component/{Blog,Contact,Services}`, `AllIndia`, `Country/{Bangladesh,Egypt,Georgia,kazakhstan,Kyrgyzstan,Nepal,Russian,Tejikistan,Vietnam}` — all 9 country pages migrated this pass
- [x] Add `og:image` + `twitter:*` on every page via SeoHead — measured: 74/74 routed components emit `<SeoHead>` (only `MainLayout`, a wrapper, does not). CAVEAT: the shared fallback asset `public/Eduhawk.png` is 244x72 (logo), not a 1200x630 OG card → see Phase 6
- [!] Dead module-scope `<SeoHead>` blocks removed from 5 Study Abroad files; still open (content decisions, not code): Kyrgyzstan.jsx ships Kazakhstan's title, Belarus.jsx has 2 live SeoHead blocks, AllIndia.jsx live title is the dead-code one, `/study-abroad` vs `/courses/mbbs` canonical

## PHASE 3 — Prerendering (PENDING)

- [ ] Add build-time prerendering (vite prerender plugin) reusing route list from `generate-sitemap.cjs`
- [ ] Blog detail fallback strategy (CSR + push indexing)
- [ ] Nginx `try_files` doc for manager so prerendered HTML is served directly

## PHASE 4 — Canonical Host & Sitemap Alignment (PENDING — needs manager decision)

- [ ] Confirm which host Nginx 301s to (apex vs www)
- [ ] Align `generate-sitemap.cjs:83` + `public/robots.txt` + `index.html:41,53` + `App.jsx` JSON-LD to chosen host
- [ ] Fix `lastmod` regeneration behavior (`generate-sitemap.cjs:92`) + remove 3× duplicated route list (single source of truth)

## PHASE 5 — CSP & API Host Fix (PENDING)

- [ ] Add blocked host to `connect-src`/`form-action` in `index.html:20` + `vercel.json:38` (or standardize backend host)
- [ ] Consolidate hardcoded API URLs into one client (`productsSlice.js`, `Contact.jsx:123`, `HeroSection.jsx:240` → `api.eduhawk.in`)

## PHASE 6 — Images (PENDING)

- [ ] Add real OG image asset to `public/` (1200×630)
- [x] Replace favicon (`src/assets/icon.svg`, 400 KB) with small favicon; fix `apple-touch-icon` 404 — DONE: sharp-generated `public/favicon.png` (1.3 KB) + `public/apple-touch-icon.png` (7.4 KB, contain-fit from the 1280×720 vector); old svg `<link>` + 400 KB source deleted (zero refs, no longer bundled). gtag block moved inside `<head>` (was floating outside, invalid HTML) in the same commit.
- [x] Convert heavy images to WebP ≤1920px — batch done: 27 files >150 KB re-encoded (sharp, 1920w max, q=75), src payload 26.4 → 22.1 MB (dist 18.37 MB); biggest wins: russia header 904→291 KB, singapore 840→289 KB, North_Carolina 544→345 KB, Russian_Map 1298→156 KB; engineering UG/PG heroes (also referenced in Navbar dropdown = site-wide) 11–31% lighter; marginal-gain files (<10%) skipped on purpose
- [~] Add `width`/`height` to `<img>` patterns — DONE 96/255 (all locally measurable: +82 this pass, measured by ffprobe/SVG viewBox); remaining 136 = 78 remote-URL + 58 dynamic-`src` (per-item intrinsic dims vary)
- [x] `loading="lazy"` on below-fold imgs — +104 added (55 → 159 lazy); 38 excluded on purpose (37 = first img in file i.e. page hero/LCP, 1 = homepage hero carousel `slide.image`); 61 still without the attr (below-fold-but-unclassified + hotlinked SVGs)
- [~] `fetchpriority="high"` on heroes — homepage DONE: slide 1 `loading="eager"` + `fetchPriority="high"`, slides 2–4 lazy, first slide preloaded via SeoHead children (`<link rel="preload" as="image">`, homepage only). Local WebP slides replace 2 Unsplash hotlinks + 1 psgimsr.ac.in WordPress hotlink (50/180/115/29 KB @1920w). Throttled LCP 10.0 s → ~6.4 s median (6.1–7.8 s), CLS 0. Other pages' heroes still pending (37 page-hero imgs unprioritised).
- [x] Fix broken refs: remove dead `Russian_Map,_Coat_of_arms_&_Flag.png` (1.27 MB, zero refs — deleted this batch) + dead `1200px-Kazakhstan_Flag_Map.png` (zero refs — deleted). PENDING: `Services.jsx:152` bg path, `About.jsx:301` hotlink, double import in `Italy.jsx:3/9`

## PHASE 7 — Performance / Code Splitting (IN PROGRESS — route splitting DONE, rest pending)

- [x] Route-level code splitting: 73 of 74 page imports converted to `React.lazy(() => import(...))` in `src/routes/routes.jsx`; homepage (`HeroSection.jsx`) kept **eager on purpose** — its chunk is required on initial load anyway, so lazy-loading it would only add an extra chunk-discovery round-trip and a fallback→content layout shift (measured CLS regression 0.0749 → 0.3591 under throttling; reverted to eager → CLS 0.0094). `MainLayout` stays eager (shared chrome).
- [x] Suspense fallback: new `src/component/RouteLoader.jsx` (spinner, `role="status"`); wired around `<Outlet/>` in `src/pages/layouts/MainLayout.jsx` (Navbar/Footer stay visible during chunk load — no blank page) and around the standalone `/landingpage` route in `routes.jsx`.
- [x] `manualChunks` in `vite.config.js`: single `vendor` chunk for framework libs only (react, react-dom, scheduler, react-router, @reduxjs/toolkit, redux, react-redux, reselect, react-helmet-async, prop-types) — cache-stable across deploys; no other dependency split blindly.
- [x] Validation: `npm run build` ✓ (1m 42s); `npm run lint` — 37 errors, **all pre-existing `no-unused-vars` in page files**, zero in changed files; browser QA ✓ (homepage, direct deep-link `/courses/ug/computer-engineering`, client-side lazy nav via click, `*` 404 route, per-route SEO titles — all pass, 0 console errors).
- [x] Measured (cold, Slow-4G + 4× CPU, mobile 412×823): homepage requests only `index-BVF7SDaF.js` (164.9 KB) + `vendor-BLYdgWce.js` (329.3 KB) = **494 KB raw / ~156 KB gzip initial JS** vs baseline single chunk 2,157 KB raw / 493 KB gzip (**−77% raw, −68% gzip**). 83 JS chunks total; largest = vendor 329 KB. FCP 6.9 s (was 12.2–23.8 s), LCP 10.0 s (was 15.9–28.1 s, still Unsplash-hero-bound), CLS 0.0094. Tiny (~0.1 KB) Rollup facade chunks for shared assets/icons are expected and harmless.
- [x] Remove 7 unused deps (axios, aos, papaparse, react-hook-form, react-markdown, remark-gfm, slugify) — 0 imports each, verified before removal; package.json + lock updated
- [ ] Dedupe icon libraries (react-icons/lucide/heroicons) + evaluate dropping framer-motion (1 file)
- [x] Fonts: move Sora/Playfair discovery out of JS (`Landingpage.jsx`) — `<style>@import` replaced with preconnect + `<link rel="stylesheet">` via SeoHead children, scoped to `/landingpage` only (other 73 routes never fetch it); verified Sora/Playfair load and apply, CSP already allowed both domains
- [x] GTM/gtag consolidation — gtag.js block moved inside `<head>` (was floating between head and body = invalid HTML; Vite was injecting the built script tags into the comment containing the literal `</head>` string, blanking the app — root-caused and fixed). Tags/loading/tracking behaviour unchanged; GTM head snippet already async, noscript iframe kept
- [x] Delete dead files: `src/App.css`, `src/pages/Country/Italy.css`, `Navbar` commented block (L1–1616, 3,097 → 1,481 lines), `productsSlice.js:279` console.log, `src/assets/icon.svg` (400 KB, unreferenced)

## PHASE 8 — Content Consistency (PENDING — needs manager-approved official wording)

- [ ] 2000+ vs 400+ students-placed conflict (`Landingpage.jsx:777` vs Footer/Hero/About/og:description)
- [ ] "MBBS in Russia" headings inside Armenia/Belarus/China/Iran pages
- [ ] Defunct "MCI" claims (`Landingpage.jsx:126`, `Georgia.jsx:870,922`); WHO-recognizes-universities claims; "100% NMC Approved" stats
- [~] Stale 2025-26 FAQ years (`MedicalAbroad.jsx:104`, `DentistryAbroad.jsx:195`) — both FIXED by user (2026-27); mixed year subtitles elsewhere still pending. NMC wording sweep (approved → recognized) also applied by user across ~17 files (commit bd141e1)
- [ ] "guaranteed support" (`index.html:50`), "#1 Choice", "Best in Bhopal" wording review
- [ ] WhatsApp/phone standardization decision (9630736070 vs 7632949984); `App.jsx:17` schema phone
- [ ] `Footer.jsx:565` http:// link

## PHASE 9 — Nginx Production Parity (PENDING — for manager, outside repo)

- [ ] 301 apex↔www per Phase 4 decision
- [ ] Security headers parity with `vercel.json`
- [ ] Cache: hashed `/assets/*` immutable; HTML no-cache (critical once prerendered)
- [ ] SPA fallback `try_files` + prerendered HTML preference; brotli/gzip check
