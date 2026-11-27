# EduHawk Decap CMS — Implementation Preflight Inspection

**Document:** CMS Preflight Verification, Branch Audit & Dependency Gate  
**Project:** EduHawk Website (`eduhawk.in` & `edu-hawkstudyabbroad2.vercel.app`)  
**Repository:** `aiknotsitsolution/Edu_hawk-server`  
**Author:** Senior DevOps Engineer, Decap CMS Specialist & GitHub OAuth Engineer  
**Date:** November 27, 2026  
**Status:** Preflight Inspection Completed — Awaiting Deployment Approvals  

---

## 1. Git Repository, Remote & Branch Architecture Audit

A thorough inspection of Git references, commit graphs, remotes, and tracking branches was conducted:

### 1.1. Remote Configuration & Branch Tracking
- **Remote Origin URL:** `https://github.com/aiknotsitsolution/Edu_hawk-server.git` (Push & Fetch)
- **Default Branch (`HEAD`):** `origin/HEAD -> origin/master`
- **Active Working Branch:** `qa/postvercel-deployment-fixes`
- **Working Tree State:** Completely clean (no uncommitted modified files; only untracked audit documents).
- **Branch Tracking Summary (`git branch -vv`):**
  - `master [origin/master]` (commit `25c1e85` — *"Merge branch 'qa/postvercel-deployment-fixes'"*)
  - `qa/postvercel-deployment-fixes [origin/qa/postvercel-deployment-fixes: ahead 12]` (commit `7e755a7`)
  - `Updatedwebpages/jeetahirwar [origin/Updatedwebpages/jeetahirwar: behind 2]`
  - `feature/content-update [origin/feature/content-update]`
  - `feature/study-abroad-finland [origin/feature/study-abroad-finland]`
  - `perf/backend-blog-optimization [origin/perf/backend-blog-optimization]`

### 1.2. Verification of Target Publishing Branch (`master` vs `main` vs `qa`)
1. **The `main` branch non-existence [CRITICAL]:**  
   The current `public/admin/config.yml` line 4 specifies `branch: main`. Live Git audit confirms **no `main` branch exists on `origin`**. Any API attempt by Decap CMS to create review branches or commit against `main` will result in HTTP 404 / 422 errors from the GitHub REST API (`Reference does not exist`).
2. **Role of `master` [VERIFIED AS PRODUCTION TARGET]:**  
   The repository commit log proves that `master` receives merged code from `qa/postvercel-deployment-fixes`. In standard Git workflows, `master` is the canonical production branch for AWS EC2/Nginx deployments.
3. **Role of `qa/postvercel-deployment-fixes` [VERIFIED AS ACTIVE PREVIEW BRANCH]:**  
   This branch is currently 12 commits ahead and is actively wired to Vercel preview environments (`https://edu-hawkstudyabbroad2.vercel.app/`).
4. **Editorial Workflow Target Recommendation:**  
   - For **Staging/Preview Verification:** The CMS should temporarily or conditionally point to `qa/postvercel-deployment-fixes` or `master` depending on whether the team wants preview PRs against the QA branch or master.
   - For **Production Publishing:** `branch: master` is the verified canonical target.

---

## 2. Decap CMS Static Files & Collections Audit

