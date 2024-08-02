const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema({
  name: { type: String, required: true },
  data: { type: Buffer, required: true },
  type: { type: String, required: true },
  size: { type: Number, required: true },
});

const File = mongoose.model("File", fileSchema);
module.exports = File;