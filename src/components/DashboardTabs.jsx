import React from "react";

const DashboardTabs = ({ activeTab, setActiveTab }) => {
  return (
    <div className="flex space-x-4 mb-6">
      <button
        onClick={() => setActiveTab("General")}
        className={`pb-2 ${
          activeTab === "General"
            ? "text-blue-600 border-b-2 border-blue-600"
            : "text-gray-600 hover:text-blue-600"
        }`}
      >
        General
      </button>
      <button
        onClick={() => setActiveTab("My Groups")}
        className={`pb-2 ${
          activeTab === "My Groups"
            ? "text-blue-600 border-b-2 border-blue-600"
            : "text-gray-600 hover:text-blue-600"
        }`}
      >
        My Groups
      </button>
    </div>
  );
};

export default DashboardTabs;
