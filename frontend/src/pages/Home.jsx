import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import HomePosts from "../components/HomePosts";
import Navbar from "../components/Navbar";
import Loader from "../components/Loader";
import Footer from "../components/Footer";
import { URL } from "../url";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const Home = () => {
  // getting search property from useLocation()
  const { search } = useLocation();
  const [posts, setPosts] = useState([]);
  const [loader, setloader] = useState(false);
  const [noResults, setNoResults] = useState(false);
  const { user } = useContext(UserContext);

  const fetchPosts = async () => {
    setloader(true);
    try {
      const res = await axios.get(URL + "/api/post/" + search);
      // console.log(res.data)
      setPosts(res.data);
      if (res.data.length === 0) {
        setNoResults(true);
      } else {
        setNoResults(false);
      }
      setloader(false);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    fetchPosts();
  }, [search]);
  //The reason search is passed inside the dependency array [search] in the useEffect is to specify that the effect should run whenever the search value changes.
  return (
    <div className="flex flex-col min-h-screen">
    <Navbar />
    <div className="flex-grow px-8 md:px-[200px]">
      {/* For each post, a HomePosts component is rendered, passing the post data as a prop and a key to uniquely identify each post component. */}
      {loader ? (
        <div className="h-[40vh] flex justify-center items-center">
          <Loader />
        </div>
      ) : !noResults ? (
        posts.map((post) => (
          <Link to={user ? `/posts/post/${post._id}` : "/login"} key={post._id}>
            <HomePosts post={post} />
          </Link>
        ))
      ) : (
        // this will run when no result will be false
        <h3 className="text-center font-bold">No posts available</h3>
      )}
    </div>
    <Footer />
  </div>
  );
};

export default Home;
