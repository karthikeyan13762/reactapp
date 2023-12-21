import React, { useState } from 'react'

function App() {

  const[counter,setCounter]=useState(0);

  setTimeout(()=>{
    setCounter(counter+1)
    
  },1000)

  // console.log("Couter"+counter);


  return (
    <div>App</div>
  )
}

export default App