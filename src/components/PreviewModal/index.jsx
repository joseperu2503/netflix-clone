import React, { useState } from 'react'
import { shallowEqual, useSelector } from 'react-redux';
import { keyframes } from "styled-components";



const PreviewModal = () => {
  const showPreviewModal = useSelector(state => state.previewModal.showPreviewModal, shallowEqual);
  const movieTop = useSelector(state => state.previewModal.movieTop, shallowEqual);
  const movieLeft = useSelector(state => state.previewModal.movieLeft, shallowEqual);
  const movieRight = useSelector(state => state.previewModal.movieRight, shallowEqual);
  const movieBottom = useSelector(state => state.previewModal.movieBottom, shallowEqual);
  const movieWidth = useSelector(state => state.previewModal.movieWidth, shallowEqual);
  const movieHeight = useSelector(state => state.previewModal.movieHeight, shallowEqual);

  var spin = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  `;
  const style = {
    top: movieTop+window.scrollY,
    left: movieLeft,
    // right: movieRight,
    // bottom: movieBottom
    width: movieWidth,
    height: movieHeight,
    animation: `${spin} 2s linear infinite`
  }
  console.log(movieTop)
  // console.log('window.scrollY',window.scrollY)
  const [counter, setCounter] = useState(0);
  return (
    showPreviewModal &&
    <div className={`bg-white absolute duration-700`} onClick={() => setCounter(2)} style={style}>

    </div>
  )


}

export default PreviewModal
