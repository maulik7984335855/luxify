import React, { useContext } from "react";
import { IoBagHandleOutline } from "react-icons/io5";
import { MdOutlineArrowCircleRight } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";
import AppContext from "../context/AppContext";

const AdminDashboard = () => {
  const { GetContact, GetOrder, GetUsers } = useContext(AppContext);
  return (
    <>
      <div className="absolute top-10 left-80">
        <h2 className="text-lg border-b w-fit">
          <span className="text-[#ce8080]">A</span>dmin{" "}
          <span className="text-[#ce8080]">D</span>ashboard
        </h2>
        <div className="flex gap-4 mt-9 w-full text-lg ">
          <div className="">
            <div className=" w-[300px] bg-blue-900 rounded-md flex flex-col gap-8">
              <div className="flex justify-between p-2 ">
                <div className="flex flex-col ">
                  <span>{GetOrder?.length}</span>
                  <span className="whitespace-nowrap">New Orders</span>
                </div>
                <IoBagHandleOutline className="text-[80px] text-black opacity-40 hover:scale-105" />
              </div>
              <a
                href="/adminOrders"
                className="flex items-center gap-2 rounded-md text-lg justify-center bg-blue-950 "
              >
                <span>More Info</span>
                <MdOutlineArrowCircleRight />
              </a>
            </div>
          </div>
          <div>
            <div className=" w-[300px] bg-yellow-500 rounded-md flex flex-col gap-8">
              <div className="flex justify-between p-2 ">
                <div className="flex flex-col ">
                  <span>{GetUsers?.length}</span>
                  <span className="whitespace-nowrap">Users</span>
                </div>
                <FaUsers className="text-[80px] text-black opacity-40 hover:scale-105" />
              </div>
              <a
                href="/adminUsers"
                className="flex items-center gap-2 rounded-md text-lg justify-center bg-yellow-600 "
              >
                <span>More Info</span>
                <MdOutlineArrowCircleRight />
              </a>
            </div>
          </div>
          <div>
            <div className=" w-[300px] bg-red-500 rounded-md flex flex-col gap-8">
              <div className="flex justify-between p-2 ">
                <div className="flex flex-col ">
                  <span>{GetContact?.length}</span>
                  <span className="whitespace-nowrap">Comments</span>
                </div>
                <FaRegComment className="text-[80px] text-black opacity-40 hover:scale-105" />
              </div>
              <a
                href="/adminComments"
                className="flex items-center gap-2 rounded-md text-lg justify-center bg-red-600 "
              >
                <span>More Info</span>
                <MdOutlineArrowCircleRight />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-32 flex justify-center items-center">
          <h3 className="text-[40px]">
            <span className="text-[72px]  text-[#ce8080]  tracking-[1px]  ">
              Hello
            </span>{" "}
            <span className="border-b border-[#ce8080] ">Admin</span>
          </h3>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
