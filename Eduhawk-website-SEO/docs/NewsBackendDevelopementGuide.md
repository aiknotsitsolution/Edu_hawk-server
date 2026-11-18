# News Backend Development & Frontend Integration Guide
> **Project:** Edu-Hawk Worldwide  
> **Target Feature:** News Bulletin & Circulars System  
> **Tech Stack:** Node.js, Express.js, MongoDB (Mongoose), React.js, Tailwind CSS

---

## 1. Overview & System Architecture

Abhi humne News page ka **Frontend UI/UX** (`src/pages/News/NewsPage.jsx`) complete kar diya hai jisme mock data (`src/data/newsData.js`) laga hua hai.

Jab backend create hoga, flow is tarah kaam karega:

```
[ Admin Panel / Dashboard ] ──(POST / PUT / DELETE)──► [ Express.js Server (:8001) ]
                                                              │
                                                              ▼
                                                     [ MongoDB Database ]
                                                              │
[ Frontend NewsPage (:5173) ] ◄──(GET /api/news)──────────────┘
```

---

## 2. Step 1: Database Model (Mongoose Schema)

Create a new file in backend: `Server/module/newsModule/newsModel.js`

```javascript
const mongoose = require("mongoose");
const slugify = require("slugify");

const newsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "News title is required"],
      trim: true,
      maxlength: 250,
    },
    slug: {
      type: String,
      unique: true,
      lowercase: true,
      index: true,
    },
    category: {
      type: String,
      required: [true, "Category is required"],
      enum: [
        "Admissions",
        "Visa Updates",
        "NMC & Medical Alerts",
        "Scholarships",
        "University News",
        "General",
      ],
      default: "Admissions",
    },
    country: {
      type: String,
      default: "Global",
      trim: true,
    },
    badge: {
      type: String,
      default: "Latest Update",
    },
    badgeColor: {
      type: String,
      default: "bg-red-500", // e.g. bg-red-500, bg-amber-500, bg-blue-500, bg-emerald-500
    },
    readTime: {
      type: String,
      default: "3 min read",
    },
    source: {
      type: String,
      default: "Edu-Hawk Advisory",
    },
    image: {
      type: String,
      required: [true, "News banner image URL is required"],
    },
    summary: {
      type: String,
      required: [true, "Summary is required"],
      maxlength: 500,
    },
    body: {
      type: String,
      required: [true, "Detailed news body is required"],
    },
    keyHighlights: {
      type: [String],
      default: [],
    },
    officialSource: {
      type: String,
      default: "",
    },
    isFeatured: {
      type: Boolean,
      default: false,
    },
    isPublished: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true, // creates createdAt & updatedAt automatically
  }
);

// Auto-generate slug before saving
newsSchema.pre("save", function (next) {
  if (this.isModified("title") || !this.slug) {
    this.slug = slugify(this.title, { lower: true, strict: true }) + "-" + Date.now().toString().slice(-4);
  }
  next();
});

module.exports = mongoose.model("News", newsSchema);
```

---

## 3. Step 2: Backend Controller

Create file: `Server/controller/newsController/newsController.js`

```javascript
const News = require("../../module/newsModule/newsModel");

// 1. GET ALL NEWS (Supports Search, Category Filter, and Pagination)
exports.getAllNews = async (req, res) => {
  try {
    const { category, search, page = 1, limit = 20 } = req.query;

    const filter = { isPublished: true };

    if (category && category !== "All") {
      filter.category = category;
    }

    if (search && search.trim() !== "") {
      filter.$or = [
        { title: { $regex: search, $options: "i" } },
        { summary: { $regex: search, $options: "i" } },
        { country: { $regex: search, $options: "i" } },
      ];
    }

    const totalNews = await News.countDocuments(filter);
    const newsList = await News.find(filter)
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(Number(limit));

    return res.status(200).json({
      success: true,
      totalNews,
      currentPage: Number(page),
      totalPages: Math.ceil(totalNews / limit),
      data: newsList,
    });
  } catch (error) {
    console.error("Error fetching news:", error);
    return res.status(500).json({ success: false, message: "Server Error", error: error.message });
  }
};

// 2. GET SINGLE NEWS BY SLUG OR ID
exports.getNewsBySlug = async (req, res) => {
  try {
    const { slug } = req.params;
    const news = await News.findOne({
      $or: [{ slug: slug }, { _id: mongoose.isValidObjectId(slug) ? slug : null }],
      isPublished: true,
    });

    if (!news) {
      return res.status(404).json({ success: false, message: "News article not found" });
    }

    return res.status(200).json({ success: true, data: news });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Server Error", error: error.message });
  }
};

// 3. CREATE NEWS (Admin Only)
exports.createNews = async (req, res) => {
  try {
    const newsData = req.body;

    // If keyHighlights is sent as comma-separated or string from form-data:
    if (typeof newsData.keyHighlights === "string") {
      newsData.keyHighlights = newsData.keyHighlights.split("\n").filter((h) => h.trim() !== "");
    }

    const newNews = await News.create(newsData);
    return res.status(201).json({
      success: true,
      message: "News published successfully",
      data: newNews,
    });
  } catch (error) {
    return res.status(400).json({ success: false, message: "Validation Error", error: error.message });
  }
};

// 4. UPDATE NEWS (Admin Only)
exports.updateNews = async (req, res) => {
  try {
    const { id } = req.params;
    const updated = await News.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });

    if (!updated) {
      return res.status(404).json({ success: false, message: "News not found" });
    }

    return res.status(200).json({ success: true, message: "News updated", data: updated });
  } catch (error) {
    return res.status(400).json({ success: false, message: "Update Error", error: error.message });
  }
};

// 5. DELETE NEWS (Admin Only)
exports.deleteNews = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await News.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({ success: false, message: "News not found" });
    }

    return res.status(200).json({ success: true, message: "News deleted successfully" });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Delete Error", error: error.message });
  }
};
```

