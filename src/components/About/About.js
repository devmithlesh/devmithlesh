import React from "react";
import "./About.css";
import img from "../../Images/about.jpeg";
function About() {
  return (
    <>
      <div className="wrapper" id="about_us">
        <div className="about_bg_top">
          <div className="about_div_in">
            <h2>
              About <span className="text-yellow">Us</span>
              <div className="animated_div_heading">
                <span></span>
              </div>
            </h2>

            <div className="about_main_div">
              <div className="left_about">
                <div className="img_left_div">
                  <img src={img} alt="" />
                  <span className="b_img_lefta1"></span>
                  <span className="b_img_lefta2"></span>
                  <span className="b_img_lefta3"></span>
                  <span className="b_img_lefta4"></span>
                </div>
              </div>
              <div className="right_about">
                <div className="box_about">
                  <span>0+</span>
                  <p>Year Of Experience</p>
                </div>
                <div className="box_about">
                  <span>8+</span>
                  <p>Project Completed</p>
                </div>
                <div className="box_about">
                  <span>0+</span>
                  <p>Happy Customers</p>
                </div>
                <div className="box_about">
                  <span>10+</span>
                  <p>Certificates</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
