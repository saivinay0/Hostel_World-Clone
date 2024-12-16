import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api", // Backend API base URL
});

// Add JWT token to requests
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) req.headers.Authorization = `Bearer ${token}`;
  return req;
});

// Authentication APIs
export const registerUser = (formData) => API.post("/auth/register", formData);
export const loginUser = (formData) => API.post("/auth/login", formData);
export const getUserProfile = () => API.get("/auth/profile");

// Hostel APIs
export const fetchHostels = (query) => API.get(`/hostels`, { params: query });

export const fetchHostelById = (id) => API.get(`/hostels/${id}`);
export const createHostel = (data) => API.post("/hostels", data);
export const updateHostel = (id, data) => API.put(`/hostels/${id}`, data);
export const deleteHostel = (id) => API.delete(`/hostels/${id}`);

export const fetchUserBookings = () => API.get("/bookings/user"); // Fetch logged-in user's bookings
export const updateUserProfile = (formData) =>
  API.put("/auth/profile", formData); // Update user profile
export const createBooking = (hostelId, bookingData) =>
  API.post(`/bookings`, { hostelId, ...bookingData });
