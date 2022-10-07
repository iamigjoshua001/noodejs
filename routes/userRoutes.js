const express = require("express");
const User = require("../models/UserModel");
// const { checkUser, checkEmail } = require("../middlewares/userMiddleware");

const route = express.Router();

// Create
route.post("/", async (req, res) => {
  const { username, password, email, full_name } = req.body;

  if (!username || !password || !email || !full_name) {
    return res.status(400).send("Please fill all inputs");
  } else {
    const find_user = await User.findOne({ email: email });

    if (find_user) {
      return res.status(400).send("Email already exists");
    }

    const new_user = new User({
      username: username,
      password: password,
      email: email,
      full_name: full_name,
    });

    await new_user.save();

    res.status(200).send("User created successfully!");
  }
});

// Read or Retrieve
route.get("/:email", async (req, res) => {
  const { email } = req.params;
  const one_users = await User.findOne({
    email: email,
  });

  res.status(200).send(one_users);
});

route.get("/", async (req, res) => {
  const all_users = await User.find();

  res.status(200).send(all_users);
});

// Update
route.patch("/:email", async (req, res) => {
  const { username, password } = req.body;
  const { email } = req.params;

  await User.findOneAndUpdate(
    { email: email },
    { username: username, password: password }
  );

  res.status(200).send("User updated successfully");
});

// Delete
route.delete("/:email", async (req, res) => {
  const { email } = req.params;

  await User.findOneAndDelete({ email: email });

  res.status(200).send("User deleted successfully");
});

module.exports = route;
