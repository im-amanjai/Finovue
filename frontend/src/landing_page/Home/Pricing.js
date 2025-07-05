import React from "react";

function Pricing() {
  return (
    <div className="container py-5">
      <div className="row align-items-center">

        {/* Leftt Section */}
        <div className="col-lg-6 col-12 mb-4">
          <h1 className="mb-3 fs-2">Unbeatable pricing</h1>
          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="?" style={{ textDecoration: "none" }}>
            See Pricing{" "}
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>

        {/* Rightt Section */}
        <div className="col-lg-6 col-12">
          <div className="row text-center">
            <div className="col-12 col-md-6 p-3 border mb-3 mb-md-0">
              <h1 className="mb-2">₹0</h1>
              <p className="mb-0">
                Free equity delivery and <br />
                direct mutual funds
              </p>
            </div>
            <div className="col-12 col-md-6 p-3 border">
              <h1 className="mb-2">₹20</h1>
              <p className="mb-0">Intraday and F&O</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Pricing;
