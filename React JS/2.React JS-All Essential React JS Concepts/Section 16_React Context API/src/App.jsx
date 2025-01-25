import React from 'react';
import Home from './Components/Home';
import { Link, Route, Routes } from 'react-router-dom';
import User from './Components/User';
import About from './Components/About.jsx';
import UserDetails from './Components/UserDetails.jsx';
const App = () => {
  return (
    <div className='p-1 w-1/2 m-auto'>
      <nav className='mt-10 flex justify-center gap-10'>
        <Link to='/'>Home</Link>
        <Link to='/user'>User</Link>
        <Link to='/about'>About</Link>
      </nav>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/user' element={<User />} />
        <Route path='/user/:id' element={<UserDetails />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  )
}

export default App