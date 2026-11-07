# Master Google Doc Content Discrepancies & Audit Log (`incorrect-content.md`)

> **Master Reference Document:** `finland usa` (Google Doc: `https://docs.google.com/document/d/11CxNcdyXpXilqNQAGukNO-ULJvdpFUnhu0EuLUdCm2g/edit?pli=1`)  
> **Core Frontend Policy:** **"Doc ka word = Website ka word"** — We do NOT self-correct, edit, or modify any content on the website. Whatever is written in the Google Doc (including typos, mismatched headings, or author anomalies) is rendered verbatim.  
> **Numbering Standard:** Doc outline digits (e.g. `1. `, `2. ` on H2 titles) belong to document editor outlines. On the website, section headings are clean `<h2>` titles, step processes are sequentially numbered via timeline badges (avoiding duplicate `(1) 1. Step` prefixes), and card numbering is presented via DevFest-style tags (`{ 01 }`, `{ 02 }`, etc.) where appropriate.  
> **Purpose of this File:** To maintain an exhaustive, transparent record of all factual anomalies, copy-paste errors, missing sections, and formatting oddities present in the Google Doc for client and content team review.

---

## 1. Verified & Completed Finland Pages (Detailed Recheck)

The following 12 pages have been audited and updated to be **100% faithful to the Google Doc**:

### 1. Language Courses in Finland
* **Route:** `/study-abroad/finland/language-courses`
* **File:** `Eduhawk-website-SEO/src/pages/Study Abroad/Finland/LanguageCourses/language-courses.jsx`
* **Image Folder:** `Eduhawk-website-SEO/src/Images/Abroad/Finland/LanguageCourses/` (4 WebP assets, 0 unused files)
* **Doc Section Range:** Character Pos `1797556` – `1819790`
* **Verification Status:** **PASS** (100% word-for-word alignment)
* **Doc Anomalies Recorded:**
  * **Section 3 Missing in Doc:** The Google Doc jumps directly from `2. Types of Language Courses in Finland` to `4. Language Course Providers in Finland`. There is no Section 3 in the document.
  * **No University Rankings:** Language courses in Finland are delivered via University Language Centres, Universities of Applied Sciences (UAS), and Adult Education Centres (*Kansalaisopistot*) rather than degree rankings.
  * **FAQs:** 5 FAQs present verbatim. Q5 emphasizes that learning Finnish helps with employment but does not automatically guarantee a job.

---

### 2. Law in Finland
* **Route:** `/study-abroad/finland/law`
* **File:** `Eduhawk-website-SEO/src/pages/Study Abroad/Finland/Law/law.jsx`
* **Image Folder:** `Eduhawk-website-SEO/src/Images/Abroad/Finland/Law/` (7 WebP assets, 0 unused files)
* **Doc Section Range:** Character Pos `1764132` – `1797556`
* **Verification Status:** **PASS** (100% word-for-word alignment)
* **Doc Anomalies Recorded:**
  * **Section 8 Missing in Doc:** The doc jumps from `7. Admission Process for Law in Finland` directly to `9. Career Opportunities After Studying Law in Finland`.
  * **Non-Standard Section 10:** Titled `10. Can Indian Students Practise Law in Finland?` instead of a document checklist.
  * **Exchange Rate Discrepancy:** The doc explicitly states `€1 ≈ ₹105` for Law (whereas other Finland chapters use `€1 ≈ ₹108.60` or `€1 ≈ ₹109`).
  * **Critical Qualification Disclaimer:** Emphasized in doc that English-taught master's programmes (University of Helsinki's *Law and Contemporary Governance* and University of Eastern Finland's *Environmental Policy and Law*) **do not** qualify graduates to practise law in Finland.

---

### 3. Architecture in Finland
* **Route:** `/study-abroad/finland/architecture`
* **File:** `Eduhawk-website-SEO/src/pages/Study Abroad/Finland/Architecture/architecture.jsx`
* **Image Folder:** `Eduhawk-website-SEO/src/Images/Abroad/Finland/Architecture/` (6 WebP assets, 0 unused files)
* **Doc Section Range:** Character Pos `1738666` – `1764132`
* **Verification Status:** **PASS** (100% word-for-word alignment)
* **Doc Anomalies Recorded:**
  * **Campus Photo Anomaly in Google Doc:** In the master Google Doc under `1. Aalto University`, the photo embedded by the doc author shows the **Töölö campus building & sign** (which houses Aalto Executive Education), even though the course is Architecture. We matched the exact user-downloaded image (`aalto_univer_image3` $
ightarrow$ `Aalto_University.webp`) to remain 100% faithful to the doc.
  * **Exchange Rate:** Doc uses `€1 ≈ ₹109`.
  * **Only 2 Universities in Doc:** Aalto University and University of Oulu. Both have official website link buttons attached.

