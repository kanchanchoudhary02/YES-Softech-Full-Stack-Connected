import api from "./api";

export const getStats = () => api.get("/admin/stats");
export const listEnquiries = (params) => api.get("/contact", { params });
export const getEnquiry = (id) => api.get(`/contact/${id}`);
export const updateEnquiryStatus = (id, status) => api.patch(`/contact/${id}/status`, { status });
export const deleteEnquiry = (id) => api.delete(`/contact/${id}`);
