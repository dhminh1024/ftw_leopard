export const ADD_COUNTER = "MULTICOUNTER.ADD_COUNTER";
export const INCREMENT = "MULTICOUNTER.INCREMENT";
export const DECREMENT = "MULTICOUNTER.DECREMENT";

const initialState = [];

const multiCounterReducer = (state = initialState, action) => {
  let newState;
  let index;
  switch (action.type) {
    case ADD_COUNTER:
      newState = [...state, { count: 0 }];
      return newState;

    case INCREMENT:
      index = action.payload;
      newState = [
        ...state.slice(0, index),
        { count: state[index].count + 1 },
        ...state.slice(index + 1),
      ];
      return newState;

    case DECREMENT:
      index = action.payload;
      newState = [
        ...state.slice(0, index),
        { count: state[index].count - 1 },
        ...state.slice(index + 1),
      ];
      return newState;

    default:
      return state;
  }
};

export default multiCounterReducer;

// action = {type: INCREMENT, payload: 2}
// state =[
//   { count: 2},
//   { count: 2},
//   { count: 3},
//   { count: 2},
//   { count: 2},
// ]
// newState = [
//   { count: 2},
//   { count: 2},
//   { count: 3},
//   { count: 2},
//   { count: 2},
// ]
