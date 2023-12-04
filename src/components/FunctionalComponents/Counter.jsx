import React, { useState } from "react";
import PropTypes from "prop-types";

function Counter({initialValue}) {
  const [counter, setCounter] = useState(initialValue);

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
  initialValue: PropTypes.number.isRequired
}

export default Counter;
