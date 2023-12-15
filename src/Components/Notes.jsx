import React from 'react'

function Notes({notes}) {

    return(
        <li>{notes.content}{notes.important && "✪"}</li>
    )

}

export default Notes;