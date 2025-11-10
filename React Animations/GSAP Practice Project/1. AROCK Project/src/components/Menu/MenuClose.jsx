import React from 'react'

const MenuClose = (props) => {

    const menuBarCloses = () => {
        props.setMenuOpen(false);
    }
  return (
    <div onClick={menuBarCloses} className='uppercase select-none active:scale-y-95 cursor-pointer text-right hover:opacity-70'>
        Close
    </div>
  )
}

export default MenuClose