import React, { memo } from "react";
function ChildCounter({ state, func }) {
  console.log("ChildCounter");
  return (
    <div>
      <h4>Counter 2 : {state}</h4>
      <button type="button" onClick={func}>
        Decrement
      </button>
    </div>
  );
}

export default memo(ChildCounter);
