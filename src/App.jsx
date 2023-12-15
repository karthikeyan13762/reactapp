import React from 'react';
import Notes from './Components/Notes';
import './style Folder/App.css'
function App ({notes}) {
  // 1way console.log(props.notes);
 
 
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
      <form >
        <input></input>
        <button onClick={(e)=>{
         
  e.preventDefault();
  console.log("button clicked");
 
        }}>Save notes</button>
      </form>
    </div>
  )
}

export default App