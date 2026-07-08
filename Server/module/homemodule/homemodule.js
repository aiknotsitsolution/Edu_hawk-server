// // import mongoose from "mongoose";
// const mongoose = require("mongoose");
// const productSchema = new mongoose.Schema(
//   {
//     name: { type: String, required: true },
//     category: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "BlogCategory",
//       required: true,
//     },

//     author: {
//       type: String,
//     },

//     description: { type: String, required: true },
//     images: [{ type: String, required: true }],
//   },
//   { timestamps: true },
// );

// module.exports = mongoose.model("Product", productSchema);


// const mongoose = require("mongoose");

// const productSchema = new mongoose.Schema(
//   {
//     name: { type: String, required: true },
//     category: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "BlogCategory",
//       required: true,
//     },
//     author: {
//       type: String,
//     },
//     description: { type: String, required: true },
//     images: [{ type: String }],
//     videoUrl: { type: String, default: null },
//     videoPublicId: { type: String, default: null },
//   },
//   { timestamps: true }
// );

// module.exports = mongoose.model("Product", productSchema);


// models/productSchema.js (or homemodule)


const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    slug: { 
      type: String, 
      required: true, 
      unique: true,
      lowercase: true,
      trim: true 
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "BlogCategory",
      required: true,
    },
    author: { type: String },
    description: { type: String, required: true },
    images: [{ type: String }],
    videoUrl: { type: String, default: null },
    videoPublicId: { type: String, default: null },
  },
  { timestamps: true }
);

// Optional: Create index for faster lookup
productSchema.index({ slug: 1 });

module.exports = mongoose.model("Product", productSchema);