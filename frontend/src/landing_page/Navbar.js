import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg border-bottom"
      style={{ backgroundColor: "#FFF" }}
    >
      <div className="container p-2">
        {/* Logo */}
        <Link className="navbar-brand" to="/">
          <img
            src="media/images/logooo.jpg"
            alt="Logo"
            style={{ width: "120px", height: "auto" }}
          />
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item mx-3">
              <Link className="nav-link text-muted" to="/signup">
                Signup
              </Link>
            </li>
             <li className="nav-item mx-3">
                <Link className="nav-link text-muted" to="/login">
                  Login
                </Link>
              </li>
            <li className="nav-item mx-3">
              <Link className="nav-link text-muted" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item mx-3">
              <Link className="nav-link text-muted" to="/product">
                Product
              </Link>
            </li>
            <li className="nav-item mx-3">
              <Link className="nav-link text-muted" to="/pricing">
                Pricing
              </Link>
            </li>
            <li className="nav-item mx-3">
              <Link className="nav-link text-muted" to="/support">
                Support
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
