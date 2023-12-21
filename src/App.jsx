// props drilling

import React from 'react'

function Grandchild({data}){

  return(

    <div>
      <h2>
      Grand Componet----------{ data}
      </h2>
    </div>
  )
}
function Child({data}){

  return(

    <div>
      <h2>
        Child Componet

      </h2>
      <Grandchild data={data}/>
    </div>
  )
}

function App() {
  const data="Data fromm Parent"
  return (

    <div>
 
      <h1>Parent Component</h1>
      <Child data={data}/>
    </div>
  )
}

export default App