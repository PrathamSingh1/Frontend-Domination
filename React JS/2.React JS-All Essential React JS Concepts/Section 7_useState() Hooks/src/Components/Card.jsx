import React from 'react';
import { useState } from 'react';

const Card = () => {
    const [val, setVal] = useState(false);
  return (
    <div>
        {/* print bahar jaao if val is false and print mat jao if val is true */}
        <h1>
            {val === false ? "Baahar jaao" : "Mat jaao"}
        </h1>

        <button onClick={()=>setVal(()=>!val)} className='px-2 py-1 bg-blue-300 rounded-md'>Change</button>
    </div>
  )
}

export default Card