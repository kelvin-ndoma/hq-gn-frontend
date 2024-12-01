import React from 'react';

const Newsfeed = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">What's New</h1>

      {/* Example of a newsfeed post */}
      <div className="mb-6">
        <div className="p-4 bg-blue-50 rounded-md shadow-sm">
          <p className="text-lg text-gray-700">
            New groups added <span className="font-bold">@Will Dos Santos @Drew Dove</span>
          </p>
          <div className="mt-2 text-sm text-gray-500">2 Likes</div>
        </div>
      </div>

      {/* Input for writing a post */}
      <div className="mt-6">
        <textarea
          className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
          placeholder="Write a post..."
        />
        <button className="mt-3 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors">
          Post
        </button>
      </div>
    </div>
  );
};

export default Newsfeed;
