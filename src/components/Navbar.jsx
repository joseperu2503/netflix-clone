import React from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { logOut } from '../slices/authSlice';


const Navbar = () => {
  const user = useSelector(state => state.auth.user, shallowEqual);
  const dispatch = useDispatch();
  const navigate = useNavigate()
  console.log('user', user)

  const handleLogout = async () => {
    try {
      await dispatch(logOut()).unwrap()
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='flex items-center justify-between p-4 z-[100] w-full absolute'>
      <Link to='/'>
        <h1 className='text-red-600 text-4xl font-bold cursor-pointer'>NETFLIX</h1>
      </Link>
      {user?.email
      ?
        <div>
          <Link to={'/account'}><button className='text-white pr-4'>Account</button></Link>
          <button
            onClick={handleLogout}
            className='bg-red-600 px-6 py-2 rounded cursor-pointer text-white'
          >
            Logout
          </button>
        </div>
      :
        <div>
          <Link to={'/login'}><button className='text-white pr-4'>Sign in</button></Link>
          <Link to={'/signup'}><button className='bg-red-600 px-6 py-2 rounded cursor-pointer text-white'>Sign up</button></Link>
        </div>
      }

    </div>
  )
}

export default Navbar
