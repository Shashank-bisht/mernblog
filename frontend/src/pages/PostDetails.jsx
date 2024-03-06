import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import Comment from "../components/Comment";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { IF, URL } from "../url";
import Loader from "../components/Loader";

const PostDetails = () => {
  const postId = useParams().id;
  const [post, setPost] = useState([]);
  const { user } = useContext(UserContext);
  const [comment, setComment] = useState("");
  const [loader, setLoader] = useState(false);
  const [comments,setcomments] = useState([])
  const navigate = useNavigate();
  console.log(postId.id);

  const fetchPost = async () => {
    setLoader(true);
    try {
      const res = await axios.get(URL + "/api/post/" + postId);
      // console.log(res.data)
      setPost(res.data);
      setLoader(false);
    } catch (error) {
      console.log(error);
    }
  };
  const deletePost = async () => {
    try {
      await axios.delete(URL + "/api/post/" + postId, {
        withCredentials: true,
      });
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchPost();
  }, [postId]);

  const fetchPostComments = async()=>{
    try {
      const res = await axios.get(URL + "/api/comments/post/" + postId);
      setcomments(res.data);
    }catch(err){
      console.log(err)
    }
  }
  useEffect(()=>{
    fetchPostComments()
  },[postId])

  const postComment = async(e)=>{
    e.preventDefault();
    try {
      const res = await axios.post(URL + "/api/comments/create" ,{
        comment:comment , author:user.username, postId:postId, userId:user._id,
      },{withCredentials:true})
      setComment("")
        fetchPostComments()
        window.location.reload()
      }
    catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
      <Navbar />
      {loader ? (
        <div className="h-[90vh] w-full flex items-center justify-center mx-auto">
          <Loader />
        </div>
      ) : (
        <div className="px-8 md:px-[200px] mt-8">
          <div className="flex justify-between items-center">
            {/* title of post */}
            <h1 className="text-2xl font-medium text-black md:text-3xl">
              {post.title}
            </h1>

            {/* option for edit and delete */}
            {user?._id === post?.userId && (
              <div className="flex items-center justify-center space-x-2">
                <p className="cursor-pointer" onClick={() => navigate("/edit/" + postId)}>
                  <BiEdit />
                </p>
                <p className="cursor-pointer" onClick={deletePost}>
                  <MdDelete />
                </p>
              </div>
            )}
          </div>
          {/* another div for author name , date and time */}
          <div className="flex items-center justify-between mt-2 md:mt-4">
            <p>@{post.username}</p>
            <div className="flex space-x-2">
              <p>{new Date(post.updatedAt).toString().slice(0, 15)}</p>
              <p>{new Date(post.updatedAt).toString().slice(15, 24)}</p>
            </div>
          </div>
          {/* post image */}
          <img
            src={IF + post.photo}
            alt=""
            className="w-full md:w-1/2 md:h-1/2 mx-auto mt-8 mb-5 rounded-xl"
          />
          {/* post data */}
          <div style={{ whiteSpace: 'pre-line' }} dangerouslySetInnerHTML={{ __html: post.desc }} />


          {/* categories section */}
          <div className="flex items-center mt-8 space-x-4 font-semibold">
            <p>Categories</p>
            <div className="flex justify-center items-center space-x-2">
              {post.categories?.map((category) => {
                return (
                  <div
                    key={category.id}
                    className="bg-gray-400 rounded-lg px-4 py-2 "
                  >
                    {category}
                  </div>
                );
              })}
            </div>
          </div>

          {/* comments div */}
          <div className="flex flex-col mt-4">
            <h3 className="mt-6 mb-4 font-semibold">Comments:</h3>
            {/* comments */}
            {comments?.map((comment) => {
              return <Comment key={comment._id} comment={comment} post={post} />;
            })}
          </div>
          {/* posting comment div */}
          <div className="flex flex-col items-center justify-between mt-2 md:flex-row">
            <input onChange={(e)=>setComment(e.target.value)}
              type="text"
              className="md:w-[78%] rounded-md outline-none px-5 border  py-2 "
              placeholder="write a comment"
            />
            <button  onClick={postComment} className="bg-black text-white  px-4 py-2 rounded-md md:w-[20%] mt-4 md:mt-0">
              Add Comment
            </button>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default PostDetails;
