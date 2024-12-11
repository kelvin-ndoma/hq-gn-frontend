import React from "react";
import { Link } from "react-router-dom";

function Profile({ user }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">User Profile</h2>
        
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">First Name</label>
          <p className="text-gray-800">{user.first_name}</p>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">Last Name</label>
          <p className="text-gray-800">{user.last_name}</p>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">Email</label>
          <p className="text-gray-800">{user.email}</p>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">City</label>
          <p className="text-gray-800">{user.city}</p>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">Country</label>
          <p className="text-gray-800">{user.country}</p>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">Date of Birth</label>
          <p className="text-gray-800">{user.date_of_birth}</p>
        </div>

        <div className="mt-6 text-center">
          <Link to="/dashboard/profile/edit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none">
            Edit Profile
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Profile;
