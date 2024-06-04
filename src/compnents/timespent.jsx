

import React, { useState, useEffect } from 'react';
import './TimeSpent.css';

const TimeSpent = () => {
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setElapsedTime((prevTime) => prevTime + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const formattedSeconds = remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds;
    return `${formattedMinutes}:${formattedSeconds}`;
  };

  return (
    <div className="time-spent">
      <p style={{ color: 'white' }}>Time Spent on Page:</p> 
      <div className="elapsed-time">{formatTime(elapsedTime)}</div>
    </div>
  );
};

export default TimeSpent;
