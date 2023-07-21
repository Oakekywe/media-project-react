import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import API_URL from "../../shares/Api";
import Loading from "../../shares/Loading";

export default function PostAdd() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [cats, setCats] = useState([]);
  const [tags, setTags] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [selectedCat, setSelectedCat] = useState("");
  const [selectedTag, setSelectedTag] = useState("");
  const [file, setFile] = useState({});
  const userData = useSelector((state) => state.userData);
  const navigate = useNavigate();

  const onFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const apiPostAdd = async () => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("category_id", selectedCat);
    formData.append("tag_id", selectedTag);
    formData.append("content", content);
    formData.append("user_id", userData.id);
    formData.append("image", file);

    let res = await fetch(API_URL + "/posts", {
      method: "POST",
      body: formData,
    });
    let data = await res.json();

    if (data.con) {
      navigate("/admin/posts/all");
    } else {
      console.log("errors");
    }
    setIsLoading(false);
  };

  const submitPost = (e) => {
    setIsLoading(true);
    e.preventDefault();
    apiPostAdd();
  };

  //Loading Tag & Cat

  const loadTags = async () => {
    let res = await fetch(API_URL + "/tags");
    let data = await res.json();
    if (data.con) {
      setTags(data.data);
      setSelectedTag(data.data.length > 0 ? data.data[0].id : "");
    } else {
      console.log("errors");
    }
  };

  const loadCats = async () => {
    let res = await fetch(API_URL + "/cats");
    let data = await res.json();

    if (data.con) {
      setCats(data.data);
      setSelectedCat(data.data.length > 0 ? data.data[0].id : "");
    } else {
      console.log("errors");
    }
  };

  useEffect(() => {
    loadTags();
    loadCats();
  }, []);

  return (
    <div className="container my-5">
      {isLoading && <Loading />}
      <div className="col-md-10 mt-5 offset-md-1 bg-dark p-5">
        <h1 className="text-white text-center">Create Post</h1>
        <form onSubmit={submitPost}>
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
                onChange={(e) => setSelectedCat(e.target.value)}
              >
                {cats.length > 0 ?
                  cats.map((cat) => (
                    <option key={cat.id} value={cat.id}>
                      {cat.name}
                    </option>
                  )): <option>No Category Found</option>}
              </select>
            </div>

            <div className="mb-3 col-md-6">
              <label htmlFor="tagselect" className="form-label text-white">
                Tag
              </label>
              <select
                className="form-select mb-3"
                id="tagselect"
                onChange={(e) => setSelectedTag(e.target.value)}
              >
                {tags.length > 0 ?
                  tags.map((tag) => (
                    <option key={tag.id} value={tag.id}>
                      {tag.name}
                    </option>
                  )): <option>No Tag Found</option>}
              </select>
            </div>

            <div className="mb-3 col-md-6">
              <label htmlFor="formFile" className="form-label text-white">
                Image
              </label>
              <input
                className="form-control"
                type="file"
                id="formFile"
                onChange={onFileChange}
              />
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
                  Create
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
