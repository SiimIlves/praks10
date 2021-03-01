import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const App = () => {
const[juan, setJuan] = useState(5);
const[tuan, setTuan] = useState(5);
const[thrian, setThrian] = useState(500);
// 500 so dividing by 100 wouldn't give some wonky answer
const Rem = () => {
  return (
    <button onClick={() => setJuan(juan-1)}>-</button>
  )}   
  const Add = () => {
  return (
    <button onClick={() => setJuan(juan+1)}>+</button>
  )} 
const Rem2 = () => {
  return (
    <button onClick={() => setTuan(tuan-2)}>-</button>
  )}
const Add2 = () => {
  return (
    <button onClick={() => setTuan(tuan+2)}>+</button>
  )}
const Rem3 = () => {
  return (
    <button onClick={() => setThrian((thrian)-0.1*100)}>-</button>
  )}
const Add3 = () => {
  return (
    <button onClick={() => setThrian((thrian)+0.1*100)}>+</button>
  )} // THANK YOU SO MUCH JAVASCRIPT I TOO GET 0.19999998 WHEN I ADD 0.1 TO 0.1
return (
  <div>
    <h1>Counters</h1>
    <p>Step: 1</p>
    <Rem />
    <span>{juan}</span>
    <Add />
    <p>Step: 2</p>
    <Rem2 />
    <span>{tuan}</span>
    <Add2 />
    <p>Step: 0.1</p>
    <Rem3 />
    <span>{thrian/100}</span>
    <Add3 />
    <p>{juan} + {tuan} + {thrian/100} = {juan+tuan+(thrian/100)}</p>
  </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));