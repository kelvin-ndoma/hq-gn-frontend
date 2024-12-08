// src/components/DashboardNavbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import UserProfileDropdown from './UserProfileDropdown';

const DashboardNavbar = ({ user }) => {
  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <div className="text-lg font-bold">Dashboard</div>
      <div className="flex items-center space-x-6">
        <Link to="/newsfeed">Newsfeed</Link>
        <Link to="/events">Events</Link>
        <Link to="/groups">Groups</Link>
        <Link to="/admin">Admin</Link>
        <UserProfileDropdown user={user} />
      </div>
    </nav>
  );
};

export default DashboardNavbar;
