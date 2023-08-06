const express = require("express");
const { connectToDb, db } = require("./db");

const app = express();
app.use(express.json());

const inventoryRouter = require("./routes/inventory.routes");
app.use("/inventory", inventoryRouter);

app.listen(3000, () => {
  console.log("App is running at 3000");
  connectToDb();
});
