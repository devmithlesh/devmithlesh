import React from "react";
import Pdata from "./Pdata";
import Pcard from "./Pcard";
import "./Project.css";
function Project() {
  return (
    <>
      <section>
        <div className="wrapper">
          <div className="project_main_div" id="project">
            <h2>
              My <span> Projects</span>
            </h2>
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
