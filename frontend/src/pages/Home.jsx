import React, { useEffect, useState } from 'react'
import axios from 'axios'
import HomePosts from '../components/HomePosts'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { URL } from '../url'
import { useLocation } from 'react-router-dom'
const Home = () => {
  // getting search property from useLocation()
  const {search}= useLocation()
  const [posts, setPosts] = useState([])
   const fetchPosts = async()=>{
    try{
    const res = await axios.get(URL+"/api/post/"+search)
    // console.log(res.data)
    setPosts(res.data)
    }catch(err){
  console.error(err)
    }
   }
   useEffect(()=>{
   fetchPosts()
   },[search])
  return (
    <>
    <Navbar/>
     <div className='px-8 md:px-[200px] min-h-[80vh]'>
      {/* For each post, a HomePosts component is rendered, passing the post data as a prop and a key to uniquely identify each post component. */}
    {posts.map((post)=>(
      <HomePosts key={post._id} post={post}/>
    ))}
    </div>
    <Footer/>
    </>
  )
}

export default Home
