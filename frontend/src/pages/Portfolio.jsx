import { useState } from "react";
import { Link } from "react-router-dom";
import { useDocumentMeta } from "../hooks";

const FILTERS = [
  { key: "all", label: "All" },
  { key: "brand", label: "Brand" },
  { key: "social", label: "Social" },
  { key: "web", label: "Web" },
  { key: "print", label: "Print" },
];

const PROJECTS = [
  { cls: "p1", cat: "brand", tag: "BRAND / IDENTITY", title: "Dream World Production", desc: "Logo & brand communication" },
  { cls: "p2", cat: "social", tag: "SOCIAL", title: "Nirbhya", desc: "Social media creative" },
  { cls: "p3", cat: "web", tag: "E-COMMERCE", title: "V K Imports", desc: "E-commerce website" },
  { cls: "p4", cat: "print", tag: "PRINT / MENU", title: "Teastar", desc: "Restaurant menu design" },
  { cls: "p5", cat: "print", tag: "BROCHURE", title: "KPL", desc: "Brochure & communication" },
  { cls: "p6", cat: "brand", tag: "BRAND", title: "American Nuts", desc: "Logo design" },
  { cls: "p7", cat: "social", tag: "CAMPAIGN", title: "SM Sales", desc: "Festival greetings" },
  { cls: "p8", cat: "social", tag: "APP PROMOTION", title: "Hem Securities", desc: "App promotion creative" },
  { cls: "p9", cat: "social", tag: "E-COMMERCE POST", title: "Discount Master", desc: "E-commerce social creative" },
];