---

### 4. Hospitality Management in Finland
* **Route:** `/study-abroad/finland/hospitality-management`
* **File:** `Eduhawk-website-SEO/src/pages/Study Abroad/Finland/HospitalityManagement/hospitality-management.jsx`
* **Image Folder:** `Eduhawk-website-SEO/src/Images/Abroad/Finland/HospitalityManagement/` (8 WebP assets, 0 unused files)
* **Doc Section Range:** Character Pos `1715445` – `1738666`
* **Verification Status:** **PASS** (17/17 audit checks passed)
* **Doc Anomalies Recorded:**
  * **Section 8 Missing in Doc:** Jumps from `7. Admission Process` to `9. Jobs and Salary`.
  * **Overview Previously Blank in Code:** Filled with Paragraph 2 from the Google Doc.
  * **Intake Schedule Specifics:** LAB University has rolling applications, but Finnish Joint Application is specified as 8–22 January 2026.
  * **Exchange Rate:** Doc uses `€1 ≈ ₹108.60`.
  * **Universities (4):** Haaga-Helia UAS, LAB UAS, Jamk UAS, Seinäjoki UAS. Squashed Jamk banner was replaced with user's clean 16:9 WebP.

---

### 5. International Business in Finland
* **Route:** `/study-abroad/finland/international-business`
* **File:** `Eduhawk-website-SEO/src/pages/Study Abroad/Finland/InternationalBusiness/international-business.jsx`
* **Image Folder:** `Eduhawk-website-SEO/src/Images/Abroad/Finland/InternationalBusiness/` (9 WebP assets, 0 unused files)
* **Doc Section Range:** Character Pos `1679546` – `1715445`
* **Verification Status:** **PASS** (19/19 audit checks passed)
* **Doc Anomalies Recorded:**
  * **Section 8 Missing in Doc:** Jumps from `7. Admission Process` to `9. Jobs and Salary`.
  * **Overview Previously Blank in Code:** Filled with Paragraphs 2 & 3 from the Google Doc.
  * **Universities (5):** Aalto University (Mikkeli Campus, Bachelor in International Business), University of Oulu, Haaga-Helia UAS, Häme UAS (HAMK), University of Eastern Finland (UEF).
  * **HAMK 20% Scholarship:** Specifically documented that HAMK grants a 20% second-year scholarship for completing 60 ECTS in the first academic year.
  * **Exchange Rate:** Doc uses `€1 ≈ ₹108.60`.

---

### 6. Executive MBA in Finland
* **Route:** `/study-abroad/finland/executive-mba`
* **File:** `Eduhawk-website-SEO/src/pages/Study Abroad/Finland/ExecutiveMBA/executive-mba.jsx`
* **Image Folder:** `Eduhawk-website-SEO/src/Images/Abroad/Finland/ExecutiveMBA/` (7 WebP assets, 0 unused files)
* **Doc Section Range:** Character Pos `1646697` – `1679546`
* **Verification Status:** **PASS** (40/40 audit checks passed)
* **Layout Implementation:** Strict **Heading $
ightarrow$ Big Image $
ightarrow$ Text details** for each university entry.
* **Doc Anomalies Recorded:**
  * **Alternative Programme in Section 3:** Doc includes `Related alternative: Aalto MBA` (€37,800 + VAT / ~₹41.05L) alongside the 3 EMBA programmes.
  * **Passed Deadlines in Doc Text:** The published schedule in the doc explicitly states that the August 2026 deadline for Aalto EE and the 15 September 2026 registration deadline for Hanken have passed.
  * **Qualification Disclaimer:** Hanken explicitly designates this EMBA as an executive education qualification, not an academic master's degree.
  * **Dual Cost Tables:** Includes both Programme Fees table and full Additional Expenses table (Accommodation, Travel, Food, Study visits, Insurance, Study materials, Visa costs).

---

