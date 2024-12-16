// src/components/ProtectedRoute.jsx
// import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, adminOnly = false }) => {
  const user = JSON.parse(localStorage.getItem("user")); // Get user from localStorage
  const token = localStorage.getItem("token"); // Check if token exists

  // Redirect to login if not logged in
  if (!token || !user) {
    return <Navigate to="/login" replace />;
  }

  // Redirect to home if route is admin-only but user is not an admin
  if (adminOnly && user.role !== "admin") {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
