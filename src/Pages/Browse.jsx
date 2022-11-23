import React from 'react'
import Navbar from '../components/Browse/NavBar'
import Main from '../components/Browse/Main'
import Row from '../components/Browse/Row/Row'
import requests from '../Request'

const Home = () => {
  return (
    <>
      <Navbar/>
      <div className='relative top-0 right-0 left-0 pb-[40%]'>
        <Main/>
      </div>

      <Row title='Up Coming' fetchURL={requests.requestUpcoming}/>
      <Row title='Popular' fetchURL={requests.requestPopular}/>
      <Row title='Trending' fetchURL={requests.requestTrending}/>
      <Row title='Top Rated' fetchURL={requests.requestTopRated}/>
      <Row title='Horror' fetchURL={requests.requestHorror}/>

    </>
  )
}

export default Home
