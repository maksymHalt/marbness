// Robust way to check if it's Node or browser
const checkServer: () => boolean = () => {
  return typeof window === 'undefined';
};

export default checkServer;
