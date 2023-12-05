import React, { useState, createContext } from "react";
import Component2 from "./Component2";
import { DataContext } from "./MainContext";


function Component1() {
  const [data, setData] = useState("Faisal");
  return (
    <div>
      <h4>Component1</h4>
      <DataContext.Provider value={data}>
        <Component2 />
      </DataContext.Provider>
    </div>
  );
}

export default Component1;
