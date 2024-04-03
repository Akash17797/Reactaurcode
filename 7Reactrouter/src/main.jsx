import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, Router, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github, { githubInfoLoader } from './components/Github/Github.jsx'

// Below are the ways to creater router that is required from RouterProvider

// const router = createBrowserRouter([            // createBrowserRouter is a method that comes from router DOM.and array is used to pass multiple components
// {
//   path : '/',         // path is the top level element. /about ya /contactus.... sabkuch / ke baad hi shuru hoga
//   element: <Layout/>,
//   children: [       // children ke andar wo saare cheezein daalte hai wo hme outlet mei daalni thi.... jaise home, about, contactus, etc..
//     {
//       path : "",
//       element : <Home/>
//     }, 
//     {
//       path : "about",
//       element : <About/>
//     }, 
//     {
//       path : "contact",
//     element : <Contact/>
//   }
//   ]
// }
 
// ])

// Another way of writing the above syntax:
 
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='user/:userid' element={<User />}/>   
      {/* ye jo user hmne bnaya hai isme hum ye koshish kar rhe ki agar user khud se kuch daale toh user: ke baad page mei khud inject ho jaaye aur user ki details aa skte */}
      {/* : ke baad jo bhi likh rhe hai wo bahot important hota hai and usko ske toh hum khi likh bhi skte hai */}
      <Route 
      loader={githubInfoLoader}   //loader hmari fetch api karne mei kaam aata hai n hum yha hi loader ke andar call back functions wagerah pass kar skte hai
      path='/Github' 
      element = {<Github/>} 
      />
      
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <RouterProvider router ={router} />   
    {/* Routerprovider is a like a wrapper that wraps all the things and provide to you.
    Router = {router} is the prop that the routerprovider takes and without this it will not start working */}
    
  </React.StrictMode>,
)
