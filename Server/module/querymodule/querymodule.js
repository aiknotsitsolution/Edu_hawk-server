const mongoose = require("mongoose");

const querySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      // required:true
    },
    country: {
      type: String,
    },
    interested: {
      type: String,
    },
    neetStatus: {
      type: String,
      trim: true,
    },
    message: {
      type: String,
      default: "No message provided.",
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("query", querySchema);
