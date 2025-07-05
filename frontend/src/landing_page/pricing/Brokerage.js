import React from "react";

function Brokerage() {
  return (
    <div className="container">
      <div className="row px-3 px-md-5 py-5 mt-5 text-center border-top gy-4">
        {/* Left Sectionn */}
        <div className="col-12 col-md-8 text-md-start">
          <a href="?" className="text-decoration-none">
            <h3 className="fs-5 text-primary">Brokerage calculator</h3>
          </a>
          <ul
            className="text-muted ps-3"
            style={{ lineHeight: "1.9", fontSize: "14px" }}
          >
            <li>
              Call & Trade and RMS auto-squareoff: Additional charges of ₹50 +
              GST per order.
            </li>
            <li>Digital contract notes will be sent via email.</li>
            <li>
              Physical copies of contract notes, if required, shall be charged
              ₹20 per note. Courier charges apply.
            </li>
            <li>
              For NRI account (non-PIS): 0.5% or ₹100 per executed order for
              equity (whichever is lower).
            </li>
            <li>
              For NRI account (PIS): 0.5% or ₹200 per executed order for equity
              (whichever is lower).
            </li>
            <li>
              If the account is in debit balance, any order placed will be
              charged ₹40 per executed order instead of ₹20.
            </li>
          </ul>
        </div>

        {/* Right Sectionn */}
        <div className="col-12 col-md-4">
          <a href="?" className="text-decoration-none">
            <h3 className="fs-5 text-primary">List of charges</h3>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
