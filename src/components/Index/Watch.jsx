import React from 'react'
import Card from './Card'

const Watch = () => {
  return (
    <Card
      title='Watch everywhere.'
      subtitle='Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.'
    >
      <img className='w-full relative z-10' src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png" alt="" />
      <video className='absolute top-[10%] left-[19%] max-w-[63%]' src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v" autoPlay playsInline muted loop></video>
    </Card>
  )
}

export default Watch
