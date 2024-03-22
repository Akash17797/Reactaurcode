import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter] = useState(15)
 // above is the use of useState hook. counter is the name of the variable, setcounter is the value that we want to change. 

 
 const addValue = () => {
  if (counter < 20) {
  setCounter(counter + 1)
 }
}
 
 const removeValue = () => { 
  if (counter > 0)
  setCounter(counter - 1)
}

 
  return (
    <>
      <h1>Counter App</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
