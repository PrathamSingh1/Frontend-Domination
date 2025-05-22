import React from 'react'
import Stripe from './Stripe'

const Stripes = () => {
    var data = [
        {url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b850995827afaa8db9_63aed9b4493ff77bba5e9939_spotify.svg", number: 48},
        {url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/679b7bf6938856f07f92f4e2_logo-onDark.svg", number: 2},
        {url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d4ee1fe5ae69e47b6c1c_Lavendar-logo-white.svg", number: 11},
        {url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b9b2d3d56a1d071efe_63aedb0e917c0cce57418785_haufe.svg", number: 34},
        {url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b5b40b9966a3a112d7_663a6cbf194837f9c0affe8e_logo.svg", number: 33},
        {url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b8724afca0a36e7e95_63aed9589c2695a8bfaa920e_yahoo.svg", number: 13},
    ]
  return (
    <div className='flex items-center mt-20'>
        {data.map((elem, index)=>(
            <Stripe val={elem} />
        ))}
    </div>
  )
}

export default Stripes