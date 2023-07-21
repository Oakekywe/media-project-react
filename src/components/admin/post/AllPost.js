import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API_URL from "../../shares/Api";
import UiPost from "./UiPost";

const AllPost = () => {
  const [posts, setPosts] = useState([]);

  const loadPosts = async () => {
    let res = await fetch(API_URL + "/posts");
    let data = await res.json();

    if (data.con) {
      setPosts(data.data);
    } else {
      console.log("errors");
    }
  };

  useEffect(() => {
    loadPosts();
  }, []);

  //delete method
  const apiDeletePost = async (id) => {
    let res = await fetch(API_URL + `/posts/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    });
    let data = await res.json();
    if (data.con) {
      loadPosts();
    } else {
      console.log("errors");
    }
  };

  return (
    <div>
      <Link to="/admin/posts/add" className="btn btn-sm btn-primary my-3">
        Add
      </Link>
      <div className="row">
        {posts.length > 0 &&
          posts.map((post) => (
            <UiPost key={post.id} post={post} apiDeletePost={apiDeletePost} />
          ))}
      </div>
    </div>
  );
};

export default AllPost;
