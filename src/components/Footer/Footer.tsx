import React from "react";
import "./Footer.scss";
import "../../index.scss";
import logo from "../assets/logo.svg";
import facebook from "./assets/facebook.svg";
import twitter from "./assets/twitter.svg";
import pinterest from "./assets/pinterest.svg";
import instagram from "./assets/instagram.svg";
import youtube from "./assets/youtube.svg";

const iconArray: string[] = [facebook, twitter, pinterest, instagram, youtube];

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-menu">
        <div className="card">
          <div className="logo-container">
            <img src={logo} />
          </div>
          <p>
            Subscribe to our newsletter to get updates about our grand offers.
          </p>
          <div className="contact-icons">
            {iconArray.map((icon, index) => (
              <circle className={index == 0 ? "circle gold" : "circle gray-border"}>
                <img src={icon}/>
              </circle>
            ))}
            <input
              type="text"
              className="enter-email-input gray-border"
              placeholder="Enter your email-address"
            />
          </div>
        </div>
        <div className="credentials">
          <p>©2023 Waggy. All rights reserved.</p>
          <p>Template design by Templates Jungle</p>
        </div>
      </div>
    </div>
  );
};
