import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
import UpdateTodos from './components/UpdateTodo'

function App() {
  

  return (
    <>
      <h1>Redux Tool-kit</h1>
      <AddTodo />
      <Todos />
      {/* <UpdateTodos /> */}
    </>
  )
}

export default App
