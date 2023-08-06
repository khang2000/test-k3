const express = require("express");
const { getOneInventory } = require("../controllers/inventory.controllers");
const router = express.Router();

router.get("/:id", check, getOneInventory);

module.exports = router;
