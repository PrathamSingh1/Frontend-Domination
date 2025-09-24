import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Components/Home'
import User from '../Components/User'
import About from '../Components/About'
import UserDetail from '../Components/UserDetail'

const Routing = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/user' element={<User />} >
      
      <Route path='/user/:name' element={<UserDetail />} />

      </Route>
      {/* <Route path='/user/:name' element={<UserDetail />} /> */}
      <Route path='/about' element={<About />} />
    </Routes>
  )
}

export default Routing