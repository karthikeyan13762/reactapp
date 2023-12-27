import React from 'react'

import {contextMessage} from '../App'
import GrandChild from './GrandChild';

function Child() {

  return (

<contextMessage.Consumer>
{
(value)=>{
    {console.log (value.data)}
    return( <div>
    <h1>Child Component</h1>
    <p>Message from parent componet <b>{value.data}</b></p>
    <GrandChild/>
    </div>)
}

}


</contextMessage.Consumer>

   
  )
}

export default Child;