### 7. BBS in Finland
* **Route:** `/study-abroad/finland/bbs`
* **File:** `Eduhawk-website-SEO/src/pages/Study Abroad/Finland/BBS/bbs.jsx`
* **Image Folder:** `Eduhawk-website-SEO/src/Images/Abroad/Finland/BBS/` (6 WebP assets, 0 unused files)
* **Doc Section Range:** Character Pos `1620903` – `1646697` (Tab: `bbs finland`)
* **Verification Status:** **PASS** (38/38 audit checks passed)
* **Layout Implementation:** Strict **Heading $
ightarrow$ Big Image $
ightarrow$ Text details** for Haaga-Helia and University of Oulu with official external link buttons.
* **Doc Anomalies Recorded:**
  * **Complete Copy-Paste Anomaly in Doc:** In the master Google Doc, the entire tab `bbs finland` is an exact duplicate clone of `BBA in Finland`. Headings, text, and tables say "BBA", not "BBS".
  * **Verbatim Implementation:** In accordance with the user's directive, we did NOT alter or self-correct any word on the website. The heading on the website reflects the Google Doc verbatim: **`Top Universities for BBA in Finland`**.
  * **Universities (2):** Haaga-Helia UAS (€11,000 / ~₹11.95L) and University of Oulu (€10,000 / ~₹10.86L with 20% second-year fee waiver).
  * **Living Expenses Table:** Full €300–€700 accommodation, €640–€1,330 monthly total breakdown.
  * **Conversion Rate:** `€1 ≈ ₹108.60`.

---

### 8. BBA in Finland
* **Route:** `/study-abroad/finland/bba`
* **File:** `Eduhawk-website-SEO/src/pages/Study Abroad/Finland/BBA/bba.jsx`
* **Image Folder:** `Eduhawk-website-SEO/src/Images/Abroad/Finland/BBA/` (6 WebP assets, 0 unused files)
* **Doc Section Range:** Character Pos `1595108` – `1620903` (Tab: `BBA Finland`)
* **Verification Status:** **PASS** (40/40 audit checks passed)
* **Layout Implementation:**
  * **Alternating Split Showcase UI:** University 1 (`Haaga-Helia UAS`): Image Left, Content Right (clean heading, no bracket tag). University 2 (`University of Oulu`): Content Left, Image Right (clean heading, no bracket tag).
  * **DevFest Style Stats Cards:** 4 stats cards with `{ 01 }` (coral), `{ 02 }` (blue with wave paper art corner), `{ 03 }` (emerald), and `{ 04 }` (amber).
  * **Numbering Verification:** Section titles cleaned of raw outline numbers (`1. `, `2. ` etc.). Step timeline cleanly numbered 1-10 through the circular step badge without redundant duplication.
* **Doc Details & Verification:**
  * **Universities (2):** Haaga-Helia UAS (`Haaga-Helia_University_of_Applied_Sciences.webp`, 36 KB) and University of Oulu (`University_of_Oulu.webp`, 67 KB).
  * **Verbatim Doc Text:** All fees (€11,000 & €10,000), 20% second-year tuition waiver, Joint Application period 7–21 January 2027, living costs (€300–€700 accommodation, €640–€1,330 total), and all 5 FAQs verbatim from doc.

---

### 9. Master of Business Studies (MBS) in Finland
* **Route:** `/study-abroad/finland/mbs`
* **File:** `Eduhawk-website-SEO/src/pages/Study Abroad/Finland/MBS/mbs.jsx`
* **Image Folder:** `Eduhawk-website-SEO/src/Images/Abroad/Finland/MBS/` (8 WebP assets, 0 unused files)
* **Doc Section Range:** Character Pos `1568573` – `1595108` (Tab: `MBS Finland`)
* **Verification Status:** **PASS** (91/91 audit checks passed)
* **Layout Implementation:** **Alternating Split Showcase UI** for 4 institutions:
  1. Aalto University: Image Left, Content Right
  2. LUT University: Content Left, Image Right
  3. University of Eastern Finland: Image Left, Content Right
  4. Metropolia UAS: Content Left, Image Right
* **Doc Details & Anomalies Recorded:**
  * **Qualification Title Clarification:** The Google Doc specifically explains that "MBS" is a search term, while Finnish institutions award qualifications under official titles like *Master of Science in Economics and Business Administration* or *Master of Business Administration (MBA)*.
  * **Section 3 Heading:** The doc title is verbatim **`Top Universities for Business Master’s Programmes in Finland`**.
  * **Universities (4):** Aalto University (€15,000 / ~₹16.29L), LUT University (€15,000 / ~₹16.29L), University of Eastern Finland (€12,000 / ~₹13.03L), and Metropolia UAS (€12,500 published schedule).
  * **Admission Process:** Contains 9 sequential steps (all verified).
  * **Exchange Rate:** Doc uses `€1 ≈ ₹108.60`.

