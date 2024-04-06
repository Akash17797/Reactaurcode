import React, {useState}  from 'react'
import {useDispatch} from 'react-redux'
import { addTodo } from '../feature/Todo/TodoSlice'

// Store and reducer aate hai redux, reduxtoolkit se but 
// useDispatch and useSelect comes from react only. 
// react ka wireup hai redux ke saath ki redux kaise use hoga

function AddTodo() {

    const[input, setInput] = useState('')
    const dispatch = useDispatch()

    const addTodoHandler = (e) => {
        e.preventDefault()
        // Dispatch ek reducers ko use karte huye store mei values change karta hai
        dispatch(addTodo(input))  //jo bhi hum values bhejna chahte hai wo hum bhej skte hai addTodo mei as a parameter likh ke n apne aap sab kaam hota hai. toh hmne value mei input likha hai... wahi yha paas kar denge
        setInput('')  // ye hmne likha hai taaki jo bhi user ne likha hai use clean karne ke liye
    }

    return (
        <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
        <input
          type="text"
          className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          placeholder="Enter a Todo..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
        >
          Add Todo
        </button>
      </form>
    )
}

export default AddTodo
