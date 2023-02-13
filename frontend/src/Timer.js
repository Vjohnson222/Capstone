import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [count, setCount] = useState(10);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (isRunning && count > 0) {
      const intervalId = setInterval(() => {
        setCount((prevCount) => prevCount - 1);
      }, 1000);

      return () => clearInterval(intervalId);
    }
  }, [count, isRunning]);

  const handleStart = () => {
    setIsRunning(true);
  };

  return (
    <div>
      <h6 className="camera--trigger2">{count}</h6>
      {!isRunning && <button className="camera--trigger3" onClick={handleStart}>Start</button>}
    </div>
  );
};

export default Timer;
