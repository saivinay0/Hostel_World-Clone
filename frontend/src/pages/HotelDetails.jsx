import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchHotelById } from "../services/api"; // Import API function

const HotelDetails = () => {
  const { id } = useParams(); // Get hotelId from URL
  const [hotel, setHotel] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getHotelDetails = async () => {
      try {
        const response = await fetchHotelById(id); // API call to fetch hotel details
        setHotel(response.data);
      } catch (error) {
        console.error("Error fetching hotel details:", error);
      } finally {
        setLoading(false);
      }
    };
    getHotelDetails();
  }, [id]);

  if (loading) return <h2>Loading...</h2>;

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>{hotel.name}</h1>
      <p>
        <strong>Location:</strong> {hotel.location}
      </p>
      <p>
        <strong>Description:</strong> {hotel.description}
      </p>
      <p>
        <strong>Price:</strong> ${hotel.price} / night
      </p>
      <p>
        <strong>Rating:</strong> {hotel.rating} / 5
      </p>
      <p>
        <strong>Amenities:</strong> {hotel.amenities?.join(", ") || "N/A"}
      </p>
      <button style={styles.button}>Proceed to Checkout</button>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    maxWidth: "600px",
    margin: "20px auto",
    border: "1px solid #ccc",
    borderRadius: "8px",
    boxShadow: "0px 4px 8px rgba(0,0,0,0.2)",
  },
  title: {
    fontSize: "2rem",
    marginBottom: "10px",
  },
  button: {
    marginTop: "10px",
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "16px",
  },
};

export default HotelDetails;
