import React from 'react'
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom'
import Arrow from '../Icons/Arrow'
import Navbar from '../components/Index/Navbar';
import Banner from '../components/Index/Banner';
import Enjoy from '../components/Index/Enjoy';

const Index = () => {
  return (
    <div className='bg-black'>
      <Navbar/>
      <div>
        <Banner/>
        <Enjoy/>
      </div>
    </div>
  )
}

export default Index
