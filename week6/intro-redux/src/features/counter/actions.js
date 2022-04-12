import { DECREMENT, INCREMENT } from "./reducer";

// Action Creators

export const increment = (value) => ({ type: INCREMENT, payload: value });
export const decrement = (value) => ({ type: DECREMENT, payload: value });
