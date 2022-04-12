import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADD_COUNTER, DECREMENT, INCREMENT } from "./reducer";

function MultiCounter() {
  const counters = useSelector((state) => state.multiCounter);
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch({ type: ADD_COUNTER })}>
        Add new Counter
      </button>
      {counters.map((counter, index) => (
        <div key={index}>
          <button onClick={() => dispatch({ type: INCREMENT, payload: index })}>
            +
          </button>
          {counter.count}
          <button onClick={() => dispatch({ type: DECREMENT, payload: index })}>
            -
          </button>
        </div>
      ))}
    </div>
  );
}

export default MultiCounter;
