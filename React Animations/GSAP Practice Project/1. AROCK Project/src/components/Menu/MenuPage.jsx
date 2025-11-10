import React, { useRef } from 'react'
import MenuLeft from './MenuLeft'
import MenuRight from './MenuRight'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const MenuPage = (props) => {

  const menuRef = useRef(null);

  useGSAP(() => {
    if(props.menuOpen) {
      gsap.to(menuRef.current, {
      top: 0,
    })
    }
    else {
      gsap.to(menuRef.current, {
        top: "100%",
      })
    }
  }, [props.menuOpen])
  return (
    <div ref={menuRef} className='fixed top-full h-screen flex w-full bg-[#111] z-50'>
        <MenuLeft />
        <MenuRight menuOpen={props.menuOpen} setMenuOpen={props.setMenuOpen} />
    </div>
  )
}

export default MenuPage