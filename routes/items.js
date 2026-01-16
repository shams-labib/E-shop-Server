const express = require("express");
const router = express.Router();
const items = require("../data/items.json");

// GET all items
router.get("/", (req, res) => {
  res.json(items);
});

// GET single item by id
router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const item = items.find((i) => i.id === id);

  if (!item) {
    return res.status(404).json({ message: "Item not found" });
  }

  res.json(item);
});

module.exports = router;
