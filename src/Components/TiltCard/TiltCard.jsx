import React from "react";
import Tilt from "react-parallax-tilt";

function TiltCard({
  children,
  className = "",
  perspective = 1400,
  tiltMaxAngleX = 12,
  tiltMaxAngleY = 12,
  scale = 1.02,
}) {
  return (
    <Tilt
      className={`tilt-card-shell ${className}`.trim()}
      perspective={perspective}
      tiltMaxAngleX={tiltMaxAngleX}
      tiltMaxAngleY={tiltMaxAngleY}
      scale={scale}
      transitionSpeed={1200}
      glareEnable
      glareMaxOpacity={0.14}
      glareColor="#ffffff"
      glarePosition="all"
      gyroscope={false}
    >
      {children}
    </Tilt>
  );
}

export default TiltCard;
