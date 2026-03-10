import React from "react";
import Particles from "react-tsparticles";

const ParticlesBg = () => {
  return (
    <Particles
      options={{
        fullScreen: { enable: false },
        background: { color: "transparent" },
        particles: {
          number: { value: 40 },
          size: { value: 3 },
          move: { enable: true, speed: 1 },
          opacity: { value: 0.4 },
          color: { value: "#ffffff" }
        }
      }}
    />
  );
};

export default ParticlesBg;