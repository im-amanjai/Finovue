import React from "react";

function Hero() {
  return (
    <div className="container">
      {/* Header Sectionn */}
      <div className="row p-4 p-md-5 mt-4 mt-md-5 border-bottom text-center">
        <h1 className="fw-bold">Pricing</h1>
        <h3 className="text-muted mt-3 fs-5">
          Free equity investments and flat ₹20 intraday and F&O trades
        </h3>
      </div>

      {/* Pricingg Cards */}
      <div className="row row-cols-1 row-cols-md-3 text-center py-5 g-4">
        {/* Equityy Delivery */}
        <div className="col">
          <div className="p-4 h-100">
            <img
              src="media/images/pricingEquity.svg"
              alt="Free Equity Delivery"
              className="mb-3 img-fluid"
              style={{ height: "80px" }}
            />
            <h2 className="fs-4 fw-semibold">Free equity delivery</h2>
            <p className="text-muted">
              All equity delivery investments (NSE, BSE), are absolutely free — ₹0 brokerage.
            </p>
          </div>
        </div>

        {/* Intraday and F&O */}
        <div className="col">
          <div className="p-4 h-100">
            <img
              src="media/images/intradayTrades.svg"
              alt="Intraday and F&O"
              className="mb-3 img-fluid"
              style={{ height: "80px" }}
            />
            <h2 className="fs-4 fw-semibold">Intraday and F&O trades</h2>
            <p className="text-muted">
              Flat ₹20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity.
            </p>
          </div>
        </div>

        {/* Mutual Funds */}
        <div className="col">
          <div className="p-4 h-100">
            <img
              src="media/images/pricingEquity.svg"
              alt="Free Direct MF"
              className="mb-3 img-fluid"
              style={{ height: "80px" }}
            />
            <h2 className="fs-4 fw-semibold">Free direct MF</h2>
            <p className="text-muted">
              All direct mutual fund investments are absolutely free — ₹0 commissions & DP charges.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
