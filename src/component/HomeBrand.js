import React from 'react'
import elnexu_structure1 from '../assets/elnexu_structure1.jpg'
import { Link } from 'react-router-dom'
//import { Link } from 'react-scroll'


function HomeBrand() {
  return (
    <div name='home' className='w-full h-screen bg-white-100 flex flex-col justify-between'>
        <div className='grid md:grid-cols-2 max-w[1240px] m-auto'>
            <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
            <h1 className='text-2xl font-bold'>Agent banking service for the future</h1>
            <p className='py-3'>Convenient, support for various transactions and <br/>highly secured agent banking.</p>
         <button className='py-3 px-6 sm:w-[60%] my-4'><Link to='form'>Get Started</Link></button>
            </div>
            <div>
                <img src={elnexu_structure1} alt='' />
            </div>
        </div>
        
    </div>
  )
}

export default HomeBrand