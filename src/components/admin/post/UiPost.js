import React from "react";
import { Link } from "react-router-dom";

const UiPost = ({ post, apiDeletePost }) => {
  return (
    <div className="col-md-4 my-2">
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-md-5">
              <img src={post.image} width="100%" />
            </div>
            <div className="col-md-7">
              <h5>{post.title}</h5>
              <p>{post.content.substring(0,40)}</p>
              <Link
                to={`/admin/posts/edit/${post.id}`}
                className="btn btn-warning btn-sm me-1"
              >
                <i className="fa fa-edit" />
              </Link>
              <button
                className="btn btn-sm btn-danger"
                onClick={() => apiDeletePost(post.id)}
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

export default UiPost;
