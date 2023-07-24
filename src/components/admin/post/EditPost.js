import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import API_URL from "../../shares/Api";
import Loading from "../../shares/Loading";

export default function EditPost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [cats, setCats] = useState([]);
  const [tags, setTags] = useState([]);
  const [file, setFile] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const [selectedCat, setSelectedCat] = useState("");
  const [selectedTag, setSelectedTag] = useState("");

  const userData = useSelector((state) => state.userData);
  const navigate = useNavigate();

  //load post
  const { id } = useParams();

  const loadSinglePost = async () => {
    let res = await fetch(API_URL + `/posts/${id}`);
    let data = await res.json();

    setTitle(data.data.title);
    setContent(data.data.content);
    setSelectedCat(data.data.category_id);
    setSelectedTag(data.data.tag_id);
    setFile(data.data.image);
    setIsLoading(false);
  };

  useEffect(() => {
    loadTags();
    loadCats();
    loadSinglePost();
    setIsLoading(true);
  }, []);

  //api post
  const apiPostEdit = async () => {
    const postData = {
      title: title,
      content: content,
      category_id: selectedCat,
      tag_id: selectedTag,
      user_id: userData.id,
      image: file,
    };

    let res = await fetch(API_URL + `/posts/${id}`, {
      method: "PATCH",
      body: JSON.stringify(postData),
      headers: {
        "content-type": "application/json",
      },
    });
    let data = await res.json();
    console.log(data);
    if (data.con) {
      navigate("/admin/posts/all");
    } else {
      console.log("errors");
    }
    setIsLoading(false);
  };

  const updatePost = (e) => {
    setIsLoading(true);
    e.preventDefault();
    apiPostEdit();
  };

  //Loading Tag & Cat

  const loadTags = async () => {
    let res = await fetch(API_URL + "/tags");
    let data = await res.json();
    if (data.con) {
      setTags(data.data);
    } else {
      console.log("errors");
    }
  };

  const loadCats = async () => {
    let res = await fetch(API_URL + "/cats");
    let data = await res.json();

    if (data.con) {
      setCats(data.data);
    } else {
      console.log("errors");
    }
  };

  return (
    <div className="container my-5">
      {isLoading && <Loading />}
      <div className="col-md-10 mt-5 offset-md-1 bg-dark p-5">
        <h1 className="text-white text-center">Edit Post</h1>
        <form onSubmit={updatePost}>
          <div className="row">
            <div className="mb-3 col-md-6">
              <label htmlFor="title" className="form-label text-white">
                Title
              </label>
              <input
                type="text"
                className="form-control rounded-0 "
                id="name"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
            <div className="mb-3 col-md-6">
              <label htmlFor="catselect" className="form-label text-white">
                Category
              </label>
              <select
                className="form-select mb-3"
                id="catselect"
                value={selectedCat}
                onChange={(e) => setSelectedCat(e.target.value)}
              >
                {cats.length > 0 ? (
                  cats.map((cat) => (
                    <option key={cat.id} value={cat.id}>
                      {cat.name}
                    </option>
                  ))
                ) : (
                  <option>No Category Found</option>
                )}
              </select>
            </div>

            <div className="mb-3 col-md-6">
              <label htmlFor="tagselect" className="form-label text-white">
                Tag
              </label>
              <select
                className="form-select mb-3"
                id="tagselect"
                value={selectedTag}
                onChange={(e) => setSelectedTag(e.target.value)}
              >
                {tags.length > 0 ? (
                  tags.map((tag) => (
                    <option key={tag.id} value={tag.id}>
                      {tag.name}
                    </option>
                  ))
                ) : (
                  <option>No Tag Found</option>
                )}
              </select>
            </div>

            <div className="mb-3 col-md-6">
              <label htmlFor="content" className="form-label text-white">
                Content
              </label>
              <textarea
                className="form-control"
                id="content"
                rows="3"
                defaultValue={content}
                onChange={(e) => setContent(e.target.value)}
              ></textarea>
            </div>

            <div className="mb-3 col-md-6">
              <div className="d-flex justify-content-end justify-items-center pt-5">
                <button
                  type="button"
                  className="btn btn-outline-warning btn-sm mx-2 text-white"
                  onClick={() => navigate(-1)}
                >
                  Cancle
                </button>
                <button type="submit" className="btn btn-success btn-sm">
                  Update
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
