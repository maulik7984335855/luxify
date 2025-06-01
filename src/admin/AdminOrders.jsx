import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import { MdDelete } from "react-icons/md";

const AdminOrders = () => {
  const { GetOrder } = useContext(AppContext);

  return (
    <div className="absolute top-10 left-80 p-4 bg-white text-black shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Orders</h2>
      {GetOrder.length > 0 ? <table className="min-w-full text-center bg-white border border-gray-300">
        <thead>
          <tr className="w-full border-b  border-gray-300">
          
            <th className="py-2 px-4 text-left">Image</th>
            <th className="py-2 px-4 text-left">Price</th>
            <th className="py-2 px-4 text-left">Quantity</th>
            <th className="py-2 px-4 text-left">UserId</th>
            <th className="py-2 px-4 text-left">Village</th>
            <th className="py-2 px-4 text-left">City</th>
            <th className="py-2 px-4 text-left">State</th>
            <th className="py-2 px-4 text-left">Country</th>
            <th className="py-2 px-4 text-left">Pincode</th>
            <th className="py-2 px-4 text-left">Status</th>
            {/* <th className="py-2 px-4 text-left">Action</th> */}
          </tr>
        </thead>
        <tbody>
          {GetOrder?.map((order) => (
            <React.Fragment key={order._id}>
              {order.cartitems?.map((cartItem, index) => (
                <tr key={index} className="w-full border-b border-gray-200">
                  <td className="py-2 px-4">
                    <img src={cartItem?.imgSrc} alt="product" className="h-10 w-10 object-cover" />
                  </td>
                  <td className="py-2 px-4">{cartItem?.currentPrice}</td>
                  <td className="py-2 px-4">{cartItem?.qty}</td>
                  {index === 0 && (
                    <>
                    <td rowSpan={order.cartitems.length} className="py-2 px-4 align-top">
                        {order?.userId}
                      </td>
                      <td rowSpan={order.cartitems.length} className="py-2 px-4 align-top">
                        {order?.village}
                      </td>
                      <td rowSpan={order.cartitems.length} className="py-2 px-4 align-top">
                        {order?.city}
                      </td>
                      <td rowSpan={order.cartitems.length} className="py-2 px-4 align-top">
                        {order?.state}
                      </td>
                      <td rowSpan={order.cartitems.length} className="py-2 px-4 align-top">
                        {order?.country}
                      </td>
                      <td rowSpan={order.cartitems.length} className="py-2 px-4 align-top">
                        {order?.pincode}
                      </td>
                      <td rowSpan={order.cartitems.length} className="py-2 px-4 align-top">
                        <select defaultValue={order?.status[0]} className="border border-gray-300 text-white rounded p-1">
                          {order?.status.map((status, idx) => (
                            <option key={idx} value={status}>
                              {status}
                            </option>
                          ))}
                        </select>
                      </td>
                      {/* <td>
                        <MdDelete className='text-xl cursor-pointer' />
                      </td> */}
                    </>
                  )}
                </tr>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table> : <h2 className='text-lg font-bold'>Orders Not Found</h2>}
    </div>
  );
};

export default AdminOrders;
