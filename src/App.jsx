// App.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Products from "./components/Products";
import Orders from "./components/Orders";
import ProductById from "./components/ProductById";
import ProductSearch from "./components/ProductSearch";
import Cart from "./components/Cart";
import Login from "./components/Login";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Checkout from "./components/Checkout";
import Payment from "./components/Payment";
import toast, { Toaster } from 'react-hot-toast';
import Admin from "./admin/Admin";
import AdminDashboard from "./admin/AdminDashboard";
import AdminUsers from "./admin/AdminUsers";
import AdminComments from "./admin/AdminComments";
import AdminOrders from "./admin/AdminOrders";
import AdminProducts from "./admin/AdminProducts";
import AdminProductUpdate from "./admin/AdminProductUpdate";


// MainLayout Component
const MainLayout = ({ children }) => (
  <>
    <NavBar />
    <Toaster />
    {children}
  </>
);

// AdminLayout Component
const AdminLayout = ({ children }) => (
  <>
  <Admin />
    {children}
  </>
);

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout><Home /></MainLayout>} />
          <Route path="/products/search" element={<MainLayout><ProductSearch /></MainLayout>} />
          <Route path="/about" element={<MainLayout><About /></MainLayout>} />
          <Route path="/orders" element={<MainLayout><ProtectedRoute><Orders /></ProtectedRoute></MainLayout>} />
          <Route path="/:id" element={<MainLayout><ProductById /></MainLayout>} />
          <Route path="/cart" element={<MainLayout><Cart /></MainLayout>} />
          <Route path="/login" element={<MainLayout><Login /></MainLayout>} />
          <Route path="/shipping" element={<MainLayout><ProtectedRoute><Checkout /></ProtectedRoute></MainLayout>} />
          <Route path="/payment" element={<MainLayout><Payment /></MainLayout>} />
          <Route path="/admin" element={<AdminLayout><AdminDashboard  /></AdminLayout>} />
          <Route path="/adminUsers" element={<AdminLayout><AdminUsers /></AdminLayout>} />
          <Route path="/adminComments" element={<AdminLayout><AdminComments /></AdminLayout>} />
          <Route path="/adminOrders" element={<AdminLayout><AdminOrders /></AdminLayout>} />
          <Route path="/adminProducts" element={<AdminLayout><AdminProducts /></AdminLayout>} />
          <Route path="/adminProductUpdate/:id" element={<AdminLayout><AdminProductUpdate /></AdminLayout>} />
          
          
          
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
