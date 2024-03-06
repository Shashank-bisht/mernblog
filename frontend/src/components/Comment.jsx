import axios from 'axios'
import React from 'react'
import {BiEdit} from 'react-icons/bi'
import {MdDelete} from 'react-icons/md'
import {UserContext} from '../context/UserContext'
import { useContext } from 'react'
import {URL} from '../url'
const Comment = ({comment,post}) => {
  const {user} = useContext(UserContext)
  const deletecomment = async(id)=>{
    try {
      await axios.delete(URL + "/api/comments/" + id, {
        withCredentials: true,
      })
      window.location.reload()
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className='px-2 py2 bg-gray-200 rounded-lg my-2'>
    <div className='flex items-center justify-between'>
        {/* commentor name */}
        <h3 className='font-bold text-grey-600'>@{comment.author}</h3>

        {/* div for date, time and edit option */}
        <div className='flex justify-center items-center space-x-4'>
        <p>{new Date(comment.updatedAt).toString().slice(0, 15)}</p>
              <p>{new Date(comment.updatedAt).toString().slice(15, 24)}</p>
              {user?._id===comment?.userId?<div className='flex items-center justify-center space-x-2'>
        {/* <p><BiEdit/></p> */}
        <p className='cursor-pointer' onClick={()=>deletecomment(comment._id)}><MdDelete/></p>
         </div>:""}
        </div>
    </div>
    <p className='px-4 mt-2'>{comment.comment}</p>
    </div>
  )
}

export default Comment