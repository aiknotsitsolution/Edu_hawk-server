const News = require("../../module/newsmodule/newsmodule.js");
const NewsCategory = require("../../module/newsmodule/newsCategoryModule.js");
const NewsCountry = require("../../module/newsmodule/newsCountryModule.js");
const imagekit = require("../../utils/imagekit.js");
const slugify = require("slugify");

// Helper to format slug
const generateUniqueSlug = async (title, currentId = null) => {
  let baseSlug = slugify(title || "news", { lower: true, strict: true });
  let slug = baseSlug;
  let count = 1;

  while (true) {
    const query = { slug };
    if (currentId) query._id = { $ne: currentId };
    const existing = await News.findOne(query);
    if (!existing) break;
    slug = `${baseSlug}-${count++}`;
  }
  return slug;
};

// ==========================================
// 1. CREATE NEWS
// ==========================================
const createNews = async (req, res) => {
  try {
    const {
      title,
      category,
      country,
      badge,
      badgeColor,
      readTime,
      author,
      source,
      officialSource,
      image: imageUrl,
      summary,
      body,
      keyHighlights,
      status,
      publishedAt,
    } = req.body;

    if (!title || !summary || !body) {
      return res.status(400).json({
        success: false,
        message: "Title, summary and body are required fields.",
      });
    }

    let image = imageUrl || "";

    // If an image file was uploaded via multipart/form-data
    if (req.files?.image) {
      const file = req.files.image;
      const uploadRes = await imagekit.upload({
        file: file.data,
        fileName: `news-${Date.now()}-${file.name.replace(/\s+/g, "-")}`,
        folder: "/newsImages",
        useUniqueFileName: true,
      });
      image = uploadRes.url;
    }

    // Process highlights if passed as a string or array
    let highlights = [];
    if (Array.isArray(keyHighlights)) {
      highlights = keyHighlights.filter((h) => h && h.trim().length > 0);
    } else if (typeof keyHighlights === "string") {
      try {
        const parsed = JSON.parse(keyHighlights);
        highlights = Array.isArray(parsed) ? parsed : [keyHighlights];
      } catch {
        highlights = keyHighlights
          .split("\n")
          .map((h) => h.trim())
          .filter(Boolean);
      }
    }

    const slug = await generateUniqueSlug(title);

    const authorName = (author && author.trim()) || (source && source.trim()) || "Poonam Tiwari";

    const newNews = new News({
      title,
      slug,
      category: category || "Admissions",
      country: country || "Global",
      badge: badge || "Latest Update",
      badgeColor: badgeColor || "bg-blue-500",
      readTime: readTime || "3 min read",
      author: authorName,
      source: authorName,
      officialSource: officialSource || "",
      image,
      summary,
      body,
      keyHighlights: highlights,
      status: status || "published",
      publishedAt: publishedAt ? new Date(publishedAt) : new Date(),
    });

    await newNews.save();

    res.status(201).json({
      success: true,
      message: "News article created successfully.",
      news: newNews,
    });
  } catch (error) {
    console.error("Error creating news:", error);
    res.status(500).json({
      success: false,
      message: error.message || "Failed to create news article.",
    });
  }
};

// ==========================================
// 2. GET ALL NEWS (Filter, Search, Pagination)
// ==========================================
const getAllNews = async (req, res) => {
  try {
    const {
      page = 1,
      limit = 20,
      category,
      country,
      search,
      status = "published",
      includeDrafts,
    } = req.query;

    const query = {};

    // For public website, only return published; for admin panel, can pass includeDrafts=true
    if (includeDrafts !== "true") {
      query.status = status;
    }

    if (category && category !== "All") {
      query.category = category;
    }

    if (country && country !== "All") {
      query.country = country;
    }

    if (search && search.trim()) {
      const searchRegex = new RegExp(search.trim(), "i");
      query.$or = [
        { title: searchRegex },
        { summary: searchRegex },
        { country: searchRegex },
        { category: searchRegex },
      ];
    }

    const skip = (parseInt(page, 10) - 1) * parseInt(limit, 10);

    const [news, total] = await Promise.all([
      News.find(query)
        .sort({ publishedAt: -1, createdAt: -1 })
        .skip(skip)
        .limit(parseInt(limit, 10)),
      News.countDocuments(query),
    ]);

    res.status(200).json({
      success: true,
      total,
      page: parseInt(page, 10),
      totalPages: Math.ceil(total / parseInt(limit, 10)),
      news,
      data: news,
    });
  } catch (error) {
    console.error("Error fetching news:", error);
    res.status(500).json({
      success: false,
      message: error.message || "Failed to fetch news.",
    });
  }
};

