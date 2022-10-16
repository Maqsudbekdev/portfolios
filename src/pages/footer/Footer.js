import React from "react";
import "./Footer.css";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="Footer_cont">
      <footer>
        <div className="content">
          <div className="top">
            <div className="logo-details">
              <span className="logo_name">Sitesoch</span>
            </div>
          </div>
          <div className="link-boxes">
            <ul className="box">
              <li className="link_name">Links</li>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
              <li>
                <a href="">About Us</a>
              </li>
              <li>
                <a href="">Get Started</a>
              </li>
            </ul>
            <ul className="box">
              <li className="link_name">Services</li>
              <li>
                <a href="">App Design</a>
              </li>
              <li>
                <a href="">Web Design</a>
              </li>
              <li>
                <a href="">Logo Design</a>
              </li>
              <li>
                <a href="">Banner Design</a>
              </li>
            </ul>
            <ul className="box">
              <li className="link_name">Other services</li>
              <li>
                <a href="">SEO</a>
              </li>
              <li>
                <a href="">Content Marketing</a>
              </li>
              <li>
                <a href="">Prints</a>
              </li>
              <li>
                <a href="">Social Media</a>
              </li>
            </ul>
            <ul className="box">
              <li className="link_name">Contact</li>
              <li>
                <a href="">+91 8879887262</a>
              </li>
              <li>
                <a href="">+91 8879887262</a>
              </li>
              <li>
                <a href="">contact@sitesoch.com</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
