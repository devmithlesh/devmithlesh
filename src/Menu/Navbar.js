import React from "react";
import "./Nav.css";
function Navbar() {
  return (
    <>
      <div className="navbar_main_div">
        <div className="nav_bar_main">
          <button className="dark-mode">
            <i className="fa-solid fa-circle-half-stroke"></i>
          </button>
          <div className="menu_options">
            <a href="#home" className="active_home">
              <i className="fa-solid fa-house-user"></i>
            </a>
            <a href="#about_us">
              <i className="fa-solid fa-address-card"></i>
            </a>
            <a href="#project">
              <i className="fa-solid fa-file"></i>
            </a>
            <a href="#archivement">
              <i className="fa-solid fa-trophy"></i>
            </a>
            <a href="#education">
              <i className="fa-solid fa-user-graduate"></i>
            </a>
            <a href="#contact">
              <i className="fa-solid fa-message"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
