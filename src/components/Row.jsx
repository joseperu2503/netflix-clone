import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import Movie from './Movie';
import {MdChevronLeft, MdChevronRight} from 'react-icons/md'

const Row = ({title, fetchURL}) => {
  const [movies, setMovies] = useState([]);
  const slider = useRef();

  useEffect(() => {
    axios.get(fetchURL)
    .then(response => {
      // console.log(response.data.results)
      setMovies(response.data.results)
    })
  }, [fetchURL]);

  const slideLeft = () => {
    console.log(slider)
    slider.current.scrollLeft = slider.current.scrollLeft - 500
  }

  const slideRigth = () => {
    slider.current.scrollLeft = slider.current.scrollLeft + 500
  }

  return (
    <>
      <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
      <div className='relative flex items-center group'>
        <MdChevronLeft
          onClick={slideLeft}
          className='bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
          size={40}
        />
        <div id={'slider'} className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide" ref={slider}>
          {movies.map((item,id) => (
            <Movie item={item} key={id}/>
          ))}
        </div>
        <MdChevronRight
          onClick={slideRigth}
          className='bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
          size={40}
        />
      </div>
    </>
  )
}

export default Row
