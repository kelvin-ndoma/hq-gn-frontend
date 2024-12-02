import React, { useState } from "react";
import axios from "../utils/api";
import { useNavigate } from "react-router-dom";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState("");
  const navigate = useNavigate();

  const validateForm = () => {
    const errors = {};
    if (!email) errors.email = "Email is required";
    if (!password) errors.password = "Password is required";
    return errors;
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    // Clear previous server error if user starts typing again
    if (serverError) setServerError("");

    const formErrors = validateForm();
    setErrors(formErrors);

    if (Object.keys(formErrors).length > 0) return;

    try {
      const response = await axios.post("/sessions", {
        user: { email, password },
      });

      if (response.data.logged_in) {
        const user = response.data.user;

        // Save user data in localStorage
        localStorage.setItem("user", JSON.stringify(user));
        onLogin(user);

        // Navigate to the dashboard
        navigate("/dashboard");

        // Optionally, clear form fields after successful login
        setEmail("");
        setPassword("");
      }
    } catch (error) {
      setServerError("Invalid credentials or server error.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h2 className="text-3xl font-semibold mb-4">Login</h2>

      {serverError && (
        <div className="text-red-600 bg-red-100 p-2 mb-4 rounded-md w-full max-w-sm text-center">
          {serverError}
        </div>
      )}

      <form onSubmit={handleLogin} className="w-full max-w-sm bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 ${
              errors.email ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
            }`}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        <div className="mb-4">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 ${
              errors.password ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
            }`}
          />
          {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
        </div>

        <button type="submit" className="w-full p-3 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
