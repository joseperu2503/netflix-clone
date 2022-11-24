import React from 'react'
import Arrow from '../../Icons/Arrow'

const GetStarted = () => {
  return (
    <div className='pt-3 flex flex-col items-center'>
      <h3 className='pb-5 text-lg'>Ready to watch? Enter your email to create or restart your membership.</h3>
      <div className=' flex flex-col gap-4 lg:flex-row lg:gap-0 items-center'>
        <input type="text" className='w-[500px] h-[70px] px-3 text-black outline-none' placeholder='Email address'/>
        <button className='px-7 bg-button-get-started h-[70px] flex items-center'>
          <span className='text-3xl'>Get Started</span>
          <Arrow className="h-5 w-5 ml-4"/>
        </button>
      </div>
    </div>
  )
}

export default GetStarted
