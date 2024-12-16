import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchHostelById, createBooking } from "../services/api";

const HostelDetails = () => {
  const { id } = useParams(); // Get hostel ID from URL
  const navigate = useNavigate();
  const [hostel, setHostel] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadHostelDetails = async () => {
      try {
        const { data } = await fetchHostelById(id);
        setHostel(data);
      } catch (error) {
        console.error("Error fetching hostel details:", error);
      } finally {
        setLoading(false);
      }
    };

    loadHostelDetails();
  }, [id]);

  const handleCheckout = async () => {
    try {
      await createBooking(id, { date: new Date() }); // Example booking data
      alert("Booking successful!");
      navigate("/dashboard");
    } catch (error) {
      console.error("Error creating booking:", error);
      alert("Booking failed!");
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h2>{hostel.name}</h2>
      <p>Location: {hostel.location}</p>
      <p>Description: {hostel.description}</p>
      <p>Price: ${hostel.price}</p>
      <button onClick={handleCheckout}>Book Now</button>
    </div>
  );
};

export default HostelDetails;
