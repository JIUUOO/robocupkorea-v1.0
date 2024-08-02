const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const URI = process.env.MONGODB_ATLAS_URI;

app.use(express.static(path.join(__dirname, "../client/build")));
app.use(cors());

mongoose
  .connect(URI)
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.log("MongoDB not connected");
    console.log(err);
  });

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
