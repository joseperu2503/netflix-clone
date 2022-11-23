import React from 'react'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react';


const Navbar = () => {
  return (
    <div className='pt-5 h-20 relative z-10'>
      <div className='mx-14 pt-2 flex justify-between'>
        <Link to='/' className='mr-11'>
          <Icon icon="logos:netflix" className='text-[36px]'/>
        </Link>
        <div className='flex ga-4'>
          <Link to={'/login'}>
            <button className='bg-[#e50914] px-[17px] py-[7px] rounded cursor-pointer text-white'>
              Sign In
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
