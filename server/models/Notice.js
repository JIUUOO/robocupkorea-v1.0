const mongoose = require("mongoose");

const noticeSchema = new mongoose.Schema({
  author: {
    type: String,
    enum: ["한국로보컵협회"],
    required: true,
  },
  date: { type: Date, required: true },
  title: { type: String, required: true },
  content: { type: String },
  files: [{ type: mongoose.Schema.Types.ObjectId, ref: "File" }],
  category: {
    type: String,
    enum: [
      "announcement-ko",
      "reference-ko",
      "announcement-en",
      "reference-en",
    ],
    required: true,
  },
});

const Notice = mongoose.model("Notice", noticeSchema);
module.exports = Notice;
