import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import TodoAdd from "./TodoAdd";
import TodoFilterBtns from "./TodoFilterBtns";
import TodoList from "./TodoList";

function Todo() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  return (
    <>
      <TodoAdd />
      <TodoList />
      <TodoFilterBtns />
    </>
  );
}

export default Todo;
