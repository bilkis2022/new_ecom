import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
    const history = useNavigate();
  return (
    <div>
        <h1 className='text-center mt-6'>404 Not Found</h1>
        <button className='btn ml-3' onClick={()=>history('/')}>Go Back to the main page</button>
    </div>
  )
}

export default NotFound