import React from 'react';

const Newsfeed = ({ user }) => (
  <div>
    <h2 className="text-2xl">{user.first_name}, here's what's new</h2>
    <div className="mt-4">
      <div className="p-4 border rounded bg-white shadow-sm">
        <p>New groups added @Will Dos Santos @Drew Dove</p>
        <div className="text-sm text-gray-600">2 Likes</div>
      </div>
    </div>
  </div>
);

export default Newsfeed;
