import { Close } from '@mui/icons-material'
import React, { useState } from 'react'

const Announce = () => {
    const  [astyle, setAstyle] = useState('bg-[#8a4af3] font-bold text-white flex items-center justify-center w-[100%]')

    const handleClose = ()=> {
        setAstyle(astyle + " hidden")
    }
  return (
    <div className={astyle}>
        <h2 >Hurry up! It's 40% off now</h2>
        <Close className='cursor-pointer' onClick={handleClose}/>
    </div>
  )
}

export default Announce