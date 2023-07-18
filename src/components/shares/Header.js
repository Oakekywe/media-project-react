import React from "react";
import p1 from "../../statics/p1.jpg";
import p2 from "../../statics/p2.jpg";
import p3 from "../../statics/p3.jpg";
import p4 from "../../statics/p4.jpg";
import p5 from "../../statics/p5.jpg";
import SlideImg from "./SlideImg";
import video from "../../statics/video.mp4";
import { useSelector } from "react-redux";

function Header() {
  const siteData = useSelector((state) => state.siteData);

  return (
    <div className="row mt-3">
      <div className="col-md-8">
        <div
          id="carouselExample"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <SlideImg
              image={p1}
              active="active"
              alt="Slider-1"
              title={siteData.title2}
              desc={siteData.shortDesc}
            />
            <SlideImg
              image={p2}
              active=""
              alt="Slider-2"
              title={siteData.title2}
              desc={siteData.shortDesc}
            />
            <SlideImg
              image={p3}
              active=""
              alt="Slider-3"
              title={siteData.title2}
              desc={siteData.shortDesc}
            />
            <SlideImg
              image={p4}
              active=""
              alt="Slider-4"
              title={siteData.title2}
              desc={siteData.shortDesc}
            />
            <SlideImg
              image={p5}
              active=""
              alt="Slider-5"
              title={siteData.title2}
              desc={siteData.shortDesc}
            />
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <video width="100%" controls>
          <source src={video}></source>
        </video>
        <h5>
          <strong>
            {siteData.title1}
          </strong>
        </h5>
        <p className="para">
          {siteData.para1}
        </p>
      </div>
    </div>
  );
}

export default Header;
