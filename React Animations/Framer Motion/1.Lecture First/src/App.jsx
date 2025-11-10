import React from 'react'
import { motion } from "motion/react"
import { useRef } from 'react';

const App = () => {

  const constraintsRef = useRef(null);

  const variants = {
    visible: {opacity: 1, x: 500},
    hidden: {opacity: 0, x: 0}
  }
  return (
    <div ref={constraintsRef} className="p-5 bg-[#111] h-screen w-full relative">
      <motion.div
        // initial={variants.hidden}
        // animate={variants.visible}
        // animate={{ x: [0, 1200, 1200, 0, 0], y: [0, 0, 400, 400, 0]}}
        transition={{ duration: 2, delay: 1, ease:"easeOut"}}
        drag
        dragConstraints={constraintsRef}
        whileHover={{
          scale: 1.1,
          backgroundColor: "seagreen"
        }}
        className="h-60 w-60 bg-blue-500 rounded-2xl p-3"
      >
        BOX
      </motion.div>
    </div>
  );
}

export default App