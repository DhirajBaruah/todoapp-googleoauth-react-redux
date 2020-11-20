const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const usersSchema = new mongoose.Schema({
  username: String,
  googleId: String,
  createdOn: Date,
});

mongoose.model("users", usersSchema);
