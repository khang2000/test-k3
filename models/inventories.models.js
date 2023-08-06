const mongoose = require("mongoose");

const inventorySchema = new mongoose.Schema({
  id: String,
  sku: String,
  description: String,
  instock: String,
});

const inventoryModel = mongoose.model("inventories", inventorySchema);

module.exports.getAllInventory = () => {
  return inventoryModel.find();
};

module.exports.postInventoryDB = (data) => {
  return inventoryModel.create(data);
};
