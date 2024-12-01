import React from 'react';

const Groups = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Your Groups</h1>

      {/* Group List */}
      <div className="space-y-6">
        <div className="p-4 bg-gray-50 rounded-md shadow-sm">
          <h3 className="text-lg font-semibold text-gray-700">Group Title 1</h3>
          <p className="text-sm text-gray-500">This is a description of the group...</p>
        </div>

        <div className="p-4 bg-gray-50 rounded-md shadow-sm">
          <h3 className="text-lg font-semibold text-gray-700">Group Title 2</h3>
          <p className="text-sm text-gray-500">This is a description of the group...</p>
        </div>
      </div>

      {/* Create New Group */}
      <div className="mt-8">
        <h2 className="text-xl font-bold text-gray-700 mb-4">Create New Group</h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Group Title"
            className="w-full p-3 border border-gray-300 rounded-md"
          />
          <textarea
            placeholder="Group Description"
            className="w-full p-3 border border-gray-300 rounded-md"
          />
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition-colors">
            Create Group
          </button>
        </form>
      </div>
    </div>
  );
};

export default Groups;
