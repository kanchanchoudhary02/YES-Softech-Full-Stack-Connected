import api from "./api";

export const submitContactEnquiry = (payload) => api.post("/contact", payload);
