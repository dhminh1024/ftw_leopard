import React from "react";
import Counter from "./features/counter/Counter";
import MultiCounter from "./features/multiCounter/MultiCounter";

// How to add redux to a react app
// npx create-react-app my_project --template redux

function App() {
  return (
    <div>
      <h1>Intro redux</h1>
      <Counter />
      <MultiCounter />
    </div>
  );
}

export default App;