---

## 4. Step 3: Express Routes Setup

Create file: `Server/Routes/newsRoute/newsRoute.js`

```javascript
const express = require("express");
const router = express.Router();
const {
  getAllNews,
  getNewsBySlug,
  createNews,
  updateNews,
  deleteNews,
} = require("../../controller/newsController/newsController");

// Public routes for website visitors
router.get("/", getAllNews);
router.get("/:slug", getNewsBySlug);

// Admin-protected routes (Add auth middleware if needed)
router.post("/", createNews);
router.put("/:id", updateNews);
router.delete("/:id", deleteNews);

module.exports = router;
```

Now register this route in `Server/server.js`:

```javascript
// Inside Server/server.js:
const newsRoutes = require("./Routes/newsRoute/newsRoute.js");

// Register route:
app.use("/api/news", newsRoutes);
```

---

## 5. Step 4: Frontend Integration in React (`NewsPage.jsx`)

Abhi `NewsPage.jsx` me hardcoded `initialNewsData` use ho raha hai. Backend banne ke baad use dynamic API se kaise connect karein:

### Code Snippet for `src/pages/News/NewsPage.jsx`:

```jsx
import React, { useState, useEffect, useMemo } from "react";
// ... other imports

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:8001";

const NewsPage = () => {
  const [newsList, setNewsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeModalNews, setActiveModalNews] = useState(null);

  // 1. Fetch live news from Express backend
  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        const res = await fetch(`${API_BASE_URL}/api/news`);
        const json = await res.json();
        if (json.success) {
          setNewsList(json.data);
        } else {
          setError(json.message || "Failed to load news");
        }
      } catch (err) {
        console.error("News API error:", err);
        setError("Unable to connect to the news server.");
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  // 2. Filter news dynamically
  const filteredNews = useMemo(() => {
    return newsList.filter((item) => {
      const matchesCategory =
        selectedCategory === "All" || item.category === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === "" ||
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.country && item.country.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [newsList, selectedCategory, searchQuery]);

  // Rest of the component remains 100% same!
```

---

## 6. (Alternative / Complementary) Decap CMS Integration

Agar admin panel direct Git-based CMS se chalana ho (`/admin`), toh `Eduhawk-website-SEO/public/admin/config.yml` me yeh collection add kiya ja sakta hai:

```yaml
  - name: "news"
    label: "News & Circulars"
    folder: "src/data/news"
    create: true
    delete: true
    slug: "{{year}}-{{month}}-{{day}}-{{slug}}"
    media_folder: "public/uploads/news"
    public_folder: "/uploads/news"
    fields:
      - { label: "News Title", name: "title", widget: "string" }
      - { label: "Publish Date", name: "date", widget: "datetime" }
      - { label: "Category", name: "category", widget: "select", options: ["Admissions", "Visa Updates", "NMC & Medical Alerts", "Scholarships", "University News"] }
      - { label: "Country / Target Region", name: "country", widget: "string", default: "Global" }
      - { label: "Status Badge (e.g. Breaking News)", name: "badge", widget: "string", default: "Latest Update" }
      - { label: "Badge Color Class", name: "badgeColor", widget: "select", options: ["bg-red-500", "bg-amber-500", "bg-blue-500", "bg-emerald-500", "bg-purple-500"] }
      - { label: "Cover Image", name: "image", widget: "image" }
      - { label: "Short Summary", name: "summary", widget: "text" }
      - { label: "Full News Content", name: "body", widget: "markdown" }
      - { label: "Key Highlights (Bullet Points)", name: "keyHighlights", widget: "list", field: { label: "Highlight", name: "item", widget: "string" } }
      - { label: "Official Source Link", name: "officialSource", widget: "string", required: false }
```

---

## 7. API Testing with cURL / Postman

### Test 1: Fetch all news
```bash
curl -X GET http://localhost:8001/api/news
```

### Test 2: Create a sample news item (POST)
```bash
curl -X POST http://localhost:8001/api/news \
  -H "Content-Type: application/json" \
  -d '{
    "title": "NEET Cutoff 2026 Expected to Be Announced Next Week",
    "category": "NMC & Medical Alerts",
    "country": "India",
    "badge": "Urgent Alert",
    "badgeColor": "bg-red-500",
    "readTime": "2 min read",
    "source": "NMC Official Circular",
    "image": "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    "summary": "NMC and NTA are expected to publish the revised category-wise qualifying percentile for foreign medical admissions.",
    "body": "Detailed report about foreign medical eligibility...",
    "keyHighlights": [
      "General category minimum percentile expected at 50th percentile",
      "Valid for 3 consecutive academic sessions abroad"
    ]
  }'
```

---

## 8. Summary of Files Checklist

| File | Purpose | Status |
|---|---|---|
| `src/pages/News/NewsPage.jsx` | Frontend UI / Responsive layout | ✅ Completed |
| `src/data/newsData.js` | Initial mock data & structure | ✅ Completed |
| `src/assets/news-hero-bg.webp` | Hero background banner | ✅ Completed |
| `Server/module/newsModule/newsModel.js` | Mongoose Database Schema | 📝 To create in backend |
| `Server/controller/newsController/newsController.js` | CRUD Business Logic | 📝 To create in backend |
| `Server/Routes/newsRoute/newsRoute.js` | REST API Endpoints | 📝 To create in backend |
