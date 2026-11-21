const router = require("express").Router();
const {
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
} = require("../../controller/Newscontroller/newscontroller.js");

// Seed endpoint
router.post("/seed", seedInitialNews);
router.get("/seed", seedInitialNews);

// Categories
router.get("/categories", getNewsCategories);
router.post("/categories", createNewsCategory);
router.delete("/categories/:id", deleteNewsCategory);

// Countries / Regions
router.get("/countries", getNewsCountries);
router.post("/countries", createNewsCountry);
router.delete("/countries/:id", deleteNewsCountry);

// Image Upload
router.post("/upload-image", uploadNewsImage);

// Articles CRUD
router.get("/", getAllNews);
router.get("/article/:slug", getNewsBySlug);
router.get("/:slug", getNewsBySlug);
router.post("/", createNews);
router.put("/:id", updateNews);
router.delete("/:id", deleteNews);

module.exports = router;
