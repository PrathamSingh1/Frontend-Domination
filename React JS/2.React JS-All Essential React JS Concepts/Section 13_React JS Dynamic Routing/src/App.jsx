import React from 'react'
import { Link, Route, Router, Routes } from 'react-router-dom'
import Nav from './Components/Nav';
import Routing from './utils/Routing';

const App = () => {
  return (
    <>
    
    <Nav />
    <Routing />

    </>
  )
}

export default App