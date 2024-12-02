import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import DashNav from "../components/DashNav";
import Greeting from "../components/Greeting";
import Members from "./Members";
import Newsfeed from "./Newsfeed";
import Events from "./Events";
import Groups from "./Groups";
import UserProfile from "./UserProfile";

const Dashboard = ({ user, onLogout }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <DashNav user={user} onLogout={onLogout} />

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        {/* Greeting */}
        <Greeting user={user} />

        {/* Nested Routes for Dashboard Sections */}
        <Routes>
          <Route path="members" element={<Members user={user} />} />
          <Route path="newsfeed" element={<Newsfeed user={user} />} />
          <Route path="events" element={<Events user={user} />} />
          <Route path="groups" element={<Groups user={user} />} />
          {/* Default to Newsfeed */}
          <Route path="/" element={<Navigate to="newsfeed" />} />
          <Route path="profile" element={<UserProfile user={user} />} />
        </Routes>
      </main>
    </div>
  );
};

export default Dashboard;
