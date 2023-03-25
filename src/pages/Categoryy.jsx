import React from 'react'
import Announce from '../components/Announce'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Product from '../components/Product'

const Categoryy = () => {
  return (
    <div>
        <Announce />
        <Navbar />
        <div className='flex flex-col p-5'>
            <h1 className='tex-[30px] mobile2:text-center'>Men's Cloth</h1>
            <div className='flex items-center justify-between mt-3 mobile2:flex-col mobile2:justify-center'>
                <div className='flex mobile2:mb-4'>
                    <p>Filter by</p>
                    <select name="" id="" className='ml-3 border-2 border-silver'>
                        <option value="" selected disabled>size</option>
                        <option value="">small</option>
                        <option value="">medium</option>
                        <option value="">large</option>
                    </select>
                    <select className='ml-3 border-2 border-silver'>
                        <option value="" selected disabled>color</option>
                        <option value="">yellow</option>
                        <option value="">blue</option>
                        <option value="">red</option>
                    </select>
                </div>
                <div className='flex'>
                    <p>sort by</p>
                    <select className='ml-3 border-2 border-silver'>
                        <option value="">newest(first)</option>
                        <option value="">oldest(first)</option>
                        <option value="">price(Asc)</option>
                        <option value="">price(des)</option>
                    </select>
                </div>
            </div>
        </div>
        <Product />
        <Newsletter />
        <Footer />
    </div>
  )
}

export default Categoryy