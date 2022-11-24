import React from 'react'
import Card from './Card'

const Enjoy = () => {
  return (
    <Card title='Enjoy on your TV.' subtitle='Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.'>
      <img className='w-full relative z-10' src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" alt="" />
      <video className='absolute top-[20.5%] left-[13%] max-w-[73%]' src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v" autoPlay playsInline muted loop></video>
    </Card>
  )
}

export default Enjoy
