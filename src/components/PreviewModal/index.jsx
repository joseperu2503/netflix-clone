import React, { useEffect, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { setShowPreviewModal } from '../../slices/previewModalSlice';
import './index.css'


const PreviewModal = () => {
  const showPreviewModal = useSelector(state => state.previewModal.showPreviewModal, shallowEqual);
  const movieTop = useSelector(state => state.previewModal.movieTop, shallowEqual);
  const movieLeft = useSelector(state => state.previewModal.movieLeft, shallowEqual);
  const movieRight = useSelector(state => state.previewModal.movieRight, shallowEqual);
  const movieBottom = useSelector(state => state.previewModal.movieBottom, shallowEqual);
  const movieWidth = useSelector(state => state.previewModal.movieWidth, shallowEqual);
  const movieHeight = useSelector(state => state.previewModal.movieHeight, shallowEqual);

  const dispatch = useDispatch();
  const [hidden, setHidden] = useState(true);
  const style = {
    top: movieTop+window.scrollY,
    left: movieLeft,
    // right: movieRight,
    // bottom: movieBottom
    width: movieWidth,
    height: movieHeight,
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

  console.log(movieTop)
  // console.log('window.scrollY',window.scrollY)
  const [counter, setCounter] = useState(0);
  return (
    showPreviewModal &&
    <div
      className={`bg-white absolute duration-400  ${hidden ? 'scale-100' : 'scale-150' }`}
      onTransitionEnd={onAnimationEnd}
      onClick={() => setCounter(2)}
      onMouseLeave={onMouseLeave}
      style={style}
    >

    </div>
  )


}

export default PreviewModal
