// src/api.js
import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3000",  // Change this if necessary
  withCredentials: true,
});

export default API;
