const particlesConfig = {
  background: { color: "transparent" },
  particles: {
    number: { value: 120 },
    color: { value: "#ff0000" },
    opacity: {
      value: 0.5,
      random: true,
    },
    size: {
      value: { min: 1, max: 3 },
    },
    move: {
      enable: true,
      speed: 0.4,
      direction: "none",
    },
  },
};

export default particlesConfig;
