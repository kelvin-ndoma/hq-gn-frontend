// src/components/UserProfileDropdown.jsx
import React, { useState } from 'react';

const UserProfileDropdown = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    // Add your logout logic here
    console.log('Logging out...');
  };

  return (
    <div className="relative">
      <button onClick={() => setIsOpen(!isOpen)} className="flex items-center space-x-2">
        <div className="rounded-full bg-gray-600 text-white w-8 h-8 flex items-center justify-center">
          {user.photo ? (
            <img src={user.photo} alt={user.first_name} className="rounded-full w-8 h-8" />
          ) : (
            <span>{user.first_name.charAt(0)}</span>
          )}
        </div>
        <span>{user.first_name}</span>
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 bg-white text-black shadow-md rounded-lg w-48">
          <ul className="py-2">
            <li><Link to="/profile" className="block px-4 py-2">Profile</Link></li>
            <li><button onClick={handleLogout} className="block px-4 py-2 w-full text-left">Logout</button></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserProfileDropdown;
