import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation(); // Get the current route

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const goHome = () => {
    navigate('/'); // Navigate to the home route
  };

  const goToLogin = () => {
    navigate('/login'); // Navigate to the login route
    setIsOpen(false); // Close the mobile menu after navigating
  };

  // Check if the current route is the login page
  const isLoginPage = location.pathname === '/login';

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-lg z-50">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        {/* Logo that navigates to Home */}
        <h1
          className="text-xl font-bold cursor-pointer"
          onClick={goHome}
        >
          HQ Global Network
        </h1>

        {/* Hamburger Icon for Small Screens */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Menu for Medium and Larger Screens */}
        <div className="hidden md:flex space-x-4">
          {isLoginPage ? (
            <button
              className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-500"
              onClick={goHome}
            >
              Back to Home
            </button>
          ) : (
            <button
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500"
              onClick={goToLogin}
            >
              Login
            </button>
          )}
        </div>
      </div>

      {/* Full-Screen Mobile Menu - Show/Hide Based on State */}
      {isOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col justify-center items-center space-y-8">
          {isLoginPage ? (
            <button
              className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-500 text-xl"
              onClick={goHome}
            >
              Back to Home
            </button>
          ) : (
            <button
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500 text-xl"
              onClick={goToLogin}
            >
              Login
            </button>
          )}
        </div>
      )}
    </header>
  );
};

export default Navbar;