---

### 10. MBA in Finland
* **Route:** `/study-abroad/finland/mba`
* **File:** `Eduhawk-website-SEO/src/pages/Study Abroad/Finland/MBA/mba.jsx`
* **Image Folder:** `Eduhawk-website-SEO/src/Images/Abroad/Finland/MBA/` (9 WebP assets, 0 unused files)
* **Doc Section Range:** Character Pos `1538266` – `1568573` (Tab: `MBA in Finland`)
* **Verification Status:** **PASS** (92/92 audit checks passed)
* **Layout Implementation:** **Alternating Split Showcase UI** for 5 institutions:
  1. Aalto University Executive Education: Image Left, Content Right
  2. TAMK: Content Left, Image Right
  3. HAMK: Image Left, Content Right
  4. Metropolia UAS: Content Left, Image Right
  5. LAB UAS: Image Left, Content Right
* **Doc Details & Anomalies Recorded:**
  * **Fee Comparison Note:** Doc clarifies that fees are not directly comparable: some are annual tuition (TAMK €12,000, HAMK €11,700, Metropolia €12,500), some are total programme fees (LAB €18,000 total / €15,000 early-bird), and Aalto EE is €37,800 + VAT (~₹41.05L before VAT).
  * **Application Deadlines in Doc:** Aalto MBA lists 16 November 2026 deadline for January 2027 intake; TAMK lists 7–21 January 2027.
  * **Work Experience Requirement:** Highlighted that UAS MBA programmes generally require 2+ years of relevant post-bachelor work experience.
  * **Exchange Rate:** Doc uses `€1 ≈ ₹108.60`.

---

### 11. Business Management in Finland
* **Route:** `/study-abroad/finland/business-management`
* **File:** `Eduhawk-website-SEO/src/pages/Study Abroad/Finland/BusinessManagement/business-management.jsx`
* **Image Folder:** `Eduhawk-website-SEO/src/Images/Abroad/Finland/BusinessManagement/` (9 WebP assets, 0 unused files)
* **Doc Section Range:** Character Pos `1503343` – `1538266` (Tab: `Business Management in Finland`)
* **Verification Status:** **PASS** (101/101 audit checks passed)
* **Layout Implementation:** **Alternating Split Showcase UI** for 5 institutions:
  1. University of Oulu: Image Left, Content Right
  2. LUT University: Content Left, Image Right
  3. Aalto University: Image Left, Content Right
  4. Haaga-Helia UAS: Content Left, Image Right
  5. Metropolia UAS: Image Left, Content Right
* **Doc Details & Verification:**
  * **Dual Bachelor's & Master's Scope:** Specifically structured with separate course pills, eligibility requirements, document checklists, career outcomes, and tuition tables for both Bachelor's (180–210 ECTS) and Master's (90–120 ECTS) tiers.
  * **Dual Tuition Tables:** Bachelor's table (€10,000–€12,000 / ~₹10.86L–₹13.03L) and Master's table (€12,000–€15,000 / ~₹13.03L–₹16.29L).
  * **Living Expenses:** Full monthly breakdown €640–€1,330 (~₹69,504–₹1,44,438).
  * **Admission Process:** 8 sequential steps verbatim.
  * **Exchange Rate:** Doc uses `€1 ≈ ₹108.60`.

---

### 12. Master’s in Computer Engineering in Finland
* **Route:** `/study-abroad/finland/pg/computer-engineering`
* **File:** `Eduhawk-website-SEO/src/pages/Study Abroad/Finland/Engineering/pg/pages/ComputerEngineering.jsx`
* **Image Folder:** `Eduhawk-website-SEO/src/Images/Abroad/Finland/Engineering_PG/Computer/` (8 WebP assets, 0 unused files)
* **Doc Section Range:** Character Pos `1170075` – `1196243` (Tab: `Computer Engineering PG`)
* **Verification Status:** **PASS** (79/79 audit checks passed)
* **Layout Implementation:** **Alternating Split Showcase UI** for 4 institutions:
  1. Åbo Akademi University: Image Left, Content Right
  2. University of Oulu: Content Left, Image Right
  3. Aalto University: Image Left, Content Right
  4. University of Turku: Content Left, Image Right
