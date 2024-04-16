import './App.css'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import authService from './Appwrite/Auth'
import {login, logout} from './store/authSlice'
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'

function App() {

  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect((userData) => {
    authService.getCurrentUser()
    .then((userData) => {
      if (userData) {
        dispatch(login(userData))
      } 
      else {
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  }, [])

  //if we want to .catch then we can use it as well


  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
      <Header />
      <main>
        Hello{/* <Outlet /> */}
      </main>
      <Footer />
      </div>
    </div>
  ) : (null) //if loading is false then return the component else return the loading component
  
}

export default App
