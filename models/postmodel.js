const mongoose = require("mongoose");

postSchema = mongoose.Schema(
  {
    username: String,
    like: { type: Number, default: 0 },
    content: String,
    title: String,
    comment: Array,
    share: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("post", postSchema);
