import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import DashboardNavbar from "../components/DashboardNavbar";
import Newsfeed from "./Newsfeed";
import Profile from "./Profile";
import Groups from "./Groups";
import Events from "./Events";
import Members from "./Members";

const Dashboard = ({ user, handleLogout }) => {
  return (
    <div className="flex flex-col">
      <DashboardNavbar user={user} handleLogout={handleLogout} />
      
      {/* Content for the selected page */}
      <div className="p-4">
        <Routes>
          <Route path="newsfeed" element={<Newsfeed />} />
          <Route
            path="profile"
            element={<Profile user={user} onLogout={handleLogout} />} // Pass handleLogout here
          />
          <Route path="groups" element={<Groups />} />
          <Route path="events" element={<Events />} />
          <Route path="members" element={<Members />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
