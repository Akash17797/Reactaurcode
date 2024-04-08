import { useState } from 'react'
import './App.css'
import { Todoprovider } from './Context'
import { useEffect } from 'react'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

function App() {

  const [newTodos, setNewTodos] = useState ([]); // newTodos varaible aaya jo hmne create context se bnaya tha and setNewTodos mei nyi values jaengi
  // functionality define karte time hume naam ek dam same rkhna hai tabhi wo fucntionality unme jaegi.

  const addTodo = (todo) => {  //isme jo (todo) hai wo hme form se milega
    setNewTodos((prev) => [{id: Date.now(), ...todo}, ...prev] )   // isme pehle agar koi previous value thi usko waise hi rakha and then jo value aai usme id ko change kar diya  and baaki same rkha
  }
   
  const updateTodo = (id, todo) => { 
    setNewTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))
  }

  const deleteTodo = (id) => {
    setNewTodos((prev) => prev.filter ((todo) => todo.id !== id))
  }

  const toggleComplete = (id) => {
    setNewTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed} : prevTodo))
  }



  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("newTodos"))   // we will get value in array rather then string

    if (todos && todos.length > 0) {
      setNewTodos(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("newTodos", JSON.stringify(newTodos))
  }, [newTodos])



  return (
    <Todoprovider value={{newTodos, addTodo, updateTodo, deleteTodo, toggleComplete}}>

    <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                      {/* () after arrow function means auto return */}
                        {newTodos.map((todo) => (
                          <div key={todo.id} 
                          className='w-full'
                          >
                           <TodoItem todo= {todo}/>
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </Todoprovider>
  )
}

export default App
 