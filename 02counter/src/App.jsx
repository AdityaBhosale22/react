import { useState } from 'react'

import './App.css'

function App() {

  const [counter, setCounter]= useState(0);

  const addValue=()=>{
    setCounter(counter+1);
  }
  const removeValue=()=>{
    setCounter(counter-1);
    if(counter<=0){
      setCounter(0);
    }
  }

  return (
    <>
      <h1>React Practice</h1>
      <h2>Counter value:{counter}</h2>
      <button onClick={addValue} >Add Count</button>{" "}
      <button onDoubleClick={removeValue} >Remove Count</button>
    </>
  );
}

export default App
