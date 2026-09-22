const imagekit = require("../../utils/imagekit.js");
const Product = require("../../module/homemodule/homemodule");
const Category = require("../../module/BlogModule/caetgorymodule.js");
const slugify = require("slugify"); // ← Install: npm install slugify

// Store images inserted inside the rich-text description as hosted URLs.
const uploadDescriptionImages = async (description) => {
  if (!description || typeof description !== "string") return description;

  const imagePattern = /src=(['"])(data:image\/[^;]+;base64,[^'"]+)\1/g;
  const matches = [...description.matchAll(imagePattern)];
  let updatedDescription = description;

  for (const [index, match] of matches.entries()) {
    const dataUrl = match[2];
    const uploadResponse = await imagekit.upload({
      file: dataUrl,
      fileName: `description-${Date.now()}-${index}.png`,
      folder: "/productDescriptions",
      useUniqueFileName: true,
    });

    updatedDescription = updatedDescription.replace(
      dataUrl,
      uploadResponse.url,
    );
  }

  return updatedDescription;
};

// ============================
// UPLOAD DESCRIPTION IMAGE (for CKEditor)
// ============================
const uploadDescriptionImage = async (req, res) => {
  try {
    if (!req.files?.image) {
      return res
        .status(400)
        .json({ success: false, message: "No image provided" });
    }

    const file = req.files.image;

    const uploadResponse = await imagekit.upload({
      file: file.data,
      fileName: `desc-${Date.now()}-${file.name}`,
      folder: "/productDescriptions",
      useUniqueFileName: true,
    });

    return res.status(200).json({
      success: true,
      url: uploadResponse.url,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: error.message });
  }
};

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
    const savedDescription = await uploadDescriptionImages(description);

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
      description: savedDescription,
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

const normalizeProducts = (products) =>
  products.map((product) => {
    if (!product.slug && product.name) {
      product.slug =
        slugify(product.name, { lower: true, strict: true }) ||
        `item-${product._id}`;
    }
    return product;
  });

// Fast first request for the newest content.
const getLatestProducts = async (req, res) => {
  try {
    const limit = Math.min(Math.max(Number(req.query.limit) || 10, 1), 50);
    const products = await Product.find()
      .populate("category")
      .sort({ createdAt: -1, _id: -1 })
      .limit(limit)
      .lean();

    return res.json({ success: true, data: normalizeProducts(products) });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Failed to fetch latest products" });
  }
};

// Server-side pagination for the rest of the catalogue.
const getPaginatedProducts = async (req, res) => {
  try {
    const page = Math.max(Number(req.query.page) || 1, 1);
    const limit = Math.min(Math.max(Number(req.query.limit) || 10, 1), 50);
    const search = String(req.query.search || "").trim();
    const category = String(req.query.category || "").trim();
    const filter = {};

    if (search) {
      filter.$or = [
        { name: { $regex: search, $options: "i" } },
        { author: { $regex: search, $options: "i" } },
      ];
    }

    if (category && category !== "All") {
      const categoryDocument = await Category.findOne({
        name: { $regex: `^${category}$`, $options: "i" },
      })
        .select("_id")
        .lean();

      if (!categoryDocument) {
        return res.json({
          success: true,
          data: [],
          pagination: { page, limit, total: 0, totalPages: 1 },
        });
      }

      filter.category = categoryDocument._id;
    }

    const [products, total] = await Promise.all([
      Product.find(filter)
        .populate("category")
        .sort({ createdAt: -1, _id: -1 })
        .skip((page - 1) * limit)
        .limit(limit)
        .lean(),
      Product.countDocuments(filter),
    ]);

    return res.json({
      success: true,
      data: normalizeProducts(products),
      pagination: { page, limit, total, totalPages: Math.ceil(total / limit) },
    });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Failed to fetch products" });
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
      updateFields.description = await uploadDescriptionImages(
        description.trim(),
      );
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
  getLatestProducts,
  getPaginatedProducts,
  getSingleContent,
  deletedContent,
  updateHomeData,
  uploadDescriptionImage,
};
