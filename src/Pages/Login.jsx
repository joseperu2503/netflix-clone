import React, { useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { login } from '../slices/authSlice';
import { Icon } from '@iconify/react';
import Input from '../components/Login/Input';
import CheckBox from '../components/Login/CheckBox';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [remember, setRemember] = useState(true);
  const user = useSelector(state => state.auth.user, shallowEqual);
  const dispatch = useDispatch();
  const navigate = useNavigate()


  const handleSubmit = async () => {
    setError('')
    try {
      await dispatch(login({email: email, password: password})).unwrap()
      navigate('/browser')
    } catch (error) {
      console.log(error)
      setError(error.message)
    }
  }

  return (
    <div className='w-full min-h-full relative'>
      <div className='absolute h-full min-h-[100vh] w-full opacity-50 -z-10'>
        <img className='hidden sm:block w-full h-full object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/e89c9679-2f5f-491d-924c-c58924a8ee4b/fd263652-9904-4c9d-8739-de4460c2f3a1/PE-en-20221121-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="" />
      </div>
      <div className='absolute top-0 left-0 w-full bg-gradient-header-login h-[90px] z-20 flex items-center'>
        <Link to='/' className='ml-9'>
          <Icon icon="logos:netflix" className='text-[45px]'/>
        </Link>
      </div>
      <div className='max-w-[450px] mx-auto pt-[91px]'>
        <div className=' h-[660px] mx-auto bg-black/75 text-white pt-[90px] pb-10 px-[68px] rounded flex flex-col'>
          <div className='grow'>
            <h1 className="text-3xl font-bold mb-7">Sign In</h1>
            {error && <p className='p-3 bg-red-400 my-2'>{error}</p>}
            <div className='w-full flex flex-col'>
              <Input value={email} setValue={setEmail} label='Email'/>
              <Input value={password} setValue={setPassword} type='password' label='Password'/>
              <button
                onClick={handleSubmit}
                className='bg-[#e50914] py-3 mt-6 mb-3 rounded font-bold'
              >
                Sign In
              </button>
              <div className='flex justify-between items-center text-[13px] text-[#b3b3b3]'>
                <div className='flex gap-1 items-center'>
                  <CheckBox value={remember} setValue={setRemember}></CheckBox>Remember me
                </div>
                <span>Need Help?</span>
              </div>
            </div>
          </div>
          <div className='mb-24'>
            <div className='mt-4 text-[#737373]'>
              New to Netflix?
              <Link to={'/signup'} className="text-white ml-2">Sign up now</Link>
            </div>
            <div className='mt-3 text-[13px]'>
              <span className='text-[#8c8c8c]'>This page is protected by Google reCAPTCHA to ensure you're not a bot.</span>
              &nbsp;
              <button className='text-[#0071eb]'>Learn more.</button>
            </div>
          </div>
        </div>
        <div className='h-[326px]'>
        </div>
      </div>
    </div>
  )
}

export default Login
