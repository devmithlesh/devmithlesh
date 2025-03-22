import React, { useState, useRef, useEffect } from "react";
import './ColorsidebarStyle.css'
const Colorsidebar = ({ currentColor, handleColorChange, setisActive, isActive }) => {

    //onclick close outside
    const ref = useRef(null);

    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
            setisActive(false);
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);

    return (

        <div className={`colorwrapper ${isActive === true && 'active'}`} ref={ref}>
            <div className="crossbar mb-20" >
                <i class="fa-solid fa-xmark" onClick={() => setisActive(false)}></i>
            </div>
            <p>Dark Theme</p>
            <div>
                <button className="darkbtn themebtn" onClick={() => handleColorChange('dark')}></button>
                <p>Dark Mode</p>
            </div>

            <div className="border_line"></div>

            <p>Light Theme </p>

            <div className="lightthemediv">
                <div className=''>
                    <button className="greenbtn themebtn" onClick={() => handleColorChange('green')}></button>
                    <p>Green</p>
                </div>
                <div>
                    <button className="purplebtn themebtn" onClick={() => handleColorChange('purple')}></button>
                    <p>Purple</p>
                </div>
                <div>
                    <button className="bluebtn themebtn" onClick={() => handleColorChange('blue')}></button>
                    <p>Blue</p>
                </div>

            </div>

            <div className='backtochange'>
                <button className="resetbtn" onClick={() => handleColorChange('white')}>Reset</button>

            </div>
        </div>
    )
}

export default Colorsidebar
