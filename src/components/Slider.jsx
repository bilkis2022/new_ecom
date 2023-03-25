import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Apislides } from '../apifolder/Sliderapi'; 
import './Slider.css'

const Slider = () => {

    const history = useNavigate()

    const [slides] = useState(Apislides)
    const [activeslide, setActiveslide] = useState(0)

    const nextslide =()=> {
      if(activeslide===slides.length -1){
        setActiveslide(0)
      }
      else{
        setActiveslide(activeslide + 1)
      }
    };

    const prevslide = () => {
      if(activeslide === 0){
        setActiveslide(slides.length - 1)
      }
      else{
        setActiveslide(activeslide - 1)
      }
    }


    const arrowStyle = 'leftArrow rounded-full bg-grey  flex justify-center items-center shadow-sm hover:cursor-pointer';
  return (
    <div className='parent h-[540px] bg-white flex items-center justify-between'>

        {/* left arrow */}
        <div className={arrowStyle}>
            <ArrowLeftOutlined style={{fontSize: '50px'}} onClick={prevslide}/>
        </div>

        {/* slide  */}
        {
          slides.map((ele, index)=>{
            if(index=== activeslide){
              return (
                <div className={`wrapper flex items-center justify-center h-[100%] w-[100%] shadow-2xl rounded-lg border-[#c0c0c0] border-[1px] overflow-hidden relative` + ele.background} >
                  <div className='forimg flex flex-1 justify-center items-center h-[100%]'>
                    <img
                    className='object-cover'
                    src={ele.src}alt='slideimage' />
                  </div>
                  <div className='description flex flex-col flex-1 place-items-start -ml-11'>
                    <h2 className='text-[55px]'>{ele.content.h2}</h2>
                    <p className='text-[30px]'>{ele.content.p}</p>
                    <button className='btn' onClick={()=>history('/category')}>Shop Now</button>
                  </div>
              </div>
              )
            }
          })
        }

        {/* right arrow */}
        <div className={arrowStyle}>
            <ArrowRightOutlined  style={{fontSize: '50px'}} onClick={nextslide}/>
        </div>
    </div>
  )
}

export default Slider