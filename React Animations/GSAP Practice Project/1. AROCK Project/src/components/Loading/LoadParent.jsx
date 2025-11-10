import React from 'react'
import LoadChild from './LoadChild'

const LoadParent = () => {
  return (
    <div className='h-0.5 fixed w-full bg-transparent z-50'>
        <LoadChild />
    </div>
  )
}

export default LoadParent