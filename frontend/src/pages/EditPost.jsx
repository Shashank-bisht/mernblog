import React from 'react'
import {ImCross} from 'react-icons/im'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { useState } from 'react'
const EditPost = () => {
    const [cat, setCat] = useState("")
const [cats, setCats] = useState([])

const addCategory = ()=>{
  // updateCats is an array which contains categories
  let updateCats = [...cats]
  // add new categories to updateCats array when user enters
  updateCats.push(cat)
  // set categories to empty string so new category can be added
  setCat("")
  // update cats items with new categories
  setCats(updateCats)
}
const deleteCategory = (i)=>{
  // Create a copy of the 'cats' array
let updateCats = [...cats];
updateCats.splice(i,1)
// // Update the 'cats' state with the modified 'updateCats' array
setCats(updateCats)
}


  return (
    <>
    <Navbar/>
    <div className='px-6 md:px-[200px] mt-8'>
      <h1 className='font-bold md:text-2xl text-xl mt-8'>Update a post</h1>
      <form className='w-full flex flex-col space-y-4 md:space-y-8 mt-4' action="">
        <input type="text" placeholder='Enter post title' className='px-4 py-2 outline-none' />
        <input type="file"className='px-4 ' />
       <div className="flex flex-col">
        <div className="flex items-center space-x-4 md:space-x-8">
          <input type="text" value={cat} onChange={(e)=> setCat(e.target.value)} className='px-4 py-2 outline-none' placeholder='Enter post category'/>
          <div onClick={addCategory} className="bg-black text-white px-4 py-2 font-semibold cursor-pointer">Add</div>
        </div>
  
        <div className='flex mt-3 px-4'>
          {cats?.map((c,i)=>{
          return (
            <div key={i} className="flex justify-center items-center space-x-2 mr-4 bg-gray-200 px-2 py-1 rounded-md">
           <p>{c}</p>
           <p onClick={deleteCategory} className='text-white bg-black rounded-full cursor-pointer p-1 text-sm'><ImCross/></p>
         </div>
          )  ;   
  })}
        </div>
       </div>
  
       <textarea className='px-4 py-2 outline-none border' placeholder='Enter post description' name="" id="" cols="30" rows="10">
       </textarea>
       <button className='bg-black text-white font-semibold w-full md:w-[20%] mx-auto px-4 py-2 md:text-xl text-lg'>Update</button>
      </form>
    </div>
    <Footer/>
    </>
  )
}

export default EditPost