// ==========================================
// 3. GET SINGLE NEWS (By Slug or ID)
// ==========================================
const getNewsBySlug = async (req, res) => {
  try {
    const { slug } = req.params;

    let news = await News.findOne({ slug });

    // Fallback if parameter was an ObjectId
    if (!news && slug.match(/^[0-9a-fA-F]{24}$/)) {
      news = await News.findById(slug);
    }

    if (!news) {
      return res.status(404).json({
        success: false,
        message: "News article not found.",
      });
    }

    res.status(200).json({
      success: true,
      news,
      data: news,
    });
  } catch (error) {
    console.error("Error fetching news detail:", error);
    res.status(500).json({
      success: false,
      message: error.message || "Failed to fetch news detail.",
    });
  }
};

// ==========================================
// 4. UPDATE NEWS
// ==========================================
const updateNews = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      title,
      slug: customSlug,
      category,
      country,
      badge,
      badgeColor,
      readTime,
      author,
      source,
      officialSource,
      image: imageUrl,
      summary,
      body,
      keyHighlights,
      status,
      publishedAt,
    } = req.body;

    const existingNews = await News.findById(id);
    if (!existingNews) {
      return res.status(404).json({
        success: false,
        message: "News article not found.",
      });
    }

    // Handle image update if uploaded
    let image = imageUrl !== undefined ? imageUrl : existingNews.image;
    if (req.files?.image) {
      const file = req.files.image;
      const uploadRes = await imagekit.upload({
        file: file.data,
        fileName: `news-${Date.now()}-${file.name.replace(/\s+/g, "-")}`,
        folder: "/newsImages",
        useUniqueFileName: true,
      });
      image = uploadRes.url;
    }

    // Process highlights if provided
    let highlights = existingNews.keyHighlights;
    if (keyHighlights !== undefined) {
      if (Array.isArray(keyHighlights)) {
        highlights = keyHighlights.filter((h) => h && h.trim().length > 0);
      } else if (typeof keyHighlights === "string") {
        try {
          const parsed = JSON.parse(keyHighlights);
          highlights = Array.isArray(parsed) ? parsed : [keyHighlights];
        } catch {
          highlights = keyHighlights
            .split("\n")
            .map((h) => h.trim())
            .filter(Boolean);
        }
      }
    }

    // Slug update if title changed and customSlug not passed
    let slug = existingNews.slug;
    if (customSlug && customSlug.trim() !== existingNews.slug) {
      slug = await generateUniqueSlug(customSlug, id);
    } else if (title && title !== existingNews.title && !customSlug) {
      slug = await generateUniqueSlug(title, id);
    }

    const updated = await News.findByIdAndUpdate(
      id,
      {
        title: title || existingNews.title,
        slug,
        category: category !== undefined ? category : existingNews.category,
        country: country !== undefined ? country : existingNews.country,
        badge: badge !== undefined ? badge : existingNews.badge,
        badgeColor: badgeColor !== undefined ? badgeColor : existingNews.badgeColor,
        readTime: readTime !== undefined ? readTime : existingNews.readTime,
        author: author !== undefined ? author : (source !== undefined ? source : existingNews.author),
        source: author !== undefined ? author : (source !== undefined ? source : existingNews.source),
        officialSource: officialSource !== undefined ? officialSource : existingNews.officialSource,
        image,
        summary: summary !== undefined ? summary : existingNews.summary,
        body: body !== undefined ? body : existingNews.body,
        keyHighlights: highlights,
        status: status || existingNews.status,
        publishedAt: publishedAt ? new Date(publishedAt) : existingNews.publishedAt,
      },
      { new: true, runValidators: true }
    );

    res.status(200).json({
      success: true,
      message: "News article updated successfully.",
      news: updated,
    });
  } catch (error) {
    console.error("Error updating news:", error);
    res.status(500).json({
      success: false,
      message: error.message || "Failed to update news article.",
    });
  }
};

