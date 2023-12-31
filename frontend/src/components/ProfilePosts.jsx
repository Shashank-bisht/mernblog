import React from 'react'

const ProfilePosts = () => {
  return (
    <div className='w-full flex mt-8 space-x-4 mx-12 '>
    {/* left for picture */}
    <div className='w-[35%] h-[200px] flex justify-center items-center'>
     <img src="https://picsum.photos/id/1/300/200" alt=""  className='h-full w-full object-cover m-2'/>
    </div>

    {/* right for content regarding post */}
    
    <div className='flex flex-col w-[65%] '>
      {/* heading */}
     <h1 className='text-xl font-bold md:mb-2 mb-1 md:text-2xl'>Lorem ipsum dolor sit amet consectetu</h1>
     <div className='flex mb-2 text-sm font-semibold text-gray-500 items-center justify-between md:mb-4'>
      {/* author name */}
     <p>@shankybisht</p>
     {/* date and time */}
     <div className='flex space-x-2'>
     <p>19/8/2200</p>
     <p>29:33</p>
     </div>
     </div>
     {/* post description */}
     <p className='text-sm md:text-lg'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae, sun lt. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora, voluptates.</p>
    </div>
    </div>
  )
}

export default ProfilePosts