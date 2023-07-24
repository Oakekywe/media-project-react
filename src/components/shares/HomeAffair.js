import React from "react";

function HomeAffair({ post }) {
  return (
    <div className="col-md-4 mb-3">
      <div className="card">
        <img src={post.image} className="card-img-top" alt="p1" />
        <div className="card-body">
          <h5 className="card-title">{post.title.substring(0,30)}</h5>
          <p className="card-text">
            {post.content.substring(0,50)}
          </p>
          <a href="#" className="btn btn-info btn-sm float-end">
            <i className="fa fa-eye text-white" />
            <strong className="text-white px-1">Details...</strong>
          </a>
        </div>
      </div>
    </div>
  );
}

export default HomeAffair;
