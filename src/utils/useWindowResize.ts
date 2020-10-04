import { useCallback, useEffect } from 'react';

const useWindowResize = (handler: GlobalEventHandlers['onresize']): void => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const resizeHandler = useCallback(handler, []);
  useEffect(() => {
    window.addEventListener('resize', resizeHandler);
    resizeHandler.call(window);
    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, [resizeHandler]);
};

export default useWindowResize;
