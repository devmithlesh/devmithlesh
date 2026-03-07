import React from "react";
import TiltCard from "../TiltCard/TiltCard";

function Archcard(props) {
  return (
    <>
      <TiltCard tiltMaxAngleX={10} tiltMaxAngleY={10}>
        <div className="card_arvhivements_div" data-reveal="card">
          <div className="image_div_in_achive">
            <a
              href={props.image}
              target="_blank"
              rel="noopener noreferrer"
              className="shine_achive_img"
            >
              <img src={props.image} alt={props.alts} />
              <div className="eyes_img">
                <span>Preview Certificate</span>
              </div>
            </a>
          </div>
          <div className="achievement_card_content">
            <div className="achievement_meta_row">
              <span className="achievement_skill_tag">{props.skill}</span>
              <span className="achievement_issuer">{props.issuer}</span>
            </div>
            <h4>{props.title}</h4>
            <p>{props.pass}</p>
            <a
              href={props.image}
              target="_blank"
              rel="noopener noreferrer"
              className="achievement_cta"
            >
              View Certificate
            </a>
          </div>
        </div>
      </TiltCard>
    </>
  );
}

export default Archcard;
