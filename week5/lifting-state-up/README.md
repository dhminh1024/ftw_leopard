# Redux examples

- Counter
- MultiCounter
- Todo

## Setup project

- create-react-app
- reset `src/`
- Installation
  `npm i redux react-redux redux-devtools-extension`

## Counter

- `src/features/counter/reducer.js`:

```js
const INCREMENT = "COUNTER.INCREMENT";
const DECREMENT = "COUNTER.DECREMENT";

const initialState = {
  count: 0,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + 1 };
    case DECREMENT:
      return { count: state.count - 1 };

    default:
      return state;
  }
};

export default counterReducer;
```

- `src/app/store.js`:

```js
import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import counterReducer from "../features/counter/reducer";

const initialState = {};
const store = createStore(
  combineReducers({
    counter: counterReducer,
  }),
  initialState,
  composeWithDevTools()
);

export default store;
```

- `src/features/counter/Counter.js`:

```js
import React from "react";
import { useSelector, useDispatch } from "react-redux";

function Counter() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch({ type: "COUNTER.INCREMENT" })}>+</button>
      <span>{count}</span>
      <button onClick={() => dispatch({ type: "COUNTER.DECREMENT" })}>-</button>
    </div>
  );
}

export default Counter;
```

- `src/App.js`

```js
import React from "react";
import Counter from "./features/counter/Counter";

function App() {
  return (
    <div>
      <h1>Intro to Redux</h1>
      <Counter />
    </div>
  );
}

export default App;
```

- `src/index.js`:

```js
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./app/store";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
```

## Update Todo List with json-server

- Create `src/db.json`

```json
{
  "todos": []
}
```

- Run on terminal: `npx json-server --watch src/db.json --port 5000`

- Install axios: `npm i axios`

- Create `src/app/apiService.js`

```js
import axios from "axios";
import { BASE_URL } from "./config";

const apiService = axios.create({
  baseURL: BASE_URL,
});

apiService.interceptors.request.use(
  (request) => {
    console.log("Start Request", request);
    return request;
  },
  function (error) {
    console.log("REQUEST ERROR", error);
    return Promise.reject(error);
  }
);

apiService.interceptors.response.use(
  (response) => {
    console.log("Response", response);
    return response;
  },
  function (error) {
    console.log("RESPONSE ERROR", error);
    return Promise.reject(error);
  }
);

export default apiService;
```
