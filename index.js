const express = require("express");
const bodyparser = require("body-parser");
const userRoutes = require("./routes/userRoutes");
const mongoose = require("mongoose");
const routesAdmin = require("./routes/routesAdmin");

const app = express();

app.use(bodyparser.json());

mongoose.connect(
  "mongodb+srv://iamigjoshua:<joshuaosa098>@cluster0.midzwiu.mongodb.net/?retryWrites=true&w=majority",
  () => {
    console.log("data base login");
  }
);

app.get("/", (req, res) => {
  res.send("welcome to my server");
});

app.use("/admin", routesAdmin);
app.use("/user", userRoutes);

app.listen(8000, () => console.log("server is runing"));
