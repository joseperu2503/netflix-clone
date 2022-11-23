import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Account from './Pages/Account'
import Browse from './Pages/Browse'
import Login from './Pages/Login'
import ProtectedRoute from './Pages/ProtectedRoute'
import Signup from './Pages/Signup'
import { unsubscribe } from './slices/authSlice';


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(unsubscribe())
  },);

  return (
    <>
      {/* <Navbar/> */}
      <Routes>
        <Route path='/' element={<Browse/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/account' element={<ProtectedRoute><Account/></ProtectedRoute>}/>
      </Routes>
    </>
  )
}

export default App
