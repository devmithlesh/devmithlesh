import React, { useEffect, useState } from "react";
import Pdetail from '../Menu/Pdetail'
import About from '../Pages/About/About'
import Achievement from '../Pages/Achievement/Achievement'
import Project from '../Pages/Project/Project'
import Contactus from '../Pages/Contact/Contact'
import Education from '../Pages/Education/Education'
import './Home.css'
import Footer from '../Pages/Footer/Footer'
import Navbar from '../Menu/Navbar'


function Home() {

  const [toggle, setToggle] = useState(false)

  useEffect(() => {
    if (toggle) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }

    return () => {
      document.body.style.overflow = 'visible'; // Reset overflow when component unmounts
    };
  }, [toggle]);

  return (
    <>
      <div className="homediv_main" id="home">
        {/*------------------- Personal Details -------------------*/}
        <div className={`left_personal_details ${toggle === true && 'active'}`}>
          <Pdetail isActive={toggle} setActive={setToggle} />
        </div>

        <div className="home_div_main_feed">
          <div className="wrapper">
            <div className="leftside_home_div">

              <div className="menudots" onClick={() => setToggle(true)}>
                <i class="fa-solid fa-bars"></i>
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
                <a href="tel:+918196969106" className="btn_hire">
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
        <Navbar />
      </div>
    </>
  );
}

export default Home;
