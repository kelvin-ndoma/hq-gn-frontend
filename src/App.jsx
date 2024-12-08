import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";

import axios from "axios";

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      const response = await axios.get("http://localhost:3000/logged_in", {
        headers: {
          Accept: "application/json"
        },
        withCredentials: true
      });
      console.log('Response from /logged_in route:', response);
      if (response.data.logged_in) {
        setUser(response.data.user);
      } else {
        setUser(null);
      }
    } catch (error) {
      console.error("Error fetching user:", error);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = (userData) => {
    setUser(userData);
  };

  const handleLogout = async () => {
    try {
      const response = await axios.delete("http://localhost:3000/logout");
      if (response.status === 200) {
        setUser(null);
        // Redirect user to login page after logout
        window.location.href = "/login";
      } else {
        console.error("Logout failed:", response);
      }
    } catch (error) {
      console.error("Error occurred during logout:", error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Only render dashboard if user is logged in */}
        {user && (
          <Route path="/dashboard" element={<Dashboard user={user} onLogout={handleLogout} />} />
        )}
        {/* Route to Signup and Login pages */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        
        {/* Redirect to login if user is not logged in */}
        {!user && <Route path="*" element={<Navigate to="/login" replace />} />}
      </Routes>
    </>
  );
}

export default App;
