const User = require("../model/User");
require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports.userverification = async (req, res) => {
  const token = req.cookies.token;
  if (!token) {
    return res.json({ status: false });
  }

  jwt.verify(token, process.env.JWT_SECRET, async (err, data) => {
    if (err) {
      return res.json({ status: false });
    }

    const user = await User.findById(data.id);
    if (user) {
      req.user = { username: user.username };
      return res.json({ status: true, user: req.user.username });
    } else {
      return res.json({ status: false });
    }
  });
};
