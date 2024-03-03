import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProfilePosts from "../components/ProfilePosts";

const MyBlogs = () => {
  return (
    <div className="flex flex-col min-h-screen mx-auto">
      <div className="flex flex-col gap-4 md:mx-10">
        <div>
          <Navbar className="w-full relative" />
          <h1 className="text-3xl font-bold absolute left-1/2 top-3 ">My blogs</h1>
        </div>

        <ProfilePosts />
      </div>
      <Footer />
    </div>
  );
};

export default MyBlogs;
