import React, { useState, useEffect } from "react";

const useTimer = () => {
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(currentTime + 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  });

  return currentTime;
};

const Timer = () => {
  const currentTime = useTimer();

  return (
    <>
      <div className="loader" />
      <div className="time">{currentTime}s</div>
    </>
  );
};

export default Timer;
