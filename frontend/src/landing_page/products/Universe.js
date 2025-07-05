import React from "react";
import { useNavigate } from "react-router-dom"; //Import useNavigate

function Universe() {
  const navigate = useNavigate(); //Initialize navigate

  const handleSignupClick = () => {
    navigate("/signup"); //Navigate to the signup route
  };

  return (
    <div className="container mt-5">
      <div className="row text-center justify-content-center">
        <h1 className="fw-semibold mb-3">The Finovue Universe</h1>
        <p className="text-muted mb-5 fs-5">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        {/* First Row */}
        <div className="col-md-4 p-4 d-flex flex-column align-items-center">
          <img
            src="media/images/zerodhaFundhouse.png"
            alt=""
            className="mb-3"
            style={{ height: "50px" }}
          />
          <p className="text-muted fs-6 w-75">
            Our asset management venture that is creating simple and transparent index
            funds to help you save for your goals.
          </p>
        </div>

        <div className="col-md-4 p-4 d-flex flex-column align-items-center">
          <img
            src="media/images/sensibullLogo.svg"
            alt=""
            className="mb-3"
            style={{ height: "50px" }}
          />
          <p className="text-muted fs-6 w-75">
            Options trading platform that lets you create strategies, analyze positions, and examine
            data points like open interest, FII/DII, and more.
          </p>
        </div>

        <div className="col-md-4 p-4 d-flex flex-column align-items-center">
          <img
            src="media/images/tijori.svg"
            alt=""
            className="mb-3"
            style={{ height: "50px" }}
          />
          <p className="text-muted fs-6 w-75">
            Investment research platform that offers detailed insights on stocks,
            sectors, supply chains, and more.
          </p>
        </div>

        {/* Second Row */}
        <div className="col-md-4 p-4 d-flex flex-column align-items-center">
          <img
            src="media/images/streakLogo.png"
            alt=""
            className="mb-3"
            style={{ height: "50px" }}
          />
          <p className="text-muted fs-6 w-75">
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>

        <div className="col-md-4 p-4 d-flex flex-column align-items-center">
          <img
            src="media/images/smallcaseLogo.png"
            alt=""
            className="mb-3"
            style={{ height: "50px" }}
          />
          <p className="text-muted fs-6 w-75">
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>

        <div className="col-md-4 p-4 d-flex flex-column align-items-center">
          <img
            src="media/images/dittoLogo.png"
            alt=""
            className="mb-3"
            style={{ height: "50px" }}
          />
          <p className="text-muted fs-6 w-75">
            Personalized advice on life and health insurance. No spam
            and no mis-selling.
          </p>
        </div>

        {/* CTA Button */}
        <div className="d-flex justify-content-center mt-4">
          <button
            onClick={handleSignupClick} //Bind click event
            className="btn btn-primary fs-5 px-4 py-2"
            style={{ borderRadius: "6px" }}
          >
            Sign up for free
          </button>
        </div>
      </div>
    </div>
  );
}

export default Universe;
