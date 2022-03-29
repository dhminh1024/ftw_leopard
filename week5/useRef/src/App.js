import React, { useRef, useState, useEffect } from "react";

// to work with DOM element
// useRef won't changed on every render
// chaning useRef.current doesn't cause a re-render
// store previous value

function App() {
  const [text, setText] = useState("");
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(-1);
  const [count2, setCount2] = useState(-1);

  const inputRef = useRef(null);
  const countRef = useRef(0);
  const prevValue = useRef(-1);
  const prevValue1 = useRef(-1);

  countRef.current += 1;
  console.log("re-render", countRef.current);

  const handleClick = () => {
    inputRef.current.focus();
  };

  useEffect(() => {
    // setText(new Date());
  });

  useEffect(() => {
    setCount1(prevValue.current);
    prevValue.current = count;
  }, [count]);

  useEffect(() => {
    setCount2(prevValue1.current);
    prevValue1.current = count1;
  }, [count1]);

  return (
    <div>
      <h3>useRef</h3>
      <button onClick={handleClick}>Click Me</button>
      <input
        ref={inputRef}
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <br />
      <br />
      <button onClick={() => setCount(count + 1)}>{count}</button>
      <button onClick={() => setCount(count1 + 1)}>{count1}</button>
      <button onClick={() => setCount(count2 + 1)}>{count2}</button>
    </div>
  );
}

export default App;
