import React from 'react'

function Notes({notes}) {
 if(notes.important){
    return(
        <li>{notes.important?notes.content +"✪" :notes.content + 'ⓧ'}</li>
    )
 }
}

export default Notes