import React from 'react'
import './Card.css'
import { useNavigate } from 'react-router-dom'
const Card = ({post}) => {
    const navigate = useNavigate()
    
    const handleLearnMore = () =>{
        navigate(`/post/${post.id}`)
    }

  return (
    <div className='post'>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        <button onClick={handleLearnMore}>Learn more</button>
    </div>
  )
}

export default Card