const mongoose = require("mongoose");

const newsSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    category: {
      type: String,
      required: true,
      default: "Admissions",
    },
    country: {
      type: String,
      default: "Global",
    },
    badge: {
      type: String,
      default: "Latest Update",
    },
    badgeColor: {
      type: String,
      default: "bg-blue-500",
    },
    readTime: {
      type: String,
      default: "3 min read",
    },
    author: {
      type: String,
      default: "Poonam Tiwari",
      trim: true,
    },
    source: {
      type: String,
      default: "Poonam Tiwari",
    },
    officialSource: {
      type: String,
      default: "",
    },
    image: {
      type: String,
      default: "",
    },
    summary: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    keyHighlights: [
      {
        type: String,
      },
    ],
    status: {
      type: String,
      enum: ["published", "draft"],
      default: "published",
    },
    publishedAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

newsSchema.index({ slug: 1 });
newsSchema.index({ createdAt: -1 });
newsSchema.index({ category: 1, createdAt: -1 });
newsSchema.index({ title: "text", summary: "text" });

module.exports = mongoose.model("News", newsSchema);
