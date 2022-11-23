import React from 'react'
import Arrow from '../../../Icons/Arrow'

const ArrowLeft = ({onClick}) => {
  return (
    <div
      onClick={onClick}
      className='bg-[#14141480] absolute bottom-0 left-0 top-0 w-12 z-10 items-center justify-center group/arrow-left hidden group-hover:flex cursor-pointer rounded-r-md'
    >
      <Arrow className="h-6 w-auto group-hover/arrow-left:scale-125 duration-100 rotate-180"/>
    </div>
  )
}

export default ArrowLeft
