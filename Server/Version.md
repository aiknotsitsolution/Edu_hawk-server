# Edu-Hawk Backend Server — Version History & Changelog

This document tracks all backend feature releases, performance optimizations, bug fixes, and infrastructure changes for the Edu-Hawk REST API server.

---

## 📌 Current Version: `v1.2.1`
- **Release Date:** November 19, 2026
- **Status:** Production / Stable
- **Runtime:** Node.js + Express.js 5 + MongoDB / Mongoose 9

---

## 🚀 Version Changelog

### [v1.2.1] - November 19, 2026
#### 🐛 Blog Slug Persistence & Collision Fix
- **Prevented Unwanted Slug Mutation on Blog Update:**
  - Resolved the issue where editing a blog's description, author, or category caused the URL slug to append `-1` (e.g. `testblog` -> `testblog-1`).
  - Added smart title change detection in `updateHomeData`: only updates the slug when the title (`name`) is genuinely modified.
- **Self-Exclusion in Unique Slug Generation:**
  - Enhanced `generateUniqueSlug(name, excludeId)` to pass `_id: { $ne: excludeId }` to `Product.findOne()`.
  - Ensures a blog updating its content never collides with its own existing slug in MongoDB.

---

### [v1.2.0] - November 19, 2026
#### ⚡ Blog API Performance & Latency Optimization
- **Payload Trimming on List Endpoints (`getHomeData`, `getLatestProducts`, `getPaginatedProducts`):**
  - Excluded the heavy raw HTML `description` field (`.select("-description")`) on list queries.
  - Reduced payload transfer size from **~1.5 MB - 3 MB+ down to ~20 KB (98.6% reduction)**.
  - Sanitized massive embedded base64 images in descriptions if present.
- **Eliminated Catastrophic In-Memory Table Scans in `getSingleContent`:**
  - Removed `Product.find().lean()` full-collection in-memory loop fallback.
  - Implemented fast index-backed `$or` queries supporting exact `slug`, case-insensitive normalized slug, and direct `ObjectId` lookups.
  - Query latency reduced from seconds to under **5 milliseconds**.
- **MongoDB Database Indexes (`homemodule.js`):**
  - Added high-performance compound and single-field indexes:
    - `productSchema.index({ slug: 1 })`
    - `productSchema.index({ createdAt: -1 })`
    - `productSchema.index({ category: 1, createdAt: -1 })`
    - `productSchema.index({ name: 1 })`
    - `productSchema.index({ author: 1 })`
- **Gzip Response Compression & DNS Resolver Fix (`server.js`):**
  - Integrated `compression` middleware across all API routes for automatic Gzip/Brotli compression.
  - Replaced invalid DNS IP (`0.0.0.0`) in `dns.setServers(["8.8.8.8", "1.1.1.1", "8.8.4.4"])` to eliminate socket timeout delays on MongoDB Atlas SRV connection queries.

---

### [v1.1.0] - November 18, 2026
#### 🔐 Authentication & Session Persistence
- **Cross-Origin Cookie Compliance:**
  - Configured `SameSite=None` and `Secure=true` for auth cookies to support cross-origin frontend-backend deployments.
- **Bearer Token Support:**
  - Added Authorization header bearer token fallback to ensure persistent admin login across page refreshes.

---

### [v1.0.0] - October 15, 2026
#### 🚀 Initial Release
- **Core REST API Infrastructure:**
  - Express.js server with MongoDB Mongoose schemas.
  - JWT token-based authentication and bcrypt password hashing.
  - File upload endpoints integrated with ImageKit and Cloudinary.
  - REST endpoints for Blogs, Categories, Contacts, and Queries.
  - Nodemailer email dispatch integration.
