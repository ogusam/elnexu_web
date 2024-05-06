import React from 'react'

function Products() {
  return (
    <div name='products' className='w-full my-32 mt-50'>
        <div className='max-w-[1240px] mx-auto'>
        <div className='text-center'>
            <h1 className='text-3xl font-bold'>What We Offer</h1>
            <p className='text-2xl py-6'>Welcome to Elnexu Agent Banking Platform, we are delighted to partner with you. When you signup as our agent we provide you free POS deployment, instant wallet settlement and best industry charges with room for flexibility.</p>
        </div>
        <div className='grid md:grid-cols-3 gap-1 px-2 text-center'>
        <div className='border py-8 rounded-xl shadow-xl'>
            <p className='text-4xl font-bold text-indigo-600'>100%</p>
            <p>completed</p>
        </div>
        <div className='border py-8 rounded-xl shadow-lg'>
            <p className='text-4xl font-bold text-indigo-600'>24/7</p>
            <p>Delivery</p>
        </div>
        <div className='border py-8 rounded-xl shadow-xl'>
            <p className='text-4xl font-bold text-indigo-600'>50k</p>
            <p>Transactions</p>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Products