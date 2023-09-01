import React, { useState, useEffect } from "react";

const Counter = ({ endNumber, duration }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (count < endNumber) {
        setCount(count + 1);
      }
    }, duration);

    return () => clearInterval(interval);
  }, [count, endNumber]);

  return <>{count}</>;
};

export default Counter;
