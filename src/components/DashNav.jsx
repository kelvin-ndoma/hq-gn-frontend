import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiSearch, FiBell, FiMessageSquare, FiMapPin, FiUser, FiSettings, FiFileText, FiCalendar, FiLogOut, FiMenu, FiX } from "react-icons/fi";

const DashNav = ({ user, onLogout }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // State for mobile menu
  const dropdownRef = useRef(null);
  const searchRef = useRef(null);

  const toggleDropdown = () => setShowDropdown(!showDropdown);
  const toggleSearch = () => setShowSearch(!showSearch);
  const toggleMenu = () => setMenuOpen(!menuOpen); // Toggle menu
  const closeMenu = () => setMenuOpen(false); // Close menu when a link is clicked

  // Close dropdown and search bar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setShowDropdown(false);
      }
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target)
      ) {
        setShowSearch(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <Link to="/" className="text-2xl font-bold text-blue-600">
            HQ Global Network
          </Link>
        </div>

        {/* Hamburger Menu for mobile */}
        <button
          onClick={toggleMenu}
          className="block lg:hidden text-blue-600 hover:text-blue-800 focus:outline-none"
        >
          {menuOpen ? <FiX size={30} /> : <FiMenu size={30} />} {/* Change icon */}
        </button>

        {/* Desktop Icons (hidden on small screens) */}
        <div className="hidden lg:flex items-center space-x-6">
          <div ref={searchRef} className="relative">
            <button onClick={toggleSearch} className="text-blue-600 hover:text-blue-800">
              <FiSearch size={24} />
            </button>
            {showSearch && (
              <div className="absolute right-0 mt-2 bg-white border rounded shadow-md p-3">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-64 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            )}
          </div>

          <button className="text-blue-600 hover:text-blue-800">
            <FiMapPin size={24} />
          </button>
          <button className="text-blue-600 hover:text-blue-800">
            <FiBell size={24} />
          </button>
          <button className="text-blue-600 hover:text-blue-800">
            <FiMessageSquare size={24} />
          </button>

          {/* Profile Dropdown */}
          <div ref={dropdownRef} className="relative">
            <button onClick={toggleDropdown} className="flex items-center focus:outline-none">
              <div className="w-8 h-8 rounded-full bg-gray-200 text-blue-600 flex items-center justify-center">
                {user.first_name.charAt(0)}
              </div>
            </button>
            <div
              className={`absolute right-0 mt-2 w-56 bg-white border rounded shadow-lg text-black transform transition-all duration-500 ease-in-out ${
                showDropdown ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-4 invisible"
              }`}
            >
              <div className="p-4 border-b">
                <p className="font-bold text-sm">
                  {user.first_name} {user.last_name}
                </p>
                <p className="text-gray-500 text-xs">
                  <Link to="profile" className="text-blue-600 hover:underline">
                    View your profile
                  </Link>
                </p>
              </div>
              <ul>
                <li className="flex items-center space-x-3 p-3 hover:bg-gray-100">
                  <FiSettings />
                  <Link to="settings">Settings</Link>
                </li>
                <li className="flex items-center space-x-3 p-3 hover:bg-gray-100">
                  <FiFileText />
                  <Link to="my-posts">My Recent Posts</Link>
                </li>
                <li className="flex items-center space-x-3 p-3 hover:bg-gray-100">
                  <FiCalendar />
                  <Link to="my-events">My Events</Link>
                </li>
              </ul>
              <button onClick={onLogout} className="flex items-center space-x-3 p-3 hover:bg-gray-100 w-full text-red-600">
                <FiLogOut />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden ${menuOpen ? "block" : "hidden"}`}>
        <div className="bg-gray-100 px-6 py-2">
          <div className="flex space-x-4">
            <Link to="newsfeed" className="block text-blue-600 hover:bg-gray-200 px-3 py-2 rounded" onClick={closeMenu}>
              Newsfeed
            </Link>
            <Link to="members" className="block text-blue-600 hover:bg-gray-200 px-3 py-2 rounded" onClick={closeMenu}>
              Members
            </Link>
            <Link to="events" className="block text-blue-600 hover:bg-gray-200 px-3 py-2 rounded" onClick={closeMenu}>
              Events
            </Link>
            <Link to="groups" className="block text-blue-600 hover:bg-gray-200 px-3 py-2 rounded" onClick={closeMenu}>
              Groups
            </Link>
          </div>

          {/* Profile Dropdown in Mobile */}
          <div ref={dropdownRef} className="relative mt-4">
            <button onClick={toggleDropdown} className="flex items-center focus:outline-none">
              <div className="w-8 h-8 rounded-full bg-gray-200 text-blue-600 flex items-center justify-center">
                {user.first_name.charAt(0)}
              </div>
            </button>
            <div
              className={`absolute right-0 mt-2 w-56 bg-white border rounded shadow-lg text-black transform transition-all duration-500 ease-in-out ${
                showDropdown ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-4 invisible"
              }`}
            >
              <div className="p-4 border-b">
                <p className="font-bold text-sm">
                  {user.first_name} {user.last_name}
                </p>
                <p className="text-gray-500 text-xs">
                  <Link to="profile" className="text-blue-600 hover:underline">
                    View your profile
                  </Link>
                </p>
              </div>
              <ul>
                <li className="flex items-center space-x-3 p-3 hover:bg-gray-100">
                  <FiSettings />
                  <Link to="settings">Settings</Link>
                </li>
                <li className="flex items-center space-x-3 p-3 hover:bg-gray-100">
                  <FiFileText />
                  <Link to="my-posts">My Recent Posts</Link>
                </li>
                <li className="flex items-center space-x-3 p-3 hover:bg-gray-100">
                  <FiCalendar />
                  <Link to="my-events">My Events</Link>
                </li>
              </ul>
              <button onClick={onLogout} className="flex items-center space-x-3 p-3 hover:bg-gray-100 w-full text-red-600">
                <FiLogOut />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Secondary Navigation for larger screens */}
      <div className="bg-gray-100 hidden lg:block">
        <div className="container mx-auto px-6 py-2 flex space-x-4">
          <Link to="newsfeed" className="text-blue-600 hover:bg-gray-200 px-3 py-2 rounded">
            Newsfeed
          </Link>
          <Link to="members" className="text-blue-600 hover:bg-gray-200 px-3 py-2 rounded">
            Members
          </Link>
          <Link to="events" className="text-blue-600 hover:bg-gray-200 px-3 py-2 rounded">
            Events
          </Link>
          <Link to="groups" className="text-blue-600 hover:bg-gray-200 px-3 py-2 rounded">
            Groups
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default DashNav;
