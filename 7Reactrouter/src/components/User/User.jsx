import React from 'react'
import { useParams } from 'react-router-dom'

// The below function is used so that we can take dynamic data in the url from the user and show that in the website
function User() {
    const {userid} = useParams()  /*useParams() hook returns an object containing the URL parameters parsed from the current URL.
    It allows you to access the parameters defined in the route path. */
    return (
        <div className='bg-gray-700 text-white text-2xl p-5'>User: {userid}</div>
    )
}

export default User
