# Decap CMS (Git-based CMS) Complete Setup & Implementation Plan for EduHawk

> **Target Project:** EduHawk Website (`Eduhawk-website-SEO`)  
> **Architecture Type:** Git-based Decoupled Headless CMS (Zero Database, Zero Backend Server Cost)  
> **Author:** Antigravity Engineering Team  
> **Status:** Ready for Execution  

---

## 📋 Step-by-Step Implementation Checklist

- [x] **Step 1: Content Decoupling (Data Layer Setup)**
  - [x] `src/data/` directory create karna
  - [x] `About.jsx` ka hardcoded content extract karke `src/data/about.json` me convert karna
  - [x] `About.jsx` ko refactor karna taaki sara data `about.json` se dynamic render ho
  - [x] Local build & dev verify karna (ensure styling & 112-page prerender intact rahe)

- [x] **Step 2: Decap CMS Client Files Setup**
  - [x] `public/admin/index.html` create karna (Decap CMS core script load)
  - [x] `public/admin/config.yml` create karna (backend, collections, fields & `local_backend: true`)
  - [x] `public/uploads/` directory ensure karna media/images ke liye
  - [x] `decap-server` local proxy dependency install & npm script add karna
  - [x] `vercel.json` me CSP headers update karna (allow unpkg & github api)

- [ ] **Step 3: Local Testing & Validation**
  - [ ] Local proxy server start karna (`npm run cms`)
  - [ ] Vite dev server start karna (`npm run dev`)
  - [ ] Browser me `http://localhost:5173/admin/` open karke test karna
  - [ ] Test edit karna (e.g. Russia MBBS fees ya title) aur "Publish" dabana
  - [ ] Verify karna ki `src/data/about.json` automatically update hui aur browser me hot-reload hua

- [x] **Step 4: Extension to Other Pages (Incremental Rollout)**
  - [x] Home Page (`HeroSection.jsx`) content ko `src/data/home.json` me shift & decouple karna
  - [x] Master grouped CMS collections configure karna (Main Pages, USA, Finland, Tests & Exams, News, Blog)
  - [x] Sub-folder organized media folders setup karna (`public/uploads/{home,about,news,tests,study_abroad}`)
  - [x] Site-wide statistics unify karna (1000+ Students, 20+ Countries, 200+ Universities, 100% Support)
  - [ ] Remaining country programs (Australia, Canada, UK, etc.) jaise hi content receive ho tab integrate karna

- [ ] **Step 5: Production GitHub OAuth & Deployment Setup**
  - [ ] GitHub Developer Settings me OAuth App create karna (Client ID & Secret)
  - [ ] Vercel me OAuth endpoint / environment variables add karna
  - [ ] Production build test karna (`npm run build` ➔ Vite + `prerender.mjs`)
  - [ ] `https://eduhawk.in/admin` live verify karna aur Sir ke sath review karna

---

## 1. Executive Summary

EduHawk website ke pages ka content dynamic banana hai taaki **3–6 mahine baad bina technical dependency aur bina kisi code breakage ke content update ho sake**. 

Sir ke decision ke anusaar **Option 3 (Git-based CMS: Decap CMS)** select kiya gaya hai. 

### Why Decap CMS?
1. **Zero Database / Zero Backend:** Alag se koi MongoDB/SQL ya server maintain karne ki zaroorat nahi.
2. **Simple Form-based UI:** Content writers ya management ko code nahi dekhna padega, unhe direct web forms milenge (`/admin`).
3. **Automated Git Commits:** CMS me "Publish" button dabate hi automatic GitHub commit create hota hai.
4. **100% SEO Friendly:** EduHawk ka existing Vite + `prerender.mjs` setup as-it-is build hokar search engines ke liye static HTML generate karta rahega.
5. **Completely Free:** Hosting aur storage GitHub + Vercel par hi rehta hai, koi monthly CMS subscription fee nahi.

---

## 2. Visual Architecture & Workflow Diagram

Neeche diya gaya diagram Decap CMS ka complete end-to-end data flow aur lifecycle dikhata hai:

