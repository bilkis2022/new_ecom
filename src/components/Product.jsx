import React from 'react'
import { Toproductapi } from '../apifolder/Topproductapi'
import Productss from './Productss'
const Product = () => {
  return (
    <div className='flex flex-wrap gap-5 justify-center'>
        {
            Toproductapi.map((product, index) => {
               return <Productss item={product} key={index} />
            })
        }
       
    </div>
  )
}

export default Product