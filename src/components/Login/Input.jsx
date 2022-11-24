import React, { useState } from 'react'

const Input = ({value,setValue, type = 'text', label}) => {
  const [focus, setFocus] = useState(false);

  return (
    <div className='pb-4'>
      <div className='relative'>
        <label className=''>
          <input
            name="email"
            type={type}
            className='w-full h-[50px] px-5 pt-4 bg-[#333] rounded outline-none'
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            onChange={(e) => setValue(e.target.value)}
          />
          <label className={`absolute left-5  text-[#8c8c8c] transition-all ${(focus || value.length > 0) ? 'top-[7px] text-[11px]' : 'top-1/2 -translate-y-1/2'}`}>{label}</label>
        </label>
      </div>
    </div>
  )
}

export default Input
