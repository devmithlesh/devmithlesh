import React from "react";
import TiltCard from "../TiltCard/TiltCard";

function Archcard(props) {
  return (
    <>
      <TiltCard tiltMaxAngleX={10} tiltMaxAngleY={10}>
        <a
          className="achievement_card_link"
          href={props.image}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="card_project" data-reveal="card">
            <img src={props.image} alt={props.alts} />
            <div className="content_div_project">
              <h4>{props.title}</h4>
              <p title={props.pass}>{props.pass}</p>
            </div>
          </div>
        </a>
      </TiltCard>
    </>
  );
}

export default Archcard;
