import React from 'react'
import './Card.css'

const Card = ({ children }) => {
  return (
    <div className='card'> 
    {children}
    {/* Ovoj Avatar ide tuka */}
    {/* <Avatar 
    person={{
      name: 'Facebook', 
      image: 'https://www.facebook.com/images/fb_icon_325x325.png'}} 
      
      size={80} 
    /> */}
        <p>Semos academy</p>
    </div>
  )
}

export default Card