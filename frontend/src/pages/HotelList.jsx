import React, { useEffect, useState } from "react";
import { fetchHotels } from "../services/api"; // API function to fetch hotels
import HotelCard from "../components/HotelCard"; // Reusable HotelCard component

const HotelList = () => {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getHotels = async () => {
      try {
        const response = await fetchHotels(); // Fetch list of hotels
        setHotels(response.data);
      } catch (err) {
        console.error("Error fetching hotels:", err);
        setError("Failed to load hotels. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    getHotels();
  }, []);

  if (loading) return <h2>Loading hotels...</h2>;
  if (error) return <h2>{error}</h2>;

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Available Hotels</h1>
      <div style={styles.grid}>
        {hotels.map((hotel) => (
          <HotelCard key={hotel._id} hotel={hotel} />
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
  },
};

export default HotelList;
