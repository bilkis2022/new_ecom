import React from 'react'

const Counter = () => {
  return (
    <div>
        <div className='flex items-center justify-center text-2xl mobile4:justify-start '>
            Quantiy:
            <div className='ml-5 shadow-md flex'>
                <div className='bg-[#8a4af3] text-white w-8 flex items-center justify-center cursor-pointer rounded-l-md'>-</div>

                <div className='border-[#8a4af3] w-8 flex items-center justify-center border-[1px]'>1</div>

                <div className='bg-[#8a4af3] text-white w-8 flex items-center justify-center cursor-pointer rounded-r-md'>+</div>
            </div>
        </div>
    </div>
  )
}

export default Counter