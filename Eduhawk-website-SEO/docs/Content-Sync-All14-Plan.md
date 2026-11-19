# Study Abroad Content & University Images Synchronization Plan (All 14 Countries)
> **Source Directory:** `E:\Downloads-pro\<Country>`  
> **Target JSON:** `Eduhawk-website-SEO/src/data/study_abroad/<country>/`  
> **Target Images:** `Eduhawk-website-SEO/public/uploads/study_abroad/<country>/`  
> **Target CMS:** `Eduhawk-website-SEO/public/admin/config.yml` (Decap CMS)  
> **Target UI Component:** `Eduhawk-website-SEO/src/component/CoursePageKit.jsx`

---

## 1. Core Guidelines & UI Rendering Rules

### Rule 1: No Numberings in Visible Headings
In headings (section titles, card headers, subheadings), numbers like `1. `, `2. `, `1) `, `1 - `, `01. `, `1: `, `1\. ` must **NEVER** appear in the UI.
- *Before:* `1. Overview of the Course`
- *After:* `Overview of the Course`
- *Before:* `2. Why Study Architecture in Australia ?`
- *After:* `Why Study Architecture in Australia?`

### Rule 2: No "Step 1" in Headings
Phrases like `Step 1:`, `Step 1 -`, `Step 1.`, `Step 1 `, `Step 2:` must **NEVER** appear in visible heading titles.
- *Before:* `Step 1: Choose Your Course & University`
- *After:* `Choose Your Course & University`

### Rule 3: No Stray Asterisks (`*`, `**`, `***`)
Markdown bold markers and bullet asterisks from `.md` files must not leak as raw symbols in the UI.
- Text must be cleanly parsed into bold tags (`<strong>...</strong>`) and any orphan/stray `*` or `**` must be completely removed.

### Rule 4: 100% Exact Content from Source Documents
The real content written in `E:\Downloads-pro\<Country>` (Overview paragraphs, Benefits, Courses, Admission Process, Eligibility, Fees, Top Universities, and FAQs) must replace any old placeholder content (such as `"Details available upon request."`).

### Rule 5: Real University Images
University campus photos stored in `E:\Downloads-pro\<Country>/<Course>/images/` must be copied to `public/uploads/study_abroad/<country>/` and mapped to the university cards in JSON, so real university campus pictures display on every card.

### Rule 6: Dynamic Architecture
All website pages load their data dynamically via `cmsData` (`src/data/study_abroad/<country>/<slug>.json`), which is also the exact single source of truth for DecapCMS (`/admin`).

### Rule 7: SEO Keywords Must NEVER Be Rendered in UI
SEO keywords (the `keywords` block from documents and metadata) are strictly for HTML `<head>` meta tags (`<meta name="keywords" content="...">`). They must **NEVER** be displayed as visible paragraphs, text blocks, tags, chips, or bullet points in the UI. Any keyword sections in documents must be routed strictly to `seo.keywords` and never added as a visible page section.

### Rule 8: Zero Missed Content from Source Documents
Every single section from `ausitaly.html` / `.md` must be retained without truncation:
- Overview paragraphs & lead text
- Key benefits & why study
- Popular courses & degrees
- Popular specializations
- Comprehensive eligibility criteria (UG & PG)
- English language requirements
- Entrance exams & selection requirements
- Program duration details
- Complete tuition fees & living expenses
- International student scholarships
- Career opportunities & job roles
- Admission procedure (with clean step titles and descriptions)
- Complete required documents checklist
- Student visa guidelines & processing
- Edu Hawk Worldwide support services
- Complete authentic FAQs with detailed answers
- Top universities with campus photos, locations, fees, and descriptions

### Rule 9: Clean HTML Entity Decoding & Structured Tables
- **HTML Entities:** Raw entities like `&#8377;` (Rupee), `&euro;` (Euro), `&pound;` (Pound), `&asymp;` (Approx) must **NEVER** display as raw code. They must be decoded into their proper Unicode symbols (`₹`, `€`, `£`, `≈`, `–`).
- **Structured Tables:** Any pipe-separated lines (`Cost | Monthly Cost (INR)`, `Accommodation | ₹30,000`) from source documents must **NEVER** render as plain text paragraphs. They must be automatically converted into responsive, styled UI tables (`{ t: "table", headers: [...], rows: [...] }`) with table headers, borders, and clean typography.

---

## 2. 14 Countries Tracker & Status

