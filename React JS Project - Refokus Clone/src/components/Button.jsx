import React from 'react';
import { IoIosReturnRight } from "react-icons/io";

const Button = () => {
  return (
    <div className='min-w-40 px-4 py-2 bg-zinc-200 text-black rounded-full flex items-center justify-between'>
        <span className='text-sm font-medium'>Get Started</span>
        <IoIosReturnRight />
    </div>
  )
}

export default Button