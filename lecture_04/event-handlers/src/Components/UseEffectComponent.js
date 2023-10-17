import React, { useEffect } from 'react'

const UseEffectComponent = ({ name }) => {

    useEffect(() => {
        console.log('UseEffectComponent Mounted')
    }, [name])

  return (
    <div>UseEffectComponent</div>
  )
}

export default UseEffectComponent