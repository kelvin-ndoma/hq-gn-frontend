import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000", // Backend base URL
  withCredentials: true, // Include cookies in requests
});

export default api;
