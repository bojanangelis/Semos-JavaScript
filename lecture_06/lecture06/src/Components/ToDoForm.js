import React, { useState } from 'react'
//rafce
import './ToDoForm.css'

const ToDoForm = ({ handleAddToDo ,edit }) => {
    const [input, setInput] = useState('')

    const handleChange = (e) => { 
        setInput(e.target.value)
    }

    function handleAddClick(e) {
        e.preventDefault()
        handleAddToDo({ id: Math.random(Math.floor * 10000) , text: input })
        setInput('')
    }

  return (
    <form onSubmit={(e)=>handleAddClick(e)} className='todo-form'>
        {edit ? (
            <input
                className='todo-input'
                placeholder='Edit todo'
                value={input}
                onChange={(e) => handleChange(e)}
                type='text' 
                />
        ): (
        <input
            className='todo-input'
            placeholder='Add new todo'
            value={input}
            onChange={(e) => handleChange(e)}
            type='text' 
            />
        )}
            <button
                disabled={input.length <= 0}
                className={`todo-button ${input.length <= 0 && 'todo-empthy'} ${edit && 'edit-button'}` }
                type='submit'>
                {edit ? 'edit' : 'add'}
            </button>

    </form>
  )
}

export default ToDoForm