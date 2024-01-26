const config = {
  fpsLimit: 120,
  background: {
    position: 'absolute',
    size: 'cover',
  },
  fullScreen: {
    enable: false,
    zIndex: 0,
  },
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: "repulse",
      },
      onHover: {
        enable: false,
        mode: "grab",
      },
    },
    modes: {
      repulse: {
        distance: 200,
        duration: 5,
        speed: .75,
        maxSpeed: 1.25,
      },
      grab: {
        distance: 175,
        duration: 3,
      }
    },
  },
  particles: {
    collisions: {
      enable: false,
    },
    color: {
      value: "#ffffff",
    },
    links: {
      color: "#ffffff",
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
    move: {
      direction: "none",
      enable: true,
      outModes: {
        default: "bounce",
      },
      random: false,
      speed: .25,
      straight: false,
    },
    number: {
      density: {
        enable: true,
      },
      limit: 200,
      value: 88,
    },
    opacity: {
      value: 0.7,
    },
    shape: {
      type: "circle",
    },
    size: {
      value: {
        min: 1,
        max: 3
      },
    },
  },
  detectRetina: true,
}

export default config;
