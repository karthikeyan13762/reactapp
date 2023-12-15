import React from 'react';
import Notes from './Components/Notes';
function App({notes}) {
  // 1way console.log(props.notes);
  console.log(notes);
  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map(notes=>{
          return (

            

            <Notes key={notes.id} notes={notes}/>

          )
            

        }
          
       )}
      </ul>
    </div>
  )
}

export default App