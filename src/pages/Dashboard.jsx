import React from 'react';

function Dashboard({ user, onLogout }) {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl mb-4">Welcome to your Dashboard, {user.first_name}!</h1>
      <p>Here you can manage your account, view your information, and more.</p>

      {/* Logout Button */}
      <button
        onClick={() => onLogout()} // Log the user out when the button is clicked
        className="mt-4 p-2 bg-red-500 text-white rounded"
      >
        Logout
      </button>
    </div>
  );
}

export default Dashboard;
