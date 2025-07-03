import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      {/* Top Nav Line */}
      <div className="py-4 px-5 d-flex justify-content-between align-items-center" id="supportWrapper">
        <h4 className="fw-bold fs-4 m-0">Support Portal</h4>
        <a href="?" className="border-bottom">Track tickets</a>
      </div>

      {/* Main Content */}
      <div className="row px-5 py-4 text-white">
        {/* Left Box */}
        <div className="col-md-8">
          <h2 className="fs-3 fw-semibold mb-4">
            Search for an answer or browse help topics to create a ticket
          </h2>

          <div className="position-relative mb-4">
            <input
              placeholder="Eg: how do I activate F&O, why is my order getting rejected ..."
              className="searchInput"
            />
            <i
              className="fa fa-search position-absolute"
              style={{
                top: "50%",
                right: "20px",
                transform: "translateY(-50%)",
                color: "gray"
              }}
            ></i>
          </div>

          <div className="d-flex flex-wrap gap-4 fs-6">
            <a href="?" className="border-bottom">Track account opening</a>
            <a href="?" className="border-bottom">Track segment activation</a>
            <a href="?" className="border-bottom">Intraday margins</a>
            <a href="?" className="border-bottom">Kite user manual</a>
          </div>
        </div>

        {/* Right Box */}
        <div className="col-md-4 mt-5 mt-md-0">
          <h4 className="fw-semibold mb-3">Featured</h4>
          <ol className="ps-3">
            <li>
              <a href="?" className="text-white text-decoration-underline">
                Exclusion of F&O contracts on 8 securities from August 29, 2025
              </a>
            </li>
            <li className="mt-3">
              <a href="?" className="text-white text-decoration-underline">
                Revision in expiry day of Index and Stock derivatives contracts
              </a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
