import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import { MdDelete } from "react-icons/md";

const Cart = () => {
  const { cart, decreaseQty, increaseQty, removeItem } = useContext(AppContext);

  // Calculate totals
  const subTotal =
    cart?.items?.reduce(
      (total, product) => total + product.currentPrice,
      0
    ) || 0;
  const shippingCharges = 0;
  const tax = (subTotal * 9) / 100;
  const discount = 0;
  const total = subTotal + tax - discount;

  return (
    <div className="container flex lg:flex-row   items-center lg:items-stretch  flex-col text-white bg-[#000] h-full pt-20 max-w-screen-2xl px-3 md:px-10">
      <div className="flex flex-col  py-[2rem] px-[4rem] gap-[4rem]">
        {cart?.items?.map((product) => (
          <div
            key={product?._id}
            className="flex flex-col md:flex-row w-[full] border-2 rounded-lg gap-[3rem] py-[1rem] md:px-[2rem] px-[1rem] justify-center items-center bg-[#1f1e1e] text-lg md:text-xl h-fit"
          >
            <div
              style={{ background: "linear-gradient(#ce8080,black)" }}
              className="rounded-md w-full"
            >
              <img
                src={product?.imgSrc}
                className="md:w-[10rem] w-[100%] h-[100%] md:h-[10rem]  hover:rotate-6 hover:scale-105"
                style={{ transition: ".3s all ease-in" }}
                alt="image"
              />
            </div>
            <span>₹{product?.currentPrice}</span>
            <div className="space-x-6 flex flex-row  ">
              <button
                className="bg-white px-2 md:px-3 rounded-lg text-black hover:bg-[#ce8080] py-1"
                onClick={() => decreaseQty(product?.productId, 1)}
              >
                -
              </button>
              <span>{product?.qty}</span>
              <button
                className="bg-white px-2 md:px-3 rounded-lg text-black hover:bg-[#ce8080] py-1"
                onClick={() => increaseQty(product?.productId, 1)}
              >
                +
              </button>
            </div>
            <button onClick={() => removeItem(product?.productId)}>
              <MdDelete />
            </button>
          </div>
        ))}
      </div>
      <aside className="flex flex-col gap-5 text-lg md:text-xl mt-10">
        <span>SubTotal: ₹{subTotal.toFixed(2)}</span>
        <span>Shipping Charges: ₹{shippingCharges.toFixed(2)}</span>
        <span>Tax: ₹{tax.toFixed(2)}</span>
        <span>
          Discount:{" "}
          <span className="text-red-500">-₹{discount.toFixed(2)}</span>
        </span>
        <span>Total: ₹{total.toFixed(2)}</span>
        {cart?.items?.length > 0 && (
          <a
            href="/shipping"
            className="bg-[#ce8080] w-[140px] p-3 rounded-lg text-black uppercase tracking-[1px] md:text-xl text-lg font-light hover:bg-[#d69b9b]"
          >
            CheckOut
          </a>
        )}
      </aside>
    </div>
  );
};

export default Cart;
