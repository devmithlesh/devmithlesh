import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import { TfiEmail } from "react-icons/tfi";
import { SlScreenSmartphone } from "react-icons/sl";
import { BsTelephone } from "react-icons/bs";
import { TfiLocationPin } from "react-icons/tfi";
import { GiPistolGun } from "react-icons/gi";
import { HiDotsHorizontal } from "react-icons/hi";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    alert("Email Send Successfully!");
    window.location.reload();
    emailjs
      .sendForm(
        "service_rowdkfh",
        "template_5fhyc1j",
        form.current,
        "OeaSk6ExidzL4ZQb0"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <section>
        <div className="wrapper">
          <div className="contact_main_div" id="contact">
            <h2>
              Contact <span className="text_h2_yellow"> Me</span>
              <div className="animated_div_heading">
                <span></span>
              </div>
            </h2>
            <div className="main_grid_div_contact">
              <div className="contact_details">
                <h4>
                  Contact Info.
                  <span>
                    <GiPistolGun className="gun" />
                    <HiDotsHorizontal className="gun_magine" />
                  </span>
                </h4>
                <div>
                  <span>
                    <p className="icons_bg_con">
                      <TfiEmail className="icons_contact_left" />
                    </p>
                    <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=new" target="_blank" >
                      <p>
                        mithleshnirmal786123
                        <br className="br_email" />
                        @gmail.com
                      </p>
                    </a>
                  </span>
                </div>
                <div>
                  <span>
                    <p className="icons_bg_con">
                      <SlScreenSmartphone className="icons_contact_left" />
                    </p>
                    <a href="tel:+918196969106"> <p>+918196969106</p></a>
                  </span>
                </div>
                {/* <div>
                  <span>
                    <p className="icons_bg_con">
                      <BsTelephone className="icons_contact_left" />
                    </p>
                    <p>+11XXXXXX00</p>
                  </span>
                </div> */}
                <div>
                  <span>
                    <p className="icons_bg_con">
                      <TfiLocationPin className="icons_contact_left" />
                    </p>
                    <p>Punjab, India</p>
                  </span>
                </div>
              </div>
              <form ref={form} onSubmit={sendEmail}>
                {/* <span className="reddote">*</span> */}
                <label className="fullname" for="fullname">Full Name  </label>
                <input type="text" name="fullName" id="fullname" required />
                <label for="email">Email</label>
                <input type="email" name="user_email" id="email" required />
                <label for="mobile">Mobile</label>
                <input type="tel" name="phoneno" id="mobile" />
                <label for="message">Message</label>
                <textarea name="textBox" id="message" required />
                <input type="submit" value="Send" className="btn_submit" />
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
