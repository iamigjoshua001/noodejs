const express = require("express");
const bodyparser = require("body-parser");
const userRoutes = require("./routes/userRoutes");
const mongoose = require("mongoose");
const routesAdmin = require("./routes/routesAdmin");

const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(bodyparser.json());

mongoose.connect(process.env.MONGODB_URL, () => {
  console.log("data base login");
});

app.get("/", (req, res) => {
  res.send("welcome to my server");
});

app.use("/admin", routesAdmin);
app.use("/user", userRoutes);

app.listen(process.env.PORT, () => console.log("server is runing"));
