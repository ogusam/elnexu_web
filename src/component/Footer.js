import React from 'react'
import amju from '../assets/amju.png'
import images from '../assets/images.png'
import kuda from '../assets/kuda.png'
import parallex from '../assets/parallex.png'
import fcmb from '../assets/fcmb.png'
import Alternative from '../assets/Alternative.png'

const Footer = () => {
  return (
    <div>
        <div className='text-center text-3xl font-bold my-10'>
            <h1>Our Partners</h1>
        </div>
        <div className=' grid grid-cols-3 ml-12 lg:grid-cols-6 relative gap-x-8 gap-y-16 pt-12 '>
            <div>
                <img src={amju} alt='' className='w-[20%]'/>
            </div>
            
            <div>
            <img src={images} alt='' className='w-[30%]'/>

            </div>
            <div>
            <img src={kuda} alt='' className='w-[30%]'/>
            </div>
            <div>
                <img src={parallex} alt='' className='w-[20%]'/>
            </div>
            <div>
                <img src={fcmb} alt='' className='w-[20%]'/>
            </div>
            <div>
                <img src={Alternative} alt='' className='w-[20%]'/>
            </div>
        </div>
    </div>
  )
}

export default Footer