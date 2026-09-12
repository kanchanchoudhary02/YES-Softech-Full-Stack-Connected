import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <Link className="brand footer-brand" to="/">
            <img alt="YES Softech" loading="eager" src="/assets/yes-softech-logo.png" />
          </Link>
          <p>Your digital partner for web, creative, marketing and growth.</p>
        </div>
        <div>
          <h4>Explore</h4>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/team">Team</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/reviews">Reviews</Link>
        </div>
        <div>
          <h4>Contact</h4>
          <a href="tel:+918740000977">+91 874 0000 977</a>
          <a href="tel:+918955553995">+91 895 5553 995</a>
          <a href="mailto:info@yessoftech.com">info@yessoftech.com</a>
        </div>
        <div>
          <h4>Office</h4>
          <p>
            A-52, YES Softech, The Oak, Vaishali Nagar, Jaipur, Rajasthan,
            <br />
            M.I. Road, Jaipur — 302001
          </p>
          <Link to="/contact">Get directions ↗</Link>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 YES Softech. All rights reserved.</span>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
}
