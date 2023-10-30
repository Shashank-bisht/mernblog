import React from 'react'
import {BiEdit} from 'react-icons/bi'
import {MdDelete} from 'react-icons/md'
const Comment = () => {
  return (
    <div className='px-2 py2 bg-gray-200 rounded-lg my-2'>
    <div className='flex items-center justify-between'>
        {/* commentor name */}
        <h3 className='font-bold text-grey-600'>@shanky</h3>

        {/* div for date, time and edit option */}
        <div className='flex justify-center items-center space-x-4'>
            <p className='text-grey-500 text-sm'>16/6/3333</p>
            <p className='text-grey-500 text-sm'>12:55</p>
            <div className='flex items-center justify-center space-x-2'>
<p><BiEdit/></p>
<p><MdDelete/></p>
</div>
        </div>
    </div>
    <p className='px-4 mt-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. !</p>
</div>
  )
}

export default Comment