import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import axios from "axios";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Newsfeed from "./pages/Newsfeed";  // Newsfeed Component
import Members from "./pages/Members";
import Events from "./pages/Events";
import Groups from "./pages/Groups";
import Settings from "./pages/Settings";

function App() {
  const [user, setUser] = useState(() => {
    const savedUser = sessionStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      fetchUser();
    } else {
      setLoading(false);
    }
  }, [user]);

  const fetchUser = async () => {
    try {
      const response = await axios.get("http://localhost:3000/logged_in", {
        headers: {
          Accept: "application/json",
        },
        withCredentials: true,
      });

      if (response.data.logged_in) {
        setUser(response.data.user);
        sessionStorage.setItem("user", JSON.stringify(response.data.user));
      } else {
        setUser(null);
        sessionStorage.removeItem("user");
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
    sessionStorage.setItem("user", JSON.stringify(userData));
  };

  const handleLogout = async () => {
    try {
      await axios.delete("http://localhost:3000/logout", { withCredentials: true });
      setUser(null);
      sessionStorage.removeItem("user");
    } catch (error) {
      console.error("Error occurred during logout:", error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login onLogin={handleLogin} />} />
      <Route path="/signup" element={<Signup />} />

      {user && (
        <Route path="/dashboard" element={<Dashboard user={user} setUser={setUser} onLogout={handleLogout} />}>
          {/* Nested routes */}
          <Route path="profile" element={<Profile />} />
          <Route path="newsfeed" element={<Newsfeed user={user} />} />  {/* Newsfeed Component */}
          <Route path="members" element={<Members />} />
          <Route path="events" element={<Events />} />
          <Route path="groups" element={<Groups />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      )}

      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}

export default App;
