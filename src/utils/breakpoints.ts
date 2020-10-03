const breakpoints = {
  T: 1128, // tablet
  M: 768 // mobile
};

const mq = (device: keyof typeof breakpoints): string =>
  `@media only screen and (max-width: ${breakpoints[device] - 1}px)`;

export default mq;
