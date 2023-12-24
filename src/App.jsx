import React from 'react'
import {Link, Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import Home from './Components/Home';
import Notes from './Components/Notes';
import Users from './Components/Users';

function App() {
  const Padding={
    padding:5,
    margin:5,
    background:"gray"
  }
  return (
<Router>
  <div>
    <Link style={Padding} to={'/'}>Home</Link>
    <Link style={Padding} to={'/notes'}>Notes</Link>
    <Link style={Padding} to={'/users'}>Users</Link>
  </div>
  <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/notes' element={<Notes/>} />
    <Route path='/users' element={<Users/>} />
 </Routes>
</Router>

  )
}

export default App