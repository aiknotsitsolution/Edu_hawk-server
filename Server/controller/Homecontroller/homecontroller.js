const imagekit = require("../../utils/imagekit.js");
const Product = require("../../module/homemodule/homemodule");
const Category = require("../../module/BlogModule/caetgorymodule.js");
const slugify = require("slugify"); // ← Install: npm install slugify

// Helper to generate unique slug
const generateUniqueSlug = async (name) => {
  const baseSlug =
    slugify(name || "", { lower: true, strict: true }) || `item-${Date.now()}`;
  let slug = baseSlug;
  let counter = 1;

  while (await Product.findOne({ slug })) {
    slug = `${baseSlug}-${counter}`;
    counter++;
  }
  return slug;
};

// ============================
// CREATE PRODUCT
// ============================
const createContent = async (req, res) => {
  try {
    const { name, description, category, author } = req.body;

    if (!name || !description || !category) {
      return res.status(400).json({
        success: false,
        message: "Name, description, and category are required",
      });
    }

    const categoryExists = await Category.findById(category);
    if (!categoryExists) {
      return res
        .status(404)
        .json({ success: false, message: "Category not found" });
    }

    const slug = await generateUniqueSlug(name);

    // Image Upload
    if (!req.files?.images) {
      return res
        .status(400)
        .json({ success: false, message: "At least one image is required" });
    }

    const files = Array.isArray(req.files.images)
      ? req.files.images
      : [req.files.images];
    const uploadedImages = [];

    for (let file of files) {
      const uploadResponse = await imagekit.upload({
        file: file.data,
        fileName: `product-${Date.now()}-${file.name}`,
        folder: "/productImages",
      });
      uploadedImages.push(uploadResponse.url);
    }

    const newProduct = new Product({
      name,
      slug,
      description,
      category,
      author,
      images: uploadedImages,
    });

    await newProduct.save();

    res
      .status(201)
      .json({ success: true, message: "Product created", data: newProduct });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// ============================
// GET ALL PRODUCTS
// ============================
const getHomeData = async (req, res) => {
  try {
    const products = await Product.find()
      .populate("category")
      .sort({ createdAt: -1 })
      .lean();

    const normalizedProducts = products.map((product) => {
      if (!product.slug && product.name) {
        product.slug =
          slugify(product.name, { lower: true, strict: true }) ||
          `item-${product._id}`;
      }
      return product;
    });

    return res.status(200).json({
      success: true,
      data: normalizedProducts,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to fetch products",
      error: error.message,
    });
  }
};

// ============================
// UPDATE PRODUCT
// ============================
const updateHomeData = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, author, category } = req.body;

    const updateFields = {};

    if (name?.trim()) {
      updateFields.name = name.trim();
    }

    if (description?.trim()) {
      updateFields.description = description.trim();
    }

    if (author?.trim()) {
      updateFields.author = author.trim();
    }

    if (category?.trim()) {
      const categoryExists = await Category.findById(category);
      if (!categoryExists) {
        return res.status(404).json({
          success: false,
          message: "Category not found",
        });
      }
      updateFields.category = category;
    }

    if (name?.trim()) {
      updateFields.name = name.trim();
      updateFields.slug = await generateUniqueSlug(name.trim()); // Update slug if name changes
    }

    // Handle image replacement (if new images sent → replace all)
    if (req.files && req.files.images) {
      const files = Array.isArray(req.files.images)
        ? req.files.images
        : [req.files.images];
      const uploadedImages = [];

      for (const file of files) {
        const uploadRes = await imagekit.upload({
          file: file.data,
          fileName: `product-update-${Date.now()}-${file.name}`,
          folder: "/productImages",
          useUniqueFileName: true,
        });
        uploadedImages.push(uploadRes.url);
      }

      updateFields.images = uploadedImages;
    }

    // Prevent empty update
    if (Object.keys(updateFields).length === 0) {
      return res.status(400).json({
        success: false,
        message: "No valid fields provided for update",
      });
    }

    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      { $set: updateFields },
      { new: true, runValidators: true },
    ).populate("category", "name");

    if (!updatedProduct) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Product updated successfully",
      data: updatedProduct,
    });
  } catch (error) {
    console.error("Update Error:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};

// ============================
// DELETE PRODUCT
// ============================
const deletedContent = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedProduct = await Product.findByIdAndDelete(id);

    if (!deletedProduct) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Product deleted successfully",
      data: deletedProduct,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to delete product",
      error: error.message,
    });
  }
};

const getSingleContent = async (req, res) => {
  try {
    const { slug } = req.params;
    console.log(slug, "slug received");

    const normalizedSlug =
      slugify(slug || "", { lower: true, strict: true }) || slug;

    // Build query with multiple fallback options
    const query = {
      $or: [
        { slug: slug },
        { slug: normalizedSlug },
        // Fallback: search by name and match normalized version
        { name: { $regex: slug, $options: "i" } },
      ],
    };

    let product = await Product.findOne(query)
      .populate({
        path: "category",
        select: "name description",
      })
      .lean();

    // If not found by slug/name, fetch all and search by normalized name
    if (!product) {
      const allProducts = await Product.find()
        .populate({
          path: "category",
          select: "name description",
        })
        .lean();

      for (const p of allProducts) {
        const productSlug =
          p.slug ||
          slugify(p.name, { lower: true, strict: true }) ||
          `${p._id}`;
        if (productSlug === normalizedSlug) {
          product = p;
          break;
        }
      }
    }

    if (!product) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }

    // Ensure slug is set in response
    if (!product.slug && product.name) {
      product.slug =
        slugify(product.name, { lower: true, strict: true }) ||
        `${product._id}`;
    }

    res.status(200).json({ success: true, data: product });
  } catch (error) {
    console.error("getSingleContent error:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
  createContent,
  getHomeData,
  getSingleContent,
  deletedContent,
  updateHomeData,
};
