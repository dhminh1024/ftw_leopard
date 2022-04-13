import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTodo, getTodos } from "./todoSlice";

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
  const {
    todos: todoIDs,
    todosById,
    filter,
  } = useSelector((state) => state.todo);
  const todos = todoIDs.map((id) => todosById[id]);

  const dispatch = useDispatch();
  const filteredTodos = getVisibleTodos(todos, filter);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(getTodos(page));
  }, [dispatch, page]);

  return (
    <>
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
      <button
        style={{ marginBottom: "5rem" }}
        onClick={() => setPage((page) => page + 1)}
      >
        Load more
      </button>
    </>
  );
}

export default TodoList;
