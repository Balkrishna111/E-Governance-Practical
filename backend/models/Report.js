const mongoose = require("mongoose");

const reportSchema = new mongoose.Schema({
  name: String,
  email: String,
  phoneNumber: Number,
  potholeLocation: String,
  nearestLandmark: String,
  length: Number,
  breadth: Number,
  images: [String],
});
module.exports = mongoose.model("Report", reportSchema);
