import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTodo } from "./todoSlice";

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case "SHOW_ALL":
      return todos;
    case "SHOW_COMPLETED":
      return todos.filter((t) => t.completed);
    case "SHOW_ACTIVE":
      return todos.filter((t) => !t.completed);
    default:
      return todos;
  }
};

function TodoList() {
  const { todos, filter } = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  const filteredTodos = getVisibleTodos(todos, filter);

  return (
    <ul>
      {filteredTodos.length > 0 ? (
        <>
          {filteredTodos.map((todo) => (
            <li
              key={todo.id}
              onClick={() => dispatch(toggleTodo(todo.id))}
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.text}
            </li>
          ))}
        </>
      ) : (
        <div>Nothing to do</div>
      )}
    </ul>
  );
}

export default TodoList;
