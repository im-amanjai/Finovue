const User = require("../model/User");
const bcrypt = require("bcryptjs");
const { createSecretToken } = require("../utils/SecretToken");

module.exports.Signup = async (req, res) => {
  try {
    const email = req.body.email.trim().toLowerCase();
    const password = req.body.password.trim();
    const username = req.body.username.trim();
    const createdAt = new Date();

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({
      email,
      username,
      password: hashedPassword,
      createdAt,
    });

    return res.status(201).json({
      message: "User registered successfully. Please log in.",
      success: true,
    });
  } catch (err) {
    console.error("Signup error:", err);
    return res.status(500).json({ message: "Server error" });
  }
};

module.exports.Login = async (req, res) => {
  try {
    const email = req.body.email.trim().toLowerCase();
    const password = req.body.password.trim();

    console.log("Incoming login:", { email, password });

    if (!email || !password) {
      return res.status(400).json({ message: "Please enter all fields" });
    }

    const user = await User.findOne({ email });

    if (!user) {
      console.log("User not found for:", email);
      return res.status(401).json({ message: "User not found" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    console.log("Password match:", isPasswordValid);

    if (!isPasswordValid) {
      console.log("Invalid password for:", email);
      return res.status(401).json({ message: "Incorrect email or password" });
    }

    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "None",
      secure: true,
      maxAge: 24 * 60 * 60 * 1000,
    });

    console.log("User logged in:", email);
    return res.status(200).json({
      message: "User logged in successfully",
      success: true,
    });
  } catch (err) {
    console.error("Login error:", err);
    return res.status(500).json({ message: "Server error" });
  }
};
