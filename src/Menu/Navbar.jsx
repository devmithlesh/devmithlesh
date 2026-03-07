import React, { useEffect, useMemo, useState } from "react";
import "./Nav.css";

const navItems = [
  { id: "home", icon: "fa-house-user", label: "Home" },
  { id: "about_us", icon: "fa-address-card", label: "About" },
  { id: "project", icon: "fa-file", label: "Projects" },
  { id: "achievement", icon: "fa-trophy", label: "Achievements" },
  { id: "education", icon: "fa-user-graduate", label: "Education" },
  { id: "contact", icon: "fa-message", label: "Contact" },
];

function Navbar({ setisActive, isHidden }) {
  const [activeSection, setActiveSection] = useState("home");
  const sections = useMemo(() => navItems.map((item) => item.id), []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry?.target?.id) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      {
        threshold: [0.2, 0.45, 0.7],
        rootMargin: "-15% 0px -35% 0px",
      }
    );

    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);

      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [sections]);

  return (
    <>
      <div className="navbar_main_div">
        <div className="nav_bar_main">
          {!isHidden && (
            <button type="button" className="dark-mode" onClick={() => setisActive(true)} aria-label="Open theme settings">
              <i className="fa-solid fa-gear"></i>
            </button>
          )
          }
          <div className="menu_options">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={activeSection === item.id ? "active_home" : ""}
                aria-label={item.label}
                title={item.label}
              >
                <i className={`fa-solid ${item.icon}`}></i>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
