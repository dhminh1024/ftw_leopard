import { createSlice } from "@reduxjs/toolkit";
import apiService from "../../app/apiService";

const initialState = {
  todos: [],
  filter: "SHOW_ALL",
  isLoading: false,
  error: null,
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.isLoading = true;
    },
    hasError: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    addTodoSuccess: (state, action) => {
      state.isLoading = false;
      state.error = null;
      const { id, text } = action.payload;
      const newTodo = { id, text, completed: false };
      state.todos.push(newTodo);
    },
    toggleTodoSuccess: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.todos = state.todos.map((todo) => {
        if (todo.id !== action.payload.id) return todo;
        return { ...todo, completed: !todo.completed };
      });
    },
    setFilter: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.filter = action.payload;
    },
  },
});

export default todoSlice.reducer;

export const { setFilter } = todoSlice.actions;

export const addTodo = (text) => async (dispatch) => {
  dispatch(todoSlice.actions.startLoading());
  try {
    const response = await apiService.post("/todos", {
      text,
      completed: false,
    });
    dispatch(todoSlice.actions.addTodoSuccess(response.data));
  } catch (error) {
    dispatch(todoSlice.actions.hasError(error.message));
  }
};

const selectTodos = (state) => state.todo.todos;

export const toggleTodo = (id) => async (dispatch, getState) => {
  let todo = selectTodos(getState()).find((todo) => todo.id === id);
  todo = { ...todo, completed: !todo.completed };

  dispatch(todoSlice.actions.startLoading());
  try {
    const response = await apiService.put(`/todos/${id}`, todo);
    dispatch(todoSlice.actions.toggleTodoSuccess(response.data));
  } catch (error) {
    dispatch(todoSlice.actions.hasError(error.message));
  }
};
