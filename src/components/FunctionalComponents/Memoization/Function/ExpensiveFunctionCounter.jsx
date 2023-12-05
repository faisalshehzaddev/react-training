import React, { useState, useCallback } from "react";
import ChildCounter from "./ChildCounter";

export default function ExpensiveFunctionCounter() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  // this function was nedelessly re-created when the counter1 was changed. when the counter1 was changed then
  // component re-render then the function re-created again due to the referencial
  // const decrement = () => {
  //   setCount2(count2 - 1);
  // };

  const decrement = useCallback(() => {
    setCount2(count2 - 1);
  }, [count2]);

  return (
    <div>
      <h4>Nedelessly created function</h4>
      <h4>Counter 1 : {count1}</h4>
      <button type="button" onClick={() => setCount1(count1 - 1)}>
        Decrement
      </button>
      <br />
      <ChildCounter state={count2} func={decrement} />
    </div>
  );
}
