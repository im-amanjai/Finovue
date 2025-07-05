import React from "react";

function RightSection({ imageURL, productName, productDesription, learnMore }) {
  return (
    <div className="container mt-5">
      <div className="row align-items-center flex-column-reverse flex-md-row">
        {/* Text Section */}
        <div className="col-md-6 p-4 text-center text-md-start">
          <h1 className="fw-bold">{productName}</h1>
          <p className="text-muted">{productDesription}</p>
          <div>
            <a
              href={learnMore}
              className="text-decoration-none text-primary"
            >
              Learn More <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="col-md-6 mb-4 mb-md-0 text-center">
          <img
            src={imageURL}
            alt={productName}
            className="img-fluid"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
