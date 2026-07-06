import axios from "axios";

// Central Axios instance. Base URL is proxied to the backend via vite.config.js in dev.
const api = axios.create({
  baseURL: "/api",
  withCredentials: true, // send httpOnly JWT cookie with every request
  headers: {
    "Content-Type": "application/json",
  },
});

// Global response interceptor — normalizes error messages for the UI layer
api.interceptors.response.use(
  (response) => response,
  (error) => {
    const message =
      error.response?.data?.message || error.message || "Something went wrong. Please try again.";
    return Promise.reject({ ...error, message });
  }
);

export default api;
