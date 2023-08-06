const jwt = require("jsonwebtoken");

module.exports.login = (req, res) => {
  const { username, password } = req.body;

  const token = jwt.sign(
    { username: username, password: password },
    "testtoken"
  );
  res.json({ username: username, token: token });
};
