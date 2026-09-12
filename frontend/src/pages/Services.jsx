import { Link } from "react-router-dom";
import { useDocumentMeta } from "../hooks";

const DETAILED_SERVICES = [
  {
    id: "website-development",
    step: "02",
    title: "Website Development",
    lead: "Responsive websites, business websites, corporate websites and landing pages designed around the brand and its audience.",
    features: [
      "Responsive layouts across devices",
      "Custom UI and content structure",
      "Business and corporate websites",
      "Landing pages and campaign experiences",
      "CMS/e-commerce where relevant",
      "Performance and SEO-friendly structure",
    ],
    cta: "Discuss Website Development",
  },
  {
    id: "web-application-development",
    step: "03",
    title: "Web Application Development",
    lead: "Custom web applications for businesses that need functionality beyond a standard informational website.",
    features: [
      "Requirement-led application planning",
      "Responsive user interfaces",
      "Forms, workflows and integrations",
      "API-connected experiences where required",
      "Scalable structure for future changes",
      "Testing across important user journeys",
    ],
    cta: "Discuss Web Application Development",
  },
  {
    id: "mobile-app-development",
    step: "04",
    title: "Mobile App Development",
    lead: "Mobile-focused digital products planned around usability, practical workflows and the needs of the intended audience.",
    features: [
      "User-flow planning",
      "Mobile-first interface thinking",
      "Business and customer use cases",
      "API/backend integration where required",
      "Usability-focused experience",
      "Release and post-launch support",
    ],
    cta: "Discuss Mobile App Development",
  },
  {
    id: "ui-ux-design",
    step: "05",
    title: "UI/UX Design",
    lead: "Interfaces that make information, actions and brand communication easier to understand.",
    features: [
      "Wireframe and page structure",
      "Visual hierarchy",
      "Responsive experience planning",
      "Navigation and user journeys",
      "Brand-consistent visual direction",
      "Design handoff for development",
    ],
    cta: "Discuss UI/UX Design",
  },
  {
    id: "e-commerce-development",
    step: "06",
    title: "E-commerce Development",
    lead: "Digital storefront experiences that present products clearly and guide customers through the buying journey.",
    features: [
      "Product presentation",
      "Responsive storefronts",
      "Category and navigation structure",
      "Conversion-focused page hierarchy",
      "CMS/platform integration where relevant",
      "Performance and mobile usability",
    ],
    cta: "Discuss E-commerce Development",
  },
  {
    id: "software-development",
    step: "07",
    title: "Software Development",
    lead: "Business-focused software thinking for requirements that need a custom solution rather than a fixed website template.",
    features: [
      "Requirement analysis",
      "Custom feature planning",
      "Database-backed workflows",
      "API and integration planning",
      "Responsive interfaces",
      "Testing and maintenance planning",
    ],
    cta: "Discuss Software Development",
  },
  {
    id: "digital-marketing",
    step: "08",
    title: "Digital Marketing",
    lead: "Connected digital marketing support across creative, social, search and paid channels.",
    features: [
      "Campaign planning",
      "Content and creative direction",
      "Social media activity",
      "SEO support",
      "Paid campaign support",
      "Performance review and refinement",
    ],
    cta: "Discuss Digital Marketing",
  },
  {
    id: "seo",
    step: "09",
    title: "SEO",
    lead: "Search-focused work that helps a business build a stronger and clearer presence for relevant queries.",
    features: [
      "On-page structure",
      "Keyword and content direction",
      "Technical SEO considerations",
      "Local visibility support",
      "Search-friendly content",
      "Ongoing review and improvement",
    ],
    cta: "Discuss SEO",
  },
  {
    id: "social-media-marketing",
    step: "10",
    title: "Social Media Marketing",
    lead: "Strategy-led social media management that connects brand voice, content and audience interaction.",
    features: [
      "Content planning",
      "Platform management",
      "Creative coordination",
      "Community interaction",
      "Campaign support",
      "Performance observation",
    ],
    cta: "Discuss Social Media Marketing",
  },
  {
    id: "graphic-and-brand-design",
    step: "11",
    title: "Graphic & Brand Design",
    lead: "Visual communication for brands that need consistent creative across digital and business touchpoints.",
    features: [
      "Brand-led visual direction",
      "Social media creative",
      "Marketing graphics",
      "Digital communication assets",
      "Presentation consistency",
      "Creative support for campaigns",
    ],
    cta: "Discuss Graphic & Brand Design",
  },
  {
    id: "maintenance-and-support",
    step: "12",
    title: "Maintenance & Support",
    lead: "Post-launch assistance that keeps websites and digital experiences useful as content, requirements and technology change.",
    features: [
      "Content and minor updates",
      "Issue investigation",
      "Performance checks",
      "Technical support",
      "Ongoing improvements",
      "Launch-to-support continuity",
    ],
    cta: "Discuss Maintenance & Support",
  },
];

