import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./actions";

function Counter() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const value = 2;
  return (
    <div>
      <button onClick={() => dispatch(increment(value))}>+</button>
      <span>{count}</span>
      <button onClick={() => dispatch(decrement(value))}>-</button>
    </div>
  );
}

export default Counter;
