// components/Navbar.js
import React, { useContext } from "react";
import { FaUser, FaShoppingCart, FaSearch } from "react-icons/fa";
import AppContext from "../context/AppContext";
import AuthContext from "../context/AuthContext";
import { IoIosLogOut } from "react-icons/io";

const Navbar = () => {
  const { cart, logoutUser } = useContext(AppContext);
  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
    logoutUser();
  };

  return (
    // <div className="navbar bg-[#1f1e1e] z-50 shadow-md text-white fixed top-0 right-0 left-0 px-3 md:px-5">
    //   <div className="navbar-start">
    //     <a
    //       className="btn btn-ghost text-2xl text-[#ce8080]"
    //       style={{ letterSpacing: "3px" }}
    //     >
    //       LUXIFY
    //     </a>
    //   </div>
    //   <div className="navbar-center hidden lg:flex">
    //     <ul className="menu menu-horizontal px-1 uppercase text-lg">
    //       <li
    //         className="hover:tracking-[0.5px] hover:text-[#ce8080] hover:scale-105"
    //         style={{ transition: ".3s all ease-in" }}
    //       >
    //         <a href="/">Home</a>
    //       </li>
    //       <li
    //         className="hover:tracking-[0.5px] hover:text-[#ce8080] hover:scale-105"
    //         style={{ transition: ".3s all ease-in" }}
    //       >
    //         <a href="/products/search">Products</a>
    //       </li>
    //       <li
    //         className="hover:tracking-[0.5px] hover:text-[#ce8080] hover:scale-105"
    //         style={{ transition: ".3s all ease-in" }}
    //       >
    //         <a href="/about">About</a>
    //       </li>
    //       <li
    //         className="hover:tracking-[0.5px] hover:text-[#ce8080] hover:scale-105"
    //         style={{ transition: ".3s all ease-in" }}
    //       >
    //         <a href="/orders">Orders</a>
    //       </li>
    //     </ul>
    //   </div>
    //   <div className="navbar-end gap-1 md:gap-4 text-xl">
    //     <a
    //       className="hover:text-[#ce8080] cursor-pointer"
    //       href="/products/search"
    //     >
    //       <FaSearch />
    //     </a>
    //     {user ? (
    //       <button
    //         onClick={handleLogout}
    //         className="hover:text-[#ce8080] font-bold cursor-pointer"
    //       >
    //         <IoIosLogOut />
    //       </button>
    //     ) : (
    //       <a href="/login" className="hover:text-[#ce8080] cursor-pointer">
    //         <FaUser />
    //       </a>
    //     )}
    //     <a
    //       href="/cart"
    //       type="button"
    //       className="relative inline-flex items-center text-white rounded focus:outline-none"
    //     >
    //       <FaShoppingCart />
    //       <span className="absolute top-0 right-0 flex items-center justify-center w-4 h-4 transform translate-x-1/2 -translate-y-1/2 text-[8px] font-bold text-white bg-[#ce8080] rounded-full">
    //         {cart?.items?.length || "0"}
    //       </span>
    //     </a>
    //   </div>
    // </div>
    <div className="navbar bg-[#1f1e1e] z-50 shadow-md text-white fixed top-0 right-0 left-0 px-3 md:px-5">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-[#ce8080] px-1 uppercase text-lg rounded-box z-[1] mt-3 w-52 p-2 "
          >
            <li
              className="hover:tracking-[0.5px] hover:text-[#ce8080] hover:scale-105"
              style={{ transition: ".3s all ease-in" }}
            >
              <a href="/">Home</a>
            </li>
            <li
              className="hover:tracking-[0.5px] hover:text-[#ce8080] hover:scale-105"
              style={{ transition: ".3s all ease-in" }}
            >
              <a href="/products/search">Products</a>
            </li>
            <li
              className="hover:tracking-[0.5px] hover:text-[#ce8080] hover:scale-105"
              style={{ transition: ".3s all ease-in" }}
            >
              <a href="/about">About</a>
            </li>
            <li
              className="hover:tracking-[0.5px] hover:text-[#ce8080] hover:scale-105"
              style={{ transition: ".3s all ease-in" }}
            >
              <a href="/orders">Orders</a>
            </li>
          </ul>
        </div>
        <a
        href="/"
          className="btn btn-ghost text-2xl text-[#ce8080]"
          style={{ letterSpacing: "3px" }}
        >
          LUXIFY
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1  uppercase text-lg">
        <li
              className="hover:tracking-[0.5px] hover:text-[#ce8080] hover:scale-105"
              style={{ transition: ".3s all ease-in" }}
            >
              <a href="/">Home</a>
            </li>
            <li
              className="hover:tracking-[0.5px] hover:text-[#ce8080] hover:scale-105"
              style={{ transition: ".3s all ease-in" }}
            >
              <a href="/products/search">Products</a>
            </li>
            <li
              className="hover:tracking-[0.5px] hover:text-[#ce8080] hover:scale-105"
              style={{ transition: ".3s all ease-in" }}
            >
              <a href="/about">About</a>
            </li>
            <li
              className="hover:tracking-[0.5px] hover:text-[#ce8080] hover:scale-105"
              style={{ transition: ".3s all ease-in" }}
            >
              <a href="/orders">Orders</a>
            </li>
        </ul>
      </div>
        <div className="navbar-end gap-1 md:gap-4 text-xl">
         <a
          className="hover:text-[#ce8080] cursor-pointer"
          href="/products/search"
        >
          <FaSearch />
        </a>
        {user ? (
          <button
            onClick={handleLogout}
            className="hover:text-[#ce8080] font-bold cursor-pointer"
          >
            <IoIosLogOut />
          </button>
        ) : (
          <a href="/login" className="hover:text-[#ce8080] cursor-pointer">
            <FaUser />
          </a>
        )}
        <a
          href="/cart"
          type="button"
          className="relative inline-flex items-center text-white rounded focus:outline-none"
        >
          <FaShoppingCart />
          <span className="absolute top-0 right-0 flex items-center justify-center w-4 h-4 transform translate-x-1/2 -translate-y-1/2 text-[8px] font-bold text-white bg-[#ce8080] rounded-full">
            {cart?.items?.length || "0"}
          </span>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
