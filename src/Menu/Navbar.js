import React, { useState } from "react";
import "./Nav.css";
function Navbar({ setisActive }) {

  const [listActive, setListActive] = useState(1)
  return (
    <>
      <div className="navbar_main_div">
        <div className="nav_bar_main">
          <button className="dark-mode" onClick={() => setisActive(true)}>
            <i class="fa-solid fa-gear"></i>
          </button>
          <div className="menu_options">
            <a href="#home" className={`${listActive === 1 && 'active_home'}`} onClick={() => setListActive(1)}>
              <i className="fa-solid fa-house-user"></i>
            </a>
            <a href="#about_us" className={`${listActive === 2 && 'active_home'}`} onClick={() => setListActive(2)}>
              <i className="fa-solid fa-address-card"></i>
            </a>
            <a href="#project" className={`${listActive === 3 && 'active_home'}`} onClick={() => setListActive(3)}>
              <i className="fa-solid fa-file"></i>
            </a>
            <a href="#archivement" className={`${listActive === 4 && 'active_home'}`} onClick={() => setListActive(4)}>
              <i className="fa-solid fa-trophy"></i>
            </a>
            <a href="#education" className={`${listActive === 5 && 'active_home'}`} onClick={() => setListActive(5)}>
              <i className="fa-solid fa-user-graduate"></i>
            </a>
            <a href="#contact" className={`${listActive === 6 && 'active_home'}`} onClick={() => setListActive(6)}>
              <i className="fa-solid fa-message"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
