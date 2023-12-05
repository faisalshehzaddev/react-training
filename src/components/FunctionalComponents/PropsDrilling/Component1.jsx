import React, { useState } from "react";
import Component2 from "./Component2";

function Component1() {
  const [data, setData] = useState("Faisal");
  return (
    <div>
      <h4>Component1</h4>
      <Component2 data={data} />
    </div>
  );
}

export default Component1;
