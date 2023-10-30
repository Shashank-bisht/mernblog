import { useState } from 'react'

import {Route, Routes } from 'react-router-dom'
import './App.css'

import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import PostDetails from './pages/PostDetails'
import Profile from './pages/Profile'
import CreatePost from './pages/CreatePost'
import EditPost from './pages/EditPost'
const App =()=>{

  return (
    <>
      <div>
       
        <Routes>
        <Route exact path ='/' element ={<Home/>}/>
        <Route exact path ='/login' element ={<Login/>}/>
        <Route exact path ='/register' element ={<Register/>}/>
        <Route exact path ='/write' element ={<CreatePost/>}/>
        <Route exact path ='/posts/post/:id' element ={<PostDetails/>}/>
        <Route exact path ='/edit/:id' element ={<EditPost/>}/>
        <Route exact path ='/profile/:id' element ={<Profile/>}/>
        </Routes>
      </div>
      

    </>
  )
}

export default App

//the exact prop is used to ensure that a route is matched only when the URL exactly matches the specified path. If you use the exact prop, it means that the route will match only when there is a perfect and complete match between the URL and the path prop. Without exact, a route might match if the URL partially matches the path.