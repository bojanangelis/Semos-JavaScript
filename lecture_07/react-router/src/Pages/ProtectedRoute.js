import React, { useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const ProtectedRoute = ({ user, children }) => {
  const navigate = useNavigate()
  useEffect(() => {
    navigate('/login')
  }, [])
  return children
}

export default ProtectedRoute
