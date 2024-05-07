const express = require("express");
const router = express.Router();
const Data = require("../models/Data.js");

let addCount = 0;
let updateCount = 0;

// Endpoint to add data
router.post("/add", async (req, res) => {
  try {
    const newData = new Data(req.body);
    await newData.save();
    addCount++;
    res.status(201).send({ message: "Data added successfully" });
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});

// Endpoint to get count data
router.get("/count", (req, res) => {
  res.send({ addCount, updateCount });
});

module.exports = router;
