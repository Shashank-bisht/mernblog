import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import axios from 'axios'
import { URL } from '../url'
const Menu = () => {
    // if user is logged in
    const {user} = useContext(UserContext)
   const {setUser} = useContext(UserContext)
    const handleLogout=async()=>{
      try{
         const res = await axios.get(URL+"/api/auth/logout",{withCredentials:true});
         setUser(null);
      }
      catch(err){
      console.log(err)
      }
    }

  return (
    <div className='bg-black w-[200px] flex flex-col items-start absolute top-12 right-6 rounded-md p-4 space-y-2 '>
        {/* if user is not logged in show this */}
       {!user && <h3 className='cursor-pointer text-white text-sm hover:text-gray-500'>
          Login
        </h3>}
       {!user && <h3 className='cursor-pointer text-white text-sm hover:text-gray-500'>
          Register
        </h3>}
        {/* if user is logged in show this */}
        {user && <h3 className='cursor-pointer text-white text-sm hover:text-gray-500'>
          Profile
        </h3>}
        {user && <h3 className='cursor-pointer text-white text-sm hover:text-gray-500'>
          Write
        </h3>}
        {user && <h3 className='cursor-pointer text-white text-sm hover:text-gray-500'>
         My Blogs
        </h3>}
        {user && <h3 onClick={handleLogout} className='cursor-pointer text-white text-sm hover:text-gray-500'>
         Logout
        </h3>}
    </div>
  )
}

export default Menu