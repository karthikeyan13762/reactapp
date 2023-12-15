import React from 'react';
import Notes from './Components/Notes';
function App ({notes}) {
  // 1way console.log(props.notes);
 function buttonclick(e){
  e.preventDefault();
  console.log("button clicked");
 }
 
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
        <button onClick={buttonclick}>Save notes</button>
      </form>
    </div>
  )
}

export default App