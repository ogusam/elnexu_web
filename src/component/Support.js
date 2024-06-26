import {PhoneIcon, ArrowSmRightIcon} from '@heroicons/react/outline';
import {ChipIcon, SupportIcon} from '@heroicons/react/solid'
import Footer from './Footer'


import React from 'react'

const Support = () => {
  return (
    <div name='support' className='w-full h-screen mt-24'>
        <div className='w-full  h-[700px] bg-gray-900/90 absolute .'>
            

        </div>
        <div className='max-w[1240px] mx-auto text-white relative'>
            <div className='px-4 py-12'>
                <h2 className='text-3xl pt-8 text-slate-300 uppercase text-center'>Support</h2>
                <h3 className='text-4xl font-bold py-6 text-center'>Finding the right team</h3>
                <p className='py-4 text-3xl text-slate-300'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 pt-12 sm:pt-2 text-black'>
                <div className='bg-white rounded-xl shadow-2xl'>
                    <div className='p-8'>
                    <PhoneIcon className='w-16 p-4 bg-indigo-600 text-white rounded mt-[-4rem]'/>
                    <h3 className='font-bold text-2xl my-6'>Sales</h3>
                    <p className='text-x'>Generate Lorem Ipsum placeholder text. Select the number of characters, words, sentences or paragraphs, and hit generate!</p>
                    </div>
                    <div className='bg-slate-100 pl-8 py-4'><p className='flex items-center text-indigo-600'>Contact Us <ArrowSmRightIcon className='w-5 ml-2'/></p></div>

                </div>
                <div className='bg-white rounded-xl shadow-2xl'>
                    <div className='p-8'>
                    <SupportIcon className='w-16 p-4 bg-indigo-600 text-white rounded mt-[-4rem]'/>
                    <h3 className='font-bold text-2xl my-6'>Support</h3>
                    <p className='text-x'>Generate Lorem Ipsum placeholder text. Select the number of characters, words, sentences or paragraphs, and hit generate!</p>
                    </div>
                    <div className='bg-slate-100 pl-8 py-4'><p className='flex items-center text-indigo-600'>Contact Us <ArrowSmRightIcon className='w-5 ml-2'/></p></div>

                </div>
                <div className='bg-white rounded-xl shadow-2xl'>
                    <div className='p-8'>
                    <ChipIcon className='w-16 p-4 bg-indigo-600 text-white rounded mt-[-4rem]'/>
                    <h3 className='font-bold text-2xl my-6'>Inquries</h3>
                    <p className='text-x'>Generate Lorem Ipsum placeholder text. Select the number of characters, words, sentences or paragraphs, and hit generate!</p>
                    </div>
                    



                    

                </div>


            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Support