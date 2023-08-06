const mongoose = require("mongoose");

const oderSchema = new mongoose.Schema({
  id: String,
  item: String,
  price: String,
  quantity: String,
});

const oderModel = mongoose.model("oders", oderSchema);

module.exports.getAllOder = () => {
  return oderModel.find();
};

module.exports.postOderDB = (data) => {
  return oderModel.create(data);
};
