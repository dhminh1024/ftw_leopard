export const ADD_TODO = "TODO.ADD_TODO";
export const TOGGLE_TODO = "TODO.TOGGLE_TODO";
export const SET_FILTER = "TODO.SET_FILTER";

const initialState = {
  todos: [
    // {id: 1, text: "Lau nha", completed: false}
    // {id: 1, text: "Lau nha", completed: false}
    // {id: 1, text: "Lau nha", completed: false}
    // {id: 1, text: "Lau nha", completed: false}
  ],
  filter: "SHOW_ALL", // SHOW_COMPLETED, SHOW_ACTIVE
};

const todoReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          { id: payload.id, text: payload.text, completed: false },
        ],
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id !== payload.id) return todo;
          return { ...todo, completed: !todo.completed };
        }),
      };
    case SET_FILTER:
      return { ...state, filter: payload };
    default:
      return state;
  }
};

export default todoReducer;