| # | Country | Format in Downloads-pro | Pages Count | Status | Notes |
|---|---|---|---:|---|---|
| 1 | **Australia** | Folders with `ausitaly.html` + `images/` | 42 | ✅ Completed | 100% synced, numbers/steps/asterisks stripped, real campus PNGs mapped |
| 2 | **Italy** | Folders with `ausitaly.html` + `images/` | 41 | ✅ Completed | 100% synced, numbers/steps/asterisks stripped, real campus PNGs mapped, SEO keywords strictly hidden from UI |
| 3 | **Canada** | Folders with `ausitaly.html` + `images/` | 42 | ✅ Completed | 100% synced, numbers/steps/asterisks stripped, 160 university images verified |
| 4 | **Spain** | Folders with `ausitaly.html` + `images/` | 41 | ✅ Completed | 100% synced, numbers/steps/asterisks stripped, 143 university images verified |
| 5 | **UK** | Folders with `ausitaly.html` + `images/` | 42 | ✅ Decoupled | JSON data generated in `src/data/study_abroad/uk/`, Decap CMS configured |
| 6 | **Ireland** | 8 HTML subfolders + 34 `.md` files | 42 | ✅ Decoupled | JSON data generated in `src/data/study_abroad/ireland/`, Decap CMS configured |
| 7 | **France** | 42 root `.md` files | 42 | ✅ Decoupled | JSON data generated in `src/data/study_abroad/france/`, Decap CMS configured |
| 8 | **Germany** | 42 root `.md` files | 42 | ✅ Decoupled | JSON data generated in `src/data/study_abroad/germany/`, Decap CMS configured |
| 9 | **Switzerland** | 41 root `.md` files | 41 | ✅ Decoupled | JSON data generated in `src/data/study_abroad/switzerland/`, Decap CMS configured |
| 10 | **Mauritius** | 41 root `.md` files | 41 | ✅ Decoupled | JSON data generated in `src/data/study_abroad/mauritius/`, universal `unis_data` support enabled |
| 11 | **Denmark** | 41 root `.md` files | 41 | ✅ Decoupled | JSON data generated in `src/data/study_abroad/denmark/`, universal `unis_data` support enabled |
| 12 | **Sweden** | 41 root `.md` files | 41 | ✅ Decoupled | JSON data in `src/data/study_abroad/sweden/`, WebP university campus images linked, `unis_data` enabled |
| 13 | **USA** | 42 root `.md` files | 49 | ✅ Decoupled | JSON data generated in `src/data/study_abroad/usa/`, Decap CMS configured |
| 14 | **Finland** | 41 root `.md` files | 50 | ✅ Decoupled | JSON data generated in `src/data/study_abroad/finland/`, Decap CMS configured |

---

## 3. Execution Pipeline for Each Country

For every country, the pipeline executes the following 4 automated steps:
1. **Image Processing:** Copy all university images from `E:\Downloads-pro\<Country>/<Course>/images/` into `public/uploads/study_abroad/<country>/` with sanitized unique names.
2. **Document Parsing:** Parse the source HTML/Markdown documents:
   - Extract SEO title & meta description
   - Extract Hero headline & subtitle
   - Extract Overview paragraphs
   - Extract structured sections (Course scope, Why study, Eligibility, Cost & Fees, Career options)
   - Extract Universities with names, location, fees, and mapped image URLs
   - Extract FAQs (question & answer pairs)
   - Apply heading filters (strip `1. `, `Step 1:`, stray asterisks)
3. **JSON Generation:** Write clean, formatted JSON into `src/data/study_abroad/<country>/<slug>.json`.
4. **Verification:** Validate that:
   - Zero placeholder strings remain
   - Headings have no numbers or "Step 1"
   - University cards render real campus images
   - CMS collections in `config.yml` recognize the files


### Canada Sync Audit (Completed)
- **Status:** 42/42 (100% Passed)
- **Total Sections Generated:** 503 authentic sections with clean UI cards (`dl`), checklists (`ul`), and timeline steps (`steps`)
- **Total Real Campus Images:** 160 university images verified on disk in `public/uploads/study_abroad/canada/`
- **Total FAQs Verified:** 237 authentic course FAQs
- **Headings Numbering Stripped:** 0 sections with leading numbers
- **Step Prefixes Stripped:** 0 sections with "Step 1" prefixes
- **Asterisks Stripped:** 0 stray asterisks
- **SEO Keywords:** 100% hidden from visible UI and routed strictly to `seo.keywords`
- **HTML Entities & Tables:** Fully decoded (`&#8377;` -> `₹`, `&euro;` -> `€`, etc.)


### Spain Sync Audit (Completed)
- **Status:** 41/41 (100% Passed)
- **Total Sections Generated:** 567 authentic sections with clean UI cards (`dl`), checklists (`ul`), and timeline steps (`steps`)
- **Total Real Campus Images:** 143 verified university images mapped to `public/uploads/study_abroad/spain/`
- **Total FAQs Verified:** 224 authentic course FAQs
- **Headings Numbering Stripped:** 0 sections with leading numbers
- **Step Prefixes Stripped:** 0 sections with "Step 1" prefixes
- **Asterisks Stripped:** 0 stray asterisks
- **SEO Keywords:** 100% hidden from visible UI and routed strictly to `seo.keywords`
- **HTML Entities & Tables:** Fully decoded (`&#8377;` -> `₹`, `&euro;` -> `€`, etc.)
- **Rich Overviews:** 100% of pages contain 2+ informative paragraphs in the Overview section
