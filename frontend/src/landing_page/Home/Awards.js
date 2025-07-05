import React from 'react';

function Awards() {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        {/* Image Column */}
        <div className="col-md-6 p-4 text-center">
          <img
            src="media/images/largestBroker.svg"
            alt="broker"
            className="img-fluid"
            style={{ maxHeight: '300px' }}
          />
        </div>

        {/* Texttt Content Column */}
        <div className="col-md-6 p-4">
          <h1 className="fw-bold">Largest stock broker in India</h1>
          <p className="mb-4">
            2+ million Finovue clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:
          </p>

          {/* Lists in 2 columns */}
          <div className="row">
            <div className="col-6">
              <ul className="ps-3">
                <li className="mb-2">Futures and Options</li>
                <li className="mb-2">Commodity derivatives</li>
                <li className="mb-2">Currency derivatives</li>
              </ul>
            </div>
            <div className="col-6">
              <ul className="ps-3">
                <li className="mb-2">Stocks & IPOs</li>
                <li className="mb-2">Direct mutual funds</li>
                <li className="mb-2">Bonds and Government securities</li>
              </ul>
            </div>
          </div>

          {/* Press Logos */}
          <div className="mt-4">
            <img
              src="media/images/pressLogos.png"
              alt="press logos"
              className="img-fluid"
              style={{ maxWidth: '100%' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Awards;