* **Doc Details & Verification:**
  * **Related Program Qualifications:** The doc explicitly notes that while Åbo Akademi offers a dedicated Computer Engineering track, related programs include Computer Science & Engineering at Oulu, Computer Science at Aalto, and Software Engineering at Turku.
  * **Universities & Fees:** Åbo Akademi (Confirm fee), Oulu (€10,000 / ~₹10.86L), Aalto (€17,000 / ~₹18.46L), Turku (€12,000 / ~₹13.03L).
  * **Living Expenses:** Monthly budget €640–€1,330 (~₹69,504–₹1,44,438).
  * **Admission Process:** 10 sequential steps verbatim.
  * **Exchange Rate:** Doc uses `€1 ≈ ₹108.60`.

---

---

### 13. Master’s in Mechanical Engineering in Finland
* **Route:** `/study-abroad/finland/pg/mechanical-engineering`
* **File:** `Eduhawk-website-SEO/src/pages/Study Abroad/Finland/Engineering/pg/pages/MechanicalEngineering.jsx`
* **Image Folder:** `Eduhawk-website-SEO/src/Images/Abroad/Finland/Engineering_PG/Mechanical/` (4 WebP assets: `mech_pg_cad.webp`, `mech_pg_cta_bg.webp`, `mech_pg_hero.webp`, `mech_pg_hero_bg.webp`; 0 unused files)
* **Doc Section Range:** Character Pos `1196243` – `1227306` (Tab: `Mechanical Engineering PG Finland`)
* **Verification Status:** **PASS** (178/178 audit checks passed)
* **Special Directive Handled:**
  * **University Images Omitted by Directive:** Per the user's explicit directive, no university campus images were supplied in the Google Doc for this page. The 4 raw university images in the directory were safely removed.
  * **UI Implementation:** Clean, modern university cards without image containers (`uni_card`), featuring university titles, official website external links, detailed curriculum/degree specs (Aalto), catalog exploration guidelines (Tampere, LUT, Oulu), and subtle paper art corner pattern styling on Card 2 (DevFest card style).
* **Doc Details & Verification:**
  * **Universities & Tuition:**
    * Aalto University: School of Engineering, M.Sc. (Tech), 2 years, 120 ECTS, Espoo, €17,000 per academic year (~₹17,85,000 at indicative €1 ≈ ₹105 rate).
    * Tampere University: technology, industrial systems, materials, and research options.
    * LUT University: mechanical engineering, manufacturing, energy systems, and sustainable technology options.
    * University of Oulu: materials, mechanical systems, industrial technologies, and research.
  * **Important Caveat:** The doc emphasizes: *"Not every university offers a standalone master's degree titled Mechanical Engineering. Students should confirm the exact programme and admission requirements through the official university website."*
  * **Living Expenses:** Budget pills for Accommodation, Food & groceries, Local transportation, Health insurance, Study materials, Personal expenses.
  * **Admission Process:** 9 sequential steps verbatim.
  * **Exchange Rate:** Doc uses `€1 ≈ ₹105` in this chapter.

## 2. Inconsistencies & Anomalies in Pending Pages (Google Doc Audit)

### 1. BBS in Finland (`bbs.jsx`) — Critical Discrepancy
* **Doc Position:** Character Pos `1620903` (Tab: `bbs finland`)
* **Finding:** In the master Google Doc, the entire tab `bbs finland` is an **exact duplicate copy-paste of `BBA in Finland`**.
* **Details:**
  * Document Title: `BBA in Finland`
  * Section 1: `1. Why Study a BBA in Finland?`
  * Section 2: `2. BBA Courses in Finland`
  * Section 3: `3. Top Universities for BBA in Finland`
  * Section 4: `4. Eligibility to Study BBA in Finland`
  * Section 5: `5. Admission Requirements for BBA in Finland`
  * Section 6: `6. Cost of Studying BBA in Finland`
  * Section 7: `7. Admission Process for BBA in Finland`
  * Section 9: `9. Jobs and Salary After a BBA in Finland`
  * Section 10: `10. Documents Required for BBA Admission in Finland`
  * All 5 FAQs ask about BBA (`How long does it take to complete a BBA in Finland?`, etc.)
  * SEO Keywords: All list "BBA in Finland", "Bachelor of Business Administration in Finland".
  * **The word "BBS" does not appear even once in the body text or headings of this tab.**
