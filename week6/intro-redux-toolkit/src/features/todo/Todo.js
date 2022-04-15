import React, { useEffect } from "react";
import TodoAdd from "./TodoAdd";
import TodoFilterBtns from "./TodoFilterBtns";
import TodoList from "./TodoList";

function Todo() {
  return (
    <>
      <TodoList />
      <TodoAdd />
      {/* <TodoFilterBtns /> */}
    </>
  );
}

export default Todo;
