import React from "react";
import { Link } from "react-router-dom";

function SideNews({ post, wordcount }) {
  return (
    <div className="my-3">
      <div className="row">
        <div className="col-md-6">
          <img src={post.image} className="card-img-top" alt="..." />
        </div>
        <div className="col-md-6">
          <h3 className=" titlefontsize">{post.title}</h3>
          <p className="card-text parafontsize">
            <Link to={`/post-detail/${post.id}`}>
              {post.content.substring(0, wordcount)}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SideNews;
