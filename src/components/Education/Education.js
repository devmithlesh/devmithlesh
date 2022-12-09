import React from "react";
import { ImHtmlFive } from "react-icons/im";
import { SiCss3 } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { ImBook } from "react-icons/im";
import { BsBootstrap } from "react-icons/bs";
import { TbBrandJavascript } from "react-icons/tb";
import { SlCalender } from "react-icons/sl";
import "./Education.css";

function Education() {
  return (
    <>
      <section>
        <div className="wrapper">
          <div className="education_main_div" id="education">
            <h2>
              My <span className="text_h2_yellow">Education</span>
              <div className="animated_div_heading">
                <span></span>
              </div>
            </h2>

            <div className="social_icon_div_education">
              <ImHtmlFive className="icon_lang_edu_i" />
              <SiCss3 className="icon_lang_edu_i" />
              <FaReact className="icon_lang_edu_i" />
              <SiTailwindcss className="icon_lang_edu_i" />
              <BsBootstrap className="icon_lang_edu_i" />
              <TbBrandJavascript className="icon_lang_edu_i" />
            </div>

            <div className="education__div_inside_data">
              <div className="left_side_div">
                <div className="timeline_div_edu">
                  <span>
                    <ImBook className="book_edu_icon" />
                  </span>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
                <div className="right_side_col_scl">
                  <h3>Education</h3>
                  <div className="collage_details">
                    <h4>BCA</h4>
                    <p>
                      Lyallpur Khalsa College Technical Campus, Punjab (Under :
                      PTU)
                    </p>
                    <p className="cal_ender">
                      <SlCalender /> 2019 - 2021
                    </p>
                  </div>
                  <div className="school_details">
                    <h4>High School</h4>
                    <p>Govt. Model Ser Sec School (Under : PSEB)</p>
                    <p className="cal_ender">
                      <SlCalender /> 2017 - 2019
                    </p>
                  </div>
                  <div className="school2_details">
                    <h4>Matric School</h4>
                    <p>M.S.Memorial Model School, Jalandhar (Under : PSEB)</p>
                    <p className="cal_ender">
                      <SlCalender /> 2016 - 2017
                    </p>
                  </div>
                </div>
              </div>
              <div className="right_side_div">
                <h3>Skills</h3>
                <div className="right_div_skills_nme">
                  <span>HTML</span>
                  <span>CSS</span>
                  <span>Tailwind</span>
                  <span>React </span>
                  <span>Bootstrap</span>
                  <span>Javascript</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Education;
