import React, { useEffect, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { logOut } from '../../../slices/authSlice';
import { Icon } from '@iconify/react';
import SearchIcon from '../../../Icons/Search';
import NotificationIcon from '../../../Icons/Notification';
import AccountIcon from './Account/Account';

const Navbar = () => {
  const user = useSelector(state => state.auth.user, shallowEqual);
  const dispatch = useDispatch();
  const navigate = useNavigate()
  // console.log('user', user)
  const [bgTransparent, setBgTransparent] = useState(true);

  const handleLogout = async () => {
    try {
      await dispatch(logOut()).unwrap()
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }

  const transitionNavBar = () => {
    if(window.scrollY > 0){
      setBgTransparent(false)
    }
    else{
      setBgTransparent(true)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll',transitionNavBar)
    return () => window.removeEventListener('scroll', transitionNavBar)
  }, []);

  return (
    <div className={`fixed w-full z-[100] ${!bgTransparent && 'bg-black'}`}>
      <div className={`px-[4%] h-17 flex items-center justify-between bg-gradient-header ${!bgTransparent && 'bg-black'} duration-400 ease-in-out`}>
        <div className='flex'>
          <Link to='/' className='mr-11'>
            <Icon icon="logos:netflix" className='text-[25px]'/>
          </Link>
          <ul className='flex gap-[18px] text-sm text-[#e5e5e5]'>
            <li className='hover:text-[#b3b3b3] duration-400'><Link to='/'>Home</Link></li>
            <li className='hover:text-[#b3b3b3] duration-400'><Link to='/'>Series</Link></li>
            <li className='hover:text-[#b3b3b3] duration-400'><Link to='/'>Movies</Link></li>
            <li className='hover:text-[#b3b3b3] duration-400'><Link to='/'>New & Popular</Link></li>
          </ul>
        </div>
        <div className='flex gap-4'>
          <div className='text-white flex items-center'>
            <SearchIcon/>
          </div>
          <div className='flex items-center'>
            <span className='text-sm text-white'>Niños</span>
          </div>
          <div className='text-white flex items-center'>
            <NotificationIcon/>
          </div>
          <AccountIcon/>
        </div>
      </div>
    </div>
  )
}

export default Navbar
