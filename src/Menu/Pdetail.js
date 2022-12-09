import Img from "../Images/img.jpeg";
import { FiFacebook } from "react-icons/fi";
import { AiOutlineLinkedin } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { HiOutlineDownload } from "react-icons/hi";
import React from "react";
import "./Pdetail.css";
function Pdetail() {
  return (
    <>
      <div className="personal_details">
        <div className="box">
          <img src={Img} alt="Mithlesh" className="image-logo-menu" />
        </div>
        <h3 className="name_user">
          Mithlesh
          <span className="text-yellow">Nirmal</span>
        </h3>
        <p>Front End Developer</p>
        {/* social Icons */}
        <div className="social-icons">
          <a
            href="https://www.instagram.com/dev_mithlesh/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiFacebook className="i_tag_social facebook" />
          </a>
          <a
            href="https://www.linkedin.com/in/devmithlesh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineLinkedin className="i_tag_social linkedin" />
          </a>
          <a
            href="https://github.com/devmithlesh"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsGithub className="i_tag_social github" />
          </a>
          <a
            href="https://www.instagram.com/dev_mithlesh/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsInstagram className="i_tag_social insta" />
          </a>
        </div>
        {/* border line */}
        <div className="border_line"></div>
        {/* Address Details */}
        <div className="landmark">
          <div className="age">
            <p>Age</p>
            <p>22</p>
          </div>
          <div className="residence">
            <p>Residence</p>
            <p>PB08</p>
          </div>
          <div className="address">
            <p>Address</p>
            <p>Punjab, India</p>
          </div>
        </div>
        {/* border line */}
        <div className="border_line"></div>
        {/* skills */}
        <div className="sills_details">
          <h3>Skill</h3>
          <div className="skills">
            <p>
              <span>Html</span> <span>80%</span>
            </p>
            <div className="progress">
              <div className="pro_div_in80"></div>
            </div>
          </div>
          <div className="skills">
            <p>
              <span>Css</span> <span>80%</span>
            </p>
            <div className="progress">
              <div className="pro_div_in80"></div>
            </div>
          </div>
          <div className="skills">
            <p>
              <span>Javascript</span> <span>40%</span>
            </p>
            <div className="progress">
              <div className="pro_div_in40"></div>
            </div>
          </div>
          <div className="skills">
            <p>
              <span>Reactjs</span>
              <span>40%</span>
            </p>
            <div className="progress">
              <div className="pro_div_in40"></div>
            </div>
          </div>
          <div className="skills">
            <p>
              <span>Tailwind css</span> <span>80%</span>
            </p>
            <div className="progress">
              <div className="pro_div_in80"></div>
            </div>
          </div>
          <div className="skills">
            <p>
              <span>Bootstrap</span> <span>60%</span>
            </p>
            <div className="progress">
              <div className="pro_div_in60"></div>
            </div>
          </div>
        </div>
        {/* border line */}
        <div className="border_line"></div>
        {/* language Details */}
        <div className="language_detail">
          <h3>Languages</h3>
          <div className="lg_inside">
            <p>
              <span>Hindi</span> <span>100%</span>
            </p>
            <div className="progress">
              <div className="pro100"></div>
            </div>
          </div>
          <div className="lg_inside">
            <p>
              <span>Punjabi</span> <span>80%</span>
            </p>
            <div className="progress">
              <div className="pro80"></div>
            </div>
          </div>
          <div className="lg_inside">
            <p>
              <span>English</span> <span>40%</span>
            </p>
            <div className="progress">
              <div className="pro40"></div>
            </div>
          </div>
        </div>
        {/* border skill */}
        <div className="border_line"></div>
        {/* Extra skills */}
        <div className="extra_know">
          <h3>Extra Skills</h3>
          <p>
            <i className="fa-solid fa-chevron-right"></i> Github
          </p>
          <p>
            <i className="fa-solid fa-chevron-right"></i> Vs Code
          </p>
          <p>
            <i className="fa-solid fa-chevron-right"></i> MS office
          </p>
        </div>
        <div className="button_resume">
          <button>
            <a
              href="https://devmithlesh-resume.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Resume
              <HiOutlineDownload className="hioutlinedown" />
            </a>
          </button>
        </div>
      </div>
    </>
  );
}

export default Pdetail;