export default function Portfolio() {
  const [filter, setFilter] = useState("all");

  useDocumentMeta({
    title: "Portfolio | YES Softech Digital Projects & Creative Work",
    description:
      "Explore selected YES Softech projects across branding, social media, e-commerce, print and digital creative work.",
    canonical: "https://www.yessoftech.com/portfolio.html",
  });

  return (
    <>
      <section className="page-hero portfolio-hero">
        <div className="container page-hero-inner">
          <div className="eyebrow">SELECTED WORK</div>
          <h1>
            Brands, campaigns
            <br />
            <em>&amp; digital experiences.</em>
          </h1>
          <p>A curated selection of work named in the YES Softech profile and current website.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="filters">
            {FILTERS.map((f) => (
              <button
                key={f.key}
                className={`filter${filter === f.key ? " active" : ""}`}
                data-filter={f.key}
                onClick={() => setFilter(f.key)}
              >
                {f.label}
              </button>
            ))}
          </div>
          <div className="portfolio-grid">
            {PROJECTS.map((p) => (
              <article
                key={p.cls}
                className={`portfolio-card ${p.cls}${filter !== "all" && p.cat !== filter ? " hidden" : ""}`}
                data-cat={p.cat}
              >
                <div className="portfolio-visual">
                  <span>{p.tag}</span>
                </div>
                <div>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="client-strip">
        <div className="container">
          <div className="eyebrow">CLIENT ECOSYSTEM</div>
          <p>
            Clients and sectors referenced in the profile include fashion, education, hospital, hotel &amp; resort,
            fashion accessories, real estate, tours &amp; travel, restaurant, retail franchise, interior design,
            website &amp; application and jewellery.
          </p>
          <div className="sector-row">
            <span>Fashion</span>
            <span>Education</span>
            <span>Healthcare</span>
            <span>Hospitality</span>
            <span>Real Estate</span>
            <span>Retail</span>
            <span>Travel</span>
            <span>Jewellery</span>
          </div>
        </div>
      </section>

      <section className="long-section reveal">
        <div className="container long-grid">
          <div>
            <span className="eyebrow">01 / PORTFOLIO APPROACH</span>
            <h2>Selected work across digital, creative and business communication.</h2>
          </div>
          <div className="long-copy">
            <p className="lead">
              The portfolio below uses project names and categories already represented in the existing YES Softech
              website. No fictional clients or case studies are added.
            </p>
            <p>
              Where the existing source gives a concise project description, that description is expanded only to
              explain the business purpose of the listed deliverable.
            </p>
          </div>
        </div>
      </section>

      <section className="long-section alt reveal">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">02 / PROJECT DETAILS</span>
            <h2>Existing YES Softech projects, with more context.</h2>
          </div>
          <div className="project-rich">
            <div className="project-row">
              <span className="mini">Brand Communication</span>
              <h3>Dream World Production</h3>
              <p>
                <strong>Overview:</strong> Logo and brand communication work. <strong>Purpose:</strong> Create a
                recognisable visual identity and consistent communication direction.
              </p>
              <div className="pill-list">
                <span>Branding</span>
                <span>Creative</span>
              </div>
            </div>
            <div className="project-row">
              <span className="mini">Social Media</span>
              <h3>Nirbhya</h3>
              <p>
                <strong>Overview:</strong> Social media creative. <strong>Purpose:</strong> Build consistent, engaging
                visual communication for social platforms.
              </p>
              <div className="pill-list">
                <span>Social Media</span>
                <span>Creative</span>
              </div>
            </div>
            <div className="project-row">
              <span className="mini">E-commerce</span>
              <h3>V K Imports</h3>
              <p>
                <strong>Overview:</strong> E-commerce website. <strong>Purpose:</strong> Present products through a
                dedicated digital storefront experience.
              </p>
              <div className="pill-list">
                <span>Web Development</span>
                <span>E-commerce</span>
              </div>
            </div>
            <div className="project-row">
              <span className="mini">Hospitality / Creative</span>
              <h3>Teastar</h3>
              <p>
                <strong>Overview:</strong> Restaurant menu design. <strong>Purpose:</strong> Make product and menu
                information visually clear for customers.
              </p>
              <div className="pill-list">
                <span>Graphic Design</span>
                <span>Hospitality</span>
              </div>
            </div>
            <div className="project-row">
              <span className="mini">Business Communication</span>
              <h3>KPL</h3>
              <p>
                <strong>Overview:</strong> Brochure and communication work. <strong>Purpose:</strong> Present business
                information in a structured, branded format.
              </p>
              <div className="pill-list">
                <span>Design</span>
                <span>Communication</span>
              </div>
            </div>
            <div className="project-row">
              <span className="mini">Branding</span>
              <h3>American Nuts</h3>
              <p>
                <strong>Overview:</strong> Logo design. <strong>Purpose:</strong> Establish a clear visual mark for
                brand communication.
              </p>
              <div className="pill-list">
                <span>Logo Design</span>
                <span>Branding</span>
              </div>
            </div>
            <div className="project-row">
              <span className="mini">Social Creative</span>
              <h3>SM Sales</h3>
              <p>
                <strong>Overview:</strong> Festival greetings. <strong>Purpose:</strong> Create timely branded
                communication for audience engagement.
              </p>
              <div className="pill-list">
                <span>Social</span>
                <span>Creative</span>
              </div>
            </div>
            <div className="project-row">
              <span className="mini">App Promotion</span>
              <h3>Hem Securities</h3>
              <p>
                <strong>Overview:</strong> App promotion creative. <strong>Purpose:</strong> Communicate the app and
                its value through promotional design.
              </p>
              <div className="pill-list">
                <span>Promotion</span>
                <span>Creative</span>
              </div>
            </div>
            <div className="project-row">
              <span className="mini">E-commerce Social</span>
              <h3>Discount Master</h3>
              <p>
                <strong>Overview:</strong> E-commerce social creative. <strong>Purpose:</strong> Support product-led
                digital communication for an online retail presence.
              </p>
              <div className="pill-list">
                <span>E-commerce</span>
                <span>Social Media</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="long-section reveal">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">03 / HOW WE BUILD PROJECTS</span>
            <h2>A clear path from requirement to support.</h2>
          </div>
          <div className="process-rich">
            <div className="rich-card">
              <span className="step-no">01</span>
              <h3>Requirement</h3>
              <p>Understand the business problem, audience, scope and expected outcome.</p>
            </div>
            <div className="rich-card">
              <span className="step-no">02</span>
              <h3>Planning</h3>
              <p>Define structure, priorities, content, features and execution stages.</p>
            </div>
            <div className="rich-card">
              <span className="step-no">03</span>
              <h3>UI/UX</h3>
              <p>Create a clear visual and interaction direction for the digital experience.</p>
            </div>
            <div className="rich-card">
              <span className="step-no">04</span>
              <h3>Development</h3>
              <p>Build the approved experience with responsive behaviour and required functionality.</p>
            </div>
            <div className="rich-card">
              <span className="step-no">05</span>
              <h3>Testing</h3>
              <p>Review the important screens, devices, interactions, forms and links.</p>
            </div>
            <div className="rich-card">
              <span className="step-no">06</span>
              <h3>Deployment</h3>
              <p>Move the completed experience into its live environment.</p>
            </div>
            <div className="rich-card">
              <span className="step-no">07</span>
              <h3>Support</h3>
              <p>Help with ongoing maintenance and improvements when required.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="long-section alt reveal">
        <div className="container long-grid three">
          <div className="rich-card">
            <span className="mini">WEB DEVELOPMENT</span>
            <h3>Business Websites</h3>
            <p>Structured digital experiences designed to explain the business and make the next action clear.</p>
          </div>
          <div className="rich-card">
            <span className="mini">SOFTWARE</span>
            <h3>Functional Experiences</h3>
            <p>Custom digital solutions for requirements that need more than a static presentation.</p>
          </div>
          <div className="rich-card">
            <span className="mini">HOSPITALITY</span>
            <h3>Experience-led Communication</h3>
            <p>Digital and creative work for hospitality and customer-facing brands.</p>
          </div>
          <div className="rich-card">
            <span className="mini">HEALTHCARE</span>
            <h3>Trust-led Presence</h3>
            <p>Clear digital communication for healthcare-related businesses represented in the company profile.</p>
          </div>
          <div className="rich-card">
            <span className="mini">DIGITAL MARKETING</span>
            <h3>Social &amp; Search</h3>
            <p>Creative, SEO and social media work that supports ongoing online visibility.</p>
          </div>
        </div>
      </section>

      <section className="long-section reveal">
        <div className="container cta-strip">
          <div>
            <span className="eyebrow">04 / YOUR NEXT PROJECT</span>
            <h2>Have a project in mind?</h2>
          </div>
          <Link className="btn btn-gold" to="/contact">
            Let's create something meaningful ↗
          </Link>
        </div>
      </section>
    </>
  );
}
