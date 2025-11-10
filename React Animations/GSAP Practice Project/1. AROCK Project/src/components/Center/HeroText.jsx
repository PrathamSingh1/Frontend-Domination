import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react'

const HeroText = () => {

  const textRef = useRef(null);

  useGSAP(() => {
    let clutter = "";
    const splittedText = textRef.current.textContent.split("");
    // console.log(splittedText);

    splittedText.forEach(function (e) {
      clutter += `<span>${e}</span>`;
    })
    textRef.current.innerHTML = clutter;

    gsap.from("h1 span", {
      y: 100,
      opacity: 0,
      delay: 2.5,
      stagger: 0.15
    })
  })

  return (
    <div>
        <h1 ref={textRef} className='whitespace-nowrap font-black uppercase text-[22vw]'>Arock</h1>
    </div>
  )
}

export default HeroText