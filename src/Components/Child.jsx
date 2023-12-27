import React, { useContext } from 'react'

import {contextMessage} from '../App'
import GrandChild from './GrandChild';

function Child() {
let {data,coins}=useContext(contextMessage)
  return (
    <div>
    <h1>Child Component</h1>
    <p>Message from parent componet <b>{data}</b></p>
    <GrandChild/>
    </div>
  )
}

export default Child;