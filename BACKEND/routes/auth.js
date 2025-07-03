const express = require("express");
const router = express.Router();
const { Signup, Login } = require("../controllers/AuthController");
const { userverification } = require("../middleware/auth");

router.post("/signup", Signup);
router.post("/login", Login);
router.get("/verify", userverification);

module.exports = router;