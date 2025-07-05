import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { TextField, Button, Paper } from "@mui/material";
import Hero from "./Hero";

const Login = () => {
  const [formdata, setFormdata] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formdata;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormdata((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });

  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-right",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const trimmedData = {
      email: email.trim(),
      password: password.trim(),
    };

    try {
      const res = await axios.post(
        "https://finovue.onrender.com/auth/login",
        trimmedData,
        { withCredentials: true }
      );

      const { success, message } = res.data;

      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          window.location.href = "https://finovue-dashboard.vercel.app/dashboard";
        }, 2000);
      } else {
        handleError(message || "Login failed.");
      }
    } catch (err) {
      console.error("Login error:", err);
      handleError("Login failed. Check your credentials.");
    }

    setFormdata({ email: "", password: "" });
  };

  return (
    <>
      <Hero />
      <div className="container py-4">
        <div className="row align-items-center justify-content-center">
          <div className="col-md-6 col-12">
            <Paper elevation={3} className="p-4">
              <h2 className="form-title text-center mb-3">Login</h2>
              <form onSubmit={handleSubmit}>
                <TextField
                  type="email"
                  label="Email"
                  name="email"
                  value={email}
                  onChange={handleOnChange}
                  fullWidth
                  margin="normal"
                  required
                />
                <TextField
                  type="password"
                  label="Password"
                  name="password"
                  value={password}
                  onChange={handleOnChange}
                  fullWidth
                  margin="normal"
                  required
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  style={{ marginTop: "1rem" }}
                >
                  Login
                </Button>
                <span style={{ marginTop: "1rem", display: "block", textAlign: "center" }}>
                  Don't have an account? <Link to="/signup">Sign Up</Link>
                </span>
              </form>
            </Paper>
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default Login;
