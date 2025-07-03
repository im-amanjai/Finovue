const mongoose = require("mongoose");
const userSchema = require("../schemas/UserSchema");

const User = mongoose.model("User", userSchema);
module.exports = User;