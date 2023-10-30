import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
const Register = () => {
  return (
    <>
    
    {/* register page will show login option */}
    <div className='flex itmes-center justify-between px-6 md:px-[200px] py-4'>
   <h1 className='md:text-xl sm:text-lg font-extrabold'><Link to="/">Blogify</Link></h1>
   <h3><Link to="/login">Login</Link></h3>
   </div>

    <div className='w-full flex justify-center items-center h-[57vh]'>
    <div className='flex flex-col justify-center items-center space-y-4 w-[80%] md:w-[25%]'>
       <h1 className='text-xl font-bold text-left'>Create an account</h1>
       {/* username */}
       <input type="text" className='w-full px-4 py-2 border-2 border-black outline-0' placeholder='Enter your username' />
       {/* email */}
       <input type="text" className='w-full px-4 py-2 border-2 border-black outline-0' placeholder='Enter your email' />
       {/* password */}
       <input type="password" className='w-full px-4 py-2 border-2 border-black outline-0' placeholder='Enter your password' />
       {/* button */}
       <button className='w-full px-4 py-4 text-lg font-bold text-white bg-black rounded-lg hover:bg-white hover:text-black hover:border-black hover:border-2'>Register</button>
       
       <div className="flex justify-center items-center space-x-4">
           <p>Already have account ?</p>
           <p className='text-gray-500 hover:text-black' ><Link to="/login">Login</Link></p>
       </div>
    </div>
</div>
<Footer/>

</>
  )
}

export default Register