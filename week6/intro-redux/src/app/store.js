import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import counterReducer from "../features/counter/reducer";
import multiCounterReducer from "../features/multiCounter/reducer";

const initialState = {};
const rootReducer = combineReducers({
  counter: counterReducer,
  multiCounter: multiCounterReducer,
});
const store = createStore(rootReducer, initialState, composeWithDevTools());

export default store;
