import React, { useEffect, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import LikeIcon from '../../Icons/Like';
import PlayIcon from '../../Icons/Play';
import PlusIcon from '../../Icons/Plus';
import { setShowPreviewModal } from '../../slices/previewModalSlice';
import './index.css'


const PreviewModal = () => {
  const showPreviewModal = useSelector(state => state.previewModal.showPreviewModal, shallowEqual);
  // const movieTop = useSelector(state => state.previewModal.movieTop, shallowEqual);
  // const movieLeft = useSelector(state => state.previewModal.movieLeft, shallowEqual);
  // const movieRight = useSelector(state => state.previewModal.movieRight, shallowEqual);
  // const movieBottom = useSelector(state => state.previewModal.movieBottom, shallowEqual);
  // const movieWidth = useSelector(state => state.previewModal.movieWidth, shallowEqual);
  // const movieHeight = useSelector(state => state.previewModal.movieHeight, shallowEqual);
  const movie = useSelector(state => state.previewModal.movie, shallowEqual);

  console.log('movie',movie)

  const dispatch = useDispatch();
  const [hidden, setHidden] = useState(true);
  const style = {
    top: movie.position?.top+window.scrollY,
    left: movie.position?.left,
    width: movie.position?.width,
    height: hidden ? movie.position?.height: movie.position?.height*2,
  }

  const onMouseLeave = () => {
    setHidden(true)
    // setTimeout(() => {
    //   dispatch(setShowPreviewModal(false))
    //   // setHidden(false)
    // }, 400);
  }
  const onAnimationEnd = () => {
    console.log('end transition')
    if(hidden){
      dispatch(setShowPreviewModal(false))
      // setHidden(false)
    }
  }

  useEffect(() => {
    if(showPreviewModal){
      setHidden(false)
    }
  }, [showPreviewModal]);

  // console.log(movieTop)
  // console.log('window.scrollY',window.scrollY)
  const [counter, setCounter] = useState(0);
  return (
    showPreviewModal &&
    <div
      className={`px-1 absolute duration-400  overflow-y-hidden  ${hidden ? 'scale-100 ' + (movie?.isTop && 'opacity-0') : 'scale-150' }`}
      onTransitionEnd={onAnimationEnd}
      onClick={() => setCounter(2)}
      onMouseLeave={onMouseLeave}
      style={style}
    >
      <div className='bg-black h-full shadow-md rounded-md'>
        <img className='rounded-t-md' src={`https://image.tmdb.org/t/p/w500${movie?.backdrop_path}`} alt="" />
        <div className='px-4 pt-2'>
          <h2 className='text-white text-sm font-semibold'>{movie.title}</h2>
          <div className='flex gap-2 items-center mt-3'>
            <button className='bg-white p-1.5 rounded-full hover:bg-[#e6e6e6] h-min'>
              <PlayIcon className="w-4 h-4"/>
            </button>
            <button className='border-2 rounded-full p-1.5 border-[#ffffff80] hover:border-white'>
              <PlusIcon className="text-white w-4 h-4"/>
            </button>
            <button className='border-2 rounded-full p-1.5 border-[#ffffff80] hover:border-white'>
              <LikeIcon className="text-white w-4 h-4"/>
            </button>
          </div>

        </div>
      </div>
    </div>
  )


}

export default PreviewModal