```mermaid
sequenceDiagram
    autonumber
    actor Admin as Sir / Content Team
    participant CMS as Decap CMS (/admin)
    participant GH as GitHub Repository
    participant Vercel as Vercel CI/CD Build
    participant Web as Live EduHawk Website

    Admin->>CMS: 1. Opens /admin & Edits Content (e.g., Fees, Titles, Testimonials)
    Admin->>CMS: 2. Clicks "Publish" Button
    CMS->>GH: 3. Decap CMS pushes Git Commit to main branch (e.g. src/data/about.json)
    GH->>Vercel: 4. GitHub Webhook triggers Auto-Deployment
    Note over Vercel: Runs 'npm run build'<br/>(Vite build + prerender.mjs for SEO)
    Vercel->>Web: 5. Live Website updated globally in ~1-2 minutes!
    Web-->>Admin: Verified: New content live with 100% SEO score
```

---

## 3. High-Level Architecture Flowchart

```mermaid
flowchart TD
    subgraph Browser_Admin ["Admin / Content Manager (/admin)"]
        UI["Decap CMS Web UI<br/>(Form Fields: Title, Fees, Images, Testimonials)"]
        PUB["Click 'Publish'"]
        UI --> PUB
    end

    subgraph Git_Storage ["Git Repository (Source of Truth)"]
        COMMIT["Automated Git Commit<br/>Branch: main"]
        JSON["Content Files<br/>src/data/about.json<br/>src/data/home.json"]
        PUB -->|GitHub API| COMMIT
        COMMIT --> JSON
    end

    subgraph CI_CD ["Build & Pre-rendering Pipeline"]
        BUILD["Vercel Auto-Trigger<br/>'npm run build'"]
        PRERENDER["prerender.mjs<br/>SEO Static HTML Generation"]
        COMMIT --> BUILD
        BUILD --> PRERENDER
    end

    subgraph Live_Site ["Production (Zero Database Needed)"]
        WEB["Live EduHawk Website<br/>Ultra Fast & SEO Ready"]
        PRERENDER --> WEB
    end

    classDef blue fill:#2563eb,stroke:#1d4ed8,color:#fff;
    classDef green fill:#16a34a,stroke:#15803d,color:#fff;
    classDef orange fill:#ea580c,stroke:#c2410c,color:#fff;
    classDef purple fill:#7c3aed,stroke:#6d28d9,color:#fff;

    class UI,PUB blue;
    class COMMIT,JSON purple;
    class BUILD,PRERENDER orange;
    class WEB green;
```

---

## 4. Visual Workflow Infographic

Neeche diya gaya infographic visual Decap CMS ke 5-step automated workflow ko darshata hai:

![Decap CMS Architecture](./images/decap-cms-workflow.jpg)

---

## 5. Detailed Implementation Plan (Phase-wise)

### Phase 1: Decouple Existing Content into JSON Structure
Abhi `About.jsx`, `Landingpage`, etc. me texts hardcoded hain. Hum inka content `src/data/` folder me shift karenge.

- **Files to create:**
  - `src/data/about.json`
  - `src/data/home.json`
  - `src/data/courses.json`
  - `src/data/testimonials.json`
- **Component refactoring:**
  - `About.jsx` me `import aboutData from '../data/about.json'` laga kar JSX me bind karenge: `{aboutData.heroTitle}`.

---

### Phase 2: Decap CMS Setup (`public/admin`)
Decap CMS client-side chalta hai. Iske liye sirf 2 files chahiye hoti hain:

#### 1. `public/admin/index.html`
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>EduHawk Content Manager</title>
  </head>
  <body>
    <!-- Decap CMS Core Script -->
    <script src="https://unpkg.com/decap-cms@^3.1.0/dist/decap-cms.js"></script>
  </body>
</html>
```

#### 2. `public/admin/config.yml`
```yaml
backend:
  name: github
  repo: your-github-username/Edu_hawk-server # GitHub Repo Path
  branch: main # Target branch

# Local development me bina GitHub login ke test karne ke liye:
local_backend: true

# Media / Images upload directory (partitioned by section):
media_folder: "public/uploads"
public_folder: "/uploads"

