import React from 'react';
import { useState } from 'react';

const AdvanceUseState2 = () => {
    // const [val, setVal] = useState([1,2,3,4,5,6]);
    const [val, setVal] = useState([
      { name: "harsh", age: 24 },
      { name: "shivam", age: 25 },
      { name: "kohli", age: 32 },
    ]);
  return (
    <>
      <div>
        {/* {val.map(item=><h1>{item}</h1>)}
        <button onClick={()=>setVal(()=>{
          return val.filter((item, index)=> index!=val.length-1)
        })} className='px-2 py-1 text-xs text-white rounded-full bg-blue-500'>click</button> */}
      </div>

      <div>
        {/* {val.map(item => <h1>{item}</h1>)}
        <button onClick={()=>setVal(()=>val.filter((item, index)=> index!=2))} className='px-2 py-1 text-white rounded-full bg-blue-500'>click</button> */}
      </div>

      <div>
         {/* addition in array */}
        {/* {val.map(item => <h1>{item}</h1>)}
        <button onClick={()=>setVal([...val, 7])} className='px-2 py-1 text-xs text-white rounded-full bg-blue-500'>click</button> */}
      </div>

      <div>
        {val.map((item) =>(
          <div>
            <h1>{item.name}</h1>
            <h2>{item.age}</h2>
          </div>
        ))}
        <button onClick={()=>setVal(()=>val.map(item=> item.name === "shivam" ? ({name: "shivam", age: 26}) : item))} className='px-2 py-1 text-xs text-white rounded-full bg-blue-500'>click</button>
      </div>
    </>
  )
}

export default AdvanceUseState2