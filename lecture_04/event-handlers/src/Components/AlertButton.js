import React from 'react'

const AlertButton = ({ messege, children }) => {
    console.log(messege)
  return (
    <button onClick={() => alert(messege)}>{children}</button>
  )
}

export default AlertButton