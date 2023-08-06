const bcrypt = require("bcrypt");
const { postUserDB } = require("../models/users.models");

module.exports.postUserDB = async (req, res) => {
  const { username, password } = req.body;
  try {
    const salt = await bcrypt.genSalt(10);
    const password = await bcrypt.hash(password, salt);

    const response = await postUserDB({ username, password });
    if (response) res.json({ message: "Creat successfully" });
  } catch (error) {
    console.log(error);
    res.send({ message: error });
  }
};
