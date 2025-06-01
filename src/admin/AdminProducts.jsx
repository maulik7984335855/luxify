import React, { useContext, useState, useEffect } from "react";
import AppContext from "../context/AppContext";
import { GrUpdate } from "react-icons/gr";
import { MdDeleteOutline } from "react-icons/md";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminProducts = () => {
  const { products, addProductByAdmin, getProductUpdate, getProductForUpdate } = useContext(AppContext);
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    category: "",
    color: "",
    currentPrice: "",
    deletedPrice: "",
    title: "",
    desc: "",
    imgSrc: ["", "", ""],
    qty: "",
    size: ["", "", "", "", ""],
  });
  const [updateValues, setUpdateValues] = useState(null);

  useEffect(() => {
    if (getProductUpdate) {
      setUpdateValues(getProductUpdate);
    }
  }, [getProductUpdate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleArrayChange = (e, index, arrayName) => {
    const { value } = e.target;
    const updatedArray = [...formValues[arrayName]];
    updatedArray[index] = value;
    setFormValues({
      ...formValues,
      [arrayName]: updatedArray,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addProductByAdmin(
      formValues.imgSrc,
      formValues.title,
      formValues.color,
      formValues.category,
      formValues.desc,
      formValues.deletedPrice,
      formValues.currentPrice,
      formValues.qty,
      formValues.size
    );

    document.getElementById("my_modal_3").close();
  };

  const handleUpdate = (id) => {
    getProductForUpdate(id);
    document.getElementById("my_modal_4").showModal();
  };

  const handleUpdateChange = (e) => {
    const { name, value } = e.target;
    setUpdateValues({
      ...updateValues,
      [name]: value,
    });
  };

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:3000/api/product/update/${updateValues._id}`,
        updateValues,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      console.log(response.data.message);
      document.getElementById("my_modal_4").close();
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleDelete = async (id) =>{
    try {
      const response = await axios.delete(
        `http://localhost:3000/api/product/delete/${id}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      console.log(response.data.message);
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <div className="absolute top-10 left-72 p-4 w-[77%] h-[80%]">
      <div className="overflow-auto h-full">
        <table className="min-w-full text-black border-collapse block md:table">
          <thead className="block md:table-header-group">
            <tr className="border border-gray-200 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto md:relative">
              {["Category", "Color", "Current Price", "Deleted Price", "Title", "Description", "Images", "Quantity", "Sizes", "Action"]?.map((header, index) => (
                <th key={index} className="bg-gray-600 p-2 text-white font-bold md:border md:border-gray-300 text-left block md:table-cell">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="block md:table-row-group">
            {products?.map((product, index) => (
              <tr
                key={index}
                className="bg-gray-300 border border-gray-200 md:border-none block md:table-row"
              >
                <td className="p-2 md:border md:border-gray-300 text-left block md:table-cell">
                  {product?.category}
                </td>
                <td className="p-2 md:border md:border-gray-300 text-left block md:table-cell">
                  {product?.color}
                </td>
                <td className="p-2 md:border md:border-gray-300 text-left block md:table-cell">
                  {product?.currentPrice}
                </td>
                <td className="p-2 md:border md:border-gray-300 text-left block md:table-cell">
                  {product?.deletedPrice}
                </td>
                <td className="p-2 md:border md:border-gray-300 text-left block md:table-cell">
                  {product?.title}
                </td>
                <td className="p-2 md:border md:border-gray-300 text-left block md:table-cell">
                  {product?.desc}
                </td>
                <td className="p-2 md:border md:border-gray-300 text-left block md:table-cell">
                  <div className="flex flex-wrap">
                    {product?.imgSrc?.map((img, i) => (
                      <img
                        key={i}
                        src={img}
                        alt="product"
                        className="w-16 h-16 object-cover m-1"
                      />
                    ))}
                  </div>
                </td>
                <td className="p-2 md:border md:border-gray-300 text-left block md:table-cell">
                  {product?.qty}
                </td>
                <td className="p-2 md:border md:border-gray-300 text-left block md:table-cell">
                  <div className="flex flex-wrap">
                    {product?.size?.map((size, i) => (
                      <span
                        key={i}
                        className="bg-gray-400 rounded-full px-2 py-1 m-1 text-xs"
                      >
                        {size}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="flex gap-2 text-lg ">
                  <button onClick={() => handleUpdate(product._id)}>
                    <GrUpdate />
                  </button>
                  <button onClick={()=>handleDelete(product._id)}>
                    <MdDeleteOutline />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button
        className="btn"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        Open Modal
      </button>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              type="button"
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
            </button>
          </form>
          <form onSubmit={handleSubmit} className="flex gap-2 mt-4 flex-col">
            <input
              type="text"
              name="category"
              className="p-2 rounded-md"
              placeholder="Enter Category"
              value={formValues.category}
              onChange={handleChange}
            />
            <input
              type="text"
              name="color"
              className="p-2 rounded-md"
              placeholder="Enter Color"
              value={formValues.color}
              onChange={handleChange}
            />
            <input
              type="number"
              name="currentPrice"
              className="p-2 rounded-md"
              placeholder="Enter Current Price"
              value={formValues.currentPrice}
              onChange={handleChange}
            />
            <input
              type="number"
              name="deletedPrice"
              className="p-2 rounded-md"
              placeholder="Enter Deleted Price"
              value={formValues.deletedPrice}
              onChange={handleChange}
            />
            <input
              type="text"
              name="title"
              className="p-2 rounded-md"
              placeholder="Enter Title"
              value={formValues.title}
              onChange={handleChange}
            />
            <input
              type="text"
              name="desc"
              className="p-2 rounded-md"
              placeholder="Enter Description"
              value={formValues.desc}
              onChange={handleChange}
            />
            {formValues?.imgSrc?.map((img, index) => (
              <input
                key={index}
                type="text"
                name={`imgSrc-${index}`}
                className="p-2 rounded-md"
                placeholder={`Image ${index + 1}`}
                value={img}
                onChange={(e) => handleArrayChange(e, index, "imgSrc")}
              />
            ))}
            <input
              type="number"
              name="qty"
              className="p-2 rounded-md"
              placeholder="Qty"
              value={formValues.qty}
              onChange={handleChange}
            />
            {formValues?.size?.map((size, index) => (
              <input
                key={index}
                type="number"
                name={`size-${index}`}
                className="p-2 rounded-md"
                placeholder={`Size ${index + 1}`}
                value={size}
                onChange={(e) => handleArrayChange(e, index, "size")}
              />
            ))}
            <button
              type="submit"
              className="bg-[#ce8080] rounded-md text-[17px] text-black"
            >
              Insert
            </button>
          </form>
        </div>
      </dialog>

      {/* Update form */}
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              type="button"
              onClick={() => document.getElementById("my_modal_4").close()}
            >
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Update Form</h3>
          {updateValues && (
            <form onSubmit={handleUpdateSubmit} className="flex gap-2 mt-4 flex-col">
              <input
                type="text"
                name="category"
                className="p-2 rounded-md"
                placeholder="Enter Category"
                value={updateValues.category}
                onChange={handleUpdateChange}
              />
              <input
                type="text"
                name="color"
                className="p-2 rounded-md"
                placeholder="Enter Color"
                value={updateValues.color}
                onChange={handleUpdateChange}
              />
              <input
                type="number"
                name="currentPrice"
                className="p-2 rounded-md"
                placeholder="Enter Current Price"
                value={updateValues.currentPrice}
                onChange={handleUpdateChange}
              />
              <input
                type="number"
                name="deletedPrice"
                className="p-2 rounded-md"
                placeholder="Enter Deleted Price"
                value={updateValues.deletedPrice}
                onChange={handleUpdateChange}
              />
              <input
                type="text"
                name="title"
                className="p-2 rounded-md"
                placeholder="Enter Title"
                value={updateValues.title}
                onChange={handleUpdateChange}
              />
              <input
                type="text"
                name="desc"
                className="p-2 rounded-md"
                placeholder="Enter Description"
                value={updateValues.desc}
                onChange={handleUpdateChange}
              />
              {updateValues?.imgSrc?.map((img, index) => (
                <input
                  key={index}
                  type="text"
                  name={`imgSrc-${index}`}
                  className="p-2 rounded-md"
                  placeholder={`Image ${index + 1}`}
                  value={img}
                  onChange={(e) => handleArrayChange(e, index, "imgSrc")}
                />
              ))}
              <input
                type="number"
                name="qty"
                className="p-2 rounded-md"
                placeholder="Qty"
                value={updateValues.qty}
                onChange={handleUpdateChange}
              />
              {updateValues?.size?.map((size, index) => (
                <input
                  key={index}
                  type="number"
                  name={`size-${index}`}
                  className="p-2 rounded-md"
                  placeholder={`Size ${index + 1}`}
                  value={size}
                  onChange={(e) => handleArrayChange(e, index, "size")}
                />
              ))}
              <button
                type="submit"
                className="bg-[#ce8080] rounded-md text-[17px] text-black"
              >
                Update
              </button>
            </form>
          )}
        </div>
      </dialog>
    </div>
  );
};

export default AdminProducts;
