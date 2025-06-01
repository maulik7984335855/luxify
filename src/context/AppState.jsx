import React, { useEffect, useState } from "react";
import AppContext from "./AppContext";
import axios from "axios";
import toast from "react-hot-toast";

const AppState = (props) => {
  const url = "https://luxify-backend-5rrq.onrender.com/api";

  const [products, setProducts] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [cart, setCart] = useState([]);
  const [reload, setReload] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("apitoken") || "");
  const [orders, setOrders] = useState([]);
  let [logined, setLogined] = useState(localStorage.getItem("userId") || "");
  const [GetContact, setGetContact] = useState([]);
  const [GetOrder, setGetOrder] = useState([]);
  const [GetUsers, setGetUsers] = useState([]);
  const [getProductUpdate,setGetProductUpdate] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const api = await axios.get(`${url}/product/products`, {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        });
        setProducts(api.data.product);
        setFilteredData(api.data.product);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
    fetchCart();
    getAllOrders();
    getContact();
    getAllOrdersForAdmin();
    getAllUserForAdmin();
    
  }, [reload, token]);

  const login = async (name, email, photo) => {
    try {
      const api = await axios.post(
        `${url}/user/login`,
        { name, email, photo },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      toast.success(api.data.message);

      const token = api.data.token;
      localStorage.setItem("apitoken", token);
      setToken(token);
      localStorage.setItem("userId", api.data.user._id);
      setLogined(api.data.user._id);
      return api.data;
    } catch (error) {
      console.log(error);
    }
  };

  const logoutUser = () => {
    localStorage.removeItem("apitoken");
    localStorage.removeItem("userId");
    setToken("");
    setLogined("");
    setCart([]);
    setOrders([]);
    toast.success("Logout SuccessFul");
  };

  const addToCart = async (productId, imgSrc, currentPrice, qty, size) => {
    try {
      const api = await axios.post(
        `${url}/cart/add`,
        { productId, imgSrc, currentPrice, qty, size },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      toast.success(api.data.message);
      setReload(!reload);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCart = async () => {
    try {
      const api = await axios.get(`${url}/cart/getusercart`, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      setCart(api.data.cart);
    } catch (error) {
      console.error("Error fetching cart:", error);
    }
  };

  const decreaseQty = async (productId, qty) => {
    try {
      const api = await axios.post(
        `${url}/cart/--qty`,
        { productId, qty },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      toast.success(api.data.message);
      setReload(!reload);
    } catch (error) {
      console.log(error);
    }
  };

  const increaseQty = async (productId, qty) => {
    try {
      const api = await axios.post(
        `${url}/cart/increase-qty`,
        { productId, qty },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      toast.success(api.data.message);
      setReload(!reload);
    } catch (error) {
      console.log(error);
    }
  };

  const removeItem = async (productId) => {
    try {
      const api = await axios.delete(`${url}/cart/remove/${productId}`, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      toast.success(api.data.message);
      setReload(!reload);
    } catch (error) {
      console.log(error);
    }
  };

  const clearCart = async () => {
    try {
      const api = await axios.delete(`${url}/cart/clear`, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      toast.success(api.data.message);
      setCart([]);
    } catch (error) {
      console.error("Error clearing cart:", error);
    }
  };

  const allOrders = async (
    village,
    city,
    state,
    country,
    pincode,
    cartItems,
    status
  ) => {
    try {
      await axios.post(
        `${url}/orders/addorder`,
        { village, city, state, country, pincode, cartItems, status },
        {
          headers: {
            "Content-Type": "application/json",
            Auth: token,
          },
          withCredentials: true,
        }
      );
      await clearCart(); // Clear the cart after a successful order
      setReload(!reload);
    } catch (error) {
      console.log(error);
    }
  };

  //get all orders of logined user
  const getAllOrders = async () => {
    try {
      const api = await axios.get(`${url}/orders/userorder/${logined}`, {
        headers: {
          "Content-Type": "application/json",
          Auth: token,
        },
        withCredentials: true,
      });
      setReload(!reload);
      setOrders(api.data); // Store orders in state
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (token) {
      getAllOrders();
    }
  }, [token]);

  //cancel order
  const cancelOrder = async (id) => {
    try {
      const api = await axios.delete(
        `https://luxify-backend-5rrq.onrender.com/api/orders/cancelorder/${id}`,
        {
          headers: {
            "Content-Type": "appication/json",
            Auth: token,
          },
          withCredentials: true,
        }
      );
      toast.success(api.data.message);
      setReload(!reload);
      console.log(api.data.message);
    } catch (error) {
      console.log(error.message);
    }
  };

  //contact
  const contact = async (name, email, message) => {
    try {
      const api = await axios.post(
        `${url}/contact/send`,
        {
          name,
          email,
          message,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      console.log(api.data.message);
      toast.success(api.data.message);
    } catch (error) {
      console.log(error);
    }
  };

  //get all contact
  const getContact = async () => {
    try {
      const api = await axios.get(`https://luxify-backend-5rrq.onrender.com/api/contact/get`, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      // console.log("contact data: ",api.data.contact);
      setGetContact(api.data.contact);
    } catch (error) {
      console.log(error);
    }
  };

  //get all order for admin
  const getAllOrdersForAdmin = async () => {
    try {
      const api = await axios.get(
        "https://luxify-backend-5rrq.onrender.com/api/orders/getAllOrdersForAdmin",
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      setGetOrder(api.data.order);
      // console.log("get all orders for admin ",api.data.order);
    } catch (error) {
      console.log(error);
    }
  };

  //fetch all user for admin
  const getAllUserForAdmin = async () => {
    try {
      const api = await axios.get(
        "https://luxify-backend-5rrq.onrender.com/api/user/getAllUsers",
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      // console.log("get all users: ",api.data.user);
      setGetUsers(api.data.user);
    } catch (error) {
      console.log(error.message);
    }
  };

  // add product by admin
  // const addProductByAdmin = async (
  //   imgSrc,
  //   title,
  //   color,
  //   category,
  //   desc,
  //   deletedPrice,
  //   currentPrice,
  //   qty,
  //   size
  // ) => {
  //   try {
  //     const api = await axios.post(
  //       "http://localhost:3000/api/product/add",
  //       {
  //         imgSrc,
  //         title,
  //         color,
  //         category,
  //         desc,
  //         deletedPrice,
  //         currentPrice,
  //         qty,
  //         size,
  //       },
  //       {
  //         headers: {
  //           "Content-Type": "appication/json",
  //         },
  //         withCredentials: true,
  //       }
  //     );

  //     console.log(api.data.message);
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };
  const addProductByAdmin = async (
    imgSrc,
    title,
    color,
    category,
    desc,
    deletedPrice,
    currentPrice,
    qty,
    size
) => {
    try {
        const api = await axios.post(
            "https://luxify-backend-5rrq.onrender.com/api/product/add",
            {
                imgSrc,
                title,
                color,
                category,
                desc,
                deletedPrice,
                currentPrice,
                qty,
                size,
            },
            {
                headers: {
                    "Content-Type": "application/json",
                },
                withCredentials: true,
            }
        );

        console.log(api.data.message);
    } catch (error) {
        console.log(error.message);
    }
};

// update product 
  const getProductForUpdate = async(id) =>{
    try {
      const api = await axios.get(`https://luxify-backend-5rrq.onrender.com/api/product/${id}`,{
          headers:{
            "Content-Type":"application/json"
          },
          withCredentials:true
      })
      console.log("data for update: ",api.data.product);
      setGetProductUpdate(api.data.product);
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <AppContext.Provider
      value={{
        products,
        filteredData,
        setFilteredData,
        cart,
        addToCart,
        decreaseQty,
        increaseQty,
        removeItem,
        login,
        allOrders,
        orders,
        logoutUser,
        cancelOrder,
        contact,
        GetContact,
        GetOrder,
        GetUsers,
        addProductByAdmin,
        getProductUpdate,
        getProductForUpdate
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
