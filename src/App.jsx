import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Newsfeed from "./pages/Newsfeed";
import Profile from "./pages/Profile";
import Groups from "./pages/Groups";
import Events from "./pages/Events";
import Members from "./pages/Members";

const App = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Fetch user status and data when the app loads
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch("http://localhost:3000/logged_in", {
          method: "GET",
          credentials: "include", // Allow sending cookies with the request
        });
        if (response.ok) {
          const data = await response.json();
          if (data.logged_in) {
            setUser(data.user);
          } else {
            setUser(null);
          }
        } else {
          setUser(null);
        }
      } catch (error) {
        console.error("Error fetching user:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  // Handle user logout
  const handleLogout = async () => {
    try {
      const response = await fetch("http://localhost:3000/logout", {
        method: "DELETE",
        credentials: "include", // Allow sending cookies with the request
      });
      if (response.ok) {
        setUser(null); // Clear user data on logout
        navigate("/login"); // Redirect to login page
      }
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  if (loading) return <div>Loading...</div>; // Show loading state while fetching user

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login onLogin={setUser} />} />
      <Route path="/signup" element={<Signup />} />
      <Route
        path="/dashboard"
        element={
          user ? (
            <Dashboard user={user} handleLogout={handleLogout} />
          ) : (
            <Login onLogin={setUser} />
          )
        }
      >
        <Route path="newsfeed" element={<Newsfeed />} />
        <Route path="profile" element={<Profile user={user} />} />
        <Route path="groups" element={<Groups />} />
        <Route path="events" element={<Events />} />
        <Route path="members" element={<Members />} />
      </Route>
    </Routes>
  );
};

export default App;
