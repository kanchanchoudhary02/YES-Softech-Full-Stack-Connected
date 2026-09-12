import api from "./api";

export const adminLogin = (email, password) => api.post("/auth/login", { email, password });
