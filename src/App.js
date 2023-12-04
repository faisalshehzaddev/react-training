import logo from "./logo.svg";
import "./App.css";
import ClassCounter from "./components/ClassComponents/Counter";
import FunctionalCounter from "./components/FunctionalComponents/Counter";
import { useState } from "react";

function App() {
  const [showClassCounter, setShowClassCounter] = useState(false);
  const [showFunctionalCounter, setFunctionalCounter] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <div>
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
      </header>
    </div>
  );
}

export default App;
