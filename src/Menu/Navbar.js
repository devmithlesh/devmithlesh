import React, { useState, useEffect } from "react";
import "./Nav.css";
function Navbar({ setisActive, isHidden }) {

  const [listActive, setListActive] = useState(1)
  const handleTabClick = (id) => {
    setListActive(id);
  };

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const tab2Offset = 400;
    const tab3Offset = 1200;
    const tab4Offset = 2000;
    const tab5Offset = 2600;
    const tab6Offset = 3300;

    if (scrollY < tab2Offset) {
      setListActive(1);
    } else if (scrollY < tab3Offset) {
      setListActive(2);
    } else if (scrollY < tab4Offset) {
      setListActive(3);
    }
    else if (scrollY < tab5Offset) {
      setListActive(4);
    }
    else if (scrollY < tab6Offset) {
      setListActive(5);
    }
    else {
      setListActive(6);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className="navbar_main_div">
        <div className="nav_bar_main">
          {!isHidden && (
            <div className="dark-mode" onClick={() => setisActive(true)}>
              <i class="fa-solid fa-gear"></i>
            </div>)
          }
          <div className="menu_options">
            <a href="#home" className={`${listActive === 1 && 'active_home'}`} onClick={handleTabClick} id={1}>
              <i className="fa-solid fa-house-user"></i>
            </a>
            <a href="#about_us" className={`${listActive === 2 && 'active_home'}`} onClick={handleTabClick} id={2}>
              <i className="fa-solid fa-address-card"></i>
            </a>
            <a href="#project" className={`${listActive === 3 && 'active_home'}`} onClick={handleTabClick} id={3}>
              <i className="fa-solid fa-file"></i>
            </a>
            <a href="#archivement" className={`${listActive === 4 && 'active_home'}`} onClick={handleTabClick} id={4}>
              <i className="fa-solid fa-trophy"></i>
            </a>
            <a href="#education" className={`${listActive === 5 && 'active_home'}`} onClick={handleTabClick} id={5}>
              <i className="fa-solid fa-user-graduate"></i>
            </a>
            <a href="#contact" className={`${listActive === 6 && 'active_home'}`} onClick={handleTabClick} id={6}>
              <i className="fa-solid fa-message"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
