import React from 'react'
import { Categoryapi } from '../apifolder/Categoriesapi'
import Category from './Category'

const Categories = () => {
  return (
    <div className='flex justify-between items-center p-5 mobile:flex-col'>
        {
          Categoryapi.map ((category, index) =>{
           return <Category item={category} key={index} />
          })
        }
    </div>
  )
}

export default Categories