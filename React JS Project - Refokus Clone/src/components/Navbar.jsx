import React from 'react'
import Button from './Button'

const Navbar = () => {
  return (
    <div className='max-w-screen-xl mx-auto py-6 flex items-center justify-between border-b-[1px] border-zinc-700'>
        <div className='nleft flex justify-items-center'>
        <img className='p-2 h-[30px] w-[30px] text-white' src="/download.svg" alt="" /> <span>Refous</span>
        <div className='links flex gap-15 ml-20'>
          {["Home", "Project", "Connect Me", "", "News"].map((elem, index) =>(
            elem.length === 0 ? <span className='w-[2px] h-7 bg-zinc-700'></span> : (<a className='font-regular text-sm flex items-center gap-1' href='#'>
              {index === 0? (<span style={{boxShadow: "0 0 0.45em #00FF19"}} className='inline-block w-1 h-1 rounded-full bg-green-500'></span>) : null}
              {elem}</a>)
          ))}
        </div>
        </div>
        <Button />
    </div>
  )
}

export default Navbar