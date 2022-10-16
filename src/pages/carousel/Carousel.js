import React, { useState } from "react";
import "./Carousel.css";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";

const Carousel = () => {
  const [nav1bar, setNav1bar] = useState(0);
  return (
    <div>
      <div className="Carousel">
        <div className="left_right_text">
          <h1 className="About_carousel">Our favorite styles.</h1>
          <button
            className="Left_Corousel_btn"
            disabled={nav1bar >= 0}
            onClick={() => setNav1bar(nav1bar + 539)}
          >
            <AiOutlineLeft />
          </button>
          <button
            className="Right_Corousel_btn"
            onClick={() => setNav1bar(nav1bar - 539)}
          >
            <AiOutlineRight />
          </button>
        </div>
        <div
          className="cards"
          style={{ marginLeft: nav1bar, transition: "0.4s" }}
        >
          <div className="first_carousel_card">
            <div className="back_shoes_img"></div>
            <p className="LT">LT 01 Off-White</p>
            <small className="small">$214</small>
          </div>
          <div className="first_carousel_card">
            <div className="back_shoes_img"></div>
            <p className="LT">LT 01 Off-White</p>
            <small className="small">$214</small>
          </div>
          <div className="first_carousel_card">
            <div className="back_shoes_img"></div>
            <p className="LT">LT 01 Off-White</p>
            <small className="small">$214</small>
          </div>
          <div className="first_carousel_card">
            <div className="back_shoes_img"></div>
            <p className="LT">LT 01 Off-White</p>
            <small className="small">$214</small>
          </div>
          <div className="first_carousel_card">
            <div className="back_shoes_img"></div>
            <p className="LT">LT 01 Off-White</p>
            <small className="small">$214</small>
          </div>
          <div className="first_carousel_card">
            <div className="back_shoes_img"></div>
            <p className="LT">LT 01 Off-White</p>
            <small className="small">$214</small>
          </div>
          <div className="first_carousel_card">
            <div className="back_shoes_img"></div>
            <p className="LT">LT 01 Off-White</p>
            <small className="small">$214</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
