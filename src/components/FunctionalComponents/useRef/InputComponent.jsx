import React, { useState, useEffect, useRef } from "react";
export default function InputComponent() {
  const [data, setData] = useState("");
  const prevData = useRef("");
  const renderCount = useRef(0);
  const inputElement = useRef("");

  useEffect(() => {
    prevData.current = data;
  }, [data]);

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });

  return (
    <div>
      <h4>Input Element</h4>
      <h4>Rendering Count : {renderCount.current}</h4>
      <h4>Current Value : {data}</h4>
      <h4>Previous Value : {prevData.current}</h4>
      <input
        type="text"
        ref={inputElement}
        onChange={(e) => setData(e.target.value)}
      />
      <br />
      <button type="button" onClick={() => inputElement.current.focus()}>
        Submit
      </button>
      <br />
    </div>
  );
}
