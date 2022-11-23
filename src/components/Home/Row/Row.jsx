import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import Movie from '../Movie';
import { Link } from 'react-router-dom';
import ArrowLeft from './ArrowLeft';
import ArrowRigth from './ArrowRigth';

const Row = ({title, fetchURL, isTop = false}) => {
  const [movies, setMovies] = useState([]);
  const slider = useRef();
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRigth, setShowRigth] = useState(true);

  useEffect(() => {
    axios.get(fetchURL)
    .then(response => {
      // console.log(response.data.results)
      setMovies(response.data.results)
    })
  }, [fetchURL]);

  const verifyArrows = (newScroll) => {
    if(newScroll <= 0){
      setShowLeftArrow(false)
    }else{
      setShowLeftArrow(true)
    }

    if(newScroll+slider.current.clientWidth >= slider.current.scrollWidth){
      setShowRigth(false)
    }else{
      setShowRigth(true)
    }
  }

  const slideLeft = () => {
    const newScroll = slider.current.scrollLeft - (slider.current.clientWidth - 96 )
    slider.current.scrollLeft = newScroll
    // console.log('new scroll', newScroll)
    verifyArrows(newScroll)
  }

  const slideRigth = () => {
    const newScroll = slider.current.scrollLeft + (slider.current.clientWidth - 96 )
    slider.current.scrollLeft = newScroll
    verifyArrows(newScroll)
    // console.log('new scroll', newScroll)
    // console.log('clientWidth', slider.current.clientWidth)
    // console.log('scrollWidth', slider.current.scrollWidth)
  }

  console.log('clientWidth', slider?.current?.scrollLeft)
  return (
    <div className='relative my-10'>
      <h2 className='text-white mb-2'>
        <Link to='/' className='mx-12 text-base font-semibold text-[#e5e5e5] mb-[0.5em]'>{title}</Link>
      </h2>
      <div className='relative flex items-center group '>

        { showLeftArrow && <ArrowLeft onClick={slideLeft}/>}

        <div className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide px-12" ref={slider}>

          {
            movies.map((item,index) => {
              if((isTop && index < 10) || !isTop){
                return <Movie item={item} isTop={isTop} index={index+1} key={index}/>
              }
            })
          }

        </div>

        { showRigth && <ArrowRigth onClick={slideRigth}/>}

      </div>
    </div>
  )
}

export default Row
