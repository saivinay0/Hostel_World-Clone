import React, { useState, useEffect } from "react";
import UserContext from "./UserContext";
import { getUserProfile } from "../services/api"; // API to fetch user data

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Holds user data
  const [loading, setLoading] = useState(true); // Loading state

  // Fetch user profile when component mounts
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await getUserProfile(); // Fetch user from backend
        setUser(response.data);
      } catch (error) {
        console.error("Failed to fetch user profile:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  // Logout Function
  const logoutUser = () => {
    localStorage.removeItem("token"); // Clear token
    setUser(null); // Reset user state
  };

  return (
    <UserContext.Provider value={{ user, setUser, logoutUser, loading }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
