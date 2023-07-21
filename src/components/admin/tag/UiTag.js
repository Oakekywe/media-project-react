import React from "react";
import { Link } from "react-router-dom";

const UiTag = ({ tag, apiDeleteTag }) => {
  return (
    <div className="col-md-4 my-2">
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-md-6">
              <img src={tag.image} width="100%" />
            </div>
            <div className="col-md-6">
              <h5>{tag.name}</h5>
              <Link
                to={`/admin/tags/edit/${tag.id}`}
                className="btn btn-warning btn-sm me-1"
              >
                <i className="fa fa-edit" />
              </Link>
              <button
                className="btn btn-sm btn-danger"
                onClick={() => apiDeleteTag(tag.id)}
              >
                <i className="fa fa-trash" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UiTag;
