import React from 'react';

function Stats() {
  return (
    <div className="container py-4">
      <div className="row align-items-center">

        {/* Leftt Column: Text Content */}
        <div className="col-lg-6 col-12 p-4">
          <h1 className="fs-2 mb-4">Trust with confidence</h1>

          <h2 className="fs-5">Customer-first always</h2>
          <p className="text-muted">
            That's why 1.6+ crore customers trust Finovue with ~ ₹6 lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.
          </p>

          <h2 className="fs-5 mt-4">No spam or gimmicks</h2>
          <p className="text-muted">
            No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.
          </p>

          <h2 className="fs-5 mt-4">The Finovue universe</h2>
          <p className="text-muted">
            Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.
          </p>

          <h2 className="fs-5 mt-4">Do better with money</h2>
          <p className="text-muted">
            With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.
          </p>
        </div>

        {/* Rightt Column: Image + Links */}
        <div className="col-lg-6 col-12 p-4 text-center">
          <img
            src="media/images/ecosystem.png"
            alt="eco"
            className="img-fluid mb-4"
            style={{ maxHeight: "400px", width: "100%" }}
          />
          <div className="d-flex flex-column flex-md-row justify-content-center gap-3">
            <a href="?" className="text-decoration-none">
              Explore our products <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
            <a href="?" className="text-decoration-none">
              Try Kite demo <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
