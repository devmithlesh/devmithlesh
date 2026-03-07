import React from "react";
import TiltCard from "../TiltCard/TiltCard";
function Pcard(props) {
  return (
    <>
      <div>
        <TiltCard tiltMaxAngleX={12} tiltMaxAngleY={12}>
          <div className="card_project" data-reveal="card">
            <img src={props.image} alt={props.alts} />
            <div className="content_div_project">
              <h4>{props.title}</h4>
              <p title={props.passage}>{props.passage}</p>
              <div className="code_view_div">
                {
                  props.button && <a className="btnsame" href={props.button} target="_blank" rel="noopener noreferrer">
                    View Code
                  </a>
                }

                <a className="btnsame" href={props.weblink} target="_blank" rel="noopener noreferrer">
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </TiltCard>
      </div>
    </>
  );
}

export default Pcard;
