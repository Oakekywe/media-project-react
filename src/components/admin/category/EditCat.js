import React, { useEffect, useState } from "react";
import API_URL from "../../shares/Api";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../../shares/Loading";

const EditCat = () => {
  const [name, setName] = useState("");
  // const [file, setFile] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const userData = useSelector((state) => state.userData);
  const navigate = useNavigate();
  const { id } = useParams();

  const loadCategory = async () => {
    let res = await fetch(API_URL + `/cats/${id}`);
    let data = await res.json();
    setName(data.data.name);
    setIsLoading(false);
  };

  useEffect(() => {
    setIsLoading(true);
    loadCategory();
  }, []);

  const apiCategoryUpdate = async () => {
    let res = await fetch(API_URL + `/cats/${id}`, {
      method: "PATCH",
      body: JSON.stringify({ name: name }),
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${userData.token}`,
      },
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
    apiCategoryUpdate();
  };
  return (
    <div>
      <div className="container my-5">
        {isLoading && <Loading />}
        <div className="col-md-6 mt-5 offset-md-3 bg-dark p-5">
          <h1 className="text-white text-center">Edit Category</h1>
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

            <div className="d-flex justify-content-end mt-4">
              <button
                type="reset"
                className="btn btn-outline-warning btn-sm mx-2 text-white"
                onClick={() => navigate(-1)}
              >
                Cancle
              </button>
              <button type="submit" className="btn btn-success btn-sm">
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditCat;
