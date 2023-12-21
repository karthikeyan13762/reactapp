import React, { useEffect, useState } from 'react'

function App() {
const[count,setCount]=useState(0)

  useEffect(()=>{
    document.title=`count ${count}`
  },[count])

  function changeCout(){

    setCount(count+1)
}

  return (
    <div>
    <h1>Document Title change</h1>
    <button onClick={changeCout}>changeCount</button>
    </div>
  )
}

export default App