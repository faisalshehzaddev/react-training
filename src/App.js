import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/ClassComponents/Counter";
import { useState } from "react";

function App() {
  const [showCounter, setShowCounter] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <button type="button" onClick={() => {setShowCounter(!showCounter)}}>Hide/Unhide</button>
        {showCounter && <Counter />}</header>
    </div>
  );
}

export default App;
