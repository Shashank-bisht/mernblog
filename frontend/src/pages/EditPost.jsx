import React, { useEffect } from "react";
import { ImCross } from "react-icons/im";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { UserContext } from "../context/UserContext";
import { URL } from "../url";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
const EditPost = () => {
  // to extract id from url
  const postId = useParams().id
  const navigate = useNavigate()
  const { user } = useContext(UserContext);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState("");
  const [cats, setCats] = useState([]);


 const fetchPost = async() => {
   try {
    const res = await axios.get(URL + "/api/post/" + postId);
    setTitle(res.data.title);
    setDesc(res.data.desc);
    setFile(res.data.photo);
    setCats(res.data.categories)
    // console.log(res.data.title)
   } catch (error) {
    console.log(error)
   }
 }
 useEffect(() => {
   fetchPost()
 },[postId])
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
    // // Update the 'cats' state with the modified 'updateCats' array
    setCats(updateCats);
  };
 const handleUpdate = async(e)=>{
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
  const res = await axios.put(URL+"/api/post/"+postId,post,{withCredentials:true})
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
        <h1 className="font-bold md:text-2xl text-xl mt-8">Update a post</h1>
        <form
          className="w-full flex flex-col space-y-4 md:space-y-8 mt-4"
          action=""
        >
          <input onChange={(e) => setTitle(e.target.value)} value={title || ""}
            type="text"
            placeholder="Enter post title"
            className="px-4 py-2 outline-none"
          />
          <input onChange={(e) => setFile(e.target.files[0])} type="file" className="px-4 " />
          <div className="flex flex-col">
            <div className="flex items-center space-x-4 md:space-x-8">
              <input
                type="text"
                value={cat || ""}
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

          <textarea onChange={(e) => setDesc(e.target.value)} value={desc || ""}
            className="px-4 py-2 outline-none border"
            placeholder="Enter post description"
            name=""
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <button onClick={handleUpdate} className="bg-black text-white font-semibold w-full md:w-[20%] mx-auto px-4 py-2 md:text-xl text-lg">
            Update
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default EditPost;
