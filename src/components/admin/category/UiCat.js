import React from "react";
import { Link } from "react-router-dom";

const UiCat = ({ cat }) => {
  return (
    <div className="col-md-4">
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-md-6">
              <img src={cat.image} width="100%" />
            </div>
            <div className="col-md-6">
              <h5>{cat.name}</h5>
              <Link
                to={`/admin/cats/edit/${cat.id}`}
                className="btn btn-warning btn-sm me-1"
              >
                <i className="fa fa-edit" />
              </Link>
              <button className="btn btn-sm btn-danger">
                <i className="fa fa-trash" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UiCat;
