import React from 'react'
import MiniAvatar from './MiniAvatar'

const Avatar = ({ person, size, color }) => {
// props.ime 
// props.size

  return (
    <div style={{backgroundColor: color, padding: 10}}>
    <img
        width={size}
        height={size}
        src={person.image} 
        alt={person.name}
        />
        <p>{person.name}</p>
        <p>{person.hoby}</p>

        <MiniAvatar imeOdCovek={person.name} img={person.image} size={40}  />
      </div>
  )
}

export default Avatar