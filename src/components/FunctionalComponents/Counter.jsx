import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

function Counter({ initialValue }) {
  const [counter, setCounter] = useState(initialValue);

  // component did mount on 1st iteration
  // component did update when updated
  // compoent will mount when component is destroyed
  useEffect(() => {
    console.log("component loaded", counter);
    return () => {
      console.log("component will mount");
    };
  }, [counter]);

  return (
    <div>
      <h1>Counter {counter}</h1>
      <button type="button" onClick={() => setCounter(counter + 1)}>
        Increment
      </button>
      <button type="button" onClick={() => setCounter(counter - 1)}>
        Decrement
      </button>
    </div>
  );
}

Counter.propTypes = {
  initialValue: PropTypes.number.isRequired,
};

export default Counter;
