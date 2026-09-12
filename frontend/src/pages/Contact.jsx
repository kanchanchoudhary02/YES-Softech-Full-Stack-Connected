import { useState } from "react";
import { useDocumentMeta } from "../hooks";
import { submitContactEnquiry } from "../services/contactService";

const initialForm = {
  firstName: "",
  email: "",
  phone: "",
  service: "Website Design & Development",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState(null); // { type: 'success' | 'error', text }

  useDocumentMeta({
    title: "Contact YES Softech | Start a Digital Project in Jaipur",
    description:
      "Contact YES Softech in Jaipur for website development, digital marketing, SEO, social media, PPC and graphic design services.",
    canonical: "https://www.yessoftech.com/contact.html",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (submitting) return; // prevent duplicate submissions
    setSubmitting(true);
    setStatus(null);
    try {
      await submitContactEnquiry({
        name: form.firstName,
        email: form.email,
        phone: form.phone,
        service: form.service,
        subject: form.service,
        message: form.message,
      });
      setStatus({
        type: "success",
        text: "Request submitted successfully. Our team will contact you soon.",
      });
      setForm(initialForm);
    } catch {
      setStatus({
        type: "error",
        text: "Something went wrong while sending your enquiry. Please try again in a moment, or call us directly.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <section className="page-hero contact-hero">
        <div className="container page-hero-inner">
          <div className="eyebrow">LET'S TALK</div>
          <h1>
            Have a challenge?
            <br />
            <em>Let's solve it.</em>
          </h1>
          <p>Tell us what you're building, growing or improving. We'll take it from there.</p>
        </div>
      </section>

      <section className="section contact-section">
        <div className="container contact-grid">
          <div className="contact-info">
            <div className="section-kicker">01 / CONTACT</div>
            <h2>
              Start with a
              <br />
              <em>conversation.</em>
            </h2>
            <div className="contact-block">
              <span>Call</span>
              <a href="tel:+918740000977">+91 874 0000 977</a>
              <a href="tel:+918955553995">+91 895 5553 995</a>
            </div>
            <div className="contact-block">
              <span>Email</span>
              <a href="mailto:info@yessoftech.com">info@yessoftech.com</a>
            </div>
            <div className="contact-block">
              <span>Working hours</span>
              <p>
                Monday — Saturday
                <br />
                10:00 AM — 6:00 PM
              </p>
            </div>
            <div className="contact-block">
              <span>Work office</span>
              <p>
                A-52, YES Softech, The Oak, Vaishali Nagar, Jaipur, Rajasthan, M.I. Road,
                <br />
                Jaipur, Rajasthan 302001
              </p>
            </div>
          </div>

          <form className="contact-form" id="contactForm" onSubmit={handleSubmit}>
            <div className="form-row">
              <label htmlFor="firstName">
                First name
                <input
                  id="firstName"
                  name="firstName"
                  placeholder="Your name"
                  required
                  type="text"
                  value={form.firstName}
                  onChange={handleChange}
                />
              </label>
              <label htmlFor="email">
                Email
                <input
                  id="email"
                  name="email"
                  placeholder="you@company.com"
                  required
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div className="form-row">
              <label htmlFor="phone">
                Phone
                <input
                  id="phone"
                  name="phone"
                  placeholder="+91"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                />
              </label>
              <label htmlFor="service">
                Service
                <select id="service" name="service" value={form.service} onChange={handleChange}>
                  <option>Website Design &amp; Development</option>
                  <option>Social Media Management</option>
                  <option>SEO / Online Marketing</option>
                  <option>PPC / Paid Social</option>
                  <option>Graphic &amp; Brand Design</option>
                  <option>Something else</option>
                </select>
              </label>
            </div>
            <label htmlFor="message">
              Tell us about the project
              <textarea
                id="message"
                name="message"
                placeholder="A little context about your business, goals and timeline..."
                required
                rows="7"
                value={form.message}
                onChange={handleChange}
              ></textarea>
            </label>
            <button className="btn btn-gold" type="submit" disabled={submitting}>
              {submitting ? "Sending…" : "Send enquiry"} <span>↗</span>
            </button>
            <p className="form-note">We usually respond within one business day.</p>
            {status && (
              <div
                className="form-success"
                id="formSuccess"
                style={{
                  display: "block",
                  color: status.type === "success" ? undefined : "#e08a8a",
                }}
              >
                {status.text}
              </div>
            )}
          </form>
        </div>
      </section>

      <section className="map-band">
        <div className="container">
          <div className="map-card">
            <div>
              <div className="eyebrow">JAIPUR · INDIA</div>
              <h2>
                A-52, YES Softech, The Oak, Vaishali Nagar, Jaipur, Rajasthan
                <br />
                <em>M.I. Road</em>
              </h2>
              <p>A-52, YES Softech, The Oak, Vaishali Nagar, Jaipur, Rajasthan</p>
            </div>
            <a
              className="btn btn-outline"
              href="https://www.google.com/maps/search/?api=1&query=A-52+YES+Softech+The+Oak+Vaishali+Nagar+Jaipur+Rajasthan+302001"
              rel="noopener"
              target="_blank"
            >
              Open Maps ↗
            </a>
          </div>
        </div>
      </section>

      <section className="faq-section section">
        <div className="container">
          <div className="section-kicker">02 / FAQ</div>
          <h2>
            Before we <em>begin.</em>
          </h2>
          <div className="faq-list">
            <details>
              <summary>What kind of businesses do you work with?</summary>
              <p>
                The profile lists work across fashion, education, hospitals, hotels &amp; resorts, real estate,
                travel, restaurants, retail, interior design, jewellery and more.
              </p>
            </details>
            <details>
              <summary>Can you handle both creative and technology?</summary>
              <p>
                Yes. The current YES Softech offering spans web design/development, graphic design, SEO, social media
                optimization, online/digital marketing and PPC.
              </p>
            </details>
            <details>
              <summary>Do you support websites after launch?</summary>
              <p>
                The website development service describes ongoing support and maintenance after launch, including
                updates and troubleshooting.
              </p>
            </details>
          </div>
        </div>
      </section>

      <section className="long-section reveal">
        <div className="container long-grid">
          <div>
            <span className="eyebrow">01 / LET'S TALK ABOUT YOUR PROJECT</span>
            <h2>Start with a conversation.</h2>
          </div>
          <div className="long-copy">
            <p className="lead">
              Tell YES Softech what you are building, improving or trying to communicate. A clear first conversation
              helps define the right next step.
            </p>
            <p>
              Whether the requirement is a new website, a redesign, software, e-commerce, SEO, social media or
              creative support, the discussion can begin with the business need.
            </p>
          </div>
        </div>
      </section>

      <section className="long-section alt reveal">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">02 / WHAT HAPPENS NEXT</span>
            <h2>A simple path from enquiry to execution.</h2>
          </div>
          <div className="process-rich">
            <div className="rich-card">
              <span className="step-no">01</span>
              <h3>We understand your requirement</h3>
              <p>We listen to the business context, current situation and what you want the digital project to achieve.</p>
            </div>
            <div className="rich-card">
              <span className="step-no">02</span>
              <h3>Discuss the right solution</h3>
              <p>We identify which combination of development, design or marketing capabilities fits the requirement.</p>
            </div>
            <div className="rich-card">
              <span className="step-no">03</span>
              <h3>Plan the project</h3>
              <p>Scope, priorities, content, functionality and next steps are brought into a clearer plan.</p>
            </div>
            <div className="rich-card">
              <span className="step-no">04</span>
              <h3>Share the next steps</h3>
              <p>Move from the initial discussion toward an agreed direction and practical execution plan.</p>
            </div>
            <div className="rich-card">
              <span className="step-no">05</span>
              <h3>Start development</h3>
              <p>Once the direction is ready, the relevant team disciplines begin the work.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="long-section reveal">
        <div className="container long-grid">
          <div>
            <span className="eyebrow">03 / CONTACT DETAILS</span>
            <h2>Reach the YES Softech team.</h2>
          </div>
          <div className="long-grid two">
            <div className="rich-card">
              <span className="mini">OFFICE</span>
              <h3>Jaipur · India</h3>
              <p>A-52, YES Softech, The Oak, Vaishali Nagar, Jaipur, Rajasthan, M.I. Road, Jaipur, Rajasthan 302001</p>
            </div>
            <div className="rich-card">
              <span className="mini">PHONE</span>
              <h3>+91 874 0000 977</h3>
              <p>For project enquiries and general discussion.</p>
              <a className="text-link" href="tel:+918740000977">
                Call us ↗
              </a>
            </div>
            <div className="rich-card">
              <span className="mini">EMAIL</span>
              <h3>info@yessoftech.com</h3>
              <p>Share your requirement and project context by email.</p>
              <a className="text-link" href="mailto:info@yessoftech.com">
                Send email ↗
              </a>
            </div>
            <div className="rich-card">
              <span className="mini">WORKING HOURS</span>
              <h3>Monday — Saturday</h3>
              <p>10:00 AM — 6:00 PM</p>
            </div>
          </div>
        </div>
      </section>

      <section className="long-section alt reveal">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">04 / PROJECT TYPES</span>
            <h2>What can we discuss?</h2>
          </div>
          <div className="long-grid three">
            <div className="rich-card">
              <h3>New Website</h3>
              <p>Starting a new business or replacing an outdated digital presence.</p>
            </div>
            <div className="rich-card">
              <h3>Website Redesign</h3>
              <p>Improving an existing website's design, structure, responsiveness or content.</p>
            </div>
            <div className="rich-card">
              <h3>Web / Software</h3>
              <p>Building a functional digital product around a specific business workflow.</p>
            </div>
            <div className="rich-card">
              <h3>E-commerce</h3>
              <p>Creating or improving an online product and customer experience.</p>
            </div>
            <div className="rich-card">
              <h3>SEO &amp; Social</h3>
              <p>Improving visibility, content and ongoing social communication.</p>
            </div>
            <div className="rich-card">
              <h3>Creative Support</h3>
              <p>Brand, graphic and campaign communication for digital channels.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="long-section reveal">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">05 / FAQ</span>
            <h2>Before we begin.</h2>
          </div>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>How do I start a project?</h3>
              <p>Contact the team with your requirement. The first step is understanding the business, scope and desired outcome.</p>
            </div>
            <div className="faq-item">
              <h3>How long does website development take?</h3>
              <p>Timelines depend on the pages, content, features, integrations and approval process. A clearer scope allows a more useful timeline discussion.</p>
            </div>
            <div className="faq-item">
              <h3>Do you provide custom solutions?</h3>
              <p>Yes. The service offering includes custom development and business-focused digital solutions where a standard template is not enough.</p>
            </div>
            <div className="faq-item">
              <h3>Do you provide maintenance?</h3>
              <p>Yes. Maintenance and support are part of the service offering for ongoing updates and digital needs.</p>
            </div>
            <div className="faq-item">
              <h3>Can you redesign an existing website?</h3>
              <p>Yes. Existing websites can be reviewed and improved based on design, content, responsiveness and business requirements.</p>
            </div>
            <div className="faq-item">
              <h3>Do you work with startups and small businesses?</h3>
              <p>The company profile includes work across different business types, and the approach can be scoped around the actual size and requirement of the project.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="long-section alt reveal">
        <div className="container">
          <div className="long-grid">
            <div>
              <span className="eyebrow">06 / LOCATION</span>
              <h2>Find the Jaipur office.</h2>
              <p className="long-copy">The existing website provides a Google Maps location for the YES Softech office.</p>
              <a
                className="btn btn-outline"
                href="https://www.google.com/maps/search/?api=1&query=A-52+YES+Softech+The+Oak+Vaishali+Nagar+Jaipur+Rajasthan+302001"
                rel="noopener"
                target="_blank"
              >
                Open Maps ↗
              </a>
            </div>
            <div className="rich-card" style={{ minHeight: "260px", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div>
                <span className="mini">JAIPUR · INDIA</span>
                <h3>A-52, YES Softech, The Oak</h3>
                <p>Vaishali Nagar, Jaipur, Rajasthan 302001</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="long-section reveal">
        <div className="container cta-strip">
          <div>
            <span className="eyebrow">07 / START A PROJECT</span>
            <h2>Have an idea? Let's build it together.</h2>
          </div>
          <a className="btn btn-gold" href="#contactForm">
            Send Your Enquiry ↗
          </a>
        </div>
      </section>
    </>
  );
}
