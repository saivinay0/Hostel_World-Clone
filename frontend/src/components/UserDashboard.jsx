import { useState, useEffect } from "react";
import axios from "axios";

const UserDashboard = () => {
  const [profile, setProfile] = useState({});
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("token");
      const config = { headers: { Authorization: token } };
      const res = await axios.get("/api/user/profile", config);
      setProfile(res.data);
    };

    const fetchBookings = async () => {
      const token = localStorage.getItem("token");
      const config = { headers: { Authorization: token } };
      const res = await axios.get("/api/user/bookings", config);
      setBookings(res.data);
    };

    fetchProfile();
    fetchBookings();
  }, []);

  return (
    <div>
      <h2>User Dashboard</h2>
      <div>
        <h3>Profile</h3>
        <p>Name: {profile.name}</p>
        <p>Email: {profile.email}</p>
        <p>Role: {profile.role}</p>
      </div>
      <div>
        <h3>My Bookings</h3>
        {bookings.map((booking) => (
          <div key={booking._id}>
            <p>Hostel: {booking.hostel.name}</p>
            <p>Location: {booking.hostel.location}</p>
            <p>
              Check-in: {new Date(booking.checkInDate).toLocaleDateString()}
            </p>
            <p>
              Check-out: {new Date(booking.checkOutDate).toLocaleDateString()}
            </p>
            <p>Total Price: ${booking.totalPrice}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserDashboard;
