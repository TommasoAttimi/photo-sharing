const express = require("express");
const multer = require("multer");
const Photo = require("../models/Photo");

const router = express.Router();
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`),
});
const upload = multer({ storage });

router.post("/upload", upload.single("image"), async (req, res) => {
  try {
    const photo = new Photo({
      title: req.body.title,
      imageUrl: `/uploads/${req.file.filename}`,
    });
    await photo.save();
    res.status(201).json(photo);
  } catch (error) {
    res.status(500).json({ error: "Failed to upload photo" });
  }
});

router.get("/photos", async (req, res) => {
  try {
    const photos = await Photo.find();
    res.status(200).json(photos);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch photos" });
  }
});

module.exports = router;
