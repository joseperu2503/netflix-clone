import React, { useRef, useState } from 'react'
import { Icon } from '@iconify/react';
import PenIcon from '../../../../Icons/AccountModal/Pen';
import ProfileIcon from '../../../../Icons/AccountModal/Profile';
import AccountIcon from '../../../../Icons/AccountModal/Account';
import HelpIcon from '../../../../Icons/AccountModal/Help';
import Logout from './Logout';

const Account = () => {
  const [showModal, setShowModal] = useState(false);
  const hover = useRef(false);

  const onMouseOver = () => {
    hover.current = true
    setShowModal(true)
  }

  const onMouseLeave = () => {
    hover.current = false
    setTimeout(() => {
      if(!hover.current){
        setShowModal(false)
      }
    }, 200);

  }

  return (
    <div className='flex items-center relative' onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
      <img className='h-8 w-8 rounded' src="https://occ-0-2865-2433.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdYJV5wt63AcxNaDoqDXUhqZb55oN5Dxt1m-Zdn_z5rn_hIq9m8dA8JB2xdcPmrY3yXnlVWYKPXnOrbv2QN4aEVU28dESJg.png?r=1d4" alt="" />
      <Icon icon="material-symbols:arrow-drop-down" className={`text-white h-7 w-7 duration-400 ${showModal && 'rotate-180'}`}/>
      {showModal &&

      <div className='absolute top-14 right-0 w-52 '>
        <div className='absolute top-0 right-0 left-0 bottom-0 bg-black opacity-80 -z-0'>
        </div>
        <div className='relative top-0 right-0 left-0 px-1 py-2 z-10'>
          <ul className='flex flex-col gap-2'>
            <li className='flex gap-3 cursor-pointer'>
              <div className='w-7 flex justify-center'>
                <PenIcon className="text-white w-5 h-5"/>
              </div>
              <span className='text-white text-sm'>Profiles</span>
            </li>
            <li className='flex gap-3 cursor-pointer'>
              <div className='w-7 flex justify-center'>
                <ProfileIcon className="text-white w-5 h-5"/>
              </div>
              <span className='text-white text-sm'>Transfer profile</span>
            </li>
            <li className='flex gap-3 cursor-pointer'>
              <div className='w-7 flex justify-center'>
                <AccountIcon className="text-white w-5 h-5"/>
              </div>
              <span className='text-white text-sm'>Transfer profile</span>
            </li>
            <li className='flex gap-3 cursor-pointer'>
              <div className='w-7 flex justify-center'>
                <HelpIcon className="text-white w-5 h-5"/>
              </div>
              <span className='text-white text-sm'>Help</span>
            </li>
          </ul>
          <hr className='mt-4'/>
          <div className='text-white text-sm flex justify-center py-2 cursor-pointer'>
            <Logout/>
          </div>
        </div>
      </div>}
    </div>
  )
}

export default Account
