import React, { createContext, useState } from 'react'
import Child from './Components/child'


const contextMessage=createContext();


function App() {

  const[data,setdata]=useState("Message from parent component using Context Api")
  const[coins,setCoins]=useState([1,2,3,4,5,6])
  return (
    <div>
      <h1>Parent Component</h1>
      <contextMessage.Provider value={{data,coins}}>
      <Child />
      </contextMessage.Provider>
       
    </div>
  )
}

export  {App as default ,contextMessage};
 ;