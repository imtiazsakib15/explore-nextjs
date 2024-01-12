"use client";
import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  // console.log(counter);
  return (
    <div>
      <h2 className="text-3xl font-bold">counter = {counter}</h2>
      <button
        className="px-4 py-2 border"
        onClick={() => setCounter(counter + 1)}
      >
        Increase
      </button>
      <button
        className="px-4 py-2 border"
        onClick={() => setCounter(counter - 1)}
      >
        Decrease
      </button>
    </div>
  );
};

export default Counter;
