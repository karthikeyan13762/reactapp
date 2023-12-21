// passing data from child to parent

import React, { useState } from 'react'
function Child({getData}){
  let child="Data from child"
 function sendData(){
  getData(child)
 }
  return(
    <>
      <button onClick={sendData}>sendData</button>
    </>
  )
}
function App() {

const[datafomchild,setDatafomchild]=useState(null)

function getData(message){
  setDatafomchild(message)
}

  return (
    <>
    <div>Parent to child--------- {datafomchild}</div>
    <Child getData={getData}/>
    </>
    
  )
}

export default App