import React from 'react'
import Arrow from '../../Icons/Arrow'


const Banner = () => {
  return (
    <div className='px-[70px] py-[45px] relative border-b-8 border-[#222] box-border h-[670px]'>
      <div className='absolute -top-20 right-0 left-0 h-[740px] z-0'>
        <img className='h-full w-full object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/e89c9679-2f5f-491d-924c-c58924a8ee4b/fd263652-9904-4c9d-8739-de4460c2f3a1/PE-en-20221121-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="" />
        <div className='bg-banner-index bg-image-banner-index absolute top-0 right-0 left-0 bottom-0'></div>
      </div>
      <div className='py-16 lg:py-20 mx-auto z-10 relative text-white flex flex-col items-center text-center'>
        <h1 className='text-3xl xl:text-6xl font-bold max-w-3xl'>Unlimited movies, TV shows, and more.</h1>
        <h2 className='text-2xl my-5 font-medium'>Watch anywhere. Cancel anytime.</h2>
        <div className='pt-3 flex flex-col'>
          <h3 className='pb-5 text-lg'>Ready to watch? Enter your email to create or restart your membership.</h3>
          <div className=' flex flex-col gap-4 lg:flex-row lg:gap-0 items-center'>
            <input type="text" className='w-[500px] h-[70px] px-3 text-black outline-none' placeholder='Email address'/>
            <button className='px-7 bg-button-get-started h-[70px] flex items-center'>
              <span className='text-3xl'>Get Started</span>
              <Arrow className="h-5 w-5 ml-4"/>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
