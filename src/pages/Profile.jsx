import React, { useState, useEffect } from "react";
import ProfileEdit from "./ProfileEdit"; // Import ProfileEdit component

const ProfilePage = ({ user, onLogout }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [currentUser, setCurrentUser] = useState(user);  // Set the user initially passed as prop
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);  // New loading state

  // Toggle between profile view and edit mode
  const toggleEditMode = () => {
    setIsEditing(!isEditing);
  };

  // Handle profile update
  const handleProfileUpdate = (updatedUser) => {
    setCurrentUser(updatedUser);  // Update the local user state
    setIsEditing(false); // Exit edit mode after update
  };

  // Handle cancel edit
  const handleCancelEdit = () => {
    setCurrentUser(user);  // Revert to original user data
    setIsEditing(false);  // Exit edit mode
  };

  // Fetch fresh user data when the component mounts
  useEffect(() => {
    setLoading(true);
    setCurrentUser(user);  // Keep user data up to date
    setLoading(false);
  }, [user]);

  // Show loading state until the user data is fetched
  if (loading) {
    return <div className="text-center py-10">Loading...</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-4">Profile</h1>

      {/* Show error if fetching the data fails */}
      {error && <div className="text-red-500 mb-4">{error}</div>}

      {/* Profile info or edit form */}
      {!isEditing ? (
        <div className="profile-view">
          <div className="flex items-center space-x-4">
            <img
              src={currentUser.photo || "https://via.placeholder.com/100"}
              alt="User Profile"
              className="h-24 w-24 rounded-full"
            />
            <div>
              <p className="text-xl font-semibold">
                {currentUser.first_name} {currentUser.last_name}
              </p>
              <p className="text-sm text-gray-600">{currentUser.email}</p>
            </div>
          </div>

          <div className="mt-6">
            <button
              onClick={toggleEditMode}
              className="bg-blue-500 text-white py-2 px-4 rounded-md"
            >
              Edit Profile
            </button>
          </div>
        </div>
      ) : (
        currentUser && (
          <ProfileEdit user={currentUser} onProfileUpdate={handleProfileUpdate} />
        )
      )}

      {/* Show Cancel and Logout buttons when in Edit mode */}
      {isEditing && (
        <div className="mt-6 flex space-x-4">
          <button
            onClick={handleCancelEdit}
            className="bg-gray-500 text-white py-2 px-4 rounded-md"
          >
            Cancel
          </button>

          <button
            onClick={onLogout}
            className="bg-red-500 text-white py-2 px-4 rounded-md"
          >
            Logout
          </button>
        </div>
      )}

      {/* Log out button outside of edit mode */}
      {!isEditing && (
        <div className="mt-6">
          <button
            onClick={onLogout}
            className="bg-red-500 text-white py-2 px-4 rounded-md"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
