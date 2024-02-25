import React from 'react'

const Footer = () => {
  return (
    <>
    <div className='mt-8 w-full bg-black lg:px-60 md:px-28 px-10 flex  justify-between text-sm md:text-lg py-8 '>
    <div className='flex flex-col gap-4 text-white'>
        <p>Featured Blogs</p>
        <p>Most Viewed</p>
        <p>Readers Choice</p>
    </div>
    <div className='flex gap-4 flex-col text-white'>
        <p>Forums</p>
        <p>Support</p>
        <p>Recent Posts</p>
    </div>
    <div className='flex gap-4 flex-col text-white'>
        <p>Privacy Policy</p>
        <p>About Us</p>
        <p>Terms & Conditions</p>
        <p>Terms of Services</p>
    </div>
    </div>
    <p className=' pb-2 text-center text-white bg-black'>All rights reserved @shashank</p>
    </>)
}

export default Footer
