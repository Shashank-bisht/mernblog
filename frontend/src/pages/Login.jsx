import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {URL} from '../url'
import axios from 'axios'
import Footer from '../components/Footer'

import { useContext } from 'react'
import { UserContext } from '../context/UserContext'
const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(false)
  const {setUser} = useContext(UserContext)
  const navigate = useNavigate()
  const handleLogin=async()=>{
   try{
   const res = await axios.post(URL+'/api/auth/login',{email,password},{withCredentials:true})
   setUser(res.data)
   navigate('/')
   }catch(err){
    setError(true)
    console.error(err)
   }
  }
  return (

    <>
    {/*  login page will show option for register */}
     <div className='flex itmes-center justify-between px-6 md:px-[200px] py-4'>
   <h1 className='md:text-xl sm:text-lg font-extrabold'><Link to="/">Blogify</Link></h1>
   <h3><Link to="/register">Register</Link></h3>
   </div>
     <div className='w-full flex justify-center items-center h-[57vh]'>
    <div className='flex flex-col justify-center items-center space-y-4 w-[80%] md:w-[25%]'>

       <h1 className='text-xl font-bold text-left'>Login to your account</h1>
       {/* email */}
       <input onChange={(e)=>setEmail(e.target.value)} type="text" className='w-full px-4 py-2 border-2 border-black outline-0' placeholder='Enter your email' />
       {/* password */}
       <input onChange={(e)=>setPassword(e.target.value)} type="password" className='w-full px-4 py-2 border-2 border-black outline-0' placeholder='Enter your password' />
       {/* button */}
       <button onClick={handleLogin} className='w-full px-4 py-4 text-lg font-bold text-white bg-black rounded-lg hover:bg-white hover:text-black hover:border-black hover:border-2'>Login</button>
       {/* if login is not successful then show below error */}
       {error && <h3 className='text-red-500 text-sm'>something went wrong</h3>}
       <div className="flex justify-center items-center space-x-4">
           <p>New here?</p>
           <p className='text-gray-500 hover:text-black' ><Link to="/register">Register</Link></p>
       </div>
    </div>
</div>
<Footer/>
</>
   
  )
}

export default Login