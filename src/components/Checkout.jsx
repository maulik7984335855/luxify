import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import AppContext from "../context/AppContext";
import StripeCheckout from 'react-stripe-checkout';

const Checkout = () => {
  const navigate = useNavigate();
  const { cart, allOrders, removeItem } = useContext(AppContext);

  const [village, setVillage] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [pincode, setPincode] = useState("");
  const [status, setStatus] = useState(["Pending", "Shipped"]); 

  let cartItems = cart.items;

  const isFormComplete = village && city && state && country && pincode;

  const submitForm = (e) => {
    e.preventDefault();
    allOrders(village, city, state, country, pincode, cartItems, status);
    removeItem(cart.items.productId);
  };

  const subTotal =
    cartItems?.reduce(
      (total, product) =>  product.currentPrice ,
      0
    ) || 0;

  const tax = (subTotal * 9) / 100;
  const total = subTotal + tax;

  const onToken = (token) => {
    console.log(token);
    // Process the payment here
    // For demonstration purposes, let's assume payment is successful
    // Redirect to the orders page
    navigate("/orders");
  };

  return (
    <div className="container text-white bg-[#000] h-screen pt-20 max-w-screen-2xl px-3 md:px-10">
      <h2 className="uppercase tracking-[2px] pt-4 font-extralight text-center text-[28px]">
        Shipping Address
      </h2>
      <form onSubmit={submitForm} className="flex flex-col justify-center pt-8 items-center gap-4">
        <input
          className="w-full lg:w-[400px] px-2 py-3 rounded-md text-lg"
          type="text"
          placeholder="Village"
          required
          value={village}
          onChange={(e) => setVillage(e.target.value)}
        />
        <input
          type="text"
          className="w-full lg:w-[400px] px-2 py-3 rounded-md text-lg"
          placeholder="City"
          required
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <input
          type="text"
          className="w-full lg:w-[400px] px-2 py-3 rounded-md text-lg"
          placeholder="State"
          required
          value={state}
          onChange={(e) => setState(e.target.value)}
        />
        <input
          type="text"
          className="w-full lg:w-[400px] px-2 py-3 rounded-md text-lg"
          placeholder="Country"
          required
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
        <input
          type="number"
          className="w-full lg:w-[400px] px-2 py-3 rounded-md text-lg"
          placeholder="Pincode"
          required
          value={pincode}
          onChange={(e) => setPincode(e.target.value)}
        />
        <button type="submit">
        {isFormComplete && (
        <div className="flex justify-center mt-8">
          <StripeCheckout
            token={onToken}
            name="LUXIFY"
            amount={total * 100} // Amount in paise (e.g., 10000 INR = 1000000 paise)
            currency="INR"
            stripeKey="pk_test_51Oea8YDkXACyP9iVSPf3UmFad6aANnsf4XPl7dU3ZzPUjwCQpyJnPfItM4DrU9vzAGYgghdJJHLkdKhlzaANBlvY00cptkB7oD"
          />
        </div>
      )}
        </button>
      </form>

      
    </div>
  );
};

export default Checkout;
