import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

// outlet kya karta hai wo layout ko apna component maan leta hai uske baad jha bhi hmne outlet likha hoga layout mei wp wahi cheezo ko change karta hai. jaise agar hum header or footer ke beech mei outlet ko rkhenge to wo header n footer to same rkhega n outlet mei jaise home, about et ko daalenge wo hi change honge

function Layout() {
    return (
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    )
}

export default Layout


// layout ko use karne ke liye hme main.jsx ko btana padta hai ki humne layout karke bnaya hai n  usne ek outlet hai jisme hum saari cheezo ko dalenge.
