import { createStore } from "redux";

const reducerFn = (state = { counter: 0 }, action) => {
  // Syncronous Function
  // We should not mutate the orignal state

  if (action.type === "INC") {
    return { counter: state.counter + 1 };
  }

  if (action.type === "DEC") {
    return { counter: state.counter - 1 };
  }

  if (action.type === "ADD") {
    return { counter: state.counter + action.payload };
  }

  if (action.type === "SUB") {
    return { counter: state.counter + action.payload };
  }

  if (action.type === "MUL") {
    return { counter: state.counter * action.payload };
  }

  if (action.type === "DIV") {
    return { counter: state.counter / action.payload };
  }

  return state;
};

const store = createStore(reducerFn);
export default store;
