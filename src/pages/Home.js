import React from 'react'
import Announce from '../components/Announce'
import Categories from '../components/Categories'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Product from '../components/Product'
import Slider from '../components/Slider'
import Cart from './Cart'
import Categoryy from './Categoryy'
import Productpage from './Productpage'

const Home = () => {
  return (
    <div>
      <Announce /> 
      <Navbar />
      <Slider />
      <Categories />
      <Product />
      <Newsletter />
      <Footer />
      
    </div>
  )
}

export default Home