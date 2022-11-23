import React from 'react'

const Enjoy = () => {
  return (
    <div className='px-[70px] py-[45px]'>
      <div className='grid grid-cols-1 md:grid-cols-2 items-center max-w-4xl mx-auto'>
        <div className='text-white pr-12 flex flex-col items-center md:items-start'>
          <h1 className='text-5xl font-semibold'>Enjoy on your TV.</h1>
          <h2 className='text-2xl mt-7'>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</h2>
        </div>
        <div className=''>
          <div className='relative'>
            <img className='w-full relative z-10' src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" alt="" />
            <video className='absolute top-[20.5%] left-[13%] max-w-[73%]' src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v" autoPlay playsInline muted loop></video>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Enjoy
