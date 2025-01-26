import React, { useContext } from 'react'
import { UserContext } from '../context/context'
import { useNavigate, useParams } from 'react-router-dom';

const UserDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { users } = useContext(UserContext);
  console.log(users[id]);
  return (
    <div>
      <h1 className='text-3xl font-bold text-red-200'>{users[id].username}</h1>
      <h2 className='text-2xl text-blue-200'>{users[id].city}</h2>
      <button onClick={() => navigate(-1)} className='rounded p-2 bg-red-300 mt-3'>Go Back</button>
    </div>
  )
}

export default UserDetails