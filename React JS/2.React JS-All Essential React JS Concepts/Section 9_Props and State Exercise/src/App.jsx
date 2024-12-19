import React from 'react';
import Card from './Components/Card';
import { useState } from 'react';
import Navbar from "./Components/Navbar";

const App = () => {

  const data = [
    {image: "https://images.unsplash.com/photo-1734282134343-a223ce00b9aa?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", name: "Challenger", artist: "Harsh", added: false},
    {image: "https://images.unsplash.com/photo-1530419248307-be80b9468e77?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", name: "One Day", artist: "Histesh", added: false},
    {image: "https://images.unsplash.com/photo-1580829185826-4b78b69ccc69?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", name: "One Love", artist: "Shubh", added: false},
    {image: "https://plus.unsplash.com/premium_photo-1686810855087-838adffd3170?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", name: "Together", artist: "Shristy", added: false},
    
  ];

  const [songData, setSongData] = useState(data);

  const handleClick = (index)=>{
    setSongData((prev)=>{
      return prev.map((item, itemindex)=>{
        if(itemindex === index){
          return {...item, added: !item.added};
        }
        return item;
      })
    })
  }

  return (
    <>
    <div className='w-full h-screen bg-zinc-300'>
      <Navbar data={songData} />
      <div className="px-20 flex gap-10 mt-10 flex-wrap">
        {songData.map((obj, index)=>{
          return <Card data={obj} handleClick={handleClick} index={index} key={index} />
        })}     
      </div>
    </div>
    </>
  )
}

export default App