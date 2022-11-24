import React from 'react'

const Card = ({title, subtitle, children, reverse = false}) => {
  return (
    <div className='px-[70px] py-[45px] border-b-8 border-[#222]'>
      <div className={`flex flex-col lg:flex-row items-center max-w-7xl mx-auto ${reverse && 'lg:flex-row-reverse'}`}>
        <div className={`text-white flex flex-col text-center lg:text-left w-full lg:w-1/2 ${reverse ? 'lg:pl-12' : 'lg:pr-12'}`}>
          <h1 className='text-5xl font-semibold'>{title}</h1>
          <h2 className='text-2xl mt-7'>{subtitle}</h2>
        </div>
        <div className='relative w-full lg:w-1/2'>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Card
