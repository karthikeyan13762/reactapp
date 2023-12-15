import React from 'react'

function App({notes}) {
  // 1way console.log(props.notes);
  console.log(notes);
  return (
    <div>
      <h1>Notes</h1>
      <ul>
        <li>
          {notes[0].content}
        </li>
        <li>
        {notes[1].content}
        </li>
        <li>
        {notes[1].content}
        </li>
        <li>
        {notes[3].content}
        </li>
        <li>
        {notes[4].content}
        </li>
      </ul>
    </div>
  )
}

export default App