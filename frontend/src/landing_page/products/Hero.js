import React from "react";

function Hero() {
  return (
    <div className="container text-center my-5 py-5">
      <h1 className="fw-bold display-5">Finovue Products</h1>

      <h3 className="text-muted mt-3 fs-4">
        Sleek, modern, and intuitive trading platforms
      </h3>

      <p className="text-muted mt-4 fs-5">
        Check out our{" "}
        <a
          href="?"
          className="text-decoration-none text-primary"
          style={{ fontWeight: 500 }}
        >
          investment offerings{" "}
          <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
        </a>
      </p>
    </div>
  );
}

export default Hero;
