import React, { useState } from "react";
import { createHostel } from "../services/api";

const AddHostel = () => {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    price: "",
    availableRooms: "",
    facilities: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const facilitiesArray = formData.facilities
        .split(",")
        .map((item) => item.trim());
      await createHostel({ ...formData, facilities: facilitiesArray });
      alert("Hostel added successfully!");
    } catch (error) {
      console.error("Error adding hostel:", error.message);
    }
  };

  return (
    <div>
      <h2>Add New Hostel</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Name"
          onChange={handleChange}
          required
        />
        <input
          name="location"
          placeholder="Location"
          onChange={handleChange}
          required
        />
        <input
          name="price"
          placeholder="Price"
          type="number"
          onChange={handleChange}
          required
        />
        <input
          name="availableRooms"
          placeholder="Rooms"
          type="number"
          onChange={handleChange}
          required
        />
        <input
          name="facilities"
          placeholder="Facilities (comma-separated)"
          onChange={handleChange}
          required
        />
        <button type="submit">Add Hostel</button>
      </form>
    </div>
  );
};

export default AddHostel;
