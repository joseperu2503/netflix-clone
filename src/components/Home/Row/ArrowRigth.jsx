import React from 'react'
import Arrow from '../../../Icons/Arrow'

const ArrowRigth = ({onClick}) => {
  return (
    <div
      onClick={onClick}
      className='bg-[#14141480] absolute bottom-0 right-0 top-0 w-12 z-10 items-center justify-center group/arrow-left hidden group-hover:flex cursor-pointer rounded-l-md'
    >
      <Arrow className="h-6 w-auto group-hover/arrow-left:scale-125 duration-100"/>
    </div>
  )
}

export default ArrowRigth
