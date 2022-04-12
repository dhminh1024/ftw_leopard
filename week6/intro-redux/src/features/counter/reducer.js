export const INCREMENT = "COUNTER.INCREMENT";
export const DECREMENT = "COUNTER.DECREMENT";

const initialState = {
  count: 0,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + action.payload };
    case DECREMENT:
      return { count: state.count - action.payload };
    default:
      return state;
  }
};

export default counterReducer;
