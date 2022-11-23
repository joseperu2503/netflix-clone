import React, { useState } from 'react'
import {FaHeart, FaRegHeart} from 'react-icons/fa'
import { db } from '../firebase';
import {arrayUnion, doc, updateDoc} from'firebase/firestore'
import { shallowEqual, useSelector } from 'react-redux';


const Movie = ({item}) => {
  const [like, setLike] = useState(false);
  const [saved, setSaved] = useState(false);
  const user = useSelector(state => state.auth.user, shallowEqual);

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

  return (
    <div className='w-[50%] sm:w-[calc(100%/3)] lg:w-[25%] xl:w-[20%] 2xl:w-[calc(100%/6)] inline-block cursor-pointer relative px-1'>
      <img className='w-full h-auto block rounded-md' src={`https://image.tmdb.org/t/p/w500${item?.backdrop_path}`} alt={item.title} />
      <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
        <p className='white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center'>
          {item?.title}
        </p>
        <p onClick={saveShow}>
          {like ? <FaHeart className='absolute top-4 left-4 text-gray-300'/> : <FaRegHeart className='absolute top-4 left-4 text-gray-300'/>}
        </p>
      </div>
    </div>
  )
}

export default Movie
