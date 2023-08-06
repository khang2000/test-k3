const fs = require("fs");

module.exports.getOneInventory = (req, res) => {
  res.status(200).json(req.invent);
  fs.readFile("./servers/inventory.json", (err, data) => {
    if (err) throw err;
    const dataPar = JSON.parse(data);
    const invent = dataPar.find((item) => item.id == req.params.id);
    if (invent) res.status(200).json(invent);
    else res.status(400).json({ message: "invent not found" });
  });
};
