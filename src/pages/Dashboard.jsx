import React from 'react';
import DashboardNavbar from '../components/DashNav';
import { Outlet } from 'react-router-dom';  // Import Outlet to render nested routes

function Dashboard({ user, setUser, onLogout }) {
  return (
    <div>
      {/* Navbar */}
      <DashboardNavbar user={user} setUser={setUser} onLogout={onLogout} />

      {/* Render the content of the selected route here */}
      <div className="container mx-auto p-4">
        <h1 className="text-4xl mb-4">Welcome to your Dashboard, {user.first_name}!</h1>

        {/* Nested content from the selected route will be rendered here */}
        <Outlet />  {/* This renders Newsfeed, Members, etc., based on the route */}
      </div>
    </div>
  );
}

export default Dashboard;
