import React from "react";
import { Link } from "react-router-dom";

const HostelCard = ({ hostel }) => {
  return (
    <div className="hostel-card" style={styles.card}>
      <h3 style={styles.title}>{hostel.name}</h3>
      <p style={styles.text}>
        <strong>Location:</strong> {hostel.location}
      </p>
      <p style={styles.text}>
        <strong>Price:</strong> ${hostel.price}
      </p>
      <p style={styles.text}>
        <strong>Rating:</strong> {hostel.rating || "N/A"}
      </p>
      <Link to={`/hostels/${hostel._id}`} style={styles.link}>
        <button style={styles.button}>View Details</button>
      </Link>
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "16px",
    margin: "16px 0",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "left",
  },
  title: {
    margin: "0 0 10px",
    color: "#333",
  },
  text: {
    margin: "5px 0",
    color: "#555",
  },
  link: {
    textDecoration: "none",
  },
  button: {
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    padding: "8px 12px",
    cursor: "pointer",
  },
};

export default HostelCard;
