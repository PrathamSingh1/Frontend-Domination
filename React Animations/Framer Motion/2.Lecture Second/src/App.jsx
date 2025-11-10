import React from 'react'
import { motion } from "motion/react"
import { useRef } from 'react';

const App = () => {

  const constraintsRef = useRef(null);

  const variants = {
    visible: {opacity: 1},
    hidden: {opacity: 0}
  }
  return (
    <div ref={constraintsRef} className="p-10 bg-[#111] h-screen">
      <motion.div
        variants= {variants}
        initial= "hidden"
        animate= "visible"
        transition={{duration: 1, delay: 0.5}}
        className="h-full p-5 bg-blue-800"
      >
        <motion.div className='bg-red-400 m-3 rounded-2xl h-40 w-40'>

        </motion.div>
        <motion.div className='bg-red-400 m-3 rounded-2xl h-40 w-40'>

        </motion.div>
        <motion.div className='bg-red-400 m-3 rounded-2xl h-40 w-40'>

        </motion.div>
      </motion.div>
    </div>
  );
}

export default App