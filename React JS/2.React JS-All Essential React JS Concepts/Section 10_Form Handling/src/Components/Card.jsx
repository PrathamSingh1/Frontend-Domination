import React from 'react'

const Card = ({values, handleClick, index}) => {

  const {name, image, profession, friends} = values;


  return (
    <div className='w-60 bg-white rounded-md overflow-hidden'>
      <div className='w-full h-40 bg-sky-200'>
        <img className='w-full h-full object-cover object-[center_top]' src={image} alt="" />
      </div>
      <div className='w-full p-3'>
        <h3 className='text-xl font-semibold'>{name}</h3>
        <h5 className='text-xs'>{profession}</h5>
        <button onClick={()=>handleClick(index)} className={`px-3 py-1 text-xs text-white ${friends == true ? "bg-green-500" : "bg-blue-500"} font-semibold rounded-md mt-4`}>{friends == true ? "Friend" : "Add Friend" }</button>
      </div>
    </div>
  )
}

export default Card


