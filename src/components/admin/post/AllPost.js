import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API_URL from "../../shares/Api";
import UiPost from "./UiPost";

const AllPost = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);

  const loadPosts = async () => {
    let res = await fetch(API_URL + `/posts/paginate/${page}`);
    let data = await res.json();

    if (data.con) {
      setPosts(data.data.data);
      setTotalPage(data.data.last_page);
    } else {
      console.log("errors");
    }
  };

  useEffect(() => {
    loadPosts();
  }, [page]);

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

  const increase = () => {
    if (page < totalPage) {
      setPage((prev) => prev + 1);
    }
  };
  const decrease = () => {
    if (page >= 2) {
      setPage((prev) => prev - 1);
    }
  };

  return (
    <div>
      <div className="d-flex justify-content-between my-2">
        <div>
          <Link to="/admin/posts/add" className="btn btn-sm btn-primary">
            Add
          </Link>
        </div>
        <nav aria-label="Page navigation example">
          <ul className="pagination pagination-sm">
            <button
              onClick={() => decrease()}
              className="page-item page-link me-1"
              disabled={page < totalPage}
            >
              Prev
            </button>
            <button onClick={() => increase()} className="page-item page-link" disabled={page >= totalPage}>
              Next
            </button>
          </ul>
        </nav>
      </div>
      <div className="row">
        {posts.length > 0 &&
          posts.map((post) => (
            <UiPost key={post.id} post={post} apiDeletePost={apiDeletePost} />
          ))}
      </div>
      <div className="d-flex justify-content-center mt-3">
        <nav aria-label="Page navigation example">
          <ul className="pagination pagination-sm">
            <button
              onClick={() => decrease()}
              className="page-item page-link me-1"
            >
              Prev
            </button>
            <button onClick={() => increase()} className="page-item page-link">
              Next
            </button>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default AllPost;
