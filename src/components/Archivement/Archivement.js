import React from "react";
import Archcard from "./Archcard";
import Archdata from "./Archdata";
import "./Archive.css";
function Archivement() {
  return (
    <>
      <section>
        <div className="wrapper">
          <div className="archive_main_div" id="">
            <h2>
              My <span> Archivements</span>
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
