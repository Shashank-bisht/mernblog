import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProfilePosts from "../components/ProfilePosts";

const MyBlogs = () => {
  return (
    <div className="flex flex-col h-screen mx-auto">
      <div className="flex flex-col gap-4 h-[62vh] md:mx-10">
        <Navbar />
        <ProfilePosts />
      </div>
<div className="h-[10vh]"><Footer /></div>
      
    </div>
  );
};

export default MyBlogs;
