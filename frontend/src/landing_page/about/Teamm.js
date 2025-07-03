import React from "react";

function Teamm() {
  return (
    <div className="container">
      <div className="row p-3 mt-5 border-top">
        <h1 className="text-center ">People</h1>
      </div>

      <div
        className="row p-3 text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-3 text-center">
          <img
            src="media/images/amannn.png"
            style={{ borderRadius: "100%", width: "50%" }} alt=""
          />
          <h4 className="mt-5">Aman Jaiswal</h4>
          <h6>Founder, CEO</h6>
        </div>
        <div className="col-6 p-3">
          <p>
            Aman bootstrapped and founded Finovue in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Finovue has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing VolleyBall is his zen.</p>
          <p>
            Connect on <a href="https://linkedin.com/in/aman-jaiswal-504ab3258" style={{textDecoration:"none"}}>LinkedIn</a> / <a href="?"style={{textDecoration:"none"}}>TradingQnA</a> /{" "}
            <a href="?"style={{textDecoration:"none"}}>Twitter</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Teamm;