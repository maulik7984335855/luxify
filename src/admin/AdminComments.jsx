import React, { useContext, useEffect } from "react";
import AppContext from "../context/AppContext";
import { MdDelete } from "react-icons/md";
import axios from "axios";

const AdminComments = () => {
  const { GetContact } = useContext(AppContext);

  
    const deleteMessage = async (id) => {
      const api = await axios.delete(
        `http://localhost:3000/api/contact/delete/${id}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      console.log("delete message: ", api.data.message);
    };
    

  return (
    <div className="absolute top-10 left-80 p-4 text-black bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Comments</h2>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className="w-full border-b border-gray-300">
            <th className="py-2 px-4 text-left">Name</th>
            <th className="py-2 px-4 text-left">Email</th>
            <th className="py-2 px-4 text-left">Message</th>
            <th className="py-2 px-4 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {GetContact.length === 0 ? (
            <h2>Not Any Message Found</h2>
          ) : (
            GetContact?.map((contact) => (
              <tr key={contact._id} className="w-full border-b border-gray-200">
                <td className="py-2 px-4">{contact.name}</td>
                <td className="py-2 px-4">{contact.email}</td>
                <td className="py-2 px-4">{contact.message}</td>
                <button
                  className="py-2 px-4"
                  onClick={() => deleteMessage(contact._id)}
                >
                  <MdDelete className="text-xl cursor-pointer" />
                </button>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AdminComments;
