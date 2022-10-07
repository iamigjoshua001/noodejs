const express = require("express");

const route = express.Router();
const post = require("../models/postmodel");

route.post("/", async (req, res) => {
  const { username, title, content } = req.body;
  if (!username || !title || !content) {
    return res.status(400).send("fill all input");
  } else {
    const new_post = new post({
      username: username,
      title: title,
      content: content,
    });
    await new_post.save();

    res.status(200).send("post created successfully");
  }
});

route.get("/:username", async (req, res) => {
  const { username } = req.params;
  const one_post = await post.findOne({
    username: username,
  });
  res.status(200).send(one_post);
});

route.get("/", async (req, res) => {
  const all_post = await post.find();

  res.status(200).send(all_post);
});

route.patch("/:username", async (req, res) => {
  const { content, title } = req.body;
  const { username } = req.params;

  await post.findOneAndUpdate(
    { username: username },
    { title: title, content: content }
  );

  res.status(200).send("post updated successfully");
});

route.delete("/:username", async (req, res) => {
  const { username } = req.params;

  await post.findOneAndDelete({ username: username });

  res.status(200).send("post deleted successfully");
});

module.exports = route;
