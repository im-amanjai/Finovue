import React from "react";

function Teamm() {
  return (
    <div className="container">
      {/* Section Title */}
      <div className="row p-3 mt-5 border-top">
        <h1 className="text-center">People</h1>
      </div>

      {/* Team Member Section */}
      <div
        className="row p-3 text-muted d-flex align-items-center"
        style={{ lineHeight: "1.8", fontSize: "1.1em" }}
      >
        {/* Image */}
        <div className="col-12 col-md-6 text-center mb-4 mb-md-0">
          <img
            src="media/images/amannn.png"
            alt="Aman Jaiswal"
            className="img-fluid rounded-circle"
            style={{ maxWidth: "200px", height: "auto" }}
          />
          <h4 className="mt-4">Aman Jaiswal</h4>
          <h6>Founder, CEO</h6>
        </div>

        {/* Bio */}
        <div className="col-12 col-md-6 px-4">
          <p>
            Aman bootstrapped and founded Finovue in 2010 to overcome the
            hurdles he faced during his decade-long stint as a trader. Today,
            Finovue has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing VolleyBall is his zen.</p>
          <p>
            Connect on{" "}
            <a
              href="https://linkedin.com/in/aman-jaiswal-504ab3258"
              style={{ textDecoration: "none" }}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>{" "}
            /{" "}
            <a href="?" style={{ textDecoration: "none" }}>
              TradingQnA
            </a>{" "}
            /{" "}
            <a href="?" style={{ textDecoration: "none" }}>
              Twitter
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Teamm;
