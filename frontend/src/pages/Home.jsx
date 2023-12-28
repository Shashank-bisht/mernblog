import React, { useEffect, useState } from 'react'
import axios from 'axios'
import HomePosts from '../components/HomePosts'
import Navbar from '../components/Navbar'
import Loader from '../components/Loader'
import Footer from '../components/Footer'
import { URL } from '../url'
import { useLocation } from 'react-router-dom'
const Home = () => {
  // getting search property from useLocation()
  const {search}= useLocation()
  const [posts, setPosts] = useState([])
  const [loader, setloader] = useState(false)
  const [noResults, setNoResults] = useState(false)
   const fetchPosts = async()=>{
    setloader(true)
    try{
    const res = await axios.get(URL+"/api/post/"+search)
    // console.log(res.data)
    setPosts(res.data)
    if(res.data.length === 0){
      setNoResults(true)
    }else{
      setNoResults(false)
    }
    setloader(false)
    }catch(err){
  console.error(err)
    }
   }
   useEffect(()=>{
   fetchPosts()
   },[search])
   //The reason search is passed inside the dependency array [search] in the useEffect is to specify that the effect should run whenever the search value changes. 
  return (
    <>
    <Navbar/>
     <div className='px-8 md:px-[200px] min-h-[80vh]'>
      {/* For each post, a HomePosts component is rendered, passing the post data as a prop and a key to uniquely identify each post component. */}
    {loader?<div className='h-[40vh] flex justify-center items-center'><Loader/></div>:!noResults?posts.map((post)=>(
      <HomePosts key={post._id} post={post}/>
    )):<h3 className='text-center font-bold'>No posts available</h3>}
    </div>
    <Footer/>
    </>
  )
}

export default Home
