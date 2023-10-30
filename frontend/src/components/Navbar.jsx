import React from 'react'
import { Link } from 'react-router-dom'
import {BsSearch} from 'react-icons/bs'
const Navbar = () => {
    const user = false
  return (
    <div className='flex itmes-center justify-between px-6 md:px-[200px] py-4'>
   <h1 className='md:text-xl sm:text-lg font-extrabold'><Link to="/">Blogify</Link></h1>
   
   {/* search bar */}
 <div className="flex justify-center items-center space-x-0">
    {/* searchlogo */}
    <p><BsSearch/></p>
    <input placeholder='search a post' className='outline-none px-3 py-1' type="text" />
 </div>

   <div className="flex items-center justify-center space-x-2 md:space-x-4">
    {/* if user is logged in then show following */}
    {user?<h3><Link to="/write">Write</Link></h3>:<h3><Link to="/login">Login</Link></h3>}
    {user?<h3><Link to="/profile">Profile</Link></h3>:<h3><Link to="/register">Register</Link></h3>}
   </div>
    </div>
  )
}

export default Navbar
