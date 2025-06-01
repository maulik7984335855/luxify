import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { FaProductHunt } from "react-icons/fa";
import { FaRegCommentDots } from "react-icons/fa6";
import { FaOpencart } from "react-icons/fa";

const Admin = () => {
  return (
    <>
      <div className="w-1/5 border-r border-[#ce8080] h-screen flex items-start pl-4 gap-5 flex-col">
        <a href="/" className="pt-5 text-2xl tracking-wide text-[#ce8080] border-b border-[#ce8080]">LUXIFY</a>
        <div className="flex flex-col gap-4">
          <a href="/admin" className="text-xl">ADMIN</a>
          <a href="/adminUsers" className="text-xl flex items-center gap-3">
            <FaUserCircle className="text-[#ce8080]" />
            <span>Users</span>
          </a>
          <a href="/adminProducts" className="text-xl flex items-center gap-3">
            <FaProductHunt className="text-[#ce8080]" />
            <span>Product</span>
          </a>
          <a href="/adminComments" className="text-xl flex items-center gap-3">
            <FaRegCommentDots className="text-[#ce8080]" />
            <span>Comments</span>
          </a>
          <a href="/adminOrders" className="text-xl flex items-center gap-3">
            <FaOpencart className="text-[#ce8080]" />
            <span>Orders</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default Admin;
