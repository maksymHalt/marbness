import { useState } from 'react';

const useForceUpdate = (): (() => void) => {
  const [, set] = useState({});
  const forceUpdate = () => {
    set({});
  };
  return forceUpdate;
};

export default useForceUpdate;
