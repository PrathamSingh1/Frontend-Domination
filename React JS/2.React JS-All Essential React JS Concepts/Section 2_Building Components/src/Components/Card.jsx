import React from 'react'

const Card = () => {
  return (
    <div className='w-full h-screen bg-zinc-200'>
        <div className='w-52 bg-zinc-100 absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] rounded-md overflow-hidden'>
            <div className='w-full h-32 bg-zinc-300'>
                <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1633174524827-db00a6b7bc74?q=80&w=1196&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>
            <div className='w-full px-3 py-4'>
                <h2 className='font-semibold'>Amazon Basics.</h2>
                <p className='text-xs mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, laborum?</p>
            </div>
        </div>
    </div>
  )
}

export default Card