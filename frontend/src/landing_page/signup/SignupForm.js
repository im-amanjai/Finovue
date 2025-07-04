import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { TextField, Button, Paper } from "@mui/material";
import Hero from "./Hero";
import "./SignupForm.css";

const SignupForm = () => {
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });

  const { email, password, username } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({
      ...prev,
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

    try {
      const { data } = await axios.post(
        "https://finovue.onrender.com/auth/signup",
        inputValue,
        { withCredentials: true }
      );

      const { success, message } = data;

      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          window.location.href = "https://finovuee.netlify.app/login"; //Redirect to login page
        }, 1500);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.error("Signup failed:", error);
      handleError("Signup failed. Try again.");
    }

    setInputValue({
      email: "",
      password: "",
      username: "",
    });
  };

  return (
    <>
      <Hero />
      <div className="container">
        <div className="row m-5">
          <div className="col-8">
            <img
              src="/media/images/account_open.svg"
              alt="Account Open"
              style={{ width: "600px" }}
            />
          </div>
          <div className="col-4">
            <Paper className="form-card">
              <h2 className="form-title">Signup</h2>
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
                  type="text"
                  label="Username"
                  name="username"
                  value={username}
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
                  Signup
                </Button>

                <span style={{ marginTop: "1rem", display: "block" }}>
                  Already have an account? <Link to="/login">Login</Link>
                </span>
              </form>
            </Paper>
            <ToastContainer />
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupForm;
