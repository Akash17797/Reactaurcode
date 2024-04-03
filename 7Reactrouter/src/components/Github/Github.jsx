// Github API = https://api.github.com/users/Akash17797

import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
//useLoaderData is used to display the data that we have through loader

// loader and useLoaderData is more optimized way on using the things rather then normal fetch upi method

function Github() {
    // const [data, setData] = useState([])        // check later using {}

    // useEffect (() => {
    //     fetch('https://api.github.com/users/Akash17797')
    //     .then(response => response.json())
    //     .then((data) => {
    //         console.log(data);
    //         setData(data)
    //     })
    // }, [])

    const data = useLoaderData()

    return (
        <div className='text-center m-5 bg-gray-800 text-white p-4 text-4xl'>
            Github Public Repos: {data.public_repos}
            <img className='rounded-full' src={data.avatar_url} alt="Gitpic" width='400px' />
        </div>
    )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/Akash17797')
    return response.json();
}