* **Website Action Taken:** In accordance with the user's directive, we do NOT change this to "BBS". The heading on the website has been updated to match the Google Doc verbatim: **`Top Universities for BBA in Finland`**.

---

### 2. Master of Business Studies (MBS) in Finland (`mbs.jsx`)
* **Doc Position:** Character Pos `1568573` (Tab: `MBS Finland`)
* **Finding:** In the introduction, the doc author specifically clarifies:
  > *"A Master of Business Studies (MBS) in Finland is a useful search term for students looking to pursue advanced education in business management, finance, marketing... However, Finnish universities generally award qualifications under official titles such as Master of Science in Economics and Business Administration or Master of Business Administration (MBA) rather than a degree specifically titled MBS."*
* **Section 3 Title in Doc:** `3. Top Universities for Business Master’s Programmes in Finland` (The doc deliberately avoids calling them "MBS universities").

---

### 3. Missing "Section 8" Across Most Chapters
* In almost every course chapter in the Finland master doc, **Section 8 is completely omitted**:
  * BBA: Jumps from `7. Admission Process` to `9. Jobs and Salary` (or includes Licensing as Section 8 in BBA).
  * BBS: Jumps from `7. Admission Process` to `9. Jobs and Salary`
  * International Business: Jumps from `7. Admission Process` to `9. Jobs and Salary`
  * Hospitality Management: Jumps from `7. Admission Process` to `9. Jobs and Salary`
  * Law: Jumps from `7. Admission Process` to `9. Career Opportunities`
  * Computer Science: Jumps from `7. Admission Process` to `9. Jobs and Salary`
* *Exceptions where Section 8 exists:* Architecture (`8. Licensing and Professional Requirements for Architects in Finland`), Executive MBA (`8. Licensing and Professional Recognition After an Executive MBA`), and BBA (`8. Licensing and Professional Requirements After a BBA`).

---

### 4. Currency Conversion Rate Discrepancies
The Google Doc uses three different indicative exchange rates across chapters:
* **Law in Finland:** `€1 ≈ ₹105`
* **Hospitality / International Business / Executive MBA / BBA:** `€1 ≈ ₹108.60`
* **Architecture:** `€1 ≈ ₹109`
* **Website Policy:** Each page retains the exact currency rate and INR calculation stated in its respective document section.

---

## 3. Audit Summary Table

| Page / Course | Route | Image Folder Status | Doc Alignment Status | Notes / Discrepancies Logged |
| :--- | :--- | :--- | :--- | :--- |
| **Language Courses** | `/study-abroad/finland/language-courses` | 4 WebPs (Clean) | **Verified 100%** | Doc skips Section 3; Kansalaisopistot / adult centres |
| **Law** | `/study-abroad/finland/law` | 7 WebPs (Clean) | **Verified 100%** | Doc skips Section 8; €1 ≈ ₹105; practice disclaimer |
| **Architecture** | `/study-abroad/finland/architecture` | 6 WebPs (Clean) | **Verified 100%** | Aalto Töölö photo in doc; €1 ≈ ₹109; 2 unis only |
| **Hospitality Management** | `/study-abroad/finland/hospitality-management` | 8 WebPs (Clean) | **Verified 100%** | Doc skips Section 8; 16:9 Jamk upgraded; 4 unis |
| **International Business** | `/study-abroad/finland/international-business` | 9 WebPs (Clean) | **Verified 100%** | Doc skips Section 8; 5 unis; HAMK 20% scholarship |
| **Executive MBA** | `/study-abroad/finland/executive-mba` | 7 WebPs (Clean) | **Verified 100%** | Heading $
ightarrow$ Big Image $
ightarrow$ Text; Aalto MBA alternative; dual cost tables |
| **BBS** | `/study-abroad/finland/bbs` | 6 WebPs (Clean) | **Verified 100%** | Heading $
ightarrow$ Big Image $
ightarrow$ Text; Doc text is cloned BBA verbatim; `Top Universities for BBA in Finland` |
| **BBA** | `/study-abroad/finland/bba` | 6 WebPs (Clean) | **Verified 100%** | Alternating Split UI (Uni 1 Image Left / Uni 2 Image Right); Paper Art on Card 2 (no bracket numbering); Clean titles |
| **MBS** | `/study-abroad/finland/mbs` | 8 WebPs (Clean) | **Verified 100%** | Alternating Split UI (4 unis); M.Sc. vs MBS degree clarification logged; 91/91 checks pass |
| **MBA** | `/study-abroad/finland/mba` | 9 WebPs (Clean) | **Verified 100%** | Alternating Split UI (5 unis); Aalto MBA + VAT fee note logged; 92/92 checks pass |
| **Business Management** | `/study-abroad/finland/business-management` | 9 WebPs (Clean) | **Verified 100%** | Alternating Split UI (5 unis); Dual UG & PG tables & requirements; 101/101 checks pass |
| **Computer Engineering (PG)** | `/study-abroad/finland/pg/computer-engineering` | 8 WebPs (Clean) | **Verified 100%** | Alternating Split UI (4 unis); Åbo Akademi, Oulu, Aalto, Turku; 79/79 checks pass |
| **Other Engineering / IT** | `/study-abroad/finland/...` | Pending next turn | Ready to audit | Pos 1196243+ in master doc |
| **Winter Courses** | `/study-abroad/finland/winter-courses` | Pending next turn | Ready to audit | Pos 1819790 in master doc |
| **Summer Courses** | `/study-abroad/finland/summer-courses` | Pending next turn | Ready to audit | Pos 1839265 in master doc |


