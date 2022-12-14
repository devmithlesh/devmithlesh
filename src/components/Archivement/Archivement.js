import React from "react";
import Archcard from "./Archcard";
import Archdata from "./Archdata";
import "./Archive.css";
function Archivement() {
  return (
    <>
      <section>
        <div className="wrapper">
          <div className="archive_main_div" id="archivement">
            <h2>
              My <span className="text_h2_yellow"> Archivements</span>
              <div className="animated_div_heading">
                <span></span>
              </div>
            </h2>
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

export default Archivement;
