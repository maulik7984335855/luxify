import React, { useContext, useState } from "react";
import AppContext from "../context/AppContext";
import Products from "./Products";

const ProductSearch = () => {
  const { products } = useContext(AppContext);
  const [sortCriteria, setSortCriteria] = useState("none");
  const [priceRange, setPriceRange] = useState([0, 100000]);
  const [color, setColor] = useState("all");
  const [category, setCategory] = useState("all");
  const [searchProduct, setSearchProduct] = useState("");

  const handleSortChange = (e) => {
    setSortCriteria(e.target.value);
  };

  const handlePriceRangeChange = (min, max) => {
    setPriceRange([min, max]);
  };

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  return (
    <>
      <div className="container bg-[#000] h-full max-w-screen-2xl flex lg:flex-row flex-col justify-between px-3 md:px-10 mx-auto pt-16 gap-3 mt-10 md:mt-16 pb-10">
        <aside className="uppercase flex flex-col gap-5 max-w-[25rem] ">
          <h2 className="text-[25px] font-thin text-[#ce8080] tracking-[2px]">
            Filters
          </h2>
          <div className="flex gap-3 flex-col" style={{ justifyContent: "flex-start", alignItems: "flex-start" }}>
            <span className="text-lg text-[#ce8080] font-thin tracking-[2px]">
              SORT
            </span>
            <select className="px-3 py-3 rounded-md bg-white text-black" style={{ width: "100%" }} onChange={handleSortChange}>
              <option value="none">None</option>
              <option value="lowtohigh">Price (Low To High)</option>
              <option value="hightolow">Price (High To Low)</option>
            </select>
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="text-lg text-[#ce8080] font-thin tracking-[2px]">Max price: 100000</h2>
            <span className="flex flex-col gap-3" style={{ justifyContent: "flex-start", alignItems: "flex-start" }}>
              <button className="bg-[#ce8080] text-lg px-3 py-1 rounded-md hover:bg-white hover:text-[#ce8080]" onClick={() => handlePriceRangeChange(0, 1000)}>
                0 - 1000
              </button>
              <button className="bg-[#ce8080] text-lg px-3 py-1 rounded-md hover:bg-white hover:text-[#ce8080]" onClick={() => handlePriceRangeChange(1000, 2000)}>
                1000 - 2000
              </button>
              <button className="bg-[#ce8080] text-lg px-3 py-1 rounded-md hover:bg-white hover:text-[#ce8080]" onClick={() => handlePriceRangeChange(2000, 3000)}>
                2000 - 3000
              </button>
              <button className="bg-[#ce8080] text-lg px-3 py-1 rounded-md hover:bg-white hover:text-[#ce8080]" onClick={() => handlePriceRangeChange(3000, 100000)}>
                3000 and above
              </button>
            </span>
          </div>
          <div className="flex gap-3 flex-col" style={{ justifyContent: "flex-start", alignItems: "flex-start" }}>
            <span className="text-lg text-[#ce8080] font-thin tracking-[2px]">CATEGORY</span>
            <select className="px-3 py-3 rounded-md bg-white text-black" style={{ width: "100%" }} onChange={handleCategoryChange}>
              <option value="all">All</option>
              {[...new Set(products.map(product => product.category))].map((category) => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
          <div className="flex gap-3 flex-col" style={{ justifyContent: "flex-start", alignItems: "flex-start" }}>
            <span className="text-lg text-[#ce8080] font-thin tracking-[2px]">COLOR</span>
            <select className="px-3 py-3 rounded-md bg-white text-black" style={{ width: "100%" }} onChange={handleColorChange}>
              <option value="all">All</option>
              {[...new Set(products.map(product => product.color))].map((color) => (
                <option key={color} value={color}>{color}</option>
              ))}
            </select>
          </div>
        </aside>
        <div className="serchandproducts flex flex-col gap-5 w-[100%] lg:w-[80%] p-0 lg:p-3">
          <h2 className="text-2xl uppercase font-thin tracking-[2px]">products</h2>
          <input
            type="text"
            className="w-full lg:w-[50%] text-lg rounded-lg px-4 py-3 outline-none"
            placeholder="Search by name..."
            onChange={(e) => setSearchProduct(e.target.value)}
          />
          <Products sortCriteria={sortCriteria} priceRange={priceRange} color={color} category={category} searchProduct={searchProduct} />
        </div>
      </div>
    </>
  );
};

export default ProductSearch;
