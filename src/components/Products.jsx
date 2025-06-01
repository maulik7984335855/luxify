import React, { useContext, useEffect, useState } from "react";
import AppContext from "../context/AppContext";
import { Link } from "react-router-dom";

const Products = ({
  sortCriteria,
  priceRange,
  color,
  category,
  searchProduct,
}) => {
  const { products } = useContext(AppContext);
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    let filteredArray = [...products];

    // Filter by price range
    filteredArray = filteredArray.filter(
      (product) =>
        product.currentPrice >= priceRange[0] &&
        product.currentPrice <= priceRange[1]
    );

    // Filter by color
    if (color !== "all") {
      filteredArray = filteredArray.filter(
        (product) => product.color === color
      );
    }

    // Filter by category
    if (category !== "all") {
      filteredArray = filteredArray.filter(
        (product) => product.category === category
      );
    }

    // Filter by search input
    if (searchProduct) {
      filteredArray = filteredArray.filter((product) =>
        product.title.toLowerCase().includes(searchProduct.toLowerCase())
      );
    }

    // Sort products
    if (sortCriteria === "lowtohigh") {
      filteredArray.sort((a, b) => a.currentPrice - b.currentPrice);
    } else if (sortCriteria === "hightolow") {
      filteredArray.sort((a, b) => b.currentPrice - a.currentPrice);
    }

    setFilteredProducts(filteredArray);
  }, [sortCriteria, priceRange, color, category, searchProduct, products]);

  return (
    <div className="flex flex-wrap items-center justify-center w-full gap-4">
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <Link key={product._id} to={`/${product._id}`}>
            <div className="card bg-base-100 w-full md:w-[260px] h-auto shadow-xl pb-2">
              <div
                className="h-56 flex items-center justify-center"
                style={{
                  background: `linear-gradient(${product.color}, white)`,
                  opacity: 1,
                  transform: "none",
                  borderRadius: "20px",
                }}
              >
                <img
                  src={product.imgSrc[0]}
                  alt="Shoes"
                  className="w-[220px] h-[200px] rounded-lg  hover:rotate-[10deg] hover:scale-105"
                  style={{ transition: ".3s ease-in" }}
                />
              </div>
              <div className="card-body pb-1">
                <div className="flex justify-between">
                  <h2 className="text-xl">
                    {product.title.split(" ").slice(0, 1).join(" ") + "..."}
                  </h2>
                  <span className="text-xl">&#8377;{product.currentPrice}</span>
                </div>
                <p className="" style={{ whiteSpace: "nowrap" }}>
                  {product.desc.split(" ").slice(0, 3).join(" ") + "..."}
                </p>
                <div className="flex items-center justify-center">
                  <button className="bg-[#ce8080] text-black hover:text-[#ce8080] hover:bg-[#000] w-48 rounded-xl px-2 py-1">
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          </Link>
        ))
      ) : (
        <div className="text-center text-2xl text-gray-500 mt-8">
          No products found matching the selected criteria.
        </div>
      )}
    </div>
  );
};

export default Products;
