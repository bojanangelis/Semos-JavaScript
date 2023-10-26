import React from 'react'
import { Outlet } from 'react-router-dom'

const CoustmLayout = () => {
  return (
    <>
    {/* Custo header nav bar */}
    <Outlet />
    </>
  )
}

export default CoustmLayout