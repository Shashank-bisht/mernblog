import { useState } from 'react'
import reactLogo from './assets/react.svg'
import {Route, Routes } from 'react-router-dom'
import './App.css'

import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import PostDetails from './pages/PostDetails'
const App =()=>{

  return (
    <>
      <div>
       
        <Routes>
        <Route exact path ='/' element ={<Home/>}/>
        <Route exact path ='/login' element ={<Login/>}/>
        <Route exact path ='/register' element ={<Register/>}/>
        <Route exact path ='/posts/post/:id' element ={<PostDetails/>}/>
        </Routes>
       
      </div>
      

    </>
  )
}

export default App
