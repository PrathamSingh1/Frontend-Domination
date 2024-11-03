import React from 'react';
import Card from './Components/Card';
import { useState } from 'react';

const App = () => {

  const data = [
    {name: "John", profession: "Painter", image: "https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?q=80&w=927&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", friends: false},
    {name: "Amit", profession: "Artist", image: "https://plus.unsplash.com/premium_photo-1664015982598-283bcdc9cae8?q=80&w=1065&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", friends: false},
    {name: "Rahul", profession: "Thalua", image: "https://images.unsplash.com/photo-1492447166138-50c3889fccb1?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", friends: false},
    {name: "Sumit", profession: "Coder", image: "https://plus.unsplash.com/premium_photo-1672239496290-5061cfee7ebb?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", friends: false},
  ];

  const [realData, setRealData] = useState(data)
  // state jaha banti hai wahi modify ki jaa skti hai
  return (
    <>
    <div className='w-full h-screen bg-zinc-300 flex gap-4 items-center justify-center'>
      {realData.map((item, index)=>(
        // <Card image={item.image} name={item.name} profession={item.profession}/>
        
        <Card key={index} values={item} />
      ))}
    </div>
    </>
  )
}

export default App