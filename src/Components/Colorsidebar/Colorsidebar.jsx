import React from 'react'
import './ColorsidebarStyle.css'
const Colorsidebar = ({ handleReset, handleColorChange, setisActive, isActive }) => {
    return (

        <div className={`colorwrapper ${isActive === true && 'active'}`}>
            <div className="crossbar" onClick={() => setisActive(false)}>
                <i class="fa-solid fa-xmark"></i>
            </div>
            <button className="darkbtn" onClick={() => handleColorChange('dark')}>Dark</button>
            <button className="greenbtn" onClick={() => handleColorChange('green')}>Green</button>
            <button className="purplebtn" onClick={() => handleColorChange('purple')}>Purple</button>
            <button className="bluebtn" onClick={() => handleColorChange('blue')}>Blue</button>
            <button className="resetbtn" onClick={() => handleColorChange('white')}>Reset</button>
        </div>
    )
}

export default Colorsidebar
