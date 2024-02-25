import React, { useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import Menu from "./Menu";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Navbar = () => {
  const [prompt, setPrompt] = useState("");
  const [menu, setMenu] = useState(false);
  const navigate = useNavigate();
  const path = useLocation().pathname;
  const showMenu = () => {
    setMenu(!menu);
  };
  const { user } = useContext(UserContext);
  return (
    <div className="flex relative items-center justify-between px-6 md:px-[200px] py-4">
      <h1 className="md:text-xl sm:text-lg font-extrabold">
        <Link to="/">Blogify</Link>
      </h1>

      {/*if path = '/' then show  search bar */}
      {path === "/" && (
        <div className="flex justify-center items-center space-x-0 bg-slate-100 pl-3 rounded-lg">
          {/* searchlogo */}
          <p
            onClick={() =>
              navigate(prompt ? "?search=" + prompt : navigate("/"))
            }
            className="cursor-pointer relative"
          >
            <BsSearch  />
          </p>
          {/* accessing the search value */}
          <input
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="search a post"
            className="outline-none bg-slate-100 px-3 py-1 rounded-lg"
            type="text"
          />
        </div>
      )}

      <div className="hidden md:flex items-center justify-center space-x-2 md:space-x-4">
        {/* if user  not logged in then show login and register and if user is  logged in then show write and menu */}
        {user ? (
          <h3>
            <Link to="/write">Write</Link>
          </h3>
        ) : (
          <h3>
            <Link to="/login">Login</Link>
          </h3>
        )}
        {user ? (
          <div onClick={showMenu}>
            <p className="cursor-pointer">
              <FaBars />
            </p>
            {menu && <Menu />}
          </div>
        ) : (
          <h3>
            <Link to="/register">Register</Link>
          </h3>
        )}
      </div>
      {/* toggle navbar */}
      <div onClick={showMenu} className="md:hidden">
        <p className="cursor-pointer">
          <FaBars />
        </p>
        {menu && <Menu />}
      </div>
    </div>
  );
};

export default Navbar;
