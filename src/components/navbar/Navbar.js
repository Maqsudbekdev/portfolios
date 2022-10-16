import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [navbar, setNavbar] = useState();
  const changebackground = () => {
    if (window.scrollY >= 60) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  document.addEventListener("scroll", changebackground);
  return (
    <div>
      <div className={navbar ? "Navbar active" : "Navbar"}>
        <h1 className={navbar ? "logo logo2" : "logo"}>E T Q .</h1>
        <ul className="collection">
          <li className="item">
            <div className="basic-4">
              <a className={navbar ? "LINK_NAv LINK_NAv2" : "LINK_NAv"} href="">
                Shop
              </a>
            </div>
          </li>
          <li className="item">
            <div className="basic-4">
              <a className={navbar ? "LINK_NAv LINK_NAv2" : "LINK_NAv"} href="">
                E-Gift Card
              </a>
            </div>
          </li>
          <li className="item">
            <div className="basic-4">
              <a className={navbar ? "LINK_NAv LINK_NAv2" : "LINK_NAv"} href="">
                Shoe Care
              </a>
            </div>
          </li>
        </ul>
        <ul className="left_collection_nav">
          <li className="item_left_nav">
            <div className="basic-5">
              <a href="" className="Left_link_nav">
                Search
              </a>
            </div>
          </li>
          <li className="item_left_nav">
            <div className="basic-5">
              <a href="" className="Left_link_nav">
                Help
              </a>
            </div>
          </li>
          <li className="item_left_nav">
            <div className="basic-5">
              <a href="" className="Left_link_nav">
                My account
              </a>
            </div>
          </li>
          <li className="item_left_nav">
            <button className="cart">0</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
