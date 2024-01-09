import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ImCross } from "react-icons/im";
import {Navigate, useNavigate } from 'react-router';
import { UserContext } from "../context/UserContext";
import axios from "axios";
import { useContext } from "react";
import { URL } from "../url";
const CreatePost = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null)
  const [cat, setCat] = useState("");
  const [cats, setCats] = useState([]);
 const {user} = useContext(UserContext);
  const addCategory = () => {
    // updateCats is an array which contains categories
    let updateCats = [...cats];
    // add new categories to updateCats array when user enters
    updateCats.push(cat);
    // set categories to empty string so new category can be added
    setCat("");
    // update cats items with new categories
    setCats(updateCats);
  };
  const deleteCategory = (i) => {
    // Create a copy of the 'cats' array
    let updateCats = [...cats];
    updateCats.splice(i, 1);
    setCats(updateCats);
  };

  const handleCreate = async(e)=>{
  e.preventDefault();
  const post = {
    title,
    desc,
    username:user.username,
    userId:user._id,
    categories:cats
  }
  if(file){
    const data = new FormData()
    const filename = Date.now() + file.name
    data.append("img",filename)
    data.append("file",file)
    post.photo = filename

    // img upload
    try{
      const imageUpload = await axios.post(URL+"/api/upload",data)
      // console.log(imageUpload.data)
     }catch(err){
       console.log(err)
     }
  }
  // post upload

try {
  const res = await axios.post(URL+"/api/post/create",post,{withCredentials:true})
  navigate('/posts/post/'+res.data._id)
  console.log(res.data)
} catch (error) {
  console.log(error)
}

  }
  return (
    <>
      <Navbar />
      <div className="px-6 md:px-[200px] mt-8">
        {/* heading */}
        <h1 className="font-bold md:text-2xl text-xl mt-8">Create a post</h1>
        {/* form */}
        <form
          className="w-full flex flex-col space-y-4 md:space-y-8 mt-4"
          action=""
        >
          {/* input for title */}
          <input onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="Enter post title"
            className="px-4 py-2 outline-none"
          />
          {/* input for file */}
          <input onChange={(e) => setFile(e.target.files[0])} type="file" className="px-4 " />

          <div className="flex flex-col">
            <div className="flex items-center space-x-4 md:space-x-8">
              {/* input for taking category */}
              <input
                type="text"
                value={cat}
                onChange={(e) => setCat(e.target.value)}
                className="px-4 py-2 outline-none"
                placeholder="Enter post category"
              />
              <div
                onClick={addCategory}
                className="bg-black text-white px-4 py-2 font-semibold cursor-pointer"
              >
                Add
              </div>
            </div>

            <div className="flex mt-3 px-4">
              {/* iterating over categories */}
              {cats?.map((c, i) => {
                return (
                  <div
                    key={i}
                    className="flex justify-center items-center space-x-2 mr-4 bg-gray-200 px-2 py-1 rounded-md"
                  >
                    <p>{c}</p>
                    <p
                      onClick={deleteCategory}
                      className="text-white bg-black rounded-full cursor-pointer p-1 text-sm"
                    >
                      <ImCross />
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
          {/* text area for description  */}
          <textarea onChange={(e) => setDesc(e.target.value)}
            className="px-4 py-2 outline-none border"
            placeholder="Enter post description"
            name=""
            id=""
            cols="30"
            rows="10"
          ></textarea>
          {/* button */}
          <button onClick={handleCreate} className="bg-black text-white font-semibold w-full md:w-[20%] mx-auto px-4 py-2 md:text-xl text-lg">
            Create
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default CreatePost;
