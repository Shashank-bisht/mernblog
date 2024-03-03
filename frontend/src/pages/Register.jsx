import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import axios from "axios";
import { URL } from "../url";


const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      const res = await axios.post(URL + "/api/auth/register", {
        username,
        email,
        password,
      });
      //The request is made to the registration endpoint (URL + "/api/auth/register"), and it includes the username, email, and password as data to be sent to the server.
      setUsername(res.data.username);
      setEmail(res.data.email);
      setPassword(res.data.password);
      setError(false);
      //  after setting the data and pressing sign button throw user to /login
      navigate("/login");
    } catch (err) {
      setError(true);
      console.log(err);
    }
  };

  return (
    <>
      {/* register page will show login option */}
      <div className="flex itmes-center justify-between px-6 md:px-[200px] py-4">
        <h1 className="md:text-xl sm:text-lg font-extrabold">
          <Link to="/">Blogify</Link>
        </h1>
        <h3 className="font-bold">
          <Link to="/login">Login</Link>
        </h3>
      </div>

      <div className="w-full flex justify-center items-center h-[57vh]">
        <div className="flex flex-col justify-center items-center space-y-4 w-[80%] md:w-[25%]">
          <h1 className="text-xl font-bold text-left">Create an account</h1>
          {/* username */}
          <input 
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-2 border-2 border-black outline-0"
            placeholder="Enter your username"
          />
          {/* email */}
          <input
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border-2 border-black outline-0"
            placeholder="Enter your email"
          />
          {/* password */}
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border-2 border-black outline-0"
            placeholder="Enter your password"
          />
          {/* button */}
          <button
            onClick={handleRegister}
            className="w-full px-4 py-4 text-lg font-bold text-white bg-black rounded-lg hover:bg-white hover:text-black hover:border-black hover:border-2"
          >
            Register
          </button>
          {/* if error comes during register execute below code */}
          {error && (
            <h3 className="text-red-500 text-sm">something went wrong</h3>
          )}
          <div className="flex justify-center items-center space-x-4">
            <p>Already have account ?</p>
            <p className="text-blue-500 hover:text-black">
              <Link to="/login">Login</Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;
