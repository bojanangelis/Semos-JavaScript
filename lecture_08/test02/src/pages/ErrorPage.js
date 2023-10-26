import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div style={{height: '100%', backgroundClip: 'red'}}>
        <h2>ErrorPage</h2>
        <Link to='/'>Go Home</Link>'    
    </div>
  )
}

export default ErrorPage