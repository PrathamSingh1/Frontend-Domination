import React from 'react';
import { useState } from 'react';
import { FaArrowRight } from "react-icons/fa";


const CreateSomething = () => {
    const [val, setVal] = useState(false);
  return (
    <div className='w-full h-screen bg-zinc-300 flex justify-center items-center'>
        <div className='relative w-60 h-32 rounded-md flex overflow-hidden'>
            <img className={`shrink-0 transition-transform duration-300 ${val === false ? "-translate-x-[0%]" : "-translate-x-[100%]"} w-full h-full object-cover`} src="https://images.unsplash.com/photo-1729544091518-636c9849e22b?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <img className={`shrink-0 transition-transform duration-300 ${val === false ? "-translate-x-[0%]" : "-translate-x-[100%]"} w-full h-full object-cover`} src="https://images.unsplash.com/photo-1504027973709-58986e840e79?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <span onClick={()=>setVal(()=>!val)} className='w-8 h-9 flex items-center justify-center bg-[#dadada8b] rounded-full absolute bottom-[0%] left-1/2 -translate-x-[50%] -translate-y-[50%]'>
                <FaArrowRight size={".7em"} />
            </span>
        </div>
    </div>
  )
}

export default CreateSomething