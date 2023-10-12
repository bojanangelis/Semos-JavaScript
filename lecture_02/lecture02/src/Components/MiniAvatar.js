import React from 'react'
import TextComponent from './TextComponent'

const MiniAvatar = ({img, size, imeOdCovek}) => {
console.log('MiniAvatar size --->', size)
  return (
    <div>
        <img width={size} height={size} src={img} alt='text' />
        <p>logged in 5 minutes ago</p>
        <TextComponent imeOdCovek={imeOdCovek} />
    </div>
  )
}

export default MiniAvatar