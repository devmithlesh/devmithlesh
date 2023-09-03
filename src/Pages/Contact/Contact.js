import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

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
                    <svg className="gun" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="gun" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M79.238 115.768l-28.51 67.863h406.15l-.273-67.862h-263.83v55.605h-15v-55.605h-16.68v55.605H146.1v-55.605h-17.434v55.605h-15v-55.605H79.238zm387.834 15.96v40.66h18.688v-40.66h-18.688zM56.768 198.63l20.566 32.015L28.894 406.5l101.68 7.174 21.54-97.996h115.74l14.664-80.252 174.55-3.873-.13-32.922H56.767zM263.44 235.85l-11.17 61.142h-96.05l12.98-59.05 12.53-.278-2.224 35.5 14.262 13.576 1.003-33.65 24.69-16.264 43.98-.976z"></path></svg>
                    <svg className="gun_magine" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" class="gun_magine" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path></svg>
                  </span>
                </h4>
                <div>
                  <span>
                    <p className="icons_bg_con">
                      <svg className="icons_contact_left" stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" viewBox="0 0 17 17" class="icons_contact_left" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g></g><path d="M0 2v13h17v-13h-17zM8.494 9.817l-6.896-6.817h13.82l-6.924 6.817zM5.755 8.516l-4.755 4.682v-9.383l4.755 4.701zM6.466 9.219l2.026 2.003 1.996-1.966 4.8 4.744h-13.677l4.855-4.781zM11.201 8.555l4.799-4.725v9.467l-4.799-4.742z"></path></svg>
                    </p>
                    <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=new" target="_blank" rel="noopener noreferrer" >
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
                      <svg className="icons_contact_left" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" class="icons_contact_left" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M704.144 0H319.856c-53.024 0-96 42.976-96 96v832c0 53.024 42.976 96 96 96h384.288c53.024 0 96-42.976 96-96V96c0-53.024-42.976-96-96-96zm32 928c0 17.664-14.336 32-32 32H319.856c-17.664 0-32-14.336-32-32V96c0-17.664 14.336-32 32-32h384.288c17.664 0 32 14.336 32 32v832zM512.048 800.176c-35.28 0-63.84 28.592-63.84 63.824s28.576 63.841 63.84 63.841c35.28 0 63.84-28.608 63.84-63.84 0-35.233-28.56-63.825-63.84-63.825zm64-704.176h-128c-17.664 0-32 14.336-32 32s14.336 32 32 32h128c17.664 0 32-14.336 32-32s-14.336-32-32-32z"></path></svg>
                    </p>
                    <a href="tel:+918196969106"> <p>+918196969106</p></a>
                  </span>
                </div>
                {/* <div>
                  <span>
                    <p className="icons_bg_con">
                    </p>
                    <p>+11XXXXXX00</p>
                  </span>
                </div> */}
                <div>
                  <span>
                    <p className="icons_bg_con">
                      <svg className="icons_contact_left" stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" viewBox="0 0 17 17" class="icons_contact_left" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g></g><path d="M8.5 0.5c-3.032 0-5.5 2.467-5.5 5.5 0 4.373 4.913 10.086 5.122 10.328l0.378 0.435 0.378-0.436c0.209-0.241 5.122-5.954 5.122-10.327 0-3.033-2.468-5.5-5.5-5.5zM8.5 15.215c-1.146-1.424-4.5-5.879-4.5-9.215 0-2.481 2.019-4.5 4.5-4.5s4.5 2.019 4.5 4.5c0 3.333-3.354 7.791-4.5 9.215zM8.5 3.139c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3zM8.5 8.139c-1.103 0-2-0.897-2-2s0.897-2 2-2 2 0.897 2 2-0.897 2-2 2z"></path></svg>
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
                <input type="submit" value="Send" className="btn_submit btnsame" />
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
