import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div style={{textAlign: 'center'}}>
      <h1>Error -- oops, 404</h1>

      <Link to='/'>Take me back</Link>
    </div>
  )
}

export default ErrorPage