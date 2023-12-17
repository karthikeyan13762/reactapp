import React from 'react'

function Hello({name}){
  console.log(name);
  return(
    <p>Hello {name}</p>
  )
}



function App() {
  return (
    
    <Hello name={"Karthikeyan"}/>
  )
}

export default App