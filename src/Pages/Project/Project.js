import React from "react";
import "./Project.css";
import Pcard from '../../Components/ProjectCard/Pcard';
import Pdata from '../../Components/ProjectCard/Pdata'

function Project() {
  return (
    <>
      <section>
        <div className="wrapper">
          <div className="project_main_div" id="project">
            <h2>
              My <span> Projects</span>
              <div className="animated_div_heading">
                <span></span>
              </div>
            </h2>

            <div className="titleheading">
              <p className="textsub">my static landing page showcases my journey, skills, and accomplishments through elegant HTML , CSS and Js design.</p>
            </div>

            <div className="project_card_main_flex">
              {Pdata.map((val, ind) => {
                return (
                  <Pcard
                    key={ind}
                    image={val.image}
                    alts={val.alts}
                    title={val.title}
                    weblink={val.weblink}
                    button={val.button}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Project;
