import React from "react";

const Greeting = ({ user }) => {
  return (
    <h2 className="text-2xl font-bold mb-4">
      {user.first_name}, here's what's new
    </h2>
  );
};

export default Greeting;
