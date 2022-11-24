import React from 'react'
import Accordion from './Accordion'
import GetStarted from './GetStarted'

const Questions = () => {
  return (
    <div className='px-[70px] py-[45px] pb-40'>
      <div className='text-white flex flex-col items-center'>
        <h1 className='text-5xl font-bold'>Frequently Asked Questions</h1>
        <Accordion/>
        <GetStarted/>
      </div>

    </div>
  )
}

export default Questions
