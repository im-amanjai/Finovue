import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDesription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container my-5">
      <div className="row align-items-center flex-column-reverse flex-md-row">
        {/* Text Section */}
        <div className="col-md-6 p-4">
          <h2 className="fw-bold">{productName}</h2>
          <p className="text-muted">{productDesription}</p>

          <div className="d-flex flex-wrap gap-4 mt-3">
            <a href={tryDemo} className="text-decoration-none text-primary">
              Try Demo <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
            <a href={learnMore} className="text-decoration-none text-primary">
              Learn More <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>

          <div className="d-flex flex-wrap mt-4 gap-4">
            <a href={googlePlay}>
              <img
                src="media/images/googlePlayBadge.svg"
                alt="Google Play"
                style={{ maxWidth: "150px", height: "auto" }}
              />
            </a>
            <a href={appStore}>
              <img
                src="media/images/appstoreBadge.svg"
                alt="App Store"
                style={{ maxWidth: "150px", height: "auto" }}
              />
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="col-md-6 text-center mb-4 mb-md-0">
          <img
            src={imageURL}
            alt="Product"
            className="img-fluid"
            style={{ maxHeight: "400px", objectFit: "contain" }}
          />
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
