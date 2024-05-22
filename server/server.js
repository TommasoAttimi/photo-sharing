const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const photoRoutes = require("./routes/photoRoutes");
const fs = require("fs");
const path = require("path");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));
app.use("/api", photoRoutes);

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Ensure the 'uploads' directory exists
const uploadDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

mongoose.connect(process.env.MONGO_URI);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
