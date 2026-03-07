import React from "react";
import Archdata from '../../Components/AchievCard/Archdata'
import Archcard from '../../Components/AchievCard/Archcard'
import "./Archive.css";

function Achievement() {
  return (
    <>
      <section>
        <div className="wrapper">
          <div className="archive_main_div" id="achievement">
            <h2>
              My <span className="text_h2_yellow"> Achievements</span>
              <div className="animated_div_heading">
                <span></span>
              </div>
            </h2>


            <div className="titleheading">
              <p className="textsub">Pursuing a career as a front-end developer, equipped with online certificates in HTML, CSS, JavaScript, and React.js.</p>
            </div>

            <div className="archive_card_three">
              {Archdata.map((val, ind) => {
                return (
                  <Archcard
                    key={ind}
                    image={val.image}
                    alts={val.alts}
                    title={val.title}
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

export default Achievement;
