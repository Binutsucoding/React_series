import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);

  const increaseValue = () => {
    setCounter(counter + 1);
  };

  const decreaseValue = () => {
    if (counter <= 0) {
      alert("Counter is already at 0 ypu can not decrease in negative number");
    } else {
      setCounter(counter - 1);
    }
  };

  const resetValue = () => {
    setCounter(0);
  };
  return (
    <>
      <h1>Hello we are learning react</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={increaseValue}>Add Value</button>
      <br />
      <br />
      <button onClick={decreaseValue}>Decrease Value</button>
      <br />
      <br />
      <button onClick={resetValue}>Reset Value</button>
    </>
  );
}

export default App;
