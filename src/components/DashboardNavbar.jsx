import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaPlusCircle, FaBell, FaComment } from "react-icons/fa";

const DashboardNavbar = ({ user, handleLogout }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const closeDropdown = () => setDropdownOpen(false);

  return (
    <nav className="bg-white shadow-md border-b border-gray-200">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto px-4 py-4">
        {/* Logo Section */}
        <div className="flex items-center space-x-3">
          <img
            src="https://via.placeholder.com/40"
            className="h-10"
            alt="Logo"
          />
          <span className="text-xl font-bold text-gray-800">HQ GLOBAL NETWORK</span>
        </div>

        {/* Search & Icons */}
        <div className="flex items-center space-x-6">
          <button className="text-blue-500 hover:text-blue-700">
            <FaSearch size={20} />
          </button>
          <button className="text-blue-500 hover:text-blue-700">
            <FaPlusCircle size={20} />
          </button>
          <button className="text-blue-500 hover:text-blue-700">
            <FaBell size={20} />
          </button>
          <button className="text-blue-500 hover:text-blue-700">
            <FaComment size={20} />
          </button>

          {/* User Avatar Dropdown */}
          <div className="relative">
            <button
              type="button"
              onClick={toggleDropdown}
              className="flex items-center justify-center text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 w-10 h-10"
            >
              {user.photo ? (
                <img
                  className="w-full h-full rounded-full"
                  src={user.photo}
                  alt="User"
                />
              ) : (
                <span className="text-white font-bold">
                  {user.first_name?.[0].toUpperCase()}
                </span>
              )}
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                <div className="p-4 border-b">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-lg">
                      {user?.first_name[0].toUpperCase()}
                    </div>
                    <div className="ml-3">
                      <p className="font-medium text-gray-800">
                        {user?.first_name} {user?.last_name}
                      </p>
                      <Link
                        to="/dashboard/profile"
                        className="text-sm text-blue-600 hover:underline"
                        onClick={closeDropdown}
                      >
                        My profile
                      </Link>
                    </div>
                  </div>
                </div>
                <ul className="py-2">
                  <li>
                    <Link
                      to="/dashboard/newsfeed"
                      className="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-gray-800"
                      onClick={closeDropdown}
                    >
                      <i className="fas fa-home mr-2"></i> Newsfeed
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/dashboard/groups"
                      className="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-gray-800"
                      onClick={closeDropdown}
                    >
                      <i className="fas fa-users mr-2"></i> Groups
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/dashboard/events"
                      className="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-gray-800"
                      onClick={closeDropdown}
                    >
                      <i className="fas fa-calendar mr-2"></i> Events
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/dashboard/members"
                      className="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-gray-800"
                      onClick={closeDropdown}
                    >
                      <i className="fas fa-users mr-2"></i> Members
                    </Link>
                  </li>
                  <li>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-gray-800"
                    >
                      <i className="fas fa-sign-out-alt mr-2"></i> Logout
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Dashboard Links */}
      <div className="bg-gray-50 p-4">
        <div className="flex flex-col md:flex-row md:space-x-8 space-y-4 md:space-y-0">
          <Link
            to="/dashboard/newsfeed"
            className="text-gray-700 hover:text-blue-600"
          >
            Newsfeed
          </Link>
          <Link
            to="/dashboard/profile"
            className="text-gray-700 hover:text-blue-600"
          >
            Profile
          </Link>
          <Link
            to="/dashboard/groups"
            className="text-gray-700 hover:text-blue-600"
          >
            Groups
          </Link>
          <Link
            to="/dashboard/events"
            className="text-gray-700 hover:text-blue-600"
          >
            Events
          </Link>
          <Link
            to="/dashboard/members"
            className="text-gray-700 hover:text-blue-600"
          >
            Members
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default DashboardNavbar;
