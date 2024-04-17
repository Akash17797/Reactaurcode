import React from 'react'
import {useDispatch} from 'react-redux'
import authService from '../../Appwrite/Auth'
import {logout} from '../../store/authSlice'

function LogoutBtn() {
    const dispatch = useDispatch()  // useDispatch allows us to dispatch actions and update the state of the application to backend that the user is logged out
    
    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout())
        })
    }
  return (
    <button
    className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
    onClick={logoutHandler}
    >Logout</button>
  )
}

export default LogoutBtn