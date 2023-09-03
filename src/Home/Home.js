import React, { useState, useEffect } from 'react';
import Pdetail from '../Menu/Pdetail'
import About from '../Pages/About/About'
import Achievement from '../Pages/Achievement/Achievement'
import Project from '../Pages/Project/Project'
import Contactus from '../Pages/Contact/Contact'
import Education from '../Pages/Education/Education'
import './Home.css'
import Footer from '../Pages/Footer/Footer'
import Navbar from '../Menu/Navbar'
import Colorsidebar from "../Components/Colorsidebar/Colorsidebar";
import '../index.css';
import PreeLoading from './PreeLoading';

const colorMappings = {
  white: {
    '--white': '#ffffff',
    '--white-1': '#fff',
    '--black': '#171717',
    '--black-3': '#111827',
    '--black-4': '#171717',
    '--black-5': ' rgba(0, 0, 0, 0.5)',
    '--grey-1': 'gray',
    '--black-6': '#171717',
    '--yellow': '#ffbf00',
    '--scroll': '#ffbf00',
  },
  dark: {
    '--white': '#171717',
    '--white-1': '#262626',
    '--black': '#fff',
    '--black-3': '#404040',
    '--black-4': '#fff',
    '--black-5': '#404040',
    '--grey-1': '#404040',
    '--scroll': '#171717',
  },
  green: {
    '--yellow': 'green',
    '--black-6': '#fff',
    '--yellow-1': 'green',
    '--scroll': 'green',
  },
  purple: {
    '--yellow': 'purple',
    '--black-6': '#fff',
    '--yellow-1': 'purple',
    '--scroll': 'purple',
  },
  blue: {
    '--yellow': 'blue',
    '--black-6': '#fff',
    '--yellow-1': 'blue',
    '--scroll': 'blue',
  },
};

function Home() {
  const [currentColor, setCurrentColor] = useState('white');

  const handleColorChange = (color) => {
    setCurrentColor(color);
    const colorStyles = colorMappings[color];
    for (const key in colorStyles) {
      document.documentElement.style.setProperty(key, colorStyles[key]);
    }
  };

  // --end

  const [toggle, setToggle] = useState(false)
  const [toggleColor, settoggleColor] = useState()

  useEffect(() => {
    if (toggle) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset'; // Reset overflow when component unmounts
    };
  }, [toggle]);



  useEffect(() => {
    if (toggleColor) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset'; // Reset overflow when component unmounts
    };
  }, [toggleColor]);

  // Pree Loading

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1600);
  }, []);


  // onscroll div setting button
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {loading ? <PreeLoading /> :
        <div className="homediv_main" id="home">
          {/*------------------- Personal Details -------------------*/}
          <div className={`left_personal_details ${toggle === true && 'active'}`}>
            <Pdetail isActive={toggle} setActive={setToggle} />
          </div>

          <div className="home_div_main_feed">
            <div className={`sidebarcolodiv ${toggleColor === true && 'active'}`}>
              <Colorsidebar isActive={toggleColor} setisActive={settoggleColor} handleColorChange={handleColorChange} currentColor={currentColor} />
            </div>
            <div className="wrapper">
              <div className="leftside_home_div">

                <div className="menudots" onClick={() => setToggle(true)}>
                  <i class="fa-solid fa-bars"></i>
                </div>

                <div className="menudots settingicon" onClick={() => settoggleColor(true)}>
                  <i class="fa-solid fa-gear"></i>
                </div>

                <p className="hi">HI THERE !</p>
                <h1>
                  I'M Mithlesh <span className="text-yellow">Nirmal</span>
                </h1>
                <h4 className="text-yellow ">
                  Front End
                  <span className="type-animation"> Developer </span>
                </h4>

                <p className="looking">
                  Seeking a challenging frontend developer position to demonstrate my proficiency in
                  programming languages including HTML, CSS, JavaScript & ReactJS.
                  I possess a strong ability to create responsive and visually appealing
                  frontend solutions that prioritize user experience and engagement.
                  {/* <br class="looking_br" /> 
                <br class="looking_br" /> */}
                </p>
                <div className="btn_hireme">
                  <a href="https://devmithlesh-resume.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn_hire btnsame">
                    Hire Me <i className="fa-solid fa-user-tie"></i>
                  </a>
                </div>
              </div>
            </div>

            {/*-------------------- ABout File --------------------*/}
            <About />
            {/*----------------- Project Section ------------------ */}
            <Project />
            {/* ------------------ Archivements --------------------- */}
            <Achievement />
            {/*---------------------- Education ----------------------*/}
            <Education />
            {/*--------------------- Contact Form --------------------*/}
            <Contactus />
            {/*-------------------- Footer Section --------------------*/}
            <Footer />
          </div>
          {/*------------------------ Navbar ------------------------*/}
          <Navbar setisActive={settoggleColor} isHidden={isHidden} />
        </div >
      }
    </>
  );
}

export default Home;