// ==========================================
// 5. DELETE NEWS
// ==========================================
const deleteNews = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await News.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({
        success: false,
        message: "News article not found.",
      });
    }

    res.status(200).json({
      success: true,
      message: "News article deleted successfully.",
    });
  } catch (error) {
    console.error("Error deleting news:", error);
    res.status(500).json({
      success: false,
      message: error.message || "Failed to delete news article.",
    });
  }
};

// ==========================================
// 6. UPLOAD IMAGE STANDALONE
// ==========================================
const uploadNewsImage = async (req, res) => {
  try {
    if (!req.files?.image) {
      return res.status(400).json({
        success: false,
        message: "No image file provided.",
      });
    }

    const file = req.files.image;
    const uploadRes = await imagekit.upload({
      file: file.data,
      fileName: `news-upload-${Date.now()}-${file.name.replace(/\s+/g, "-")}`,
      folder: "/newsImages",
      useUniqueFileName: true,
    });

    res.status(200).json({
      success: true,
      url: uploadRes.url,
      fileId: uploadRes.fileId,
    });
  } catch (error) {
    console.error("Error uploading image:", error);
    res.status(500).json({
      success: false,
      message: error.message || "Failed to upload image.",
    });
  }
};

// ==========================================
// 7. CATEGORIES CRUD
// ==========================================
const getNewsCategories = async (req, res) => {
  try {
    const categories = await NewsCategory.find().sort({ name: 1 });
    res.status(200).json({
      success: true,
      categories,
      data: categories,
    });
  } catch (error) {
    console.error("Error fetching categories:", error);
    res.status(500).json({
      success: false,
      message: error.message || "Failed to fetch categories.",
    });
  }
};

const createNewsCategory = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name || !name.trim()) {
      return res.status(400).json({
        success: false,
        message: "Category name is required.",
      });
    }

    const trimmed = name.trim();
    const existing = await NewsCategory.findOne({
      name: { $regex: new RegExp(`^${trimmed}$`, "i") },
    });

    if (existing) {
      return res.status(400).json({
        success: false,
        message: "Category already exists.",
      });
    }

    const slug = slugify(trimmed, { lower: true, strict: true });
    const newCat = new NewsCategory({ name: trimmed, slug });
    await newCat.save();

    res.status(201).json({
      success: true,
      message: "Category created successfully.",
      category: newCat,
    });
  } catch (error) {
    console.error("Error creating category:", error);
    res.status(500).json({
      success: false,
      message: error.message || "Failed to create category.",
    });
  }
};

const deleteNewsCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await NewsCategory.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({
        success: false,
        message: "Category not found.",
      });
    }

    res.status(200).json({
      success: true,
      message: "Category deleted successfully.",
    });
  } catch (error) {
    console.error("Error deleting category:", error);
    res.status(500).json({
      success: false,
      message: error.message || "Failed to delete category.",
    });
  }
};

// ==========================================
// 7.1 COUNTRIES / REGIONS CRUD
// ==========================================
const DEFAULT_COUNTRIES = [
  "Global",
  "India",
  "Russia",
  "Georgia",
  "Kazakhstan",
  "Kyrgyzstan",
  "Uzbekistan",
  "Philippines",
  "Egypt",
  "Nepal",
  "Bangladesh",
  "USA",
  "UK",
  "Canada",
  "Australia",
  "Germany",
  "Italy",
  "Europe",
];

const getNewsCountries = async (req, res) => {
  try {
    let countries = await NewsCountry.find().sort({ name: 1 });

    // Auto-seed defaults if collection is empty
    if (countries.length === 0) {
      for (const cName of DEFAULT_COUNTRIES) {
        const slug = slugify(cName, { lower: true, strict: true });
        await NewsCountry.create({ name: cName, slug }).catch(() => {});
      }
      countries = await NewsCountry.find().sort({ name: 1 });
    }

    res.status(200).json({
      success: true,
      countries,
      data: countries,
    });
  } catch (error) {
    console.error("Error fetching countries:", error);
    res.status(500).json({
      success: false,
      message: error.message || "Failed to fetch countries.",
    });
  }
};