### Additional Audited Pages (Current Batch)
| **Computer Engineering (PG)** | `/study-abroad/finland/pg/computer-engineering` | 8 WebPs (Clean) | **Verified 100%** | Alternating Split UI (4 unis); Åbo Akademi, Oulu, Aalto, Turku; 79/79 checks pass |
| **Computer Science** | `/study-abroad/finland/computer-science` | 5 Authentic PNGs (Clean) | **Verified 100%** | 5 Authentic PNGs installed; 0 content changes; structured definition cards, pills, table, 7-step timeline; no hero stats overlap; no title numbering |
| **Information Technology** | `/study-abroad/finland/information-technology` | 5 Authentic PNGs (Clean) | **Verified 100%** | 5 Authentic PNGs installed; 0 content changes; structured cards, pills, dual fee & living cost tables, 8-step timeline; no hero stats overlap |
| **Automobile Engineering (UG)** | `/study-abroad/finland/ug/automobile-engineering` | Open Car Hero WebP + 4 Artwork Cards | **Verified 100%** | Open supercar R&D lab hero; 4 solid background university cards with bespoke vector artwork banners (blueprint, innovation, automation, energy); 0 content changes |
| **Automobile Engineering (PG)** | `/study-abroad/finland/pg/automobile-engineering` | Open Car Hero WebP + 4 Artwork Cards | **Verified 100%** | Open supercar R&D lab hero; 4 solid background university cards with bespoke vector artwork banners; aligned with UG route; 0 content changes |
| **Aerospace Engineering (PG)** | `/study-abroad/finland/pg/aerospace-engineering` | 4 Authentic PNGs + Aero R&D Hero WebP | **Verified 100%** | 4 Authentic PNGs (Aalto, LUT, Tampere, Oulu); modern aerospace R&D cleanroom & supersonic aircraft hero; 12-step timeline, 2 comparison tables, 100% word-for-word verified |
| **All Medical Colleges Hub** | `/allcollege` | Clean Interactive Hub (No broken assets) | **Verified 100%** | Executive UI retouch: 4 live metric hero cards, sidebar state search + region counts, segmented Govt/Private filter tabs, dynamic state overview card, modern pagination; 819 colleges intact (0% content change) |
| **Other Engineering Branches** | `/study-abroad/finland/...` | In progress | Ready to audit | Pos 1196243+ in master doc |
| **Winter Courses** | `/study-abroad/finland/winter-courses` | Pending next turn | Ready to audit | Pos 1819790 in master doc |
| **Summer Courses** | `/study-abroad/finland/summer-courses` | Pending next turn | Ready to audit | Pos 1839265 in master doc |
| **Biomedical Engineering (PG)** | `/study-abroad/finland/pg/biomedical-engineering` | 3 Campus WebPs + BME Device Assets | **Verified 100%** | Dedicated Oulu €10,000 M.Sc. Tech, Aalto, Tampere; 0 content changes; structured definition cards, pills, 8-step admission process, fee conversion table, FAQ accordion; fixed EBP `page` reference error |
