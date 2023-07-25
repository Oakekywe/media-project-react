import React, { useEffect, useState } from "react";
import banner1 from "../statics/banner1.jpg";
import banner2 from "../statics/banner2.jpg";
import logoImg from "../statics/logo.png";
import SideNews from "./shares/SideNews";
import API_URL from "./shares/Api";
import { useParams } from "react-router-dom";

const HOT_NEWS = 1;
const HOME_AFFIRE = 5;

export default function CatPage() {

  const {type, id} = useParams();

  // filter by hotnews
  const [hotNews, setHotNews] = useState([]);
  const loadHotNews = async () => {
    let res = await fetch(API_URL + `/posts/filter/by-tag/${HOT_NEWS}`);
    let data = await res.json();

    if (data.con) {
      setHotNews(data.data.data);
    } else {
      console.log("errors");
    }
  };
  // filter by Cat
  const [cats, setCatPosts] = useState([]);
  const [catTitle, setCatTitle] = useState("");
  const loadPostByCat = async () => {
    let res = await fetch(API_URL + `/posts/filter/by-cat/${id}`);
    let data = await res.json();

    if (data.con) {
      setCatPosts(data.data.data);
      setCatTitle(data.data.data[0].category.name)
    } else {
      console.log("errors");
    }
  };

  useEffect(() => {
    loadHotNews();
    loadPostByCat();
  }, [catTitle]);

  return (
    <div className="container">
      <div className="row mt-3">
        <div className="col-md-2">
          <img src={logoImg} width="100px" />
        </div>
        <div className="col-md-5">
          <img src={banner1} />
        </div>
        <div className="col-md-5">
          <img src={banner2} />
        </div>
      </div>

      <div className="row my-3">
        <div className="col-md-8">
          <div className="bg-dark p-2 d-flex justify-content-between mb-2">
            <button className="btn btn-danger btn-sm rounded-0">
              {catTitle}
            </button>
            <button className="btn btn-danger btn-sm rounded-0">
              Read More
            </button>
          </div>
          <div className="row">
            {/* <HotNew image={p1} /> */}
            {cats.length > 0 &&
              cats.map((hn) => (
                <SideNews key={hn.id} post={hn} wordcount={500} />
              ))}
          </div>
        </div>
        <div className="col-md-4">
          <div className="mb-3 bg-dark p-2 d-flex justify-content-between">
            <button className="btn btn-danger btn-sm rounded-0">
              {}
            </button>
            <button className="btn btn-danger btn-sm rounded-0">
              Read More
            </button>
          </div>
          {hotNews.length > 0 &&
            hotNews.map((hn) => (
              <SideNews key={hn.id} post={hn} wordcount={100} />
            ))}
        </div>
      </div>
    </div>
  );
}
