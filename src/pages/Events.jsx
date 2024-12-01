import React from 'react';

const Events = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Upcoming Events</h1>

      {/* Event List */}
      <div className="space-y-6">
        <div className="p-4 bg-gray-50 rounded-md shadow-sm">
          <h3 className="text-lg font-semibold text-gray-700">Event Title 1</h3>
          <p className="text-sm text-gray-500">Event description goes here...</p>
          <div className="mt-2 text-sm text-gray-500">Date: 2024-12-01</div>
        </div>

        <div className="p-4 bg-gray-50 rounded-md shadow-sm">
          <h3 className="text-lg font-semibold text-gray-700">Event Title 2</h3>
          <p className="text-sm text-gray-500">Event description goes here...</p>
          <div className="mt-2 text-sm text-gray-500">Date: 2024-12-05</div>
        </div>

        {/* Event creation form */}
        <div className="mt-8">
          <h2 className="text-xl font-bold text-gray-700 mb-4">Create New Event</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Event Title"
              className="w-full p-3 border border-gray-300 rounded-md"
            />
            <textarea
              placeholder="Event Description"
              className="w-full p-3 border border-gray-300 rounded-md"
            />
            <input
              type="date"
              className="w-full p-3 border border-gray-300 rounded-md"
            />
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition-colors">
              Create Event
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Events;
