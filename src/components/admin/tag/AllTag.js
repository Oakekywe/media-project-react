import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API_URL from "../../shares/Api";
import UiTag from "./UiTag";

const AllTag = () => {
  const [tags, setTags] = useState([]);

  const loadTags = async () => {
    let res = await fetch(API_URL + "/tags");
    let data = await res.json();

    if (data.con) {
      setTags(data.data);
    } else {
      console.log("errors");
    }
  };

  useEffect(() => {
    loadTags();
  }, []);

  //delete method
  const apiDeleteTag = async (id) => {
    let res = await fetch(API_URL + `/tags/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    });
    let data = await res.json();
    if (data.con) {
      loadTags();
    } else {
      console.log("errors");
    }
  };

  return (
    <div>
      <Link to="/admin/tags/add" className="btn btn-sm btn-primary my-3">
        Add
      </Link>
      <div className="row">
        {tags.length > 0 &&
          tags.map((tag) => (
            <UiTag key={tag.id} tag={tag} apiDeleteTag={apiDeleteTag} />
          ))}
      </div>
    </div>
  );
};

export default AllTag;
