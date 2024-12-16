import React, { useEffect, useState } from "react";
import { fetchHostels } from "../services/api";
import SearchFilter from "../components/SearchFilter";

const HostelList = () => {
  const [hostels, setHostels] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadHostels = async (query = {}) => {
    setLoading(true);
    try {
      const { data } = await fetchHostels(query);
      setHostels(data);
    } catch (error) {
      console.error("Error fetching hostels:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadHostels(); // Load hostels initially
  }, []);

  return (
    <div>
      <h2>Hostels</h2>
      <SearchFilter onSearch={loadHostels} />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {hostels.map((hostel) => (
            <li key={hostel._id}>
              {hostel.name} - {hostel.location}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default HostelList;
