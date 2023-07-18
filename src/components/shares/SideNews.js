import React from "react";

function SideNews({ image }) {
  return (
    <div className="my-3">
      <div className="row">
        <div className="col-md-6">
          <img src={image} className="card-img-top" alt="..." />
        </div>
        <div className="col-md-6">
          <p className="card-text">
            Some quick example text to build on the card title and make up the
          </p>
        </div>
      </div>
    </div>
  );
}

export default SideNews;
