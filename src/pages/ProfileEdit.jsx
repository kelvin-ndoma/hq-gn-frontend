import React, { useState, useEffect } from "react";
import axios from "axios";

const ProfileEdit = ({ user, onProfileUpdate }) => {
  const [formData, setFormData] = useState({
    first_name: user.first_name,
    last_name: user.last_name,
    email: user.email,
    city: user.city,
    country: user.country,
    password: "", // Password is optional for updates
    password_confirmation: "", // Password confirmation is optional
  });

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Reset the form when the user prop changes
    setFormData({
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      city: user.city,
      country: user.country,
      password: "",
      password_confirmation: "",
    });
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Construct the user data to update, excluding password if not provided
    const dataToUpdate = { ...formData };
    if (!dataToUpdate.password) {
      delete dataToUpdate.password;
      delete dataToUpdate.password_confirmation;
    }

    // Ensure we send the complete user data, including the id and other fields
    const userUpdateData = {
      ...user, // Merge in the current user data
      ...dataToUpdate, // Overwrite only the fields that are updated
    };

    try {
      const response = await axios.patch(
        "http://localhost:3000/sessions/update",
        { user: userUpdateData }, // Send the updated user object
        { withCredentials: true } // Ensure the credentials are sent with the request
      );

      if (response.data) {
        onProfileUpdate(response.data); // Pass updated user data back to the parent
        setLoading(false);
      }
    } catch (error) {
      setError(error.response?.data?.error || "Something went wrong");
      setLoading(false);
    }
  };

  return (
    <div className="profile-edit">
      <h2 className="text-xl font-semibold mb-4">Edit Profile</h2>

      {error && <div className="text-red-500 mb-4">{error}</div>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="first_name" className="block text-sm font-medium">First Name</label>
          <input
            type="text"
            id="first_name"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div>
          <label htmlFor="last_name" className="block text-sm font-medium">Last Name</label>
          <input
            type="text"
            id="last_name"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div>
          <label htmlFor="city" className="block text-sm font-medium">City</label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label htmlFor="country" className="block text-sm font-medium">Country</label>
          <input
            type="text"
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label htmlFor="password_confirmation" className="block text-sm font-medium">Confirm Password</label>
          <input
            type="password"
            id="password_confirmation"
            name="password_confirmation"
            value={formData.password_confirmation}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="flex justify-between">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md"
            disabled={loading}
          >
            {loading ? "Saving..." : "Save Changes"}
          </button>
          <button
            type="button"
            onClick={() => setFormData({
              first_name: user.first_name,
              last_name: user.last_name,
              email: user.email,
              city: user.city,
              country: user.country,
              password: "",
              password_confirmation: "",
            })}
            className="bg-gray-500 text-white py-2 px-4 rounded-md"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfileEdit;
