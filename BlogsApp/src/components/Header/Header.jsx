import React from 'react'
import {Container, Logo, LogoutBtn} from '../index'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Header() {
  const authStatus = useSelector((state) => state.auth.status) // to get the status of the user whether it is true or false

  const navigate = useNavigate() // useNavigate is a hook which is used to navigate to different pages in the application without using the <Link> component

    // yha pe ek array bnaya hai jisme humne navigation items ko store kiya hai jaise home, login, signup, all posts, add post and kabhi bhi agar hume koi aur navigation mei kuch add krna ho toh toh hum yha pe add kar skte hai

    
  const navItems = [
    {
      name: 'Home',
      slug: "/",    // slug is nothing but the path of the page we can also say it as the url of the page
      active: true
    }, 
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
  },
  {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
  },
  {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
  },
  {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
  },
  ]


  return (
    <header className='py-3 shadow bg-gray-500'>
      <Container>
        <nav className='flex'>
          <div className='mr-4'>
            <Link to='/'> {/* instead of using <a> tag we are using <Link> tag because <Link> tag is used to navigate to different pages in the application without refreshing the page */}
              <Logo width='70px'   />

              </Link>
          </div>
          <ul className='flex ml-auto'>
            {navItems.map((item) =>  //map() takes an array, does something on its elements and returns an array with the transformed elements.
            item.active ? (  // agar item active hai toh usko show karega warna nhi
              <li key={item.name}> {/* jo chiz html element mei repeat ho rhi hume key deni hoti use taaki react ke birtual dom ko pta chl ske kis element mei change krna */}
                <button
                onClick={() => navigate(item.slug)} //navigate and link dono hi ek hi kaam krte hai but navigate ko use karne se hume <Link> tag ki jarurat nhi hoti
                className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
                >{item.name}</button>
              </li>
            ) : null
            )}
            {/* {authStatus && () - ye code bahot hi jyada use hone code hai react hai and iska mtlb hai ki agar authStatus true hai toh hi parenthisis () mei jo code likha hai wo run hoga} */}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
        </Container>
    </header>
  )
}

export default Header