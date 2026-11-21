const mongoose = require("mongoose");

const newsCountrySchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true, unique: true },
    slug: { type: String, lowercase: true, trim: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("NewsCountry", newsCountrySchema);
