export const BREAKPOINTS = {
  T: 1127, // tablet
  M: 767 // mobile
};

export const CONTAINER_WIDTH = {
  D: 1128, // desktop
  T: 768, // tablet
  M: 320 // tablet
};

const mq = (device: keyof typeof BREAKPOINTS): string =>
  `@media only screen and (max-width: ${BREAKPOINTS[device]}px)`;

export default mq;
