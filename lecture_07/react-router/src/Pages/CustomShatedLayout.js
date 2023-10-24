import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar'

const CustomSharedLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default CustomSharedLayout