import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

function UseRef(props) {
  const [count, setCount] = useState(60);
  const timerId = useRef();
  const prevCount = useRef();
  const h1Ref = useRef();
  const handleStart = () => {
    timerId.current = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);
  };
  useEffect(() => {
    prevCount.current = count;
  }, [count]);
  useEffect(() => {
    console.log(h1Ref.current);
  });
  const handleStop = () => {
    clearInterval(timerId.current);
  };
  console.log(count, prevCount.current);
  return (
    <div style={{ padding: 20 }}>
      <h1 ref={h1Ref}>{count}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
}

export default UseRef;
