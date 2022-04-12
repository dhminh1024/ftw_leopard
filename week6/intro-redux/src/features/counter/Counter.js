import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { DECREMENT, INCREMENT } from "./reducer";

function Counter() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const value = 2;
  return (
    <div>
      <button onClick={() => dispatch({ type: INCREMENT, payload: value })}>
        +
      </button>
      <span>{count}</span>
      <button onClick={() => dispatch({ type: DECREMENT, payload: value })}>
        -
      </button>
    </div>
  );
}

export default Counter;
