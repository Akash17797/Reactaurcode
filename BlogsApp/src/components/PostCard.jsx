import React from 'react'
import appwriteService from "../Appwrite/Config"
import {Link} from 'react-router-dom'

function PostCard({$id, title, featuredImage}) {
    //appwrite mei id ko $id mei store karte hai. Syntax hai ye.
  return (
    <Link to={`/post/${$id}`}>
        <div className='w-full bg-gray-100 rounded-xl p-4'>
            <div className='w-full justify-center mb-4'>
                <img src={appwriteService.getFilePreview(featuredImage)} alt={title} // ye hme mila toh hmne method bnaya tha Appwrite folder mei Config ke andar
                className='rounded-xl' />

            </div>
            <h2
            className='text-xl font-bold'
            >{title}</h2>
        </div>
    </Link>
  )
}


export default PostCard