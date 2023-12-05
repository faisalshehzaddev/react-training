import logo from "./logo.svg";
import "./App.css";
import ClassCounter from "./components/ClassComponents/Counter";
import FunctionalCounter from "./components/FunctionalComponents/Counter";
import PropsDrilling from "./components/FunctionalComponents/PropsDrilling/Component1";
import PropsDrillingSolution from "./components/FunctionalComponents/PropsDrillingSolution/Component1";
import ReducerCounter from "./components/FunctionalComponents/useReducer/Counter";
import ExpensiveCounter from "./components/FunctionalComponents/Memoization/Value/ExpensiveCounter";
import MemoCounter from "./components/FunctionalComponents/Memoization/Value/MemoCounter";
import ExpensiveFunctionCounter from "./components/FunctionalComponents/Memoization/Function/ExpensiveFunctionCounter";
import { useState } from "react";
import InputComponent from "./components/FunctionalComponents/useRef/InputComponent";
import CounterWithLocalStorage from "./components/FunctionalComponents/CustomHooks/CounterWithLocalStorage";
function App() {
  const [showClassCounter, setShowClassCounter] = useState(false);
  const [showFunctionalCounter, setFunctionalCounter] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <CounterWithLocalStorage />
          <br />
          <br />
          <InputComponent />
          <br />
          <h1>Class Component</h1>
          <button
            type="button"
            onClick={() => {
              setShowClassCounter(!showClassCounter);
            }}
          >
            Hide/Unhide
          </button>
          {showClassCounter && <ClassCounter />}
        </div>
        <br />
        <div>
          <h1>Functional Component</h1>
          <button
            type="button"
            onClick={() => {
              setFunctionalCounter(!showFunctionalCounter);
            }}
          >
            Hide/Unhide
          </button>
          {showFunctionalCounter && <FunctionalCounter initialValue={0} />}
        </div>
        <br />
        <h4>Props Drilling</h4>
        <PropsDrilling />
        <br />
        <h4>Props Drilling Solution</h4>
        <PropsDrillingSolution />
        <br />
        <ReducerCounter />
        <br />
        <ExpensiveCounter />
        <br />
        <MemoCounter />
        <br />
        <ExpensiveFunctionCounter />
        <br />
      </header>
    </div>
  );
}

export default App;
