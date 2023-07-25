import React, { useEffect, useState } from "react";
import p1 from "../statics/p1.jpg";
import banner1 from "../statics/banner1.jpg";
import banner2 from "../statics/banner2.jpg";
import logoImg from "../statics/logo.png";
import SideNews from "./shares/SideNews";
import API_URL from "./shares/Api";
import { useParams } from "react-router-dom";

const HOT_NEWS = 1;

export default function PostDetail() {
  const { id } = useParams();
  // filter by single post
  const [post, setPost] = useState({});
  const [postDate, setPostDate] = useState("");
  const loadSinglePost = async () => {
    let res = await fetch(API_URL + `/posts/${id}`);
    let data = await res.json();
    if (data.con) {
      setPost(data.data);
      setPostDate(data.data.created_at.split("T")[0]);
    } else {
      console.log("errors");
    }
  };
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

  useEffect(() => {
    loadHotNews();
    loadSinglePost();
  }, []);

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
          <div className="mb-3 bg-dark p-2">
            <h6 className="text-white text-center">{post.title}</h6>
          </div>
          <img src={p1} width="100%" height="450px" />
          <h3>{postDate}</h3>
          <p className="hotnews">{post.content}</p>
        </div>
        <div className="col-md-4">
          <div className="mb-3 bg-dark p-2 d-flex justify-content-between">
            <button className="btn btn-danger btn-sm rounded-0">
              Hot NEWS
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
