import React from 'react'
import Button from './Button'

const Product = () => {
  return (
    <div className='w-full py-5 text-white'>
        <div className='max-w-screen-xl mx-auto'>
            <h1>arqitel</h1>
            <div className='dets'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique doloribus eius dolorum nam modi beatae perferendis vel.</p>
                <Button />
            </div>
        </div>
    </div>
  )
}

export default Product