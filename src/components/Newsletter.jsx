import { Send } from '@mui/icons-material'
import React from 'react'

const Newsletter = () => {
  return (
    <div className='flex justify-center items-center h-[350px] w-[100%] flex-col bg-[#c4a4f9]'>
        <h2 className='text-[50px] font-bold'>NEWSLETTER</h2>
        <h3 className='text-[20px] mt-2 capitalize mobile:text-center'>always in touch with us, for your favourite products</h3>
        <div className='flex mt-[3rem] items-center justify-between min-w-[30rem] min-h-[2rem] bg-white border-[#cccccc] rounded-[5px] overflow-hidden mobile:min-w-[15rem]'>
            <input type="email"
            placeholder='email'
            className='border-none outline-none flex-[7] pl-[20px] '
            />
            <button className='bg-[#4caf50] flex-1 h-[100%]'>
                <Send />
            </button>
        </div>
    </div>
  )
}

export default Newsletter