import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
  const { userid } = useParams();
  return (
    <div className='text-center text-3xl font-bold py-20 bg-amber-300'>
      User ID: {userid}
    </div>
  )
}

export default User