const createNewsCountry = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name || !name.trim()) {
      return res.status(400).json({
        success: false,
        message: "Country/Region name is required.",
      });
    }

    const trimmed = name.trim();
    const existing = await NewsCountry.findOne({
      name: { $regex: new RegExp(`^${trimmed}$`, "i") },
    });

    if (existing) {
      return res.status(400).json({
        success: false,
        message: "Country / Region already exists.",
      });
    }

    const slug = slugify(trimmed, { lower: true, strict: true });
    const newCountry = new NewsCountry({ name: trimmed, slug });
    await newCountry.save();

    res.status(201).json({
      success: true,
      message: "Country/Region created successfully.",
      country: newCountry,
    });
  } catch (error) {
    console.error("Error creating country:", error);
    res.status(500).json({
      success: false,
      message: error.message || "Failed to create country.",
    });
  }
};

const deleteNewsCountry = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await NewsCountry.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({
        success: false,
        message: "Country/Region not found.",
      });
    }

    res.status(200).json({
      success: true,
      message: "Country/Region deleted successfully.",
    });
  } catch (error) {
    console.error("Error deleting country:", error);
    res.status(500).json({
      success: false,
      message: error.message || "Failed to delete country.",
    });
  }
};

// ==========================================
// 8. SEED INITIAL NEWS (if DB empty)
// ==========================================
const seedInitialNews = async (req, res) => {
  try {
    const count = await News.countDocuments();
    if (count > 0) {
      return res.status(200).json({
        success: true,
        message: `Database already has ${count} news articles. Seed skipped.`,
        count,
      });
    }

    // Default categories
    const initialCategories = [
      "Admissions",
      "NMC & Medical Alerts",
      "Visa Updates",
      "Scholarships",
    ];

    for (const catName of initialCategories) {
      const exists = await NewsCategory.findOne({ name: catName });
      if (!exists) {
        await NewsCategory.create({
          name: catName,
          slug: slugify(catName, { lower: true, strict: true }),
        });
      }
    }

    // Initial 4 news articles from frontend
    const sampleNews = [
      {
        title: "Global Medical & Engineering Admissions Open for 2026-27 Academic Intake",
        slug: "global-medical-engineering-admissions-2026",
        category: "Admissions",
        country: "Global",
        badge: "Breaking News",
        badgeColor: "bg-red-500",
        readTime: "3 min read",
        author: "Poonam Tiwari",
        source: "Poonam Tiwari",
        officialSource: "https://www.eduhawk.in/contact",
        image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80",
        summary:
          "Applications are officially open for top NMC & WHO recognized government medical universities and STEM institutions across USA, UK, Europe, Russia, and Central Asia for the upcoming 2026 intake.",
        body: `Edu-Hawk Worldwide has officially flagged off early-bird admissions and document evaluation for Indian aspirants eyeing undergraduate and postgraduate degrees abroad for 2026.\n\nWith over 40+ accredited partner institutions releasing their eligibility matrices early, students can now lock university seats before international student quotas fill up. Early applicants also benefit from subsidized hostel allotments and expedited invitation letters.\n\nOur senior overseas education counselors recommend submitting transcripts, passport copies, and NEET/entrance scorecards early to avoid last-minute visa processing backlogs.`,
        keyHighlights: [
          "Over 40+ NMC & WHO approved medical colleges opening application portals early.",
          "Apostille, translation & invitation letter assistance provided under one roof.",
          "100% transparent fee structure direct to university bank accounts.",
          "Seats allocated strictly on first-come, first-served merit basis.",
        ],
        status: "published",
        publishedAt: new Date("2026-11-15T10:00:00.000Z"),
      },
      {
        title: "NMC Issues Updated Guidelines for Indian Students Pursuing MBBS Abroad",
        slug: "nmc-updated-guidelines-mbbs-abroad-2026",
        category: "NMC & Medical Alerts",
        country: "India / Overseas",
        badge: "Regulatory Alert",
        badgeColor: "bg-amber-500",
        readTime: "4 min read",
        author: "Dr. Ananya Sharma",
        source: "Dr. Ananya Sharma",
        officialSource: "https://www.nmc.org.in",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
        summary:
          "The National Medical Commission reinforces key compliance criteria including minimum course duration (54 months), English-medium instruction, and mandatory 12-month clinical internship in the host country.",
        body: `In its latest public advisory circular, the National Medical Commission (NMC) has reiterated mandatory compliance guidelines under the Foreign Medical Graduate Licentiate (FMGL) Regulations.\n\nAspiring doctors must ensure their chosen university adheres to the 54-month academic curriculum followed by a full 12-month rotatory clinical internship in the same institution. Dual-degree or hybrid programs without local medical council registration will not be permitted to sit for the NExT licensing exam in India.\n\nEdu-Hawk counselors only partner with universities that strictly conform with every parameter of the NMC guidelines to ensure 100% eligibility for returning graduates.`,
        keyHighlights: [
          "Minimum course duration must be 54 months plus 12 months internship in the same campus hospital.",
          "Medium of instruction must strictly be 100% English throughout the academic tenure.",
          "Candidate must be registered with the host country's medical licensing board.",
          "Pre-requisite NEET qualifying score remains mandatory for Indian passport holders.",
        ],
        status: "published",
        publishedAt: new Date("2026-11-12T08:30:00.000Z"),
      },
      {
        title: "US & UK Announce Streamlined Student Visa Appointment Slots for 2026",
        slug: "us-uk-streamlined-student-visa-slots-2026",
        category: "Visa Updates",
        country: "USA & UK",
        badge: "Visa Update",
        badgeColor: "bg-blue-500",
        readTime: "3 min read",
        author: "Rahul Verma",
        source: "Rahul Verma",
        officialSource: "https://travel.state.gov",
        image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&q=80",
        summary:
          "Embassies in New Delhi, Mumbai, and Chennai release dedicated student visa interview batches to avoid delays for F-1 and UK Student Route applicants.",
        body: `In a welcome move for international scholars, foreign consulates have released early appointment windows for students holding valid I-20 and CAS certificates.\n\nThe streamlined process includes accelerated biometrics and simplified financial document verification for STEM and Healthcare applicants. Priority appointment slots are being expedited to ensure students arrive well in time for mandatory university orientation programs.`,
        keyHighlights: [
          "Special weekend interview batches scheduled across all major metropolitan consulates.",
          "Faster turnaround times for F-1 and Tier-4/Student Route applications.",
          "Digital verification of financial affidavits and scholarship proof enabled.",
          "Edu-Hawk offers full mock interview preparation and financial dossier reviews.",
        ],
        status: "published",
        publishedAt: new Date("2026-11-09T14:15:00.000Z"),
      },
      {
        title: "European Universities Announce Up to 50% Merit Scholarships for STEM & Medical Courses",
        slug: "european-universities-scholarships-stem-medical-2026",
        category: "Scholarships",
        country: "Europe",
        badge: "Scholarship Alert",
        badgeColor: "bg-emerald-500",
        readTime: "3 min read",
        author: "Poonam Tiwari",
        source: "Poonam Tiwari",
        officialSource: "https://www.eduhawk.in/contact",
        image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=800&q=80",
        summary:
          "Leading universities across Italy, Germany, and Ireland roll out early-bird merit grants and tuition waivers for Indian candidates with high academic scores.",
        body: `Prominent European medical and technical faculties have unveiled their annual international grant funds. Under the newly announced schemes, students with 75%+ marks in high school science subjects can avail tuition fee subsidies ranging between €1,500 and €4,000 per year.\n\nApplications must be submitted alongside certified academic transcripts, recommendation letters, and a statement of purpose. Edu-Hawk scholarship specialists assist students in drafting high-impact motivation letters.`,
        keyHighlights: [
          "Early-bird tuition fee waivers up to 50% available on qualifying entrance exams.",
          "English-medium programs across top state-funded research universities.",
          "Dedicated student visa sponsorship with Schengen work permit eligibility.",
          "Free scholarship eligibility check available at Edu-Hawk branches.",
        ],
        status: "published",
        publishedAt: new Date("2026-11-04T11:00:00.000Z"),
      },
    ];

    await News.insertMany(sampleNews);

    res.status(201).json({
      success: true,
      message: `Seeded ${sampleNews.length} initial news articles successfully.`,
      count: sampleNews.length,
    });
  } catch (error) {
    console.error("Error seeding news:", error);
    res.status(500).json({
      success: false,
      message: error.message || "Failed to seed news.",
    });
  }
};

module.exports = {
  createNews,
  getAllNews,
  getNewsBySlug,
  updateNews,
  deleteNews,
  uploadNewsImage,
  getNewsCategories,
  createNewsCategory,
  deleteNewsCategory,
  getNewsCountries,
  createNewsCountry,
  deleteNewsCountry,
  seedInitialNews,
};
