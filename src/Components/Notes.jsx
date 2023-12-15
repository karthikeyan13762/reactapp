import React from 'react'

function Notes({notes}) {
 if(notes.important){
    return(
        <li>{notes.content} TRUE ✪</li>
    )
 }else{
    return(
        <li>{notes.content} FALSE ⯨</li>
    )
 }
}

export default Notes