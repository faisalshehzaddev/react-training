import React from 'react';
import useLocalStorage from './useLocalStorage';

function CounterWithLocalStorage() {
  const [counter, setCounter] = useLocalStorage('counter', 0);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };

  return (
    <div>
      <h1>Counter with LocalStorage: {counter}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default CounterWithLocalStorage;
