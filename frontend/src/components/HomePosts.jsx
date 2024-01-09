import React from 'react'
import { IF } from '../url'
// receiving post as a prop 
const HomePosts = ({post}) => {
  return (
    <div className='w-full flex mt-8 space-x-4 mx-12 '>
      {/* left for picture */}
      <div className='w-[35%] h-[200px] flex justify-center items-center'>
       <img src={IF + post.photo} alt=""  className='h-full w-full object-cover m-2'/>
      </div>

      {/* right for content regarding post */}
      
      <div className='flex flex-col w-[65%] '>
        {/* heading */}
       <h1 className='text-xl font-bold md:mb-2 mb-1 md:text-2xl'>{post.title}</h1>
       <div className='flex mb-2 text-sm font-semibold text-gray-500 items-center justify-between md:mb-4'>
        {/* author name */}
       <p>@{post.username}</p>
       {/* date and time */}
       <div className='flex space-x-2'>
       <p>{new Date(post.updatedAt).toString().slice(0,15)}</p>
       <p>{new Date(post.updatedAt).toString().slice(15,24)}</p>
       </div>
       </div>
       {/* post description */}
       <p className='text-sm md:text-lg'>{post.desc.slice(0,200)+"... Read more"}</p>
      </div>
      </div>
    
  )
}

export default HomePosts
