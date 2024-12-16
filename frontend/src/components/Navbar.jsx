// import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [propertyType, setPropertyType] = useState("Hotels");

  const handleChange = (e) => {
    setPropertyType(e.target.value);
  };

  return (
    <nav style={styles.navbar}>
      <h1 style={styles.title}>World of {propertyType}</h1>
      <ul style={styles.navLinks}>
        <li>
          <Link to="/" style={styles.link}>
            Home
          </Link>
        </li>
        <li>
          <Link to={`/${propertyType.toLowerCase()}`} style={styles.link}>
            {propertyType} List
          </Link>
        </li>
        <li>
          <select
            value={propertyType}
            onChange={handleChange}
            style={styles.dropdown}
          >
            <option value="Hotels">Hotels</option>
            <option value="Hostels">Hostels</option>
          </select>
        </li>
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#007bff",
    color: "#fff",
    padding: "10px 20px",
  },
  title: {
    margin: 0,
  },
  navLinks: {
    display: "flex",
    listStyle: "none",
    gap: "20px",
    margin: 0,
    padding: 0,
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "16px",
  },
  dropdown: {
    padding: "5px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
};

export default Navbar;
