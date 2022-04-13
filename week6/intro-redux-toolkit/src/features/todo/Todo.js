import React from "react";
import TodoAdd from "./TodoAdd";
import TodoFilterBtns from "./TodoFilterBtns";
import TodoList from "./TodoList";

function Todo() {
  return (
    <>
      <TodoAdd />
      <TodoList />
      <TodoFilterBtns />
    </>
  );
}

export default Todo;
