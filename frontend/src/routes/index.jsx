// import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import HostelList from "../pages/HostelList";
import AddHostel from "../pages/AddHostel";
import UserDashboard from "../pages/UserDashboard";
import ProtectedRoute from "../components/ProtectedRoute";
import HotelDetails from "../pages/HotelDetails";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/hostels" element={<HostelList />} />
    <Route
      path="/dashboard"
      element={
        <ProtectedRoute>
          <UserDashboard />
        </ProtectedRoute>
      }
    />
    <Route
      path="/admin/hostels/add"
      element={
        <ProtectedRoute adminOnly>
          <AddHostel />
        </ProtectedRoute>
      }
    />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/hotels" element={<HotelList />} />
      <Route path="/hotels/:id" element={<HotelDetails />} /> {/* New Route */}
      {/* Other routes */}
    </Routes>
  </Routes>
);

export default AppRoutes;
