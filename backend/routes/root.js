const express = require("express");
const router = express.Router();
const createUser = require("../controllers/userController");
const handleAuth = require("../controllers/authController");
const reportController = require("../controllers/reportController");
const upload = require("../middleware/upload");

router.post("/createUser", createUser.createUser);

router.post("/auth", handleAuth.handleAuth);
router.get("/report", reportController.getReport);
router.post(
  "/report",
  upload.array("images", 3),
  reportController.createReport
);
router.delete("/report/:id", reportController.deleteReport);
module.exports = router;
