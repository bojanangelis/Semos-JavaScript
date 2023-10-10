import React from 'react'
import img from '../assets/react.svg'
import './ToDoList.css'

const ToDoList = (props) => {
    console.log(props.myList)
    let myTodo = "Bojan's To do list"
        return (
        <div className='card'>
            <h2>{myTodo}</h2>
            <img src={img} alt='random' />
            <ul>
                <li>{props.myList[0]}</li>
                <li>{props.myList[1]}</li>
                <li>Buy bread</li>
            </ul>
        </div>
    )
}

export default ToDoList