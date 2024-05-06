import React from 'react'
import HomeBrand from './HomeBrand'
import AboutUs from './AboutUs'
import Products from './Products'
import Navbar from './Navbar'
//import Footer from './Footer'
import Support from './Support'

function SinglePage() {
  return (
    <div className=''>
            <Navbar/>
    <HomeBrand/>
    <AboutUs/>
    <Products/>
    <Support/>

    

    </div>
  )
}

export default SinglePage