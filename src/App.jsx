import React, { useState } from 'react'

function App() {

  const[counter,setCounter]=useState(0);

  // setTimeout(()=>{
  //   setCounter(counter+1)
    
  // },1000)

  // console.log("Couter"+counter);
  function handleAddClick(){
    setCounter(counter+1)
  }
  function handleMinusClick(){
    setCounter(counter-1)
  }

  function handleRestClick(){
    setCounter(0)
  }


  return (
    <div>
    <p>{counter}</p>
    <button onClick={handleAddClick}>Add</button>
    <button onClick={handleMinusClick}>Minus</button>
    <button onClick={handleRestClick}>Reset</button>
    </div>
  )
}

export default App