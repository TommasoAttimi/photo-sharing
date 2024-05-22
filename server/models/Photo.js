const mongoose = require("mongoose");

const photoSchema = new mongoose.Schema(
  {
    title: String,
    imageUrl: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Photo", photoSchema);
