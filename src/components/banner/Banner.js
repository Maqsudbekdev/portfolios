import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div>
      <div className="Banner">
        <div className="left"></div>
        <div className="right">
          <h4 className="Staple_it">Staple it up.</h4>
          <h1 className="White_Essentials">White Essentials</h1>
          <p className="texts">
            Our premium RS 01 sneakers are just <br /> here to get you on your
            way these days.
          </p>
          <a className="Shop_here" href="">
            Shop here.
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
