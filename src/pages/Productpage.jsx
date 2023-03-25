import React from 'react'
import Announce from '../components/Announce'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import Counter from '../components/Counter'


const Productpage = () => {
  return (
    <div>
        <Announce />
        <Navbar />
        <div className='flex justify-center mb-2 mobile4:flex-col overflow-hidden'>
          <div className='flex flex-1 items-center justify-center'>
            <img src="https://cdn.shopify.com/s/files/1/0240/7285/products/KNITPULLOVER-PISTACHIO-2_360x.jpg?v=1642545216" alt="productimg" className='w-[80%] h-[80%] rounded-lg shadow-lg hover:scale-[1.1] ease-in duration-300 mobile4:w-[60%] mobile4:h-[60%]'/>
          </div>

          <div className='flex-[1.3] flex items-start flex-col mt-10 mobile4:items-center mobile4:flex-row'>
            <div className='mobile4:flex-1 mobile4:pl-2'>
                <h1 className='title text-[30px] '>Creamy hoody original</h1>
                <p className='mt-3 text-justify pr-[4rem]  mobile4:pl-1'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                </p>
            </div>
            <div className='mobile4:flex-1'>
                <p className='mt-2 text-2xl'>
                  price: <b>$54</b>
                </p>

                <div className='flex text-2xl mt-4'>
                  Colors:
                  <div className='bg-red-600 w-[2rem] h-[2rem] rounded-full border-2 cursor-pointer p-[10px] ml-5'></div>
                  <div className='bg-blue-600 w-[2rem] h-[2rem] rounded-full border-2 cursor-pointer p-[10px] ml-5'></div>
                  <div className='bg-yellow-400 w-[2rem] h-[2rem] rounded-full border-2 cursor-pointer p-[10px] ml-5'></div>
                </div>
                <div className='mt-7 text-2xl'>
                    size:
                    <select className='ml-5 border-2'>
                      <option selected disabled>select</option>
                      <option value="">small</option>
                      <option value="">medium</option>
                      <option value="">large</option>
                    </select>
                </div>
                <div className='mt-5'>
                  <Counter />
                </div>
                <div className='mt-4'>
                  <button className='btn '>Add to cart</button>
                </div>
            </div>
          </div>

        </div>
        <Newsletter />
        <Footer />
    </div>
  )
}

export default Productpage