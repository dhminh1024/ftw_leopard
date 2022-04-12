export const INCREMENT = "COUNTER.INCREMENT";
export const DECREMENT = "COUNTER.DECREMENT";

const initialState = {
  count: 0,
};

const counterReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case INCREMENT:
      newState = { count: state.count + action.payload };
      return newState;
    case DECREMENT:
      newState = { count: state.count - action.payload };
      return newState;
    default:
      return state;
  }
};

export default counterReducer;
