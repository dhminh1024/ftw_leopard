import React from "react";
import Counter from "./features/counter/Counter";
import MultiCounter from "./features/multiCounter/MultiCounter";
import Todo from "./features/todo/Todo";

// How to add redux to a react app
// npx create-react-app my_project --template redux

function App() {
  return (
    <div>
      {/* <Counter />
      <MultiCounter /> */}
      <Todo />
    </div>
  );
}

export default App;
