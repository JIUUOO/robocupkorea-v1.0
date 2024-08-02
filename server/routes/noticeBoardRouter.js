const express = require("express");
const router = express.Router();
const Notice = require("../models/Notice");
const File = require("../models/File");

router.get("/", async (req, res) => {
  const notices = await Notice.find({});
  res.json(notices);
});

router.get("/meta", async (req, res) => {
  const notices = await Notice.find({}, "author date title");
  res.json(notices);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const notice = await Notice.findById(id);
  res.json(notice);
});

router.get("/file/:id", async (req, res) => {
  const { id } = req.params;
  const file = await File.findById(id);
  res.json(file);
});

router.get("/file/meta/:id", async (req, res) => {
  const { id } = req.params;
  const file = await File.findById(id, "name type size");
  res.json(file);
});

router.get("/file/:id/:name", async (req, res) => {
  // both id and name must match
  const { id, name } = req.params;
  const file = await File.findById(id);

  if (file.name === name) {
    res.send(file.data);
  }
});

module.exports = router;
