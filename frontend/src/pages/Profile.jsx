import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProfilePosts from "../components/ProfilePosts";
import { UserContext } from "../context/UserContext";
import axios from "axios";
import { URL } from "../url";
import { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Profile = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 const {user, setUser} = useContext(UserContext);
 const [success, setSuccess] = useState(false);
 const navigate = useNavigate();
  const fetchProfile = async() => {
  try{
     const res = await axios.get(URL + "/api/users/" +user?._id, { withCredentials: true });
     setUsername(res.data.username);
     setEmail(res.data.email);
     setPassword(res.data.password);
  }catch(err){
    console.log(err);
  }
  };

  useEffect(() => {
    fetchProfile();
  },[user?._id]);
 
  const handleuserupdate = async() => {
    try{
      const res = await axios.put(URL + "/api/users/" +user?._id, { username, email, password }, { withCredentials: true });
      console.log(res.data);
      if(res.data){
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
        }, 2000);
      }
    }
    catch(err){
      console.log(err);
    }
  }

  const handleuserdelete = async() => {
    try{
      const res = await axios.delete(URL + "/api/users/" +user?._id, { withCredentials: true });
      setUser(null);
      navigate("/");
    }catch(err){
      console.log(err);
    }
  }
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex-1 px-8 lg:px-[200px] mt-8 flex md:flex-row flex-col-reverse md:items-start items-start h-full">
        <div className="flex flex-col md:w-[70%] w-full mt-8 md:mt-8 ">
          <h1 className="text-xl font-bold mb-4">Your posts:</h1>
          <ProfilePosts />
        </div>
        {/* profile div */}
        <div className="md:sticky md:top-12 flex justify-start md:justify-end items-start md:w-[30%] w-full md:items-end">
          <div className="flex flex-col space-y-4 items-start mx-auto">
            <h1 className="text-xl font-bold mb-4">Profile</h1>
            {success && <p className="text-green-500">Profile updated successfully</p>}
            {/* username */}
            <input onChange={(e) => setUsername(e.target.value)} value={username}
              type="text"
              className="outline-none px-4 py-2 text-gray-500 "
              placeholder="Your username"
            />
            {/* email */}
            <input onChange={(e) => setEmail(e.target.value)} value={email}
              type="email"
              className="outline-none px-4 py-2 text-gray-500 "
              placeholder="Your email"
            />
            {/* password */}
            <input onChange={(e) => setPassword(e.target.value)} 
              type="password"
              className="outline-none px-4 py-2 text-gray-500 "
              placeholder="Your password"
            />

            {/*button for update and delete  */}
            <div className="flex items-center space-x-4 mt-8">
              <button onClick={handleuserupdate} className="text-white font-semibold bg-black px-4 py-2 hover:text-black hover:bg-gray-400 rounded-md">
                Update
              </button>
              <button onClick={handleuserdelete} className="text-white font-semibold bg-black px-4 py-2 hover:text-black hover:bg-gray-400 rounded-md">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
