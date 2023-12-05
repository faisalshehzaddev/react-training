import React, { useState, useMemo } from "react";
export default function MemoCounter() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const calculation = useMemo(() => expensiveCalculations(count1), [count1])
  return (
    <div>
      <br />
      <h4>Expensive Counter as Value using Memo</h4>
      <h4>Counter1 : {count1}</h4>
      <button type="button" onClick={()=>setCount1(count1 + 1)}>
        Increment1
      </button>
      <br />
      <h4>Calculations : {calculation}</h4>
      <br />
      <h4>Counter2 : {count2}</h4>
      <button type="button" onClick={()=>setCount2(count2 + 1)}>
        Increment2
      </button>
      <br />
    </div>
  );
}

function expensiveCalculations(count){
  console.log("Calculating...", count);
  for(let i=0; i<1000000000; i++){
    count = count + 1;
  }
  console.log("Ending Calculation...", count);
  return count
}
