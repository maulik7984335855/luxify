import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import AppContext from "../context/AppContext";

const ProductById = () => {
  const [product, setProduct] = useState();
  const [selectedSize, setSelectedSize] = useState(null);
  const navigate = useNavigate();

  const { id } = useParams();
  console.log(id);

  const {addToCart} = useContext(AppContext);

  useEffect(() => {
    const fetchProduct = async () => {
      const api = await axios.get(`https://luxify-backend-5rrq.onrender.com/api/product/${id}`);
      console.log("fetch single product: ", api.data.product);
      setProduct(api.data.product);
    };
    fetchProduct();
  }, [id]);

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  const handleAddToCart = () =>{
    if(selectedSize){
      addToCart(product._id,product.imgSrc[0],product.currentPrice,1,selectedSize)
      navigate("/cart")
    }
    else{
      alert("Please select size ");
    }
  }

  return (
    <div className="container pt-32 bg-[#000] h-full md:h-full flex-col lg:flex-row max-w-screen-2xl flex justify-evenly lg:gap-0 gap-4 p-3">
      <div className="flex w-[100%] lg:w-[40vw] items-center justify-center overflow-x-scroll flex-row lg:flex-col gap-10" style={{ scrollbarWidth: "none" }}>
        {product?.imgSrc?.map((productImg) => (
          <img
            key={productImg}
            src={productImg}
            alt="product"
            style={{
              background: "linear-gradient(to bottom,#000, #fff)",
              transition: ".3s all ease-in",
            }}
            className="rounded-lg w-[350px] lg:w-[400px] hover:rotate-1"
          />
        ))}
      </div>

      <div className="flex w-full lg:w-[50vw] flex-col lg:justify-start justify-center items-center lg:items-start font-extralight gap-8">
        <h2 className="lg:text-3xl text-2xl text-[#ce8080]">{product?.title}</h2>
        <h3 className="lg:text-[20px] text-[15px] capitalize">{product?.desc}</h3>
        <div className="flex gap-4 items-center">
          <del className="text-[16px]">₹{product?.deletedPrice}</del>
          <span className="text-[22px] text-[#ce8080] font-[400]">
            ₹{product?.currentPrice}
          </span>
        </div>
        <button onClick={handleAddToCart} className="px-4 py-2 text-black text-[17px] font-bold rounded-md bg-[#ce8080] hover:bg-[#c28284]">
          Add To Cart
        </button>
        <p className="lg:text-[20px] text-15px">
          🚚 Free Delivery Across India
          <br />
          💸 Cash on Delivery Option Available
          <br />
          👟 Handmade By Expert Artisans
          <br />
          🗯️ Extra Padding for Greater Comfort
          <br />
          🕶️ Stylish and Elegant Design
          <br />
          💨 Breathable Mesh Upper
          <br />✨ Light Weight and Comfortable
        </p>
        <div className="flex gap-3">
          {product?.size?.map((size) => {
            return (
              <span
                key={size}
                className={`cursor-pointer font-bold rounded-md px-4 py-2 ${selectedSize === size ? 'bg-white text-[#ce8080]' : 'bg-[#ce8080] text-black'}`}
                onClick={() => handleSizeClick(size)}
              >
                {size}
              </span>
            );
          })}
        </div>
        <table className="border border-gray-400">
          <tbody className="text-[#ce8080] text-12px lg:text-[15px]">
            <tr className="border border-gray-400">
              <td className="border border-gray-400 p-2">Material</td>
              <td className="border border-gray-400 p-2">Denim / Vegan Leather</td>
            </tr>
            <tr className="border border-gray-400">
              <td className="border border-gray-400 p-2">Toe Type</td>
              <td className="border border-gray-400 p-2">Round Toe</td>
            </tr>
            <tr className="border border-gray-400">
              <td className="border border-gray-400 p-2">Insole</td>
              <td className="border border-gray-400 p-2">Comfort Insole</td>
            </tr>
            <tr className="border border-gray-400">
              <td className="border border-gray-400 p-2">Sole Material</td>
              <td className="border border-gray-400 p-2">Airmax First Sole</td>
            </tr>
            <tr className="border border-gray-400">
              <td className="border border-gray-400 p-2">Occasion</td>
              <td className="border border-gray-400 p-2">Everyday</td>
            </tr>
            <tr className="border border-gray-400">
              <td className="border border-gray-400 p-2">Warranty</td>
              <td className="border border-gray-400 p-2">3 Months</td>
            </tr>
          </tbody>
        </table>

        <div className="size-chart">
          <img
            src="https://cdn.shopify.com/s/files/1/0611/3676/5182/products/SizeChart-TheAurous_5b08ca89-8144-4730-88d3-2500d3ea0c52_480x480.png?v=1655890981"
            alt="Size Chart"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductById;
