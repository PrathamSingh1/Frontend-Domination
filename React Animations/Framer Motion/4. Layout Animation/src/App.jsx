import React, { useState } from 'react'
import { motion } from 'motion/react';

const App = () => {

  const [btnClicked, setBtnClicked] = useState(false);

  const btnClicking = () => {
    setBtnClicked(!btnClicked);
    console.log(btnClicked);
  }
  return (
    <div className='bg-[#111] h-screen p-10'>
      <motion.div
      layout
      className='h-60 w-60 rounded-2xl bg-red-500'
      style={{
        height:btnClicked?300:200,
        width:btnClicked?400:300
      }}
      >
        
      </motion.div>
      <button onClick={btnClicking} className='bg-emerald-500 cursor-pointer active:scale-95 mt-4 font-bold rounded px-6 py-2'>Click</button>
    </div>
  )
}

export default App