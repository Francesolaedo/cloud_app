// import {React,useState} from 'react'
import { useState } from 'react'
import chelsea from '../assets/images/chelsea-done.png'
import {HiMenu} from 'react-icons/hi'
import {HiX} from 'react-icons/hi'
import { Link } from 'react-router-dom';

const Navbar = () => {

  const [nav, setNav] = useState(false);

  const toggle = () => {
    setNav(!nav)
  }
  return (
    <div className="w-screen h-[80px] z-10 bg-red-300 fixed drop-shadow-lg">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
            <h1 className="text-4xl font-bold mr-4 sm:txt-3xlg flex"><img src= {chelsea}  className='w-30 mr-2 h-14'/>Cloud</h1>
            <ul className='hidden md:flex gap-10 pl-[200px] font-bold'>
               
              <Link to="/"> <li>Home</li> </Link>
              <Link to="/about"> <li>About</li> </Link>
              <Link to="/support"> <li>Support</li> </Link>
              <Link to="/platform"> <li>Platform</li> </Link>
              <Link to="/pricing"> <li>Pricing</li> </Link>

            </ul>  
        </div>
        

        <div className='hidden md:flex pr-4'>
          <Link to='register'><button className="border-none bg-black rounded-xl px-5 py-3 text-white mr-4">Register</button></Link>
          <Link to='login'><button className="border-none bg-black rounded-xl px-5 py-3 text-white mr-4">Login</button></Link>
        </div>

        <div className='md:hidden mr-4' onClick={toggle}>
          {!nav ? (<HiMenu className='w-9 h-8'/>) : (<HiX className='w-9 h-8'/>)}
        </div>
      </div>

      <ul className={!nav ? 'hidden' : 'absolute bg-[#f9f9f9] w-[100%] px-8 gap-10 md:flex'} onClick={toggle}>
        <Link to="/"><li className='py-3 border-black w-full font-bold text-2xl'> Home</li></Link>
        <Link to="/about"> <li className='py-3 border-black w-full font-bold text-2xl'>About</li></Link>
        <Link to="/pricing"> <li className='py-3 border-black w-full font-bold text-2xl'>Pricing</li></Link>
        <Link to="/support"> <li className='py-3 border-black w-full font-bold text-2xl'>Support</li></Link> 
        <Link to="/platform"> <li className='py-3 border-black w-full font-bold text-2xl'>Platform</li></Link>

        <div className='flex flex-col my-4'>
          <Link to="/register"><button className='bg-black text-white px-8 py-3 mb-4 rounded-2xl'>Register</button></Link>
          <Link to="/login"><button className='bg-black text-white px-8 py-3 mb-4 rounded-2xl'>Login</button></Link>
        </div>
        
      </ul>
    </div>
  )
}

export default Navbar
