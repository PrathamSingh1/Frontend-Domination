import React from 'react'

const Menu = (props) => {

  const menuBarOpens = () => {
    props.setMenuOpen(true);
  }
  return (
    <div onClick={menuBarOpens} className='active:scale-95 uppercase opacity-80 cursor-pointer hover:opacity-70'>Menu</div>
  )
}

export default Menu 