import React from 'react';

const AdminPanel = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Admin Panel</h1>

      {/* Admin actions */}
      <div className="space-y-6">
        <div className="p-4 bg-gray-50 rounded-md shadow-sm">
          <h3 className="text-lg font-semibold text-gray-700">Manage Users</h3>
          <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors">
            View All Users
          </button>
        </div>

        <div className="p-4 bg-gray-50 rounded-md shadow-sm">
          <h3 className="text-lg font-semibold text-gray-700">Moderate Content</h3>
          <button className="bg-yellow-600 hover:bg-yellow-700 text-white py-2 px-4 rounded-md transition-colors">
            View Reports
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
