import React from "react";
import useLocalStorage from "./useLocalStorage";

function CounterWithLocalStorage() {
  const [counter, setCounter] = useLocalStorage("counter", 0);

  return (
    <div>
      <h1>Counter with LocalStorage: {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <button onClick={() => setCounter(counter - 1)}>Decrement</button>
    </div>
  );
}

export default CounterWithLocalStorage;
