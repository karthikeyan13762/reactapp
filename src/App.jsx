import React, { useState } from 'react'

function GrandChild({data,coins}){

  const coinSun=()=>{
    return coins.reduce((prev,curr)=> prev+curr)
  }
  return(

    <>
    <h1>Props Drilling</h1>
      <h1>Grand Child Component</h1>
      <p>Data from Child component {data}</p>
      <p>Total sum of coins = {coinSun()}</p>
    </>
  )
}

function Child({data,coins}){

  

  return(

    <>
      <h1>Child Component</h1>

      <p>From parent Component = {data}</p>
      <GrandChild data={data} coins={coins}/>
    </>
  )
}





function App() {

  const [data,setData]=useState("Hello world from parent")
  const [coins,setCoins]=useState([1,2,3,4,5,6,7,8,9,10])
  return (
    <div>
    <h1>Parent</h1>
    
    <Child data={data} coins={coins}  />
    </div>
  )
}

export default App