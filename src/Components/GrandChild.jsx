import React, { useContext } from 'react'


import {contextMessage} from '../App'

function GrandChild() {
    let {data,coins}=useContext(contextMessage)


    const coinss=()=>{
            return coins.reduce((prev,curr)=> prev+curr)
    }
  return (
    <div>
        <h1>
        GrandChild
        </h1>

        <p>Total sum is {coinss()}</p>
    </div>
  )
}

export default GrandChild