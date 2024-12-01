import React from "react";
import { Link } from "react-router-dom";

const MenuLinks = () => {
  return (
    <div className="bg-white text-black w-full p-4 flex justify-center space-x-8">
      <Link to="/dashboard/members" className="hover:text-blue-600">
        Members
      </Link>
      <Link to="/dashboard/feed" className="hover:text-blue-600">
        Newsfeed
      </Link>
      <Link to="/dashboard/events" className="hover:text-blue-600">
        Events
      </Link>
      <Link to="/dashboard/groups" className="hover:text-blue-600">
        Groups
      </Link>
      <Link to="/dashboard/admin" className="hover:text-blue-600">
        Admin Panel
      </Link>
    </div>
  );
};

export default MenuLinks;
