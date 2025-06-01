import React, { useContext } from "react";
import AppContext from "../context/AppContext";

const Orders = () => {
  const { orders,cancelOrder } = useContext(AppContext);

  const calculateGrandTotal = (cartitems) => {
    const total = cartitems.reduce((total, item) => {
      const itemTotal = item.currentPrice;
      const itemTotalWithGst = itemTotal + (itemTotal * 0.09); // Adding 18% GST
      return total + itemTotalWithGst;
      
    }, 0);
    return total.toFixed(2); // Optional: to keep two decimal places
  };

  return (
    <div className="pt-20 about container flex text-[17px] flex-col gap-10 bg-[#000] h-full max-w-screen-2xl">
      <h1 className="text-center">Your Orders</h1>
      <div className="w-full flex flex-col items-center justify-center">
        {orders?.fetchOrder?.length > 0 ? (
          orders.fetchOrder.map((order) => (
            <div
              key={order._id}
              className="order mb-8 py-5 flex lg:flex-row flex-col items-center justify-center gap-24 px-3 text-black rounded-md bg-[white] w-[90%] lg:w-1/2"
            >
              <div className="left flex flex-col gap-4">
                <h2>
                  <span className="font-bold">OrderId: </span>
                  {order._id}
                </h2>
                <span>
                  <span className="font-bold"> Address:</span> {order.village},{" "}
                  {order.city}, {order.state}, {order.country}, {order.pincode}
                </span>
                <span className="text-red-500">
                  <span className="font-bold text-black">Status:</span>{" "}
                  {order.status[0]}
                </span>
                <span>Shipping Charges: 0</span>
                <span>Discount: 0</span>
                <span>
                  <span className="font-bold">Grand Total: </span>₹
                  {calculateGrandTotal(order.cartitems)}
                </span>
                <button onClick={()=>{
                  
                  cancelOrder(order._id)
                }} className="bg-[#ce8080] p-3 rounded-lg">Cancel Order</button>
              </div>
              <div className="right flex lg:flex-row flex-col gap-3">
                {order.cartitems.map((item, index) => (
                  <div
                    key={index}
                    className="item rounded-md flex flex-col px-3 pt-4 bg-[#2f2e3e] items-center gap-2"
                    style={{
                      padding: ".8rem",
                      borderRadius: "10px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: ".5rem",
                      width: "100%",
                      backgroundColor: "#2f2e3e",
                    }}
                  >
                    <div
                      className="flex w-[100%] items-center justify-center rounded-md"
                      style={{ background: "linear-gradient(black,white)" }}
                    >
                      <img
                        src={item.imgSrc}
                        alt=""
                        style={{ transition: ".3s all ease-in" }}
                        className="w-[100%] rounded-md object-cover mb-2 hover:rotate-12"
                      />
                    </div>
                    <h2>Price: ₹{item.currentPrice}</h2>
                    <span>Qty: {item.qty}</span>
                  </div>
                ))}
              </div>
            </div>
            
          ))
        ) : (
          <p>No orders found</p>
        )}
      </div>
    </div>
  );
};

export default Orders;
