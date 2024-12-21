import React from 'react'

const Card = ({user, handleRemove, id}) => {
  return (
    <div className='w-40 h-full bg-zinc-100 rounded-lg flex flex-col items-center p-2'>
        <div className='image w-10 h-10 rounded-full bg-zinc-200 overflow-hidden'>
            <img className='w-full h-full object-cover' src={user.image} alt="" />
        </div>
        <h1 className='text-xl font-semibold text-center leading-none'>{user.name}</h1>
        <h4 className='opacity-40 text-xs font-semibold'>{user.email}</h4>
        <p className='text-center text-xs font-semibold leading-1 tracking-tight'>{user.description}</p>
        <button onClick={()=>handleRemove(id)} className='px-3 py-1 bg-red-500 text-xs rounded-md font-semibold mt-2 text-white'>Remove It</button>
    </div>
  )
}

export default Card