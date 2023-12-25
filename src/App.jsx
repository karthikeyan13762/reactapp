import React from 'react'
import {Link, Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import Home from './Components/Home'
import Notes from './Components/Notes'
import Users from './Components/Users'
function App() {

  const padding={
    padding:10,
    margin:5,
    backgroundColor:"gray",
    color:'yellow',
    textDecoration:'none'
  }
  const styles={
    backgroundColor:"black",
    color:"white",
    width:100+"vw",
    height:55+"vh",
  }
  return (
    
    <Router>
      <div>
        <Link to={'/'} style={padding}>Home</Link>
        <Link to={'/notes'} style={padding}>Notes</Link>
        <Link to={'/users'} style={padding}>Users</Link>
      </div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/notes' element={<Notes/>} />
        <Route path='/users' element={<Users/>} />
      </Routes>
        <div id='footer' style={styles}>
          <h1><i>footer</i></h1>
        </div>
    </Router>
    
    
  )
}

export default App