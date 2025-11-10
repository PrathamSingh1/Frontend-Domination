import React, { useState } from 'react'

import LoadParent from './components/Loading/LoadParent'
import Home from './components/LandingPage/Home'
import MenuPage from './components/Menu/MenuPage'

const App = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='h-screen bg-[#111] overflow-hidden'>
      <MenuPage menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <LoadParent />
      <Home menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </div>
  )
}

export default App