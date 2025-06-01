import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import { MdDelete } from "react-icons/md";

const AdminUsers = () => {
  const { GetUsers } = useContext(AppContext);

  return (
    <div className="absolute top-10 left-80 p-4 bg-white text-black shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Users</h2>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className="w-full border-b border-gray-300">
            <th className="py-2 px-4 text-left">Name</th>
            <th className="py-2 px-4 text-left">Email</th>
            <th className="py-2 px-4 text-left">Photo</th>
            {/* <th className="py-2 px-4 text-left">Action</th> */}
          </tr>
        </thead>
        <tbody>
          {GetUsers?.map((user, index) => (
            <tr key={index} className="w-full border-b border-gray-200">
              <td className="py-2 px-4">{user.name}</td>
              <td className="py-2 px-4">{user.email}</td>
              <td className="py-2 px-4">
                <img src={user.photo} alt="user" className="h-10 w-10 rounded-full object-cover" />
              </td>
              {/* <td className="py-2 px-4 text-xl cursor-pointer"><MdDelete /></td> */}

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminUsers;
