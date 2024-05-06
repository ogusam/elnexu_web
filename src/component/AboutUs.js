import React from 'react'

const AboutUs = () => {
  return (
    <div name='about' className='w-full my-20'>
        <div className='max-w-[1240px] mx-auto'>
            <div className='text-center'>
                <h1 className='text-5xl font-bold'>About Elnexu Consults</h1>
                <p className='text-1xl py-6'>Elnexu Consults is a duly registered organization with the Corporate Affairs
                   Commission of Nigeria with primary focus in Agent Banking, Payment Platform
                   Advisory and FINTECH Marketing. We leverage on partnerships to provide a One-Stop-Shop 
                   for Payment and Collection Solutions. Thus, an engagement with our ever-ready team promises
                   to avail organizations and individuals with an array of innovative FINTECH Solutions.
                   Our Team comprises of professionals with cognate experience in eBanking, Product Management, Sales, PTSP/PSSP,
                   Web Development and API integration. We engage in continuous learning with
                `` a commitment to hold your hands from initiation through completion to post deployment 
                   services on any project you undertake with Elnexu.
</p>
            </div>
            <div className='grid md:grid-cols-2 px-2 text-center'>
                <div>
                    <h2 className='text-4xl font-bold'>Our Vision</h2>
                    <p>To enable smart connections for secure<br/> financial transactions.</p>
            </div>
            <div>
                <h2 className='text-4xl font-bold'>Our Mission</h2>
                <p>To build a reliable Fintech marketing hub for display and deployment of innovative payment and collection products.</p>
            </div>
            </div>
        </div>
    </div>
  )
}

export default AboutUs