require("dotenv").config();
const mongoose = require("mongoose");
const PORT = process.env.PORT;
const cors = require("cors");
const express = require("express");
const connectDB = require("./config/dbConn");
const app = express();

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));
app.use("/", require("./routes/root"));

connectDB();
mongoose.connection.once("open", () => {
  console.log("DB Connected");
  app.listen(PORT, () => {
    console.log("Server Up and runnig at " + PORT);
  });
});
