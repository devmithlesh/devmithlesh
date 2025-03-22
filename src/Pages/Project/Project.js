import React, { useEffect, useState } from "react";
import "./Project.css";
import Pcard from '../../Components/ProjectCard/Pcard';
import { Pdata1, newdata } from '../../Components/ProjectCard/Pdata'

function Project() {

  const [tabActive, setIstabActive] = useState(1)

  //window
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const setWindowDimensions = () => {
    setWindowWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', setWindowDimensions);
    return () => {
      window.removeEventListener('resize', setWindowDimensions)
    }
  }, [])

  return (
    <>
      <section>
        <div className="wrapper">
          <div className="project_main_div" id="project">
            <h2>
              My <span> Projects</span>
              <div className="animated_div_heading">
                <span></span>
              </div>
            </h2>

            <div className="titleheading">
              <p className="textsub">A collection of projects crafted with HTML, CSS, and React.js, reflecting my growth, expertise, and passion for front-end development.</p>
            </div>

            <div className="SliderMenuProject mb-20">
              <div className="AdscrolltabWrap">
                <div className={`AdtablabelDrop AdDroptab_1 ${tabActive === 1 && 'active'}`} onClick={() => setIstabActive(1)}>Live Projects</div>

                <div className={`AdtablabelDrop AdDroptab_2 ${tabActive === 2 && 'active'}`} onClick={() => setIstabActive(2)}>Practice Projects</div>
                {windowWidth >= 767 ?
                  <div className="AdIndicator" style={{ left: tabActive === 1 ? '5px' : '176px' }}></div>
                  : <div className="AdIndicator" style={{ left: tabActive === 1 ? '5px' : '162px' }}></div>
                }

              </div>
            </div>


            <div className={`TabVisibal ${tabActive === 1 && 'active'}`}>
              <div className={`project_card_main_flex TabdataAnimate`}>
                {newdata.map((val, ind) => {
                  return (
                    <Pcard
                      key={ind}
                      image={val.image}
                      alts={val.alts}
                      title={val.title}
                      weblink={val.weblink}
                      button={val.button}
                      passage={val.passage}
                    />
                  );
                })}
              </div>
            </div>

            <div className={`TabVisibal ${tabActive === 2 && 'active'}`}>
              <div className={`project_card_main_flex TabdataAnimate`}>
                {Pdata1.map((val, ind) => {
                  return (
                    <Pcard
                      key={ind}
                      image={val.image}
                      alts={val.alts}
                      title={val.title}
                      weblink={val.weblink}
                      button={val.button}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Project;
