const User = require("../model/User");
require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports.userverification = async (req, res) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({ status: false, message: "No token provided" });
    }

    jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
      if (err) {
        return res.status(401).json({ status: false, message: "Invalid token" });
      }

      const user = await User.findById(decoded.id);
      if (!user) {
        return res.status(404).json({ status: false, message: "User not found" });
      }

      req.user = { username: user.username };
      return res.status(200).json({ status: true, user: req.user.username });
    });
  } catch (error) {
    console.error("Token verification error:", error);
    return res.status(500).json({ status: false, message: "Server error during verification" });
  }
};
