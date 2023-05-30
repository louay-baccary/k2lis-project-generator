const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: String,
  firstName: String,
  lastName: String,
  email: String,
  password: {
    type: String,
    min: 6,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = { User };
