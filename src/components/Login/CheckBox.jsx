import React from 'react'
import { Icon } from '@iconify/react';

const CheckBox = ({value,setValue}) => {
  return (
    <div className='h-4 w-4 bg-[#737373] rounded-sm cursor-pointer' onClick={() => setValue(!value)}>
      {value && <Icon icon="ph:check-bold" className='w-4 h-4 text-black'/>}
    </div>
  )
}

export default CheckBox
