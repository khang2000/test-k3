const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: String,
  pass: String,
});

const userModel = mongoose.model("users", userSchema);

module.exports.getAllUser = () => {
  return userModel.find();
};

module.exports.postUserDB = (data) => {
  return userModel.create(data);
};
