import React, { useState } from "react";
import "./App.css";

export default () => {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <div>Count: {count}</div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Add One
      </button>
    </div>
  );
};
