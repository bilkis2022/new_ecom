import React from 'react'

const Category = ({item}) => {
  return (
    <div className='flex-1 m-2 shadow-lg rounded-md overflow-hidden relative'>
        <img src={item.src} alt="categoryimg" className='w-[100%]'/>
        <div className='flex flex-col justify-center items-center absolute top-0 left-0 w-[100%] h-[100%]'>
            <h2 className='text-white font-medium text-[30px]'>{item.title}</h2>
            <button className='btn'>See More</button>
        </div>
    </div>
  )
}

export default Category