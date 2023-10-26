import React from 'react'
import { useNavigate } from 'react-router-dom'

const LoginPage = ({ user, handleUser }) => {
  const navigate = useNavigate()
  const handleClick = () => {
    if (user.length > 1) navigate('/')
  }
  return (
    <div style={{ backgroundColor: 'red' }}>
      <form>
        <input type='email' value={user.email} onChange={(e) => handleUser(e, 'email')} />
        <input type='password' value={user.password} onChange={(e) => handleUser(e, 'password')} />
        <button onClick={handleClick}>Login</button>
      </form>
    </div>
  )
}

export default LoginPage
