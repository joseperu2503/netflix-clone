import React, { useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { signUp } from '../slices/authSlice';

const Signup = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.auth.user, shallowEqual);
  const dispatch = useDispatch();
  const navigate = useNavigate()


  const handleSubmit = async () => {
    try {
      await dispatch(signUp({email: email, password: password})).unwrap()
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='w-full h-screen'>
      <img className='hidden sm:block absolute w-full h-full object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/5aecc44d-2a1f-4313-8399-98df20908b64/3f1bc1fc-6181-4ecd-9a9d-ad4f70f6867d/PE-es-20221114-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="" />
      <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
      <div className='fixed w-full px-4 py-24 z-50'>
        <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
          <div className='w-[320px] mx-auto py-16'>
            <h1 className="text-3xl font-bold">Sign Up</h1>
              <div className='w-full flex flex-col py-4'>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className='p-3 my-2 bg-gray-700 rounded'
                  type="email"
                  placeholder='Email'
                  autoComplete='email'
                />
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  className='p-3 my-2 bg-gray-700 rounded'
                  type="password"
                  placeholder='Password'
                />
                <button onClick={handleSubmit} className='bg-red-600 py-3 my-6 rounded font-bold'>Sign Up</button>
                <div className='flex justify-between items-center text-sm text-gray-600'>
                  <p><input className='mr-2' type="checkbox"/>Remember me</p>
                  <p>Need Help?</p>
                </div>
                <p className='py-8'>
                  <span className='text-gray-600'>Already subscribed to Netflix?</span>
                  <Link to={'/login'}>Sign In</Link>
                </p>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
