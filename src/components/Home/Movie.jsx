import React, { useRef, useState } from 'react'
import {FaHeart, FaRegHeart} from 'react-icons/fa'
import { db } from '../../firebase';
import {arrayUnion, doc, updateDoc} from'firebase/firestore'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { setMovie, setMovieBottom, setMovieHeight, setMovieLeft, setMovieRight, setMovieTop, setMovieWidth, setShowPreviewModal } from '../../slices/previewModalSlice';
import TopIndex from '../../Icons/Top/TopIndex';

const Movie = ({item, isTop = false, index}) => {
  const [like, setLike] = useState(false);
  const [saved, setSaved] = useState(false);
  const user = useSelector(state => state.auth.user, shallowEqual);
  const dispatch = useDispatch();
  const movie = useRef();
  const hover = useRef(false);


  const movieID = doc(db,'users', `${user?.email}`)
  const saveShow = async () => {
    if(user?.email){
      setLike(!like)
      setSaved(true)

      await updateDoc(movieID,{
        savedShows: arrayUnion({
          id: item.id,
          title: item.title,
          img: item.backdrop_path
        })
      })
    }else{
      alert('Please log in to saved a movie')
    }
  }

  const onMouseOver = () => {
    hover.current = true
    setTimeout(() => {
      if(hover.current){
        const moviePosition = movie.current.getBoundingClientRect()
        // dispatch(setMovieTop(movie.current.getBoundingClientRect().top))
        // dispatch(setMovieLeft(movie.current.getBoundingClientRect().left))
        // dispatch(setMovieRight(movie.current.getBoundingClientRect().right))
        // dispatch(setMovieBottom(movie.current.getBoundingClientRect().bottom))
        // dispatch(setMovieWidth(movie.current.getBoundingClientRect().width))
        // dispatch(setMovieHeight(movie.current.getBoundingClientRect().height))
        dispatch(setMovie({
          position : {
            top: moviePosition.top,
            left: moviePosition.left,
            right: moviePosition.right,
            bottom: moviePosition.bottom,
            width: moviePosition.width,
            height: moviePosition.height,
          },
          isTop: isTop,
          ...item
        }))
        dispatch(setShowPreviewModal(true))

        console.log(movie.current.getBoundingClientRect())
      }

    }, 500);
  }

  const onMouseLeave = () => {
    hover.current = false
  }

  return (
    <div
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
      ref={movie}
      className='w-[50%] sm:w-[calc(100%/3)] lg:w-[25%] xl:w-[20%] 2xl:w-[calc(100%/6)] inline-block cursor-pointer relative px-1'
    >
      {isTop ?
      <div className='pb-[75%] relative rounded-md'>
        <div className='absolute h-full w-[50%]  left-0'><TopIndex index={index}/></div>
        <img className='absolute top-0 bottom-0 right-0 w-[50%] h-full object-cover rounded-r-md' src={`https://image.tmdb.org/t/p/w500${item?.poster_path}`} alt="" />
      </div>
      :
      <img className='w-full h-auto block rounded-md' src={`https://image.tmdb.org/t/p/w500${item?.backdrop_path}`} alt={item.title} />
      }

      {/* <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
        <p className='white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center'>
          {item?.title}
        </p>
        <p onClick={saveShow}>
          {like ? <FaHeart className='absolute top-4 left-4 text-gray-300'/> : <FaRegHeart className='absolute top-4 left-4 text-gray-300'/>}
        </p>
      </div> */}
    </div>
  )
}

export default Movie
