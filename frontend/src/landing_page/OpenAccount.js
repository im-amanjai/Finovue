import React from "react";
import { useNavigate } from "react-router-dom"; //Import useNavigate

function OpenAccount() {
  const navigate = useNavigate(); //Initialize navigate

  const handleSignupClick = () => {
    navigate("/signup"); //Redirect to signup route
  };

  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <h1 className="mt-5">Open a Finovue account</h1>
        <p>
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </p>
        <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "60%", maxWidth: "300px", margin: "0 auto" }}
          onClick={handleSignupClick} //Bind the click
        >
          Sign up Now
        </button>
      </div>
    </div>
  );
}

export default OpenAccount;
