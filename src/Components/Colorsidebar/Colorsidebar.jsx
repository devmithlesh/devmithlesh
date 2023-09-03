import React from 'react'
import './ColorsidebarStyle.css'
const Colorsidebar = ({currentColor, handleColorChange, setisActive, isActive }) => {
    return (

        <div className={`colorwrapper ${isActive === true && 'active'}`}>
            <div className="crossbar mb-20" onClick={() => setisActive(false)}>
                <i class="fa-solid fa-xmark"></i>
            </div>
            <p>Dark Theme</p>
            <div>
                <div className="darkbtn themebtn" onClick={() => handleColorChange('dark')}></div>
                <p>Dark Mode</p>
            </div>

            <div className="border_line"></div>

            <p>Light Theme </p>

            <div className="lightthemediv">
                <div className=''>
                    <div className="greenbtn themebtn" onClick={() => handleColorChange('green')}></div>
                    <p>Green</p>
                </div>
                <div>
                    <div className="purplebtn themebtn" onClick={() => handleColorChange('purple')}></div>
                    <p>Purple</p>
                </div>
                <div>
                    <div className="bluebtn themebtn" onClick={() => handleColorChange('blue')}></div>
                    <p>Blue</p>
                </div>
                <div>
                    <div className="resetbtn themebtn" onClick={() => handleColorChange('white')}></div>
                    <p>Reset</p>
                </div>
            </div>
        </div>
    )
}

export default Colorsidebar
