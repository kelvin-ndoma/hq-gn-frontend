import React, { useState, useEffect, useRef } from 'react';
import { FaSearch, FaBell, FaMapMarkerAlt } from 'react-icons/fa';
import { FiLogOut, FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import logo from '../assets/logo.svg';

function DashboardNavbar({ user, setUser, onLogout }) {
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Create a ref for the profile dropdown
  const profileDropdownRef = useRef(null);

  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Close the dropdown if clicked outside
      if (profileDropdownRef.current && !profileDropdownRef.current.contains(event.target)) {
        setIsProfileDropdownOpen(false);
      }

      if (isMenuOpen && !event.target.closest('#menuContainer') && !event.target.closest('#hamburgerIcon')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <header className='shadow-md bg-white font-[sans-serif] tracking-wide relative z-50'>
      <section className='flex items-center flex-wrap lg:justify-center gap-4 py-2.5 sm:px-10 px-4 border-gray-200 border-b min-h-[70px]'>
        {/* Search Bar */}
        <div className='left-10 absolute z-50 bg-gray-100 flex items-center px-4 py-2.5 rounded max-lg:hidden'>
          <FaSearch className="text-gray-500" />
          <input type='text' placeholder='Search...' className="outline-none bg-transparent w-full text-sm ml-2" />
        </div>

        {/* Logo */}
        <Link to="/dashboard">
          <img src={logo} alt="logo" className="w-36" />
        </Link>

        {/* Right Section */}
        <div className="lg:absolute lg:right-10 flex items-center ml-auto space-x-8">
          {/* Notifications */}
          <span className="relative">
            <FaBell className="cursor-pointer text-gray-800 hover:text-[#007bff]" size={20} />
          </span>

          {/* Locations */}
          <span className="relative">
            <FaMapMarkerAlt className="cursor-pointer text-gray-800 hover:text-[#007bff]" size={20} />
          </span>

          {/* User Profile */}
          <div className="relative">
            <div className="inline-block cursor-pointer border-gray-300" onClick={toggleProfileDropdown}>
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white">
                {user.first_name.charAt(0).toUpperCase()}
              </span>
            </div>

            {isProfileDropdownOpen && (
              <div
                ref={profileDropdownRef}  // This is where the ref is correctly placed
                className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg z-50 opacity-0 transform translate-y-2 transition-all duration-300 ease-out"
                style={{ opacity: isProfileDropdownOpen ? 1 : 0, transform: isProfileDropdownOpen ? 'translateY(0)' : 'translateY(10px)' }}
              >
                <Link to="/dashboard/profile" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Profile</Link>
                <Link to="/dashboard/settings" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Settings</Link>
                <a href="#" onClick={onLogout} className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Logout</a>
              </div>
            )}
          </div>
        </div>

        {/* Hamburger Menu Icon - Small Screens */}
        <div className="lg:hidden flex items-center" id="hamburgerIcon">
          {isMenuOpen ? (
            <FiX onClick={toggleMenu} size={24} className="text-gray-800 cursor-pointer" />
          ) : (
            <FiMenu onClick={toggleMenu} size={24} className="text-gray-800 cursor-pointer" />
          )}
        </div>
      </section>

      {/* Hamburger Menu Items - Only for Small Screens */}
      {isMenuOpen && (
        <div id="menuContainer" className="absolute left-0 top-[70px] w-full bg-white shadow-lg z-40 lg:hidden">
          <ul className="flex flex-col space-y-4 p-4">
            <li><Link to="/dashboard/newsfeed" className="hover:text-[#007bff] text-gray-800 block" onClick={toggleMenu}>Newsfeed</Link></li>
            <li><Link to="/dashboard/members" className="hover:text-[#007bff] text-gray-800 block" onClick={toggleMenu}>Members</Link></li>
            <li><Link to="/dashboard/events" className="hover:text-[#007bff] text-gray-800 block" onClick={toggleMenu}>Events</Link></li>
            <li><Link to="/dashboard/groups" className="hover:text-[#007bff] text-gray-800 block" onClick={toggleMenu}>Groups</Link></li>
          </ul>
        </div>
      )}

      {/* Menu for Large Screens */}
      <div className="hidden lg:flex justify-center py-3 relative">
        <div id="collapseMenu" className="bg-white w-full flex justify-center">
          <ul className='flex lg:gap-x-10'>
            <li><Link to="/dashboard/newsfeed" className='hover:text-[#007bff] text-[#007bff] font-semibold block text-[15px]'>Newsfeed</Link></li>
            <li><Link to="/dashboard/members" className='hover:text-[#007bff] text-gray-800 text-[15px] block'>Members</Link></li>
            <li><Link to="/dashboard/events" className='hover:text-[#007bff] text-gray-800 text-[15px] block'>Events</Link></li>
            <li><Link to="/dashboard/groups" className='hover:text-[#007bff] text-gray-800 text-[15px] block'>Groups</Link></li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default DashboardNavbar;

