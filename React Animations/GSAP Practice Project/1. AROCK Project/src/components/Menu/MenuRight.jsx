import React from 'react'
import MenuClose from './MenuClose'

const MenuRight = (props) => {
  return (
    <div className='w-1/3 h-full py-[2vw] px-[3.5vw] relative'>
        <MenuClose menuOpen={props.menuOpen} setMenuOpen={props.setMenuOpen} />
    </div>
  )
}

export default MenuRight