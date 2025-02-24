import React from "react";
import "./App.css";
import Login from "./pages/LoginPage";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Register from "./pages/RegisterPage";
import Users from "./pages/UsersPage";
import ProductsPage from './pages/ProductsPage';
import DashboardPage from './pages/DashboardPage';
import OrdersPage from "./pages/OrdersPage";
import Layout from "./components/Layout"
import { layer } from "@fortawesome/fontawesome-svg-core";

const ProtectedRoute = ({ element }) => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"))
  return currentUser ? element : <Navigate to="/login" />
}


//const originalPrompt = window.prompt;
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<h1>Not Found</h1>} />
        
        <Route path="/" element={<ProtectedRoute element={<Layout />} />}>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/users" element={<Users />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/orders" element={<OrdersPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
