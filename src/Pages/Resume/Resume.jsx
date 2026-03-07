import './ResumeStyle.css'
import React from 'react'

const Resume = () => {
    const handlePrint = () => {
        window.print();
    };


    return (

        <div className='ResumeMainDev'>
            <div className="button_design">
                <div className="left_btn">
                    <a href="/assets/img/Resume.pdf" target="_blank" rel="noopener noreferrer">Download PDF</a>
                </div>
                <div className="right_btn">
                    <button onClick={handlePrint}>Print</button>
                </div>
            </div>

            <div className="wrapper mt20 mb-20">

                {/* <!------------------- Body Of Resume ------------------> */}
                <div className="container">
                    <header>
                        <div className="left_header">
                            <img src="/assets/logo.jpeg" alt="logo" className="profile" />
                            <div className="details">
                                <h2>Mithlesh Nirmal</h2>
                                <h3>Front-End Web Developer</h3>
                                <div>
                                    <a href="https://www.linkedin.com/in/devmithlesh" rel="noopener noreferrer" target="_blank">LinkedIn Profile</a>
                                    <a href="https://github.com/devmithlesh" rel="noopener noreferrer" target="_blank">GitHub</a>
                                </div>
                            </div>
                        </div>
                        <div className="right_header">
                            <div className="contact1">
                                <a href="tel:+918196969106" rel="noopener noreferrer" className='detailslist'>+918196969106</a>
                                <img src="/assets/icon-things1.png" alt="Phone" className="contact_icons" />
                            </div>
                            <div className="email-div contact1">
                                <a href="mailto:mithleshnirmal786@gmail.com" rel="noopener noreferrer" className='detailslist'>mithleshnirmal786@gmail.com</a>
                                <img src="/assets/icon-things3.png" alt="email" className="contact_icons2" />
                            </div>
                            <div className="contact1">
                                <div className='detailslist'>Punjab, India</div>
                                <img src="/assets/icon-things2.png" alt="location" className="contact_icons" />
                            </div>
                        </div>
                    </header>
                    {/* <!----------------- Objective Section -----------------> */}
                    <div className="objective">
                        <h2>CAREER OBJECTIVE</h2>
                        <p>
                            Looking for an opportunity to work in a challenging position to
                            prove my computer science skills and utilize my knowledge and
                            intelligence toward the growth of the organization.
                        </p>
                    </div>
                    <div className="border_obj">
                        <span className="point_obj"></span>
                    </div>
                    {/* <!--------- Divide Two Side Left or Right Side ---------> */}
                    <div className="main_project_skill">
                        <div className="transing_main_div">
                            <div className="project_div">
                                <h2>TRAINING & PROJECTS</h2>
                                <div className="tr_div">
                                    <h4>TRAINING</h4>
                                    <p>
                                        Lyallpur Khalsa College Technical Campus, Jalandhar for
                                        providing me with four weeks of summer institutional training.
                                    </p>
                                </div>
                                <div className="pro_links">
                                    <h4>PROJECTS</h4>
                                    <ul>
                                        <li><a href="https://devmithlesh.netlify.app/" rel="noopener noreferrer" target="_blank">My Portfolio</a></li>
                                        <li>
                                            <a href="https://foot-by-foot-e-commerce.netlify.app/" rel="noopener noreferrer" target="_blank">Footwear Shopping
                                                Website (Front-End View)</a>
                                        </li>
                                        <li><a href="https://assignment-2-15-9-22.netlify.app/" rel="noopener noreferrer" target="_blank">Figma to Responsive React.js
                                            Design</a></li>
                                        <li><a href="https://food-ordering-hub-mithlesh.netlify.app/" rel="noopener noreferrer" target="_blank">Food Ordering Hub
                                            (Front-End View)</a></li>
                                        <li><a href="https://house-rental-website-by-mithlesh.netlify.app/" rel="noopener noreferrer" target="_blank">Rental Website</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="tech">
                                    <h4>TECHNOLOGY USED</h4>
                                    <p>HTML, CSS, Tailwind CSS</p>
                                </div>
                            </div>
                            {/* <!------------- Border -------------> */}
                            <div className="border_obj after-traning-border">
                                <span className="point_obj"></span>
                            </div>
                            {/* <!------------- Education -------------> */}
                            <div className="education">
                                <h2>EDUCATION</h2>
                                <div className="tenth">
                                    <h4>MATRICULATION</h4>
                                    <span>2016 - 2017</span>
                                    <p>
                                        From 2016 to 2017, I completed my matric education with 80% at M.S.
                                        Memorial School, Beant Nagar, Jalandhar.
                                    </p>
                                </div>
                                <div className="sr-sec">
                                    <h4>SENIOR SECONDARY</h4>
                                    <span>2018 - 2019</span>
                                    <p>
                                        I completed my secondary education with 71% (non-medical) from
                                        Government Model Senior Secondary School, P.A.P. Campus.
                                    </p>
                                </div>
                                <div className="graduation">
                                    <h4>GRADUATION</h4>
                                    <span>2019 - 2022</span>
                                    <p>
                                        Bachelor of Computer Applications from Lyallpur Khalsa
                                        College Technical Campus, Jalandhar
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* <!------------------------- Right Side ------------------ --> */}
                        <div className="pro_skills_div">
                            <div className="border_rightside">
                                <span></span>
                            </div>
                            <div className="div_pro_s">
                                <h2>PRO SKILLS</h2>
                                <div className="skill_type">
                                    <p>HTML</p>
                                    <div className="strength_progress">
                                        <span></span>
                                    </div>
                                </div>
                                <div className="skill_type">
                                    <p>CSS</p>
                                    <div className="strength_progress">
                                        <span></span>
                                    </div>
                                </div>
                                <div className="skill_type">
                                    <p>Tailwind CSS</p>
                                    <div className="strength_progress">
                                        <span></span>
                                    </div>
                                </div>
                                <div className="skill_type">
                                    <p>Bootstrap</p>
                                    <div className="strength_progress">
                                        <span className="progress_color1"></span>
                                    </div>
                                </div>
                                <div className="skill_type">
                                    <p>React.js</p>
                                    <div className="strength_progress">
                                        <span className="progress_color"></span>
                                    </div>
                                </div>
                                <div className="skill_type">
                                    <p>Next.js</p>
                                    <div className="strength_progress">
                                        <span className="progress_color"></span>
                                    </div>
                                </div>
                                <div className="skill_type">
                                    <p>GitHub</p>
                                    <div className="strength_progress">
                                        <span className="progress_color"></span>
                                    </div>
                                </div>
                            </div>
                            {/* <!------------- Border -------------> */}
                            <div className="border_obj after-traning-border">
                                <span className="point_obj"></span>
                            </div>
                            {/* <!------------------- Strengths -------------------> */}
                            <div className="strengths_main">
                                <h2>STRENGTHS</h2>
                                <div className="skill_type">
                                    <p>Punctuality</p>
                                    <div className="strength_progress">
                                        <span></span>
                                    </div>
                                </div>
                                <div className="skill_type">
                                    <p>Hard Work</p>
                                    <div className="strength_progress">
                                        <span></span>
                                    </div>
                                </div>
                                <div className="skill_type">
                                    <p>Team Work</p>
                                    <div className="strength_progress">
                                        <span></span>
                                    </div>
                                </div>
                                <div className="skill_type">
                                    <p>Leadership</p>
                                    <div className="strength_progress">
                                        <span></span>
                                    </div>
                                </div>
                            </div>
                            {/* <!------------- Border -------------> */}
                            <div className="border_obj after-traning-border">
                                <span className="point_obj"></span>
                            </div>
                            {/* <!------------------------ Certificates ---------------------> */}
                            <div>
                                <h2>CERTIFICATIONS</h2>
                                <div className="certi_lang">
                                    <p>HTML, CSS, Tailwind CSS, React.js, and GitHub</p>
                                </div>
                            </div>
                            <div>
                                <h2>LANGUAGES</h2>
                                <div className="certi_lang">
                                    <p>Hindi, Punjabi & English</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Resume
