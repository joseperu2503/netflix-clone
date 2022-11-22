import React from 'react'
import { shallowEqual, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({children}) => {

  const user = useSelector(state => state.auth.user, shallowEqual);

  if(!user){
    return <Navigate to='/'/>
  }else{
    return children
  }
}

export default ProtectedRoute
