import React from 'react'

const ToDoList = ({ todo, cekirano = false }) => {
    const funkcija = () => {
    if(cekirano) {
        return "✅"
    } else {
        return "❌"
    }
}
  return (
    <div style={{display: 'flex'}}>
    {/* {todo && (
        <>
        <p>{todo}</p>
        <p>sekogash prikazuvame ako imame todo!</p>
        </>
    )} */}
        <>
        <p>{todo}</p>
        {/* <p>sekogash prikazuvame ako imame todo!</p> */}
        </>
        <div style={{marginLeft:40}}>
     {cekirano && (
         <p>✅</p>
         ) }
         </div>
        </div>
  )
}

export default ToDoList