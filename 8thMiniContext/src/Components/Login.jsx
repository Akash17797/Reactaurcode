import React, {useState, useContext} from 'react'
import UserContext from '../Context/ContextUser'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)
    // setUser aaya hai UserContextProvider file mei jo hamne values mei pass kiya tha.
    // toh jo values mei hmne user liya tha wo hum tab use krte jab hmne jo values leni hai and setUser tab use krte jab hume kuch values add karni hai, jaise ki is case mei jisme hum username n password mei inout leke values add karte hai 

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser ({username, password})   // this is the final method that is used to send the data
    }

    return (
        <>
        <h2>Login</h2>
        <input type='text' value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Username' />
        {" "}
        <input type='text' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' />
        <button
        onClick={handleSubmit}
        > Submit
        </button>
        </>
    )
}

export default Login
