import { EmailOutlined, Facebook, Instagram, LocalPhoneOutlined, LocationOnOutlined, Pinterest, Twitter } from '@mui/icons-material'
import React from 'react'

const Footer = () => {
  const iconStyle = 'm-3 rounded-full cursor-pointer p-2 text-white'
  return (
    <div className='flex items-center justify-around p-2 mobile:flex-col mobile:justify-center'>
        {/* store info */}
        <div className='flex-1 flex flex-col flex-wrap p-2'>
            <h1 className='text-[25px] mobile:text-center'>Bilkis</h1>
            <p className='mobile:text-center'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
            <div className='flex items-center justify-center mt-3 self-start mobile:self-center'>
              <div className={iconStyle + ' bg-blue-700'}>
                <Facebook />
              </div>
              <div className={iconStyle + ' bg-orange-500'}>
                <Instagram />
              </div>
              <div className={iconStyle + ' bg-sky-400'}>
                <Twitter />
              </div>
              <div className={iconStyle + ' bg-red-600'}>
                <Pinterest />
              </div>
            </div>
        </div>

        {/* contact  info */}
        <div className='flex-1 flex flex-col p-2'>
            <div className='flex m-3'>
              <LocationOnOutlined />
              <p className='pl-3'>state of california</p>
            </div>

            <div className='flex m-3'>
              <LocalPhoneOutlined />
              <p className='pl-3'>+91 54665454</p>
            </div>

            <div className='flex m-3'>
              <EmailOutlined />
              <p className='pl-3'>bilkis@gmail.com</p>
            </div>
        </div>
    </div>
  )
}

export default Footer