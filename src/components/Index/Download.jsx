import React from 'react'
import Card from './Card'

const Download = () => {
  return (
    <Card
      title='Download your shows to watch offline.'
      subtitle='Save your favorites easily and always have something to watch.'
      reverse
    >
      <img className='w-full' src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" alt="" />
      <div className='px-3 py-2 flex items-center gap-4 border-2 rounded-xl bg-black border-neutral-700 w-3/4 absolute bottom-8 left-1/2 -translate-x-1/2 shadow-[0_0_2em_0_#000]'>
        <img className='h-20' src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png" alt="" />
        <div className='flex flex-col justify-center  grow'>
          <div className='text-white font-semibold'>Stranger Things</div>
          <div className='text-blue-600 text-sm font-semibold'>Downloading...</div>
        </div>
        <div className='w-12 h-16' style={{background: `url('https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif') 50% no-repeat`, backgroundSize:'100%'}}>
        </div>
      </div>
    </Card>
  )
}

export default Download
