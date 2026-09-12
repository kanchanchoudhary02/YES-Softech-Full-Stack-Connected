import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) => (isActive ? "active" : undefined);
  const close = () => setOpen(false);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <div className="ys-top-strip">
        <div className="ys-top-inner">
          <span className="ys-top-main">Your Success is Our Mission</span>
          <span>Web Development</span>
          <span>Digital Marketing</span>
          <span>Creative Solutions</span>
          <a href="tel:+918740000977">+91 874 0000 977</a>
        </div>
      </div>
      <div className="noise"></div>

      <header className="site-header" id="top">
        <div className="container nav-wrap">
          <NavLink aria-label="YES Softech Home" className="brand brand-large" to="/" onClick={close}>
            <img alt="YES Softech" loading="eager" src="/assets/yes-softech-logo.png" />
          </NavLink>
          <button
            aria-controls="primary-navigation"
            aria-expanded={open}
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            className="nav-toggle"
            type="button"
            onClick={() => setOpen((o) => !o)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <nav aria-label="Primary navigation" className={`nav${open ? " open" : ""}`} id="primary-navigation">
            <NavLink to="/" className={linkClass} onClick={close} end>
              Home
            </NavLink>
            <NavLink to="/about" className={linkClass} onClick={close}>
              About
            </NavLink>
            <NavLink to="/services" className={linkClass} onClick={close}>
              Services
            </NavLink>
            <NavLink to="/portfolio" className={linkClass} onClick={close}>
              Work
            </NavLink>
            <NavLink to="/team" className={linkClass} onClick={close}>
              Team
            </NavLink>
            <NavLink to="/blog" className={linkClass} onClick={close}>
              Blog
            </NavLink>
            <NavLink to="/contact" className="nav-cta" onClick={close}>
              Start a Project <i>↗</i>
            </NavLink>
          </nav>
        </div>
      </header>
    </>
  );
}
