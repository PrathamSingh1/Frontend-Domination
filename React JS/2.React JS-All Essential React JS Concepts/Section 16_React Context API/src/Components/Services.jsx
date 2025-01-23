import React, { useEffect } from 'react'
import { useState } from 'react';

const Services = () => {
  const [first, setFirst] = useState("this is normal data");
  const [second, setSecond] = useState("this is very large data");

    useEffect(() => {
        console.log("Service Component is Created");

        return () => {
            console.log("Service Component is Deleted");
        }
    }, [second]);

    
  return (
    <div>
      <h1>{first}</h1>
      <button onClick={() => setFirst("Normal Data has been changed")} className='rounded mb-10 bg-red-300 p-2'>Change Normal Data</button>

      <h1>{second}</h1>
      <button onClick={() => setSecond("Large Data has been changed")} className='rounded bg-blue-300 p-2'>Change Large Data</button>
    </div>
  )
}

export default Services