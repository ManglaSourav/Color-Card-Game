import React from "react";
const { useState, useEffect } = React;

export const useCount = initialValue => {
  const [counter, setCounter] = useState(initialValue);
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(counter => counter + 1);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return [counter, setCounter];
};
