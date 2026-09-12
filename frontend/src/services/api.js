import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: { "Content-Type": "application/json" },
});

// Attach admin JWT (if present) to every request automatically.
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("ys_admin_token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// If the backend says the token is invalid/expired, clear it so the
// admin panel drops back to the login screen next time it checks.
api.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response && err.response.status === 401) {
      localStorage.removeItem("ys_admin_token");
      localStorage.removeItem("ys_admin_name");
    }
    return Promise.reject(err);
  }
);

export default api;
