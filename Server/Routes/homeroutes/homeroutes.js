const router = require("express").Router();
const {
  createContent,
  getHomeData,
  getLatestProducts,
  getPaginatedProducts,
  updateHomeData,
  deletedContent,
  getSingleContent,
  uploadDescriptionImage,
} = require("../../controller/Homecontroller/homecontroller");

router.post("/create", createContent);
router.get("/product", getHomeData);
router.get("/product/latest", getLatestProducts);
router.get("/product/paginated", getPaginatedProducts);
router.get("/users", getHomeData);
// router.get("/product/:slug", getSingleContent);
router.post("/upload-description-image", uploadDescriptionImage);
// routes/productRoutes.js
// router.get("/blog/:slug", getSingleContent);        // ← Change from :id to :slug
// router.put("/blog/:id", updateHomeData);            // Keep :id for update/delete
// router.delete("/blog/:id", deletedContent);

router.get("/blog/:slug", getSingleContent); // Product detail endpoint alias
router.get("/blog/:slug", getSingleContent); // Product detail endpoint
router.delete("/product/:id", deletedContent);
router.put("/updatehome/:id", updateHomeData);

module.exports = router;
