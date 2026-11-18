# Edu-Hawk Admin Panel - Version History & Documentation

Welcome to the Edu-Hawk Admin Panel version tracking and changelog document. This file tracks all feature releases, UI/UX enhancements, bug fixes, and system improvements.

---

## 📌 Current Version: `v1.2.0`
- **Release Date:** November 18, 2026
- **Status:** Stable / Production Ready
- **Platform:** Vite + React + Tailwind CSS + CKEditor 5

---

## 🚀 Version Changelog

### [v1.2.0] - November 18, 2026 (Current)

#### 📝 Blog Editor Enhancements (`DescriptionEditor.jsx`)
* **Table Stretching & Interactive Column Resizing:**
  * Enabled CKEditor 5 `TableColumnResize` plugin. Users can hover over table column borders and drag to stretch, shrink, or resize columns and full table width dynamically.
* **Table Properties & Cell Properties Balloons:**
  * Imported and registered `TableProperties` and `TableCellProperties`.
  * Users can click any table or cell to customize alignment (Left, Center, Right), custom width/height (e.g., `100%`, `600px`), cell padding, cell spacing, background color, and border styling.
* **Table Cell Spacing & Typography Fix:**
  * Fixed cramped spacing where text was touching table borders.
  * Configured default `12px` cell padding and clean border `#cbd5e1`.
  * Applied comprehensive table CSS rules in `src/index.css` for consistent styling across editor and preview modes.
  * Added subtle zebra striping (`#f8fafc`) on even rows for improved readability.
* **Content Preview Feature:**
  * Added "Preview Content" button on the editor top bar.
  * Opens an interactive modal showing sanitized live-rendered content with Desktop and Mobile viewport toggles.
* **Headings & Media Resizing:**
  * Added `Heading` plugin support (`Paragraph`, `H1`, `H2`, `H3`, `H4`) for SEO-optimized content hierarchy.
  * Added `ImageResize` handles to drag and resize embedded images within articles.
* **Paste Normalization & Remove Format Fix:**
  * Integrated `PasteFromOffice` to clean incoming clipboard HTML from Google Docs and MS Word. Fixes the issue where copied normal text was being wrapped in `<b>` tags and rendering as bold.
  * Added `RemoveFormat` button to editor toolbar for 1-click clearing of any stray text formatting.
  * Enforced explicit `font-weight: 400` on paragraphs in `src/index.css`.

#### 🎨 "Create Blog" Page UI/UX Redesign (`Createpost.jsx`)
* **Spacious Full-Width Layout:**
  * Clean unified full-width card providing maximum horizontal space for comfortable writing and table stretching.
* **Top-to-Bottom Editorial Hierarchy:**
  * **Featured Media (Top):** Dedicated upload box that transforms directly into an inline cover image banner upon upload, with built-in "Change Image" and "Remove" controls, plus a secondary gallery strip for multiple images.
  * **Blog Title:** Prominent title field with character counter.
  * **Metadata & Classification (Below Title):** Clean 2-column input row for Author Name and Category.
  * **Article Content & Tables:** Full-width rich editor with table stretching, cell properties, headings, and preview.
* **Unified Bottom Action Bar:**
  * Clean footer actions bar at the bottom containing "Ready to draft" status, "Reset Form", "Preview Blog", and "Create Blog" (eliminating duplicate buttons).
* **Full Post Preview Modal:**
  * Added "Preview Blog" modal displaying the complete article (Category badge, Title, Author avatar, Cover image, and full HTML Description).

#### 🧭 Sidebar Version Management (`Sidebar.jsx`)
* **Version Footer Indicator:**
  * Added version badge (`v1.2.0`) with active status dot at the bottom of the sidebar.
  * Added interactive "Changelog" button opening a release notes summary directly in the admin panel.
* **Documentation Setup:**
  * Created `vite-project/docs/Version.md` to permanently record all version milestones and change details.

---

### [v1.1.0] - November 2026
* **CKEditor 5 Integration:**
  * Configured ClassicEditor for blog descriptions.
  * Built custom image upload adapter (`CustomUploadAdapterPlugin`) targeting backend image endpoint.
  * Added Font Family, Font Size dropdowns, text formatting (Bold, Italic, Underline, Strikethrough, Color, Highlight).
  * Added Bulleted & Numbered lists, Blockquotes, Links, and Media Embed.

---

### [v1.0.0] - October 2026
* **Initial Release:**
  * Core Edu-Hawk Admin Dashboard.
  * JWT-based authentication and protected routing.
  * Navigation sidebar and dashboard layout.
  * Basic CRUD operations for Blogs, Categories, Contacts, and Queries.
