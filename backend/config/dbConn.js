require("dotenv").config();
const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_CONNECTION);
  } catch (err) {
    console.log("DB ERROR: " + err);
  }
};

module.exports = connectDB;
