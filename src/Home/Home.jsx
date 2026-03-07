import React, { useEffect, useState } from 'react';
import Pdetail from '../Menu/Pdetail'
import About from '../Pages/About/About'
import Achievement from '../Pages/Achievement/Achievement'
import Project from '../Pages/Project/Project'
import Contact from '../Pages/Contact/Contact'
import Education from '../Pages/Education/Education'
import './Home.css'
import Footer from '../Pages/Footer/Footer'
import Navbar from '../Menu/Navbar'
import Colorsidebar from "../Components/Colorsidebar/Colorsidebar";
import Preloading from './Preloading';

function Home() {
  const [toggle, setToggle] = useState(false)
  const [toggleColor, settoggleColor] = useState(false)
  const [loading, setLoading] = useState(true);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    document.body.style.overflow = toggle || toggleColor ? 'hidden' : 'unset';

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [toggle, toggleColor]);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => {
      window.clearTimeout(timer);
    };
  }, []);

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
      {loading ? <Preloading /> :
        <div className="homediv_main" id="home">
          {/*------------------- Personal Details -------------------*/}
          <div className={`left_personal_details ${toggle === true && 'active'}`}>
            <Pdetail isActive={toggle} setActive={setToggle} />
          </div>

          <div className="home_div_main_feed">
            <Colorsidebar
              isActive={toggleColor}
              setisActive={settoggleColor}
            />
            <div className="wrapper">
              <div className="leftside_home_div">
                <div className="menudots" onClick={() => setToggle(true)}>
                  <i className="fa-solid fa-bars"></i>
                </div>

                <div className="menudots settingicon" onClick={() => settoggleColor(true)}>
                  <i className="fa-solid fa-gear"></i>
                </div>

                <p className="hi">HI THERE !</p>
                <h1>
                  I'M Mithlesh <span className="text-yellow">Nirmal</span>
                </h1>
                <h4 className="text-yellow ">
                  Front-End
                  <span className="type-animation"> Developer </span>
                </h4>

                <p className="looking">
                  I'm a passionate front-end developer with two years of experience,
                  specializing in HTML, CSS, JavaScript, and React.js. I thrive on building responsive,
                  visually appealing, and user-friendly web applications. Seeking a challenging role
                  where I can apply my skills to craft engaging digital experiences and enhance user
                  interactions.
                </p>
                <div className="btn_hireme">
                  <a href="/assets/img/Resume.pdf" target="_blank" rel="noopener noreferrer">
                    <button className="btn_hire btnsame">
                      Hire Me <i className="fa-solid fa-user-tie"></i>
                    </button>
                  </a>
                </div>
              </div>
            </div>

            {/*-------------------- About Section --------------------*/}
            <About />
            {/*----------------- Project Section ------------------ */}
            <Project />
            {/* ------------------ Achievements --------------------- */}
            <Achievement />
            {/*---------------------- Education ----------------------*/}
            <Education />
            {/*--------------------- Contact Form --------------------*/}
            <Contact />
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
