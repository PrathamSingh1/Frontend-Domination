import React from 'react';
import { useForm } from 'react-hook-form';

const Form = ({handleFormSubmitData}) => {
  const {register, handleSubmit, reset} = useForm()
  const handleFormSubmit = (data) => {
    handleFormSubmitData(data);
    reset();
  }

  return (
    <div className='mt-10 flex justify-center'>
        <form className='flex gap-10' onSubmit={handleSubmit(handleFormSubmit)}>
            <input {...register('name')} className='rounded-md px-2 py-1 text-base font-semibold outline-none' type="text" placeholder='name' />
            <input {...register('email')} className='rounded-md px-2 py-1 text-base font-semibold outline-none' type="text" placeholder='email' />
            <input {...register('image')} className='rounded-md px-2 py-1 text-base font-semibold outline-none' type="text" placeholder='img url' />
            <input {...register('description')} className='rounded-md px-2 py-1 text-base font-semibold outline-none' type="description" placeholder='description' />
            <input className='rounded-md px-5 py-1 bg-blue-500 text-white font-semibold' type="submit" />
        </form>
    </div>
  )
}

export default Form