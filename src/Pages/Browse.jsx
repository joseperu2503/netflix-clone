import React from 'react'
import Navbar from '../components/Browse/NavBar'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../Request'

const Home = () => {
  return (
    <>
      <Navbar/>
      <Main/>
      <Row title='Up Coming' fetchURL={requests.requestUpcoming}/>
      <Row title='Popular' fetchURL={requests.requestPopular}/>
      <Row title='Trending' fetchURL={requests.requestTrending}/>
      <Row title='Top Rated' fetchURL={requests.requestTopRated}/>
      <Row title='Horror' fetchURL={requests.requestHorror}/>

    </>
  )
}

export default Home
