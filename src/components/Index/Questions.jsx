import React from 'react'
import Accordion from './Accordion'

const Questions = () => {
  return (
    <div className='px-[70px] py-[45px] border-b-8 border-[#222]'>
      <div className='text-white flex flex-col items-center h-[2000px]'>
        <h1 className='text-5xl font-bold'>Frequently Asked Questions</h1>
        <Accordion/>
      </div>

    </div>
  )
}

export default Questions
