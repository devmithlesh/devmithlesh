import React from "react";
import "./Archive.css";
function Archcard(props) {
  return (
    <>
      <div className="card_arvhivements_div">
        <img src={props.image} alt={props.alts} />
        <h4>{props.title}</h4>
        <p>{props.pass}</p>
      </div>
    </>
  );
}

export default Archcard;
