import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { URL } from '../url';
import { UserContext } from '../context/UserContext';
import { IF } from '../url';

const ProfilePosts = () => {
  const { user } = useContext(UserContext);
  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    const fetchUserPosts = async () => {
      if (!user || !user._id) return;
      try {
        const res = await axios.get(URL + "/api/post/user/" + user._id);
        setUserPosts(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchUserPosts();
  }, [user]);

  return (
    <div className='w-full flex items-center justify-center flex-col space-x-4 mx-2'>
      {userPosts.map(post => (
        <div key={post._id} className="flex my-4 w-full gap-6">
          {/* left for picture */}
          <div className='w-[35%] h-[200px] flex justify-center items-center'>
            <img src={IF + post.photo} alt="" className='h-full rounded-md w-full object-cover m-2'/>
          </div>
          
          {/* right for content regarding post */}
          <div className='flex flex-col w-[65%]'>
            <div className="mb-8">
              {/* Render individual post content */}
              <h1 className='text-xl font-bold md:mb-2 mb-1 md:text-2xl'>{post.title}</h1>
              <div className='flex mb-2 text-sm font-semibold text-gray-500 items-center justify-between md:mb-4'>
                {/* author name */}
                <p>@{post.username}</p>
                {/* date and time */}
                <div className='flex space-x-2'>
                <p>{new Date(post.updatedAt).toString().slice(0,15)}</p>
                <p>{new Date(post.updatedAt).toString().slice(15,24)}</p>
                </div>
              </div>
              {/* post description */}
              <p className='text-sm md:text-lg'>{post.desc.slice(0,200)+"... Read more"}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProfilePosts;