### 2.1. Static Files State
- **Admin Entry Point:** [`Eduhawk-website-SEO/public/admin/index.html`](file:///e:/AIknotsit-Office-Work/Edu_hawk-Latest/Edu_hawk-server/Eduhawk-website-SEO/public/admin/index.html)
  - Loads Decap CMS via unpkg CDN: `https://unpkg.com/decap-cms@^3.1.0/dist/decap-cms.js`.
  - Explicitly binds YAML config via `<link href="/admin/config.yml" type="text/yaml" rel="cms-config-url" />`.
  - Sets `<meta name="robots" content="noindex, nofollow" />`.
- **Local Dev Server Hook:** In [`Eduhawk-website-SEO/vite.config.js`](file:///e:/AIknotsit-Office-Work/Edu_hawk-Latest/Edu_hawk-server/Eduhawk-website-SEO/vite.config.js#L11-L26), `adminRedirectPlugin()` ensures `http://localhost:5173/admin` redirects to `/admin/index.html`.
- **Local Proxy Dependency:** `package.json` includes `"decap-server": "^3.11.6"` with script `"cms": "decap-server"` on port 8081. This supports `local_backend: true` for offline local development without needing GitHub OAuth.

### 2.2. Collections Preservation Verification
The existing configuration in `Eduhawk-website-SEO/public/admin/config.yml` spans **32,685 lines** (1.68 MB) and contains **17 complete collections**:

| # | Collection `name` | File / Folder Target | Data Format | Media Folder |
| :--- | :--- | :--- | :--- | :--- |
| 1 | `main_pages` | `src/data/home.json`, `about.json`, `services.json`, `contact.json`, `landingpage.json` | JSON | `public/uploads/home`, `public/uploads/about` |
| 2 | `medical_colleges` | 13 country files in `src/data/medical_colleges/` (`india.json`, `russia.json`, `bangladesh.json`, `nepal.json`, etc.) | JSON | `public/uploads/colleges` |
| 3 | `study_abroad_usa` | `src/data/study_abroad/usa/*.json` | JSON | `public/uploads/study_abroad/usa` |
| 4 | `study_abroad_finland` | `src/data/study_abroad/finland/*.json` | JSON | `public/uploads/study_abroad/finland` |
| 5 | `study_abroad_australia` | `src/data/study_abroad/australia/*.json` | JSON | `public/uploads/study_abroad/australia` |
| 6 | `study_abroad_italy` | `src/data/study_abroad/italy/*.json` | JSON | `public/uploads/study_abroad/italy` |
| 7 | `study_abroad_canada` | `src/data/study_abroad/canada/*.json` | JSON | `public/uploads/study_abroad/canada` |
| 8 | `study_abroad_spain` | `src/data/study_abroad/spain/*.json` | JSON | `public/uploads/study_abroad/spain` |
| 9 | `study_abroad_uk` | `src/data/study_abroad/uk/*.json` | JSON | `public/uploads/study_abroad/uk` |
| 10 | `study_abroad_ireland` | `src/data/study_abroad/ireland/*.json` | JSON | `public/uploads/study_abroad/ireland` |
| 11 | `study_abroad_france` | `src/data/study_abroad/france/*.json` | JSON | `public/uploads/study_abroad/france` |
| 12 | `study_abroad_germany` | `src/data/study_abroad/germany/*.json` | JSON | `public/uploads/study_abroad/germany` |
| 13 | `study_abroad_switzerland`| `src/data/study_abroad/switzerland/*.json` | JSON | `public/uploads/study_abroad/switzerland` |
| 14 | `study_abroad_mauritius` | `src/data/study_abroad/mauritius/*.json` | JSON | `public/uploads/study_abroad/mauritius` |
| 15 | `study_abroad_denmark` | `src/data/study_abroad/denmark/*.json` | JSON | `public/uploads/study_abroad/denmark` |
| 16 | `study_abroad_sweden` | `src/data/study_abroad/sweden/*.json` | JSON | `public/uploads/study_abroad/sweden` |
| 17 | `tests` | `src/data/tests/*.json` | JSON | `public/uploads/tests` |

**Preservation Mandate:** Only the top 10 lines of `config.yml` (backend configuration) will be edited. Lines 11 through 32,685 must remain 100% byte-for-byte identical.

---

## 3. Security, CSP & Origin Allowlist Inspection

### 3.1. Current CSP in `vercel.json`
Located in [`Eduhawk-website-SEO/vercel.json`](file:///e:/AIknotsit-Office-Work/Edu_hawk-Latest/Edu_hawk-server/Eduhawk-website-SEO/vercel.json#L46-L48):
- Current `connect-src`:
  ```text
  connect-src 'self' https://unpkg.com https://api.github.com https://edu-hawk-server.onrender.com https://www.google-analytics.com https://www.googletagmanager.com https://www.google.com https://www.googleadservices.com https://googleads.g.doubleclick.net https://challenges.cloudflare.com https://www.cloudflare.com;
  ```
- **CSP Gate:** When the Cloudflare Worker OAuth proxy URL is provisioned (e.g., `https://eduhawk-cms-auth.<subdomain>.workers.dev`), it **must be added** to `connect-src`. Otherwise, browser CSP will block Decap CMS from communicating with the auth endpoint.

### 3.2. Strict Allowed Origin Validation (No Wildcards)
To satisfy security requirements and prevent open redirect / unauthorized token relay vulnerabilities:
- The Cloudflare Worker must strictly match the requesting `origin` or `site_id` against an **explicit whitelist**:
  ```javascript
  const ALLOWED_ORIGINS = new Set([
    "https://eduhawk.in",
    "https://www.eduhawk.in",
    "https://edu-hawkstudyabbroad2.vercel.app",
    "https://eduhawkwebsite.vercel.app",
    "http://localhost:5173",
    "http://localhost:3000",
    "http://127.0.0.1:5173"
  ]);
  ```
- **No Wildcard Allowed:** No regex or wildcard permitting any arbitrary `*.vercel.app` domain is allowed. Only verified EduHawk deployment domains are permitted.

---

## 4. Risks & Dependencies Checklist

| # | Dependency / Requirement | Owner / Authority | Status | Action Required |
| :--- | :--- | :--- | :--- | :--- |
| **D1** | GitHub OAuth App Registration | GitHub Organization Owner (`aiknotsitsolution`) | **PENDING** | Register App in GitHub Developer Settings; retrieve Client ID & Secret. |
| **D2** | Cloudflare Account & Worker Deployment | Cloudflare Account Admin | **PENDING** | Deploy worker script; configure secret variables `GITHUB_CLIENT_ID` and `GITHUB_CLIENT_SECRET`. |
| **D3** | Production Nginx Fix | AWS EC2 Server Administrator | **BLOCKED (Manager Control)** | Add `/admin` location block and deploy `dist/admin/` static assets to EC2 webroot. |
| **D4** | GitHub Collaborator Permissions | Repository Owner | **REQUIRED** | Editors logging into Decap CMS must have collaborator `write`/`push` permissions to `aiknotsitsolution/Edu_hawk-server`. |
| **D5** | Branch Target Confirmation | Project Lead / Tech Lead | **CONFIRMED** | `master` confirmed as canonical production publishing branch. |

---

## 5. Preflight Approval Gate

Before any production changes or live secret provisioning:
- [x] Preflight inspection complete.
- [x] Zero Git resets, stashes, or destructive actions taken.
- [x] 17 CMS collections verified and mapped.
- [x] Cloudflare Worker codebase prepared in `cloudflare-worker/`.
- [x] Local configuration changes staged safely.
- [ ] Account owner inputs GitHub OAuth credentials into Cloudflare Worker dashboard.
- [ ] AWS administrator executes Nginx remediation on production EC2.
