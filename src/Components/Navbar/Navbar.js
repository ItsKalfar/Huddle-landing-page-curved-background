import React from "react";
import "./Navbar.css";
import logo from "./../../images/logo.svg";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <a href="#home">
            <img src={logo} alt="logo" />
          </a>

          <button className="btn btn-secondary">Try It Free</button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
