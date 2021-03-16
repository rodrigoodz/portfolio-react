import React from "react";
import Particles from "react-particles-js";

const ParticlesEffect = () => {
  return (
    <Particles
      width="100"
      params={{
        fullScreen: {
          enable: true,
          zIndex: 0,
        },
        interactivity: {
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 40,
            },
            grab: {
              distance: 400,
            },
          },
        },
        particles: {
          collisions: {
            enable: true,
          },
          color: {
            value: "#ffffff",
          },
          links: {
            color: {
              value: "#ffffff",
            },

            opacity: 0,
          },
          move: {
            attract: {
              rotate: {
                x: 600,
                y: 1200,
              },
            },
            enable: true,
            outModes: {
              default: "bounce",
              bottom: "bounce",
              left: "bounce",
              right: "bounce",
              top: "bounce",
            },
            speed: 5,
          },
          number: {
            density: {
              enable: true,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
            animation: {
              minimumValue: 0.1,
              speed: 1,
            },
          },
          size: {
            random: {
              enable: true,
              minimumValue: 10,
            },
            value: 15,
            animation: {
              minimumValue: 0.1,
              speed: 40,
            },
          },
        },
      }}
    />
  );
};

export default ParticlesEffect;
