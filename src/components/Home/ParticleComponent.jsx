import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadBubblesPreset } from "@tsparticles/preset-bubbles";
import { tsParticles, MoveDirection, OutMode } from "@tsparticles/engine";
import "./ParticleComponent.css";
export const ParticleComponent = () => {
  const [init, setInit] = useState(false);
  useEffect(() => {
    initParticlesEngine(async () => {
      await loadBubblesPreset(tsParticles);

      await tsParticles.load({
        id: "tsparticles",
        options: {
          preset: "bubbles",
        },
      });
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(() => ({
    fpsLimit: 120,
    particles: {
      color: {
        value: "random",
      },
      shape: {
        type: "circle",
      },
      opacity: {
        value: 0.3,
      },
      size: {
        value: { min: 5, max: 10 },
      },
      move: {
        angle: {
          offset: 0,
          value: 30,
        },
        enable: true,
        speed: 15,
        direction: MoveDirection.top,
        random: false,
        straight: false,
        outModes: {
          default: OutMode.destroy,
        },
      },
    },
    detectRetina: true,
    background: {
      color: "#ffff",
    },
    emitters: [
      {
        direction: MoveDirection.top,
        position: {
          y: 100,
        },
        life: {
          duration: 3,
          delay: 5,
          count: 0,
        },
      },
    ],
  }));

  if (init) {
    return (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
      />
    );
  }

  return <></>;
};
