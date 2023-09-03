import React from "react";
function Pcard(props) {
  return (
    <>
      <div>
        <div className="card_project">
          <img src={props.image} alt={props.alts} />
          <div className="content_div_project">
            <h4>{props.title}</h4>
            <p>{props.subtext}</p>
            <div className="code_view_div">
              <a className="btnsame" href={props.button} target="_blank" rel="noopener noreferrer">
                View Code
              </a>
              <a className="btnsame" href={props.weblink} target="_blank" rel="noopener noreferrer">
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
