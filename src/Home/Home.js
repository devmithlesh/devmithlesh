import React from "react";
import About from "../components/About/About";
import Archivement from "../components/Archivement/Archivement";
import Project from "../components/Project/Project";
import Navbar from "../Menu/Navbar";
import Pdetail from "../Menu/Pdetail";
import Contactus from "../components/Contact/Contact";
import Education from "../components/Education/Education";
import "./Home.css";
import Footer from "../components/Footer/Footer";
function Home() {
  return (
    <>
      <div className="homediv_main" id="home">
        {/*------------------- Personal Details -------------------*/}
        <div className="left_personal_details">
          <Pdetail />
        </div>
        <div className="home_div_main_feed">
          <div className="wrapper">
            <div className="leftside_home_div">
              <p className="hi">HI THERE !</p>
              <h1>
                I'M Mithlesh <span className="text-yellow">Nirmal</span>
              </h1>
              <h4 className="text-yellow ">
                Front End
                <span className="type-animation"> Developer </span>
              </h4>

              <p className="looking">
                Looking for an opportunity to work in a challenging position to
                prove
                <br class="looking_br" /> my computer science skills and utilize
                my knowledge and intelligence
                <br class="looking_br" /> in the growth of organization.
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
          <Archivement />
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
