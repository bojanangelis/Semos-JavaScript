import React, { useState } from 'react'
import ToDoForm from './ToDoForm'
import Todo from './Todo';

// const x = [
// {
//     id: '1',
//     value: 'da igrame dota 2'
// }
// {
//     id: '2',
//     value: 'da igrame dota 2'
//     newValue: 'da igrame dota 1'
// }
// ]

const ToDoList = () => {
    // pravime state so niza od todos site statovi shto gi vnesuvame
    const [todos, setTodos] = useState([]);

    const addTodo = (value) => {
        if(!value.text || /^\s*$/.test(value.text)) {
            return;
        }
        // const x = todos
        // x.push(value);
        // setTodos(x)
        setTodos([ ...todos, value])
    }
    console.log('watch here-->', todos)

    const updateTodo = (todoId, newValue) => {

      // todoId = 1
      
      //newValue = {
        // id: 4
        // text: 'new text'
      // }
      if(!newValue.text || /^\s*$/.test(newValue.text)) {
        return;
    }
    // so (prev) => pravime arrow function eden map
    setTodos((e) => e.map(item => (item.id === todoId ? newValue : item)))
    // neshto vaka pravi sekogash vrti do kraj na nizata n-1;
    // i proveruva dali idto od state todos.id === na idTo shto go pushtam od parametar
    // ako e isto daj mi ja novata vrednost
    // ako ne  e sito ostavija starata vrednost.
    // setTodos((e) => e.map
    // {id: 0}
    // {id: 1}
    // {id: 2}
    // )

    }

    // const completeTodo = (id) => {}

  return (
    <div style={{ padding: 40}}>
        <ToDoForm handleAddToDo={addTodo} />
        <Todo todos={todos}
        updateTodo={updateTodo}
        // completeTodo={completeTodo} 
        />

        {/* {todos.map((todo) => (  my bad. */}
        {/* ))} */}
    </div>
  )
}

export default ToDoList