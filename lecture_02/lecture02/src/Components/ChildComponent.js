import React from 'react'

const ChildComponent = (props) => {
  return (
    <div style={{padding: 40}}>
      <h1>{props.obj.name}</h1>
      <h2>{props.obj.age}</h2>
    </div>
  )
}

export default ChildComponent