import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getStats,
  listEnquiries,
  updateEnquiryStatus,
  deleteEnquiry,
} from "../../services/adminService";

const STATUS_OPTIONS = ["NEW", "CONTACTED", "IN_PROGRESS", "RESOLVED"];

export default function AdminDashboard() {
  const navigate = useNavigate();
  const adminName = localStorage.getItem("ys_admin_name") || "Admin";

  const [stats, setStats] = useState(null);
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("ALL");
  const [selected, setSelected] = useState(null);
  const [error, setError] = useState("");

  const loadData = async () => {
    setLoading(true);
    setError("");
    try {
      const [statsRes, listRes] = await Promise.all([getStats(), listEnquiries({})]);
      setStats(statsRes.data);
      setEnquiries(listRes.data.enquiries || listRes.data || []);
    } catch (err) {
      setError("Unable to load dashboard data. Please try again.");
      if (err.response?.status === 401) {
        navigate("/admin/login", { replace: true });
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("ys_admin_token");
    localStorage.removeItem("ys_admin_name");
    navigate("/admin/login", { replace: true });
  };

  const handleStatusChange = async (id, status) => {
    setEnquiries((list) => list.map((e) => (e._id === id ? { ...e, status } : e)));
    try {
      await updateEnquiryStatus(id, status);
      loadData();
    } catch {
      setError("Could not update status. Please refresh and try again.");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this enquiry? This cannot be undone.")) return;
    try {
      await deleteEnquiry(id);
      setEnquiries((list) => list.filter((e) => e._id !== id));
      setSelected(null);
    } catch {
      setError("Could not delete this enquiry. Please try again.");
    }
  };

  const filtered = useMemo(() => {
    return enquiries.filter((e) => {
      const matchesStatus = statusFilter === "ALL" || e.status === statusFilter;
      const q = search.trim().toLowerCase();
      const matchesSearch =
        !q ||
        e.name?.toLowerCase().includes(q) ||
        e.email?.toLowerCase().includes(q) ||
        e.phone?.toLowerCase().includes(q) ||
        e.service?.toLowerCase().includes(q);
      return matchesStatus && matchesSearch;
    });
  }, [enquiries, search, statusFilter]);

  return (
    <div className="admin-shell">
      <div className="admin-topbar">
        <img src="/assets/yes-softech-logo.png" alt="YES Softech" />
        <div className="admin-user">
          <span>Signed in as {adminName}</span>
          <button className="admin-logout" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>

      <div className="admin-container">
        {error && <div className="admin-error">{error}</div>}

        <div className="admin-stats">
          <div className="admin-stat-card">
            <span>Total Enquiries</span>
            <strong>{stats?.total ?? "—"}</strong>
          </div>
          <div className="admin-stat-card new">
            <span>New</span>
            <strong>{stats?.new ?? "—"}</strong>
          </div>
          <div className="admin-stat-card contacted">
            <span>Contacted</span>
            <strong>{stats?.contacted ?? "—"}</strong>
          </div>
          <div className="admin-stat-card progress">
            <span>In Progress</span>
            <strong>{stats?.inProgress ?? "—"}</strong>
          </div>
          <div className="admin-stat-card resolved">
            <span>Resolved</span>
            <strong>{stats?.resolved ?? "—"}</strong>
          </div>
        </div>

        <div className="admin-toolbar">
          <input
            type="text"
            placeholder="Search by name, email, phone or service…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
            <option value="ALL">All statuses</option>
            {STATUS_OPTIONS.map((s) => (
              <option key={s} value={s}>
                {s.replace("_", " ")}
              </option>
            ))}
          </select>
        </div>

        <div className="admin-table-wrap">
          {loading ? (
            <div className="admin-empty">Loading enquiries…</div>
          ) : filtered.length === 0 ? (
            <div className="admin-empty">No enquiries match your search.</div>
          ) : (
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Service</th>
                  <th>Status</th>
                  <th>Date</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((e) => (
                  <tr key={e._id}>
                    <td>{e.name}</td>
                    <td>{e.email}</td>
                    <td>{e.phone || "—"}</td>
                    <td>{e.service || e.subject || "—"}</td>
                    <td>
                      <select
                        className="status-select"
                        value={e.status}
                        onChange={(ev) => handleStatusChange(e._id, ev.target.value)}
                      >
                        {STATUS_OPTIONS.map((s) => (
                          <option key={s} value={s}>
                            {s.replace("_", " ")}
                          </option>
                        ))}
                      </select>
                    </td>
                    <td>{e.createdAt ? new Date(e.createdAt).toLocaleDateString() : "—"}</td>
                    <td>
                      <button className="admin-icon-btn" onClick={() => setSelected(e)}>
                        View
                      </button>
                      <button className="admin-icon-btn danger" onClick={() => handleDelete(e._id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>

      {selected && (
        <div className="admin-modal-backdrop" onClick={() => setSelected(null)}>
          <div className="admin-modal" onClick={(e) => e.stopPropagation()}>
            <h2>Enquiry Details</h2>
            <dl>
              <dt>Name</dt>
              <dd>{selected.name}</dd>
              <dt>Email</dt>
              <dd>{selected.email}</dd>
              <dt>Phone</dt>
              <dd>{selected.phone || "—"}</dd>
              <dt>Service</dt>
              <dd>{selected.service || selected.subject || "—"}</dd>
              <dt>Status</dt>
              <dd>
                <span className={`admin-badge ${selected.status}`}>{selected.status?.replace("_", " ")}</span>
              </dd>
              <dt>Submitted</dt>
              <dd>{selected.createdAt ? new Date(selected.createdAt).toLocaleString() : "—"}</dd>
              <dt>Message</dt>
              <dd>{selected.message}</dd>
            </dl>
            <div className="admin-modal-actions">
              <button className="admin-modal-close" onClick={() => setSelected(null)}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
