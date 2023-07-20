import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API_URL from "../../shares/Api";
import UiCat from "./UiCat";

const AllCat = () => {
  const [cats, setCats] = useState([]);

  const loadCats = async () => {
    let res = await fetch(API_URL + "/cats");
    let data = await res.json();

    if (data.con) {
      setCats(data.data);
    } else {
      console.log("errors");
    }
  };

  useEffect(() => {
    loadCats();
  }, []);

  return (
    <div>
      <Link to="/admin/cats/add" className="btn btn-sm btn-primary my-3">
        Add
      </Link>
      <div className="row">
        {cats.length > 0 && cats.map((cat) => <UiCat key={cat.id} cat={cat} />)}
        
      </div>
    </div>
  );
};

export default AllCat;
