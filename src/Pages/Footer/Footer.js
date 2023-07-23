import React from "react";
import "./Footer.css";
import { BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
function Footer() {
  return (
    <>
      <footer>
        <div className="wrapper">
          <div className="main_div_footer">
            <div className="footer_icons">
              <a
                href="https://github.com/devmithlesh"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsGithub className="footer_icon_git" />
              </a>
              <a
                href="https://www.linkedin.com/in/devmithlesh/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="footer_icon_link" />
              </a>
              <a
                href="https://www.instagram.com/dev_mithlesh/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="footer_icon_insta" />
              </a>
            </div>
            <p>Copyright © By devmithlesh</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
