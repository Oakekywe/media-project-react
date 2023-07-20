import React, { useState } from "react";
import API_URL from "../../shares/Api";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loading from "../../shares/Loading";

const AddCat = () => {
  const [name, setName] = useState("");
  const [file, setFile] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const userData = useSelector((state) => state.userData);
  const navigate = useNavigate();

  const onFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const apiCategoryAdd = async () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("image", file);

    let res = await fetch(API_URL + "/cats", {
      method: "POST",
      body: formData,
      // headers: {
      //   authorization: `Bearer ${userData.token}`,
      // },
    });
    let data = await res.json();
    if (data.con) {
      navigate("/admin/cats/all");
    } else {
      console.log("errors");
    }
    setIsLoading(false);
  };

  const catSubmit = (e) => {
    setIsLoading(true);
    e.preventDefault();
    apiCategoryAdd();
  };
  return (
    <div>
      <div className="container my-5">
        {isLoading && <Loading />}
        <div className="col-md-6 mt-5 offset-md-3 bg-dark p-5">
          <h1 className="text-white text-center">Create Category</h1>
          <form onSubmit={catSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label text-white">
                Name
              </label>
              <input
                type="text"
                className="form-control rounded-0 bg-dark text-white"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="formFile" className="form-label">
                Image
              </label>
              <input
                className="form-control"
                type="file"
                id="formFile"
                onChange={onFileChange}
              />
            </div>
            <div className="d-flex justify-content-end mt-4">
              <button
                type="reset"
                className="btn btn-outline-warning btn-sm mx-2 text-white"
              >
                Cancle
              </button>
              <button type="submit" className="btn btn-success btn-sm">
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCat;
