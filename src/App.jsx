import React, { useState, useEffect } from "react";
import axios from "./utils/api";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";

const App = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(() => {
    try {
      const storedUser = localStorage.getItem("user");
      return storedUser ? JSON.parse(storedUser) : null;
    } catch (e) {
      return null; // In case of error in parsing
    }
  });

  const handleLogin = (userData) => {
    setUser(userData); // Set user data after login
    localStorage.setItem("user", JSON.stringify(userData)); // Store user data in localStorage
    navigate("/dashboard"); // Redirect to dashboard
  };

  const handleLogout = async () => {
    try {
      await axios.delete("/logout");
      setUser(null);
      localStorage.removeItem("user"); // Remove user data from localStorage
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login onLogin={handleLogin} />} />
      <Route path="/signup" element={<Signup />} />
      <Route
        path="/dashboard/*" // Use /* for nested routes
        element={user ? (
          <Dashboard user={user} onLogout={handleLogout} />
        ) : (
          <Navigate to="/login" /> // Redirect to login if not logged in
        )}
      />
    </Routes>
  );
};

export default App;
