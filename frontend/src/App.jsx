// import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes"; // Import routes configuration
import Navbar from "./components/Navbar"; // Import Navbar component

const App = () => (
  <Router>
    <Navbar /> {/* Navbar component */}
    <AppRoutes /> {/* Render the defined routes */}
  </Router>
);

export default App;