export default function Services() {
  useDocumentMeta({
    title: "Services | Web Development, SEO & Digital Marketing | YES Softech",
    description:
      "Explore YES Softech services including website design and development, graphic design, SEO, social media optimization, online marketing and PPC.",
    canonical: "https://www.yessoftech.com/services.html",
  });

  return (
    <>
      <section className="page-hero services-hero">
        <div className="container page-hero-inner">
          <div className="eyebrow">CAPABILITIES</div>
          <h1>
            Digital services,
            <br />
            <em>built around you.</em>
          </h1>
          <p>From first idea to measurable growth — a connected team for your digital ecosystem.</p>
        </div>
      </section>

      <section className="section services-list">
        <div className="container">
          <article className="service-detail" id="web">
            <div className="service-index">01</div>
            <div>
              <div className="eyebrow">WEB</div>
              <h2>
                Website Design &amp; <em>Development</em>
              </h2>
              <p className="lead">
                Your website is your digital face. We design and develop custom experiences that reflect your values,
                engage visitors and support business growth.
              </p>
              <div className="tag-row">
                <span>Custom Development</span>
                <span>E-Commerce</span>
                <span>CMS</span>
                <span>Responsive UX</span>
                <span>SEO Ready</span>
                <span>Maintenance</span>
              </div>
            </div>
          </article>
          <article className="service-detail" id="social">
            <div className="service-index">02</div>
            <div>
              <div className="eyebrow">SOCIAL</div>
              <h2>
                Social Media <em>Management</em>
              </h2>
              <p className="lead">
                Strategy, content, posting, community management, reputation support, business-page optimization and
                performance reporting.
              </p>
              <div className="feature-columns">
                <ul>
                  <li>Social account setup</li>
                  <li>Social media strategy</li>
                  <li>Content creation</li>
                  <li>Posting &amp; scheduling</li>
                </ul>
                <ul>
                  <li>Social listening</li>
                  <li>Business page optimization</li>
                  <li>Key performance reporting</li>
                  <li>Reputation management</li>
                </ul>
              </div>
            </div>
          </article>
          <article className="service-detail" id="seo">
            <div className="service-index">03</div>
            <div>
              <div className="eyebrow">PERFORMANCE</div>
              <h2>
                SEO &amp; <em>Online Marketing</em>
              </h2>
              <p className="lead">
                Search and digital marketing solutions designed to improve discoverability, connect with the right
                audience and support lead generation.
              </p>
              <div className="tag-row">
                <span>SEO Strategy</span>
                <span>Keyword Research</span>
                <span>On-Page SEO</span>
                <span>Local SEO</span>
                <span>Online Marketing</span>
                <span>Analytics</span>
              </div>
            </div>
          </article>
          <article className="service-detail" id="ppc">
            <div className="service-index">04</div>
            <div>
              <div className="eyebrow">PAID GROWTH</div>
              <h2>
                Pay Per Click <em>&amp; Paid Social</em>
              </h2>
              <p className="lead">
                Campaign planning, creative development, media buying and remarketing designed to give your business a
                targeted digital boost.
              </p>
              <div className="feature-columns">
                <ul>
                  <li>Industry &amp; keyword research</li>
                  <li>Creative development</li>
                  <li>Campaign management</li>
                </ul>
                <ul>
                  <li>Media buying</li>
                  <li>Remarketing pixels</li>
                  <li>Performance optimization</li>
                </ul>
              </div>
            </div>
          </article>
          <article className="service-detail" id="creative">
            <div className="service-index">05</div>
            <div>
              <div className="eyebrow">CREATIVE</div>
              <h2>
                Graphic &amp; <em>Brand Design</em>
              </h2>
              <p className="lead">
                Visual systems that help brands look consistent, credible and memorable across physical and digital
                touchpoints.
              </p>
              <div className="tag-row">
                <span>Logo Design</span>
                <span>Packaging</span>
                <span>Brochures</span>
                <span>Flyers</span>
                <span>Business Identity</span>
                <span>Social Creatives</span>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="visual-band band-services">
        <div className="image-overlay"></div>
        <div className="container visual-content">
          <div className="eyebrow">CONNECTED CAPABILITIES</div>
          <h2>
            One team.
            <br />
            <em>Many digital disciplines.</em>
          </h2>
          <p>Web, creative, social, search and paid growth work better when they share the same strategy.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-kicker">06 / OUR APPROACH</div>
          <div className="service-process">
            <div>
              <span>01</span>
              <h3>Information Gathering</h3>
            </div>
            <div>
              <span>02</span>
              <h3>Strategy Build-up</h3>
            </div>
            <div>
              <span>03</span>
              <h3>Plan-of-Action</h3>
            </div>
            <div>
              <span>04</span>
              <h3>Creative &amp; Development</h3>
            </div>
            <div>
              <span>05</span>
              <h3>Deploy &amp; Go Live</h3>
            </div>
            <div>
              <span>06</span>
              <h3>Analyze &amp; Report</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="long-section reveal">
        <div className="container long-grid">
          <div>
            <span className="eyebrow">01 / SERVICE APPROACH</span>
            <h2>Every service starts with the business requirement.</h2>
          </div>
          <div className="long-copy">
            <p className="lead">
              YES Softech's service mix covers technology, design and digital marketing so businesses can solve a
              specific requirement without losing sight of the wider customer journey.
            </p>
            <p>
              The detailed capabilities below expand the existing service offering while keeping the language grounded
              in the services represented by the company profile.
            </p>
          </div>
        </div>
      </section>

      {DETAILED_SERVICES.map((svc, idx) => (
        <section className={`long-section${idx % 2 === 1 ? " alt" : ""} reveal`} id={svc.id} key={svc.id}>
          <div className="container">
            <div className="long-grid">
              <div>
                <span className="eyebrow">{svc.step} / SERVICE</span>
                <h2>{svc.title}</h2>
                <p className="lead">{svc.lead}</p>
              </div>
              <div>
                <div className="feature-list">
                  {svc.features.map((f) => (
                    <div key={f}>
                      <strong>{f}</strong>
                    </div>
                  ))}
                </div>
                <p className="long-copy">
                  The right scope depends on the business, audience and existing digital setup. We use the requirement
                  to decide what should be designed, developed, integrated or supported rather than adding technology
                  for its own sake.
                </p>
                <Link className="btn btn-outline" to="/contact">
                  {svc.cta} ↗
                </Link>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="long-section reveal">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">13 / OUR DEVELOPMENT PROCESS</span>
            <h2>Requirement → Planning → Design → Development → Testing → Deployment → Support.</h2>
          </div>
          <div className="process-rich">
            <div className="rich-card">
              <span className="step-no">01 / REQUIREMENT</span>
              <h3>Listen first</h3>
              <p>Understand the business objective, audience, existing setup and scope before proposing the solution.</p>
            </div>
            <div className="rich-card">
              <span className="step-no">02 / PLANNING</span>
              <h3>Set the direction</h3>
              <p>Organise content, features, priorities, technology and project stages into a clear plan.</p>
            </div>
            <div className="rich-card">
              <span className="step-no">03 / UI/UX</span>
              <h3>Design the experience</h3>
              <p>Shape page structure, interaction and visual hierarchy around how people will use the product.</p>
            </div>
            <div className="rich-card">
              <span className="step-no">04 / DEVELOPMENT</span>
              <h3>Build the system</h3>
              <p>Translate the approved direction into responsive interfaces and functional digital experiences.</p>
            </div>
            <div className="rich-card">
              <span className="step-no">05 / TESTING</span>
              <h3>Review the details</h3>
              <p>Check responsiveness, interactions, forms, links and important journeys before release.</p>
            </div>
            <div className="rich-card">
              <span className="step-no">06 / DEPLOYMENT</span>
              <h3>Launch confidently</h3>
              <p>Prepare the digital experience for its live environment and hand over the next steps.</p>
            </div>
            <div className="rich-card">
              <span className="step-no">07 / SUPPORT</span>
              <h3>Keep it useful</h3>
              <p>Continue with updates, maintenance and improvement when ongoing support is needed.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="long-section alt reveal">
        <div className="container cta-strip">
          <div>
            <span className="eyebrow">14 / START A PROJECT</span>
            <h2>Tell us what you need. We'll work out the right digital path.</h2>
          </div>
          <Link className="btn btn-gold" to="/contact">
            Start a Project ↗
          </Link>
        </div>
      </section>
    </>
  );
}
