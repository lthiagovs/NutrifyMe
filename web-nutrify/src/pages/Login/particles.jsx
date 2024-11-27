// src/components/Particles.jsx
import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticlesBackground = () => {
  const particlesInit = async (main) => {
    await loadFull(main); // Carrega o pacote completo
  };

  const particlesLoaded = (container) => {
    console.log("Particles Loaded:", container);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fullScreen: { enable: true },
        particles: {
          number: { value: 100 },
          size: { value: 3 },
          move: { enable: true, speed: 2 },
          opacity: { value: 0.7 },
          links: {
            enable: true,
            color: "#ffffff",
            distance: 150,
          },
        },
        background: {
          color: "#000000", // Fundo preto
        },
      }}
    />
  );
};

export default ParticlesBackground;
