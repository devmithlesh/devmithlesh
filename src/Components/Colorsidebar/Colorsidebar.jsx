import React from 'react'
import './ColorsidebarStyle.css'
const Colorsidebar = ({ currentColor, handleColorChange, setisActive, isActive }) => {
    return (

        <div className={`colorwrapper ${isActive === true && 'active'}`}>
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
