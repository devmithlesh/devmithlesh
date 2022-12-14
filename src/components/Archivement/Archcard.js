import React from "react";
import "./Archive.css";
function Archcard(props) {
  return (
    <>
      <div className="card_arvhivements_div">
        <div className="image_div_in_achive">
          <a
            href={props.image}
            target="_blank"
            rel="noopener noreferrer"
            className="shine_achive_img"
          >
            <img src={props.image} alt={props.alts} />
          </a>
          {/* eyes icons */}
          <div className="eyes_img">
            <a href={props.image} target="_blank" rel="noopener noreferrer">
              View
            </a>
          </div>
        </div>
        <h4>{props.title}</h4>
        <p>{props.pass}</p>
      </div>
    </>
  );
}

export default Archcard;
