import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import ToDoList from './ToDoListComponents/ToDoList'

function App() {
  const [isLogged, setIsLogged] = useState(false)
  // function isLoggedIn(){
  //   if(isLogged) {
  //     setIsLogged(false)
  //   }
  //   else {∏
  //     setIsLogged(true)
  //   }
  // }
  function isLoggedIn(){
      setIsLogged(!isLogged)
  }

  const myList = ['By milk', 'Learn React'];

  return (
    <>
      {/* <h1>Login</h1> */}
      <div className="card">
        <ToDoList myList={myList} />


        {/* {isLogged}
          {!isLogged ? 
            <button onClick={() => isLoggedIn()}>
              login
            </button>
            :
            <button onClick={() => isLoggedIn()}>logout</button> 
          } */}
      </div>
     
    </>
  )
}

export default App
