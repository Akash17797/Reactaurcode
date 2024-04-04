import './App.css'
import Login from './Components/Login'
import Profile from './Components/Profile'
import UserContextProvider from './Context/UserContextProvider'

// agar hme yha bhi data chahiye user ya setData ko data pass karna hai toh hai yha bhi use context use karke data ko access kar skte hai

function App() {
  
  return (
    <UserContextProvider>      {/*Hum yha pe bhi UserContext.Provider and pura same cheez jo kari wo kar skte and wo bhi sahi hai */}
    <h1>
      Context API
    </h1>
    <Login />
    <Profile />
    </UserContextProvider>
  )
}

export default App
