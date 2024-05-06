import React from 'react';
import logo from '../assets/logo.png'
import { useState } from 'react';
import {Link, animateScroll as scroll} from 'react-scroll'





const Navbar = () => {
    const [nav, setNav]=useState(false)
    const handleClick=()=>setNav(!nav)

    const handleClose =()=>setNav(!nav)
  return (
    <div className='w-screen h-[80px] z-10 bg-zinc-100 fixed drop-shadow-lg'>
        <div className='px-2 flex justify-between items-center w-full h-full'>
        <div className='flex items-center'>
        <img src={logo} alt='' className='w-40 h-30 ml-8'/>
        <ul className='hidden md:flex ml-20'>
        <li><Link to='home' smooth={true}  duration={500}>Home</Link></li>
        <li> <Link to='about' smooth={true} offset={50} duration={500}>About</Link></li>

        <li><Link to='products' smooth={true} offset={50} duration={500}>Products</Link></li>
        <li> <Link to='support' smooth={true} offset={50} duration={500}>Support</Link></li>

        </ul>
        </div>
        
        <div className='md:hidden flex pr-4' onClick={handleClick}>
        <i class="fa fa-bars" aria-hidden="true"></i>

        </div>
        </div>
        <ul className={!nav ? 'hidden' : 'absolute bg-zinc-50 w-full px-8'}>
                <li className='border-b-2 border-zinc-100 w-full'><Link onClick={handleClose} to='home' smooth={true} duration={500}>Home</Link></li>
                <li className='border-b-2 border-zinc-100 w-full'><Link onClick={handleClose} to='about' smooth={true} offset={50} duration={500}>About </Link></li>
                <li className='border-b-2 border-zinc-100 w-full'><Link onClick={handleClose} to='products' smooth={true} offset={50}>Products</Link></li>
                <li className='border-b-2 border-zinc-100 w-full'><Link onClick={handleClose} to='support' smooth={true} offset={50}>Support</Link></li>

            </ul>

        
    </div>
  )
}

export default Navbar