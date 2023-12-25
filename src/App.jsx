import React, { useState } from 'react'
import Home from './Components/Home'


import Notes from './Components/Notes'

import Users from './Components/Users'

function App() {

  const[page,setPage]=useState('home')
  const toChange=(page)=>(event)=>{
    event.preventDefault()
    setPage(page)
  }

   const padding={
    padding:5,
   }

   function content(){
    if(page=='home'){
     return <Home/>
    }else if(page=='notes'){
      return <Notes/>
    }else if(page=='users'){
      return <Users/>
    }

   }
   
  return (
    <div>
   
        <a href='' style={padding} onClick={toChange('home')}>Home</a>
        <a href='' style={padding} onClick={toChange('notes')}>Notes</a>
        <a href='' style={padding} onClick={toChange('users')}>Users</a>
        <div>
          {content()}
        </div>
    </div>
  )
}

export default App