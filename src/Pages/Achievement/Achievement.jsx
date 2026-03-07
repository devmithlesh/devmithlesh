import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Archdata from "../../Components/AchievCard/Archdata";
import "./Archive.css";

gsap.registerPlugin(ScrollTrigger);

function Achievement() {
  const sectionRef = useRef(null);

  const getBadge = (skill) =>
    skill
      .split(/[\s/-]+/)
      .filter(Boolean)
      .map((part) => part[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".achievement_heading_block", {
        y: 42,
        autoAlpha: 0,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.from(".achievement_textsub", {
        y: 28,
        autoAlpha: 0,
        duration: 0.65,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".achievement_intro_wrap",
          start: "top 82%",
        },
      });

      gsap.from(".achievement_highlight_box", {
        y: 28,
        autoAlpha: 0,
        duration: 0.55,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".achievement_highlights",
          start: "top 84%",
        },
      });

      gsap.fromTo(
        ".achievement-progress",
        { scaleY: 0, transformOrigin: "top center" },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: ".achievement-timeline-track",
            start: "top 76%",
            end: "bottom 78%",
            scrub: true,
          },
        }
      );

      gsap.utils.toArray(".achievement-timeline-item").forEach((item) => {
        const card = item.querySelector(".achievement-timeline-card");
        const badge = item.querySelector(".achievement-marker-badge");
        const dot = item.querySelector(".achievement-marker-dot");
        const isLeft = item.dataset.side === "left";

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: item,
            start: "top 82%",
            toggleActions: "play none none reverse",
          },
        });

        timeline
          .fromTo(
            card,
            {
              autoAlpha: 0,
              x: isLeft ? -90 : 90,
              y: 44,
            },
            {
              autoAlpha: 1,
              x: 0,
              y: 0,
              duration: 0.7,
              ease: "power3.out",
            }
          )
          .fromTo(
            badge,
            {
              autoAlpha: 0,
              scale: 0.6,
              rotate: isLeft ? -16 : 16,
            },
            {
              autoAlpha: 1,
              scale: 1,
              rotate: 0,
              duration: 0.4,
              ease: "back.out(1.8)",
            },
            "-=0.42"
          )
          .fromTo(
            dot,
            {
              autoAlpha: 0,
              scale: 0.2,
            },
            {
              autoAlpha: 1,
              scale: 1,
              duration: 0.25,
              ease: "back.out(2)",
            },
            "-=0.28"
          );
      });
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <>
      <section id="achievement" data-section="achievement" ref={sectionRef}>
        <div className="wrapper">
          <div className="archive_main_div" data-reveal="section">
            <div className="achievement_heading_block">
              <h2 data-reveal="heading">
                My <span className="text_h2_yellow"> Achievements</span>
                <div className="animated_div_heading">
                  <span></span>
                </div>
              </h2>
            </div>

            <div className="achievement_intro_wrap" data-reveal="content">
              <p className="textsub achievement_textsub">
                A focused learning track built around front-end development,
                responsive interfaces, and modern UI implementation with HTML,
                CSS, JavaScript, React, and Tailwind CSS.
              </p>
              <div className="achievement_highlights">
                <div className="achievement_highlight_box">
                  <strong>6+</strong>
                  <span>Verified Certificates</span>
                </div>
                <div className="achievement_highlight_box">
                  <strong>Core Stack</strong>
                  <span>HTML, CSS, JavaScript, React, Tailwind</span>
                </div>
                <div className="achievement_highlight_box">
                  <strong>Outcome</strong>
                  <span>Stronger UI delivery and frontend problem solving</span>
                </div>
              </div>
            </div>

            <div className="achievement-timeline-track" data-reveal="content">
              <div className="achievement-line"></div>
              <div className="achievement-progress"></div>

              {Archdata.map((val, ind) => {
                const side = ind % 2 === 0 ? "left" : "right";

                return (
                  <article
                    key={`${val.title}-${ind}`}
                    className="achievement-timeline-item"
                    data-side={side}
                  >
                    <div
                      className={`achievement-timeline-card achievement-timeline-card-${side}`}
                    >
                      <span className="achievement-step">
                        {String(ind + 1).padStart(2, "0")}
                      </span>

                      <div className="achievement-card-media">
                        <a
                          href={val.image}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="achievement-card-thumb"
                        >
                          <img src={val.image} alt={val.alts} />
                        </a>
                      </div>

                      <div className="achievement-card-copy">
                        <div className="achievement-card-meta">
                          <span className="achievement-skill">{val.skill}</span>
                          <span className="achievement-issuer">{val.issuer}</span>
                        </div>

                        <h3>{val.title}</h3>
                        <p>{val.pass}</p>

                        <a
                          href={val.image}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="achievement_cta"
                        >
                          View Certificate
                        </a>
                      </div>
                    </div>

                    <div className="achievement-marker">
                      <div className="achievement-marker-dot"></div>
                      <div className="achievement-marker-badge">
                        {getBadge(val.skill)}
                      </div>
                    </div>

                    <div className="achievement-spacer" aria-hidden="true"></div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Achievement;
