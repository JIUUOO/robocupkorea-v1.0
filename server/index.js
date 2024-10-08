const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
const noticeBoardRouter = require("./routes/noticeBoardRouter");

dotenv.config();

const app = express();
const PORT = 3000;
const URI =
  "mongodb+srv://nninjiuuoo:1Q2w3e4r5!@bulletinboard.yhejnoi.mongodb.net/NoticeBoard?retryWrites=true&w=majority";

app.use(express.static(path.join(__dirname, "../client/build")));
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose
  .connect(URI)
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.log("MongoDB not connected");
    console.log(err);
  });

app.use("/api/NoticeBoard", noticeBoardRouter);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
