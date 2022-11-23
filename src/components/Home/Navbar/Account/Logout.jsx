import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logOut } from '../../../../slices/authSlice';

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleLogout = async () => {
    try {
      await dispatch(logOut()).unwrap()
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <span onClick={handleLogout}>Logout</span>
  )
}

export default Logout
