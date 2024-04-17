import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { login as authLogin } from '../store/authSlice'  //this is a method in which we are using component from another file but changing its name here.
import {Button, Input, Logo} from "./index"
import {useDispatch} from "react-redux"
import authService from "../Appwrite/Auth"
import {useForm} from "react-hook-form"

function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {register, handleSubmit} = useForm() // ye hmne react-hook-form ki documentation se liya hai
    const [error, setError] = useState("")

    const login = async(data) => {
        setError("") // ye ek achi pracitce hai ki jab bhi hum koi action perform karte login form ya submit form mei toh pehle error ko empty kar de
        try {
            const session = await authService.login(data)
            if (session) {
                const userData = await authService.getCurrentUser() // userData hamesha  await mei hi hota hai kyunki hum data ko fetch kar rahe hote hai getCurrentUser() se
                if(userData) dispatch(authLogin(userData));
                navigate("/")
                //Link mei hume ek baar user se click karwana padta hai jabki Navigate use kar directly hi navigate kar skte hai user ko user page pe
            }
        } catch (error) {
            setError(error.message)
        }
    }

  return (
    <div
    className='flex items-center justify-center w-full'
    >
        <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
        <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%" />
                    </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">Sign in to your account</h2>
        <p className="mt-2 text-center text-base text-black/60">
                    Don&apos;t have any account?&nbsp;
                    <Link
                        to="/signup"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign Up
                    </Link>
        </p>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
        <form onSubmit={handleSubmit(login)} className='mt-8'> {/* handlesubmit kyunki useform se aaya hai toh wo ek keyword bn chuka hai n wo apne aap mei hi ek method hai jisme hum apna method login ka paas karte hai n tabhi hme apne method ka naam handlesubmit nhi rkhna chahiye kyunki end mei handlesubmit jo apne aap mei ek event hai jo ki call hota hai
        aur jo jab hum isme input field denge to hum register ko use karte and phir koi bhi state nhi manage karni */}
            <div className='space-y-5'>
                <Input
                label="Email: "
                placeholder="Enter your email"
                type="email"
                // neeche jo humne ...register likha hai wo hamesha hi ... karke likhna hota hai kyunki agar hum nhi likhenge toh jab bhi register kahi bhi likhenge toh uski value overwrite ho jaayegi
                // register mei pehli value hme input field ka name dena hota hai jo ki humare form mei unique hona chahiye
                {...register("email", {
                    required: true,
                    validate: { // jo ye neeche patern hai use regex kehte hai and ye validate mei aata hai. humne yha pe email ka patern diya hai ki email ka format kaisa hona chahiye // aur padhna hai toh yha se padho: https://regex101.com/

                        matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                        "Email address must be a valid address",
                    }
                })}
                />
                <Input
                label="Password: "
                type="password"
                placeholder="Enter your password"
                {...register("password", {
                    required: true,
                })}
                />
                <Button
                type="submit"
                className="w-full"
                >Sign in</Button>
            </div>
        </form>
        </div>
    </div>
  )
}

export default Login