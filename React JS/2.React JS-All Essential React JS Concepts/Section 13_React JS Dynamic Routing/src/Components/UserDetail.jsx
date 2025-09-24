import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const UserDetail = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  
  const GoBackHandler = () => {
    navigate("/user")   // to go to the user route.
    // navigate(-1)       // to go to the only one route back.
    console.log("lets go back");
  }

  return (
    <div className='w-1/2 m-auto mt-10'>
      <h1 className='text-5xl mb-3 text-red-300'>User Detail</h1>
      <h1 className='text-3xl'>Hi!  {name}</h1>
      <button onClick={GoBackHandler} className='p-1 bg-red-400 rounded-md mt-2 text-white text-sm'>Go Back</button>
    </div>
  )
}

export default UserDetail;