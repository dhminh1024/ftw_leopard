import apiService from "../../app/apiService";
import { ADD_TODO, SET_FILTER, TOGGLE_TODO } from "./reducer";
let nextTodoId = 0;

export const addTodo = (text) => async (dispatch) => {
  try {
    const todo = { id: nextTodoId++, text, completed: false };
    const response = await apiService.post("/todos", todo);

    dispatch({ type: ADD_TODO, payload: { id: nextTodoId++, text } });
  } catch (error) {
    console.log(error);
  }
  // return {
  //   type: ADD_TODO,
  //   payload: { id: nextTodoId++, text },
  // };
};

export const toggleTodo = (id) => {
  return {
    type: TOGGLE_TODO,
    payload: { id },
  };
};

export const setFilter = (filter) => {
  return {
    type: SET_FILTER,
    payload: filter,
  };
};
