const Report = require("../models/Report");
const uuid = require("uuid");

const getReport = async (req, res) => {
  const reports = await Report.find();
  if (reports.length) {
    try {
      res.status(200).json(reports);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  } else {
    res.status(200).json({ message: "No Reports Found" });
  }
};

const createReport = async (req, res) => {
  const {
    name,
    email,
    phoneNumber,
    potholeLocation,
    nearestLandmark,
    length,
    breadth,
  } = req.body;

  const imagePaths = req.files.map((file) => file.path);
  console.log("Uploaded image paths:", imagePaths);

  if (
    name &&
    email &&
    phoneNumber &&
    potholeLocation &&
    nearestLandmark &&
    length &&
    breadth
  ) {
    try {
      const report = await Report.create({
        name,
        email,
        phoneNumber,
        potholeLocation,
        nearestLandmark,
        length,
        breadth,
        images: imagePaths,
      });

      return res.status(200).json({
        message: "Report filed successfully.",
        data: report,
      });
    } catch (err) {
      console.error("Save error:", err);
      return res.status(400).json({ message: err.message });
    }
  } else {
    return res.status(400).json({ message: "Missing required fields." });
  }
};

const deleteReport = async (req, res) => {
  console.log(req.params);
  const { id } = req.params;
  if (id) {
    try {
      await Report.findByIdAndDelete(id);
      res.status(200).json({ message: "Report deleted successfully" });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  } else {
    res.status(400).json({ message: "Invalid request" });
  }
};

module.exports = { createReport, getReport, deleteReport };
