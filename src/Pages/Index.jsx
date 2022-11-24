import React from 'react'
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom'
import Arrow from '../Icons/Arrow'
import Navbar from '../components/Index/Navbar';
import Banner from '../components/Index/Banner';
import Enjoy from '../components/Index/Enjoy';
import Download from '../components/Index/Download';
import Watch from '../components/Index/Watch';
import Create from '../components/Index/Create';
import Questions from '../components/Index/Questions';

const Index = () => {
  return (
    <div className='bg-black'>
      <Navbar/>
      <div>
        <Banner/>
        <Enjoy/>
        <Download/>
        <Watch/>
        <Create/>
        <Questions/>
      </div>
    </div>
  )
}

export default Index
