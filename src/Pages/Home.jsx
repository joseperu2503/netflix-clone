import React, { useEffect } from 'react'
import Navbar from '../components/Home/NavBar'
import Main from '../components/Home/Main'
import Row from '../components/Home/Row/Row'
import requests from '../Request'
import PreviewModal from '../components/PreviewModal'
import axios from 'axios'

const Home = () => {

  useEffect(() => {
    axios.get(requests.requestTest)
    .then(response => {
      // console.log(response.data.results)
      console.log('test',response)
    })
  }, []);

  return (
    <>
      <Navbar/>
      <div className='relative top-0 right-0 left-0 pb-[40%]'>
        <Main/>
      </div>

      <Row title='Up Coming' fetchURL={requests.requestUpcoming}/>
      <Row title='Top 10 Tv Shows' fetchURL={requests.requestTopTv} isTop/>
      <Row title='Popular' fetchURL={requests.requestPopular}/>
      <Row title='Trending' fetchURL={requests.requestTrending}/>
      <Row title='Top Rated' fetchURL={requests.requestTopRated}/>
      <Row title='Top 10 Movies' fetchURL={requests.requestTopMovie} isTop/>
      <Row title='Horror' fetchURL={requests.requestHorror}/>

      <PreviewModal/>
    </>
  )
}

export default Home
