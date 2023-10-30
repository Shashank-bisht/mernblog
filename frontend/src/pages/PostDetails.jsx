import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import {BiEdit} from 'react-icons/bi'
import {MdDelete} from 'react-icons/md'
const PostDetails = () => {
  return (
    <div>
        <Navbar/>
        <div className='px-8 md:px-[200px] mt-8'>
            <div className='flex justify-between items-center'>
          <h1 className='text-2xl font-bold text-black md:text-3xl'>
           Lorem ipsum dolor sit amet.
          </h1>
          <div className='flex items-center justify-center space-x-2'>
            <p><BiEdit/></p>
            <p><MdDelete/></p>
          </div>
            </div>
            <div className='flex items-center justify-between mt-2 md:mt-4'>
            <p>@shanky</p>
            <div className='flex space-x-2'>
            <p>18/2/3333</p>
            <p>19:22</p>
            </div>
            </div>
            <img src="https://picsum.photos/id/1/300/200" alt="" className='w-full mx-auto mt-8' />
            <p className='mx-auto mt-8'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa assumenda quod totam, possimolestiae magnam ad facilis minima voluptates?</p>
            <div className='flex items-center mt-8 space-x-4 font-semibold'>
                <p>Categories</p>
                <div className='flex justify-center items-center space-x-2'>
                    <div className='bg-gray-300 rounded-lg px-3 py-1 '>Tech</div>
                    <div className='bg-gray-300 rounded-lg px-3 py-1 '>AI</div>
                    <div className='bg-gray-300 rounded-lg px-3 py-1 '>Science</div>
                </div>
            </div>

            <div className='flex flex-col mt-4'>
                <h3 className='mt-6 mb-4 font-semibold'>Comments:</h3>
                {/* comments */}
                <div className='px-2 py2 bg-gray-200 rounded-lg my-2'>
                    <div className='flex items-center justify-between'>
                        <h3 className='font-bold text-grey-600'>@shanky</h3>
                        <div className='flex justify-center items-center space-x-4'>
                            <p className='text-grey-500 text-sm'>16/6/3333</p>
                            <p className='text-grey-500 text-sm'>12:55</p>
                            <div className='flex items-center justify-center space-x-2'>
            <p><BiEdit/></p>
            <p><MdDelete/></p>
          </div>
                        </div>
                    </div>
                    <p className='px-4 mt-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. !</p>
                </div>

                {/* comments */}
                <div className='px-2 py2 bg-gray-200 rounded-lg my-2'>
                    <div className='flex items-center justify-between'>
                        <h3 className='font-bold text-grey-600'>@shanky</h3>
                        <div className='flex justify-center items-center space-x-4'>
                            <p className='text-grey-500 text-sm'>16/6/3333</p>
                            <p className='text-grey-500 text-sm'>12:55</p>
                            <div className='flex items-center justify-center space-x-2'>
            <p><BiEdit/></p>
            <p><MdDelete/></p>
          </div>
                        </div>
                    </div>
                    <p className='px-4 mt-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. !</p>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default PostDetails