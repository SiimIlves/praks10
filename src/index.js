import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
 
const Counter = (props) => {
const [count, setCounter] = useState(5)
const updateCounter = (count) => {setCounter(Math.min(Math.max((count), 0), 10))}
return (
  <div>
    <h2>Step: {props.step}</h2>
      <button onClick = {function(){updateCounter(count-(props.step))}}>-</button>
      <span>{Math.round(count*10)/10}</span>
      <button onClick = {function(){updateCounter(count+(props.step))}}>+</button>
  </div>
  )
}

const App = () => {
return (
  <div>
    <h1>Counters</h1>
    <Counter step={1} />
    <Counter step={2} />
    <Counter step={0.1} />
  </div>
  );
};
 
ReactDOM.render(<App />, document.getElementById("root"));