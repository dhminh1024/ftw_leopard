import { createSlice } from "@reduxjs/toolkit";
import apiService from "../../app/apiService";

const initialState = {
  todos: [
    // 1, 2, 3, 4
  ],
  todosById: {
    // "1": { id: 1, text: "launha", completed: false},
    // "2": { id: 2, text: "launha", completed: false},
    // "3": { id: 3, text: "launha", completed: false},
    // "4": { id: 4, text: "launha", completed: false}
  },
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
      state.todos.unshift(newTodo.id);
      if ((state.todos.length + 1) % 2 === 0) state.todos.pop();
      state.todosById[newTodo.id] = newTodo;
    },

    toggleTodoSuccess: (state, action) => {
      state.isLoading = false;
      state.error = null;
      // state.todos = state.todos.map((todo) => {
      //   if (todo.id !== action.payload.id) return todo;
      //   return { ...todo, completed: !todo.completed };
      // });

      state.todosById[action.payload.id].completed =
        !state.todosById[action.payload.id].completed;
    },

    getTodosSuccess: (state, action) => {
      state.isLoading = false;
      state.error = null;
      const { todos } = action.payload;

      // todos:
      // {text: 'a', completed: false, id: 5}
      // {text: 'hoc node', completed: false, id: 4}

      // state.todos [4, 5]
      // state.todosById { 4: , 5:}

      // state.todos = [...state.todos, ...todos.map((todo) => todo.id)];
      todos.map((todo) =>
        !state.todos.includes(todo.id) ? state.todos.push(todo.id) : ""
      );
      todos.forEach((todo) => (state.todosById[todo.id] = todo));
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

export const toggleTodo = (id) => async (dispatch, getState) => {
  // let todo = getState().todo.todos.find((todo) => todo.id === id);
  let todo = getState().todo.todosById[id];
  todo = { ...todo, completed: !todo.completed };

  dispatch(todoSlice.actions.startLoading());
  try {
    const response = await apiService.put(`/todos/${id}`, todo);
    console.log(response.data);
    dispatch(todoSlice.actions.toggleTodoSuccess(response.data));
  } catch (error) {
    dispatch(todoSlice.actions.hasError(error.message));
  }
};

export const getTodos =
  (page, limit = 2) =>
  async (dispatch) => {
    dispatch(todoSlice.actions.startLoading());
    try {
      const params = {
        _page: page,
        _limit: limit,
        _sort: "id",
        _order: "desc",
      };
      const response = await apiService.get(`/todos`, { params });

      dispatch(todoSlice.actions.getTodosSuccess({ todos: response.data }));
    } catch (error) {
      dispatch(todoSlice.actions.hasError(error.message));
    }
  };
