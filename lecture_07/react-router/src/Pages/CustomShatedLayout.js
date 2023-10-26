import React, { useEffect } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import { useNavigate } from 'react-router-dom'

const CustomSharedLayout = ({ email }) => {
  const navigate = useNavigate()

  useEffect(() => {
    if (!email) navigate('/login')
  }, [])

  return (
    <>
      <Navbar user={email} />
      <Outlet />
    </>
  )
}

export default CustomSharedLayout
