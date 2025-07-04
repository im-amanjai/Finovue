const User = require("../model/User");
const bcrypt = require("bcryptjs");
const { createSecretToken } = require("../utils/SecretToken");

module.exports.Signup = async (req, res) => {
  try {
    const email = req.body.email?.trim();
    const username = req.body.username?.trim();
    const password = req.body.password?.trim();
    const createdAt = req.body.createdAt || new Date();

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      console.log("❌ Signup failed: User already exists:", email);
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({
      email,
      username,
      password: hashedPassword,
      createdAt,
    });

    console.log("✅ User registered:", email);

    return res.status(201).json({
      message: "User registered successfully. Please log in.",
      success: true,
    });
  } catch (err) {
    console.error("❌ Signup error:", err);
    return res.status(500).json({ message: "Server error" });
  }
};

module.exports.Login = async (req, res) => {
  try {
    const email = req.body.email?.trim();
    const password = req.body.password?.trim();

    if (!email || !password) {
      return res.status(400).json({ message: "Please enter all fields" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      console.log("❌ Login failed: user not found for", email);
      return res.status(401).json({ message: "User not found" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    console.log("🔐 Login attempt:", email, "✅ Valid:", isPasswordValid);

    if (!isPasswordValid) {
      console.log("❌ Login failed: invalid password for", email);
      return res.status(401).json({ message: "Incorrect email or password" });
    }

    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "None",
      secure: true,
      maxAge: 24 * 60 * 60 * 1000,
    });

    console.log("✅ Login successful:", email);

    return res.status(200).json({
      message: "User logged in successfully",
      success: true,
    });
  } catch (err) {
    console.error("❌ Login error:", err);
    return res.status(500).json({ message: "Server error" });
  }
};
