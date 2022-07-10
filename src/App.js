import React from "react";
import { useSelector, useDispatch } from "react-redux";

const App = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch({ type: "INC" });
  };

  const decrement = () => {
    dispatch({ type: "DEC" });
  };

  const addBy = () => {
    dispatch({ type: "ADD", payload: 10 });
  };

  const removeBy = () => {
    dispatch({ type: "SUB", payload: -10 });
  };

  const multiplyBy = () => {
    dispatch({ type: "MUL", payload: 2 });
  };
  const divideBy = () => {
    dispatch({ type: "DIV", payload: 2 });
  };

  return (
    <div>
      <h1>Counter App</h1>
      <h2>{counter}</h2>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <br />
      <button onClick={addBy}>Add Value by 10</button>
      <button onClick={removeBy}>remove Value by 10</button>
      <br />
      <button onClick={multiplyBy}>Multiply by 2</button>
      <button onClick={divideBy}>Divide by 2</button>
    </div>
  );
};

export default App;
