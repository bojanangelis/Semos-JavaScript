import React, { useState } from 'react'
import './Todo.css'
import { RiCloseCircleLine } from 'react-icons/ri'
import { TiEdit } from 'react-icons/ti'
import ToDoForm from './ToDoForm'
// npm install react-icons --save

const Todo = ({todos, updateTodo}) => {
  const [edit, setEdit] = useState({
    id: null,
    text: ''
  })

  const submitUpdate = value => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: ''
    });
  };

  if(edit.id) return <ToDoForm edit={edit} handleAddToDo={submitUpdate} />

  return todos?.map((todo, i) => (
        <div 
            className='todo-row'
            key={i}>
            <div className='todo-row__inside'  key={todo.id}>
              {/* tekstot go prikazuvame od todo. */}
                {todo.text}
            </div>
            <div className='icons'>
              <RiCloseCircleLine
                className='delete-icon'
                size={32}
               />

               <TiEdit
                onClick={() => setEdit({id: todo.id, text: todo.text})}
                size={32}
               className='edit-icon'
               />
            </div>
        </div>
  ))
}

export default Todo





// [
//     {id: 1, text: 'dadaad'},0
//     {id: 2, text: 'dadaad'},1
//     {id: 3, text: 'dadaad'},2
//     {id: 4, text: 'dadaad'},3
//     {id: 5, text: 'dadaad'},4
// ]
// for(let i=0; i < todos.length; i++){
//     console.log(i)
// }