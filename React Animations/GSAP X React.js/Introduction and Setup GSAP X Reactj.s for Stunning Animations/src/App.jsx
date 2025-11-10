import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from 'react'

const App = () => {
  const boxRef = useRef();

  useGSAP(() => {
    gsap.to(boxRef.current, {
      x: 600,
      y: 300,
      duration: 5
    })
  })
  
  return (
    <div>
      <div ref={boxRef} className="box">

      </div>
    </div>
  )
}

export default App