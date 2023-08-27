import React from "react";
import "./Footer.css";


function Footer() {
  return (
    <>
      <footer>
        <div className="wrapper">
          <div className="main_div_footer">
            <div className="footer_icons">
              <a
                href="https://www.linkedin.com/in/devmithlesh/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fa-brands fa-linkedin footer_icon_link"></i>
              </a>

              <a
                href="https://github.com/devmithlesh"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fa-brands fa-github footer_icon_git"></i>
              </a>

              <a
                href="https://www.instagram.com/dev_mithlesh/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fa-brands fa-instagram footer_icon_insta"></i>
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
