import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h4 className="text-xl font-semibold">Learn More</h4>
          <ul className="mt-4 space-y-2">
            <li><a href="#" className="hover:text-white">How it works</a></li>
            <li><a href="#" className="hover:text-white">Pricing</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xl font-semibold">Support</h4>
          <ul className="mt-4 space-y-2">
            <li><a href="#" className="hover:text-white">Help Center</a></li>
            <li><a href="#" className="hover:text-white">Contact Us</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xl font-semibold">My Account</h4>
          <ul className="mt-4 space-y-2">
            <li><a href="#" className="hover:text-white">Login</a></li>
            <li><a href="#" className="hover:text-white">Sign Up</a></li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-8">
        <p>&copy; 2024 HQ Global Network. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
