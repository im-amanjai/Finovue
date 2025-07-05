import React from "react";

function Footer() {
  return (
    <footer style={{ backgroundColor: "rgb(250, 250, 250)" }}>
      <div className="container border-top mt-5 py-5">
        {/* Top Section */}
        <div className="row text-center text-md-start">
          {/* Logo and Copyright */}
          <div className="col-md-3 mb-4">
            <img src="media/images/logooo.jpg" alt="Finovue Logo" style={{ width: "60%" }} />
            <p className="mt-3 text-muted small">
              &copy; 2010 - 2025, Not Finovue Broking Ltd. All rights reserved.
            </p>
          </div>

          {/* Company Links */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-semibold">Company</h6>
            <a href="?" className="d-block text-muted text-decoration-none small">About</a>
            <a href="?" className="d-block text-muted text-decoration-none small">Products</a>
            <a href="?" className="d-block text-muted text-decoration-none small">Pricing</a>
            <a href="?" className="d-block text-muted text-decoration-none small">Referral programme</a>
            <a href="?" className="d-block text-muted text-decoration-none small">Careers</a>
            <a href="?" className="d-block text-muted text-decoration-none small">Finovue.tech</a>
            <a href="?" className="d-block text-muted text-decoration-none small">Press & media</a>
            <a href="?" className="d-block text-muted text-decoration-none small">Finovue cares (CSR)</a>
          </div>

          {/* Support Links */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-semibold">Support</h6>
            <a href="?" className="d-block text-muted text-decoration-none small">Contact</a>
            <a href="?" className="d-block text-muted text-decoration-none small">Support portal</a>
            <a href="?" className="d-block text-muted text-decoration-none small">Z-Connect blog</a>
            <a href="?" className="d-block text-muted text-decoration-none small">List of charges</a>
            <a href="?" className="d-block text-muted text-decoration-none small">Downloads & resources</a>
          </div>

          {/* Account Links */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-semibold">Account</h6>
            <a href="?" className="d-block text-muted text-decoration-none small">Open an account</a>
            <a href="?" className="d-block text-muted text-decoration-none small">Fund transfer</a>
            <a href="?" className="d-block text-muted text-decoration-none small">60 day challenge</a>
          </div>
        </div>

        {/* Legal Disclaimer Section */}
        <div className="mt-4 text-muted small" style={{ lineHeight: "1.6" }}>
          <p>
            Finovue Broking Ltd.: Member of NSE​ &​ BSE – SEBI Registration no.: INZ000031633.
            CDSL: Depository services through Finovue Securities Pvt. Ltd. – SEBI Registration no.: IN-DP-100-2015.
            Commodity Trading through Finovue Commodities Pvt. Ltd. MCX: 46025 – SEBI Registration no.: INZ000038238.
            Registered Address: Finovue Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School,
            J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India.
            For any complaints pertaining to securities broking please write to complaints@finovue.com,
            for DP related to dp@finovue.com.
            Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF.
          </p>

          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES portal.
            Mandatory details: Name, PAN, Address, Mobile Number, E-mail ID.
            Benefits: Effective communication, speedy redressal of grievances.
          </p>

          <p>
            Investments in securities market are subject to market risks; read all the related documents carefully before investing.
          </p>

          <p>
            "Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers.
            Receive information of your transactions directly from Exchange on your mobile/email at the end of the day.
            Issued in the interest of investors.
          </p>

          <p>
            KYC is a one-time exercise while dealing in securities markets – once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary."
          </p>

          <p>
            Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque.
            Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment.
            In case of non-allotment the funds will remain in your bank account.
          </p>

          <p>
            As a business, we don't give stock tips, and have not authorized anyone to trade on behalf of others.
            If you find anyone claiming to be part of Finovue and offering such services, please create a ticket here.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
