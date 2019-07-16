import { useEffect } from "react";

const useTimeout = (callback: Function, duration: number = 0): void => {
  useEffect(() => {
    const timer = setTimeout(() => {
      callback();
    }, duration);

    return () => {
      clearTimeout(timer);
    };
  });
};

export default useTimeout;
