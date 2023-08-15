import React from "react";
import "./Header.scss";
import "../../index.scss"
import { ReactComponent as Logo } from "../assets/logo.svg";
import { NavigationLink } from "../NavigationLink/NavigationLink";

export const Header = () => {
  const navigationLinks: any[] = [
    { name: "Home", url: "#" },
    { name: "Page", url: "#" },
    { name: "Shop", url: "#" },
    { name: "Blog", url: "#" },
    { name: "Contact", url: "#" },
    { name: "Offers", url: "#" },
  ];

  return (
    <div className="header">
      <div className="top-header-section">
        <Logo />
        <div className="contacts-container">
          <i className="fa-solid fa-bars mobile-only"></i>
          <div className="desktop-only">
            <p>Phone</p>
            <p className="contact">+980-34984089</p>
          </div>
          <div className="desktop-only">
            <p>Email</p>
            <p className="contact">waggy@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="line"></div>
      <div className="bottom-header-section">
        <p>Shop by categories</p>
        <nav className="desktop-only">
          {navigationLinks.map((item) => (
            <NavigationLink name={item.name} url={item.url} />
          ))}
        </nav>
        <div className="nav-icons">
          <i className="fa-solid fa-user"></i>
          <i className="fa-solid fa-heart"></i>
          <i className="fa-solid fa-cart-shopping"></i>
        </div>
      </div>
    </div>
  );
};
