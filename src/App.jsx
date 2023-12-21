// passing data from parent to child

import React from 'react'
function Child({data}){
  return(
    <div>
      Child component----------{data}
    </div>
  )
}
function App() {

  let data="data from parent "
  return (
    <>
    <div>App</div>
    <Child data={data}/>
    </>
    
  )
}

export default App