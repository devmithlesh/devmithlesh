import React from "react";
import img from "../../Images/projects/1.jpg";
import "./Project.css";
function Pcard(props) {
  return (
    <>
      <div>
        <div className="card_project">
          <img src={props.image} alt={props.alts} />
          <div className="content_div_project">
            <h4>{props.title}</h4>
            <p>Architect & Engineer</p>
            <div className="code_view_div">
              <a href={props.button} target="_blank" rel="noopener noreferrer">
                View Code
              </a>
              <a href={props.button} target="_blank" rel="noopener noreferrer">
                Live Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Pcard;
