import React from "react";
import "./Pdetail.css";
function Pdetail({ isActive, setActive }) {
  return (
    <>
      <div className={`personal_details`}>
        <div className="crossmenubar" onClick={() => setActive(false)}>  <i class="fa-solid fa-xmark"></i></div>

        <div className="box">
          <img src="/assets/img/profile.jpg" alt="Mithlesh" className="image-logo-menu" />
        </div>
        <h3 className="name_user">
          Mithlesh
          <span className="text-yellow">Nirmal</span>
        </h3>
        <p>Front End Developer</p>
        {/* social Icons */}
        <div className="social-icons">

          <a
            href="https://www.linkedin.com/in/devmithlesh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" class="i_tag_social linkedin" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M847.7 112H176.3c-35.5 0-64.3 28.8-64.3 64.3v671.4c0 35.5 28.8 64.3 64.3 64.3h671.4c35.5 0 64.3-28.8 64.3-64.3V176.3c0-35.5-28.8-64.3-64.3-64.3zm0 736c-447.8-.1-671.7-.2-671.7-.3.1-447.8.2-671.7.3-671.7 447.8.1 671.7.2 671.7.3-.1 447.8-.2 671.7-.3 671.7zM230.6 411.9h118.7v381.8H230.6zm59.4-52.2c37.9 0 68.8-30.8 68.8-68.8a68.8 68.8 0 1 0-137.6 0c-.1 38 30.7 68.8 68.8 68.8zm252.3 245.1c0-49.8 9.5-98 71.2-98 60.8 0 61.7 56.9 61.7 101.2v185.7h118.6V584.3c0-102.8-22.2-181.9-142.3-181.9-57.7 0-96.4 31.7-112.3 61.7h-1.6v-52.2H423.7v381.8h118.6V604.8z"></path></svg>
          </a>
          <a
            href="https://github.com/devmithlesh"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="i_tag_social github" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>
          </a>
          <a
            href="https://www.instagram.com/dev_mithlesh/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="i_tag_social insta" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"></path></svg>
          </a>

          <a
            href="https://www.instagram.com/dev_mithlesh/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="i_tag_social facebook" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
          </a>
        </div>
        {/* border line */}
        <div className="border_line"></div>
        {/* Address Details */}
        <div className="landmark">
          <div className="age">
            <p className="btnsame">Age</p>
            <p>22</p>
          </div>
          <div className="residence">
            <p className="btnsame">Residence</p>
            <p>Jalandhar</p>
          </div>
          <div className="address">
            <p className="btnsame">Address</p>
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
              <span>React js & Next js</span>
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
              <span>Hindi</span> 
              {/* <span>100%</span> */}
            </p>
            {/* <div className="progress">
              <div className="pro100"></div>
            </div> */}
          </div>
          <div className="lg_inside">
            <p>
              <span>Punjabi</span> 
              
              {/* <span>80%</span> */}
            </p>
            {/* <div className="progress">
              <div className="pro80"></div>
            </div> */}
          </div>
          <div className="lg_inside">
            <p>
              <span>English</span>
               {/* <span>40%</span> */}
            </p>
            {/* <div className="progress">
              <div className="pro40"></div>
            </div> */}
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
          <a className="btnsame"
            href="assets/img/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>
              Download Resume
              <svg stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 24 24" class="hioutlinedown" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
            </button>
          </a>
        </div>
      </div>
    </>
  );
}

export default Pdetail;
