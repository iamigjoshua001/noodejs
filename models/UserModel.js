const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    username: String,
    password: String,
    email: String,
    full_name: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