collections:
  # 1. Main Pages (Home, About, Services, Contact Us, Landing Page)
  - name: "main_pages"
    label: "Main Pages"
    delete: false
    files: [...]

  # 2. Medical Colleges (MBBS India + 16 Countries)
  - name: "medical_colleges"
    label: "Medical Colleges (MBBS)"
    delete: false
    files: [...]

  # 3. Study Abroad - USA (All 38+ Individual Course Pages as standalone cards)
  - name: "study_abroad_usa"
    label: "Study Abroad - USA"
    delete: false
    files:
      - label: "Dentistry (MBBS Abroad)"
        name: "usa_dentistry"
        file: "src/data/study_abroad/usa/dentistry.json"
      - label: "Nursing (MBBS Abroad)"
        name: "usa_nursing"
        file: "src/data/study_abroad/usa/nursing.json"
      - label: "Engineering (Main Hub Page)"
        name: "usa_engineering_hub"
        file: "src/data/study_abroad/usa/engineering_hub.json"
      - label: "Undergraduate Engineering (UG Hub)"
        name: "usa_ug_hub"
        file: "src/data/study_abroad/usa/ug_hub.json"
      - label: "Computer Engineering - UG"
        name: "usa_comp_engg_ug"
        file: "src/data/study_abroad/usa/comp_engg_ug.json"
      # ... Mechanical, Civil, Electrical, PG Hub, MBA, BBA, Law, etc.

  # 4. Study Abroad - Finland
  - name: "study_abroad_finland"
    label: "Study Abroad - Finland"
    ...

  # 5. Common Programs (News & Updates)
  - name: "programs_news"
    label: "Programs News & Updates (Common)"
    folder: "src/data/news"
    create: true

  # 6. Tests & Online Exams (Common for All Countries)
  - name: "tests_exams"
    label: "Tests & Online Exams (Common)"
    folder: "src/data/common/tests"
    create: true

  # 7. Our Blog Articles
  - name: "blog"
    label: "Our Blog Articles"
    folder: "src/data/blogs"
    create: true
```

---

### Phase 3: Local Testing (Zero Auth Needed)

Local machine par bina GitHub token ya complex setup ke test karne ke liye:
1. `npx decap-server` command run karenge (jo local proxy server start karega).
2. `npm run dev` start karenge.
3. Browser me `http://localhost:5173/admin/` open karenge.
4. Form me changes karke "Publish" karenge ➔ Local JSON file turant update ho jayegi aur browser me page hot-reload ho jayega!

---

### Phase 4: Production Authentication (GitHub OAuth Setup)

Production me jab website `eduhawk.in/admin` par khulegi, toh GitHub OAuth verify karega ki Sir ya authorized team member hi content edit kar sakte hain.

Do simple tareeqe hain:
1. **Option A (GitHub OAuth via Free Serverless Proxy):**
   - GitHub Developer Settings me ek OAuth App banate hain (`Client ID` aur `Client Secret`).
   - Ek free serverless proxy (jaise Vercel function ya Decap OAuth provider) setup karte hain.
2. **Option B (Netlify Identity & Git Gateway):**
   - Agar frontend Netlify par deploy hota hai, toh 1-click me Netlify Identity se invite-only login chalu ho jata hai.
   - Vercel ke sath Option A sabse standard aur clean hai.

---

## 6. How Sir / Content Team Will Use This (Future Workflow)

Jab bhi 3–6 mahine baad content change karna ho:

1. **Step 1:** Browser me `https://eduhawk.in/admin` open karo.
2. **Step 2:** Login karo (Sir ya authorized team member).
3. **Step 3:** Jo page update karna hai use select karo (e.g. *About Page*, *Landing Page*, *Courses*).
4. **Step 4:** Fields me naya text, updated fees, ya nayi image upload karo.
5. **Step 5:** Top right corner par **"Publish"** button daba do.

**Bas itna hi!**  
Peeche background me:
- Decap CMS GitHub repo me naya commit push karega.
- Vercel automatic build run karega (`vite build + prerender`).
- 90–120 seconds ke andar updated content live ho jayega, aur Google SEO indexing bhi bilkul intact rahegi!

