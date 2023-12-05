import React, { useReducer } from "react";
import { initialState } from "./InitialValue";
import { counterReducer } from "./ReducerFunction";

export default function Counter() {
  const [state, dispatch] = useReducer(counterReducer, initialState);
  return (
    <div>
      <h4>useReducer</h4>
      <h4>Counter : {state.count}</h4>
      <button type="button" onClick={ () => dispatch({type: 'INCREMENT'}) }>Increment</button>
      <button type="button" onClick={ () => dispatch({type: 'DECREMENT'})}>Deccrement</button>
      <button type="button" onClick={ () => dispatch({type: 'RESET'})}>Reset</button>
    </div>
  );
}
