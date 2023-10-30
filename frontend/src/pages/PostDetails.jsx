import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import {BiEdit} from 'react-icons/bi'
import {MdDelete} from 'react-icons/md'
import Comment from '../components/Comment'
const PostDetails = () => {
  return (
    <div>
        <Navbar/>
        <div className='px-8 md:px-[200px] mt-8'>
            <div className='flex justify-between items-center'>
                {/* title of post */}
          <h1 className='text-2xl font-medium text-black md:text-3xl'>
           Lorem ipsum dolor sit amet.
          </h1>
          {/* option for edit and delete */}
          <div className='flex items-center justify-center space-x-2'>
            <p><BiEdit/></p>
            <p><MdDelete/></p>
          </div>
            </div>
            {/* another div for author name , date and time */}
            <div className='flex items-center justify-between mt-2 md:mt-4'>
            <p>@shanky</p>
            <div className='flex space-x-2'>
            <p>18/2/3333</p>
            <p>19:22</p>
            </div>
            </div>
            {/* post image */}
            <img src="https://picsum.photos/id/1/300/200" alt="" className='w-full mx-auto mt-8 rounded-xl' />
            {/* post data */}
            <p className='mx-auto mt-8'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa assumenda quod totam, possimolestiae magnam ad facilis minima voluptates?</p>

            {/* categories section */}
            <div className='flex items-center mt-8 space-x-4 font-semibold'>
                <p>Categories</p>
                <div className='flex justify-center items-center space-x-2'>
                    <div className='bg-gray-300 rounded-lg px-3 py-1 '>Tech</div>
                    <div className='bg-gray-300 rounded-lg px-3 py-1 '>AI</div>
                    <div className='bg-gray-300 rounded-lg px-3 py-1 '>Science</div>
                </div>
            </div>
            
            {/* comments div */}
            <div className='flex flex-col mt-4'>
                <h3 className='mt-6 mb-4 font-semibold'>Comments:</h3>
                {/* comments */}
               <Comment/>
               <Comment/>

              
            </div>
              {/* posting comment div */}
            <div className='flex flex-col items-center justify-between mt-2 md:flex-row'>
             <input type="text" className='md:w-[78%] rounded-md outline-none px-5 border  py-2 ' placeholder='write a comment' />
             <button className='bg-black text-white  px-4 py-2 rounded-md md:w-[20%] mt-4 md:mt-0'>Add Comment</button>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default PostDetails