---

## 7. Security & Backup Guarantee

- **Full Version History:** Har content change Git history me record hota hai. Agar koi galti se galat text daal de, toh 1-click me purana version rollback kiya ja sakta hai.
- **Access Control:** Sirf wahi log `/admin` access kar sakte hain jinko GitHub repo ya invite token ka access diya gaya ho.
- **Zero Hack Risk:** Database na hone ki wajah se SQL Injection ya database leak ka risk 0% hai.

---

## 8. Implemented Collections & Individual Page Cards

Decap CMS configuration (`public/admin/config.yml`):

1. **Main Pages:** Home, About, Services, Contact Us, Landing Page.
2. **Medical Colleges:** MBBS Abroad (Russia, Bangladesh, Nepal, Italy, Kazakhstan, Kyrgyzstan, Uzbekistan, Tajikistan, Egypt, Georgia, Vietnam).
3. **Study Abroad - USA (44 Individual Cards):**
   - MBBS Abroad (Dentistry, Nursing, Pharmacy, Physiotherapy, Public Health, Biotechnology)
   - Tech Standalone (Computer Science, Information Technology)
   - Engineering Hub, UG Branches (10 cards), PG Branches (10 cards)
   - Business Management Hub, MBA, Executive MBA, BBA, BBS, International Business, Marketing Management, Accounting & Finance, Hospitality Management
   - Architecture, Law
   - Programs (Language, Summer, Winter, Working Professionals)
4. **Study Abroad - Finland (42 Individual Cards):**
   - MBBS Abroad (Dentistry, Nursing, Pharmacy, Physiotherapy, Public Health, Biotechnology)
   - Tech Standalone (Computer Science, Information Technology)
   - Engineering UG Hub, UG Branches (10 cards: Computer, CSE, Mechanical, Civil, Electrical, ECE, Chemical, Aerospace, Biomedical, Automobile)
   - Engineering PG Branches (10 cards: Computer, CSE, Mechanical, Civil, Electrical, ECE, Chemical, Aerospace, Biomedical, Automobile)
   - Business Management Hub, MBA, Executive MBA, BBA, BBS, International Business, MBS, Hospitality Management
   - Architecture, Law
   - Programs (Language Courses, Summer Courses, Winter Courses)
5. **Common Programs:** News & Updates (Common across all countries).
6. **Tests & Online Exams (Common):** English (IELTS, TOEFL, Duolingo, PTE, OET), Foreign (France, Germany, Spanish), Entrance (GRE, GMAT, SAT, ACT, CMAT, CAT, MCAT, USMLE, NEET, NCLEX-RN).
7. **Our Blog:** Individual blog article publishing with slug-based markdown files.


---

## 9. Engineering PG Hub Update (Finland & USA Aliases)

- **Finland PG Hub (`finland_pg_hub`)**:
  - Data file: `src/data/study_abroad/finland/pg_hub.json`
  - Component: `src/pages/Study Abroad/Finland/Engineering/pg/postgraduate.jsx`
  - Route: `/study-abroad/finland/pg/engineering`
  - Mapped in `public/admin/config.yml` under `study_abroad_finland` collection.
- **USA Hub Aliases**:
  - USA UG Hub: `/courses/ug/engineering` & `/study-abroad/usa/ug/engineering`
  - USA PG Hub: `/courses/pg/engineering` & `/study-abroad/usa/pg/engineering`
- **Total Static Routes Prerendered**: **121 routes** with 0 errors.


---

## 10. URL Architecture Harmonization (`/study-abroad/[country]/...`)

- **Elimination of Query Parameters**:
  - Replaced legacy `?country=usa` and `?country=finland` with clean RESTful URLs across the entire frontend.
- **Unified Structure**:
  - `http://localhost:5173/study-abroad/usa/pg/computer-engineering`
  - `http://localhost:5173/study-abroad/finland/pg/computer-engineering`
  - `http://localhost:5173/study-abroad/usa/ug/computer-engineering`
  - `http://localhost:5173/study-abroad/finland/ug/computer-engineering`
- **Total Static HTML Pages Prerendered**: **163 static routes** (0 failed).
