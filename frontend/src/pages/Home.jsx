import { Link } from "react-router-dom";
import { useDocumentMeta } from "../hooks";

export default function Home() {
  useDocumentMeta({
    title: "YES Softech | Web Development & Digital Marketing Company in Jaipur",
    description:
      "YES Softech is a digital services company in Jaipur offering website design and development, graphic design, SEO, social media optimization and PPC.",
    canonical: "https://www.yessoftech.com/",
  });

  return (
    <>
      <section className="hero hero-home hero-video" aria-label="YES Softech hero section">
        <video
          className="hero-video-bg"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
        >
          <source src="/assets/yes-softech-hero.mp4" type="video/mp4" />
        </video>
        <div className="hero-video-overlay"></div>
        <div className="container hero-grid hero-video-grid">
          <div className="hero-copy hero-video-copy reveal visible">
            <div className="eyebrow">
              <span></span> YES SOFTECH
            </div>
            <h1>
              Grow your business with
              <br />
              <em>YES Softech.</em>
            </h1>
            <p>
              We build powerful digital experiences, websites and marketing strategies that help businesses grow,
              connect and stand out.
            </p>
            <div className="hero-actions">
              <Link className="btn btn-gold" to="/contact">
                Let's Talk <span>→</span>
              </Link>
              <Link className="btn btn-outline hero-outline-btn" to="/services">
                Our Services <span>→</span>
              </Link>
            </div>
            <div className="hero-trust hero-reference-trust">
              <div><span className="dot"></span> Web Development</div>
              <div><span className="dot"></span> Digital Marketing</div>
              <div><span className="dot"></span> Creative Solutions</div>
            </div>
          </div>
        </div>
        <div className="scroll-cue">
          <span></span> Scroll to explore
        </div>
      </section>

      <section className="section intro-section">
        <div className="container split-intro">
          <div className="section-kicker reveal">01 / WHO WE ARE</div>
          <div className="intro-content reveal delay-1">
            <h2>
              We make digital feel <em>human.</em>
            </h2>
            <p className="lead">
              YES Softech is a social media communications and IT services company based in India. We understand brands,
              their audiences and the digital spaces where conversations happen.
            </p>
            <p>
              Our approach combines strategy, design, development and performance. The goal is not to simply push a
              product — it is to create communication that adds value to customers and stakeholders.
            </p>
            <Link className="text-link" to="/about">
              Discover our story <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="visual-band band-strategy">
        <div className="image-overlay"></div>
        <div className="container visual-content">
          <div className="eyebrow">THE YES SOFTECH METHOD</div>
          <h2>
            Understand first.
            <br />
            <em>Build with purpose.</em>
          </h2>
          <p>We sit down with clients, understand the exact requirement, set goals and build a consistent digital approach around the business.</p>
        </div>
      </section>

      <section className="section services-preview">
        <div className="container">
          <div className="section-head reveal">
            <div>
              <div className="section-kicker">02 / CAPABILITIES</div>
              <h2>
                Everything your digital
                <br />
                <em>presence needs.</em>
              </h2>
            </div>
            <Link className="text-link" to="/services">
              View all services <span>→</span>
            </Link>
          </div>
          <div className="service-grid">
            <Link className="service-card reveal" to="/services#web">
              <span className="service-no">01</span>
              <div className="service-icon">⌁</div>
              <h3>Website Design &amp; Development</h3>
              <p>Custom websites, e-commerce, CMS and responsive digital experiences built around your business.</p>
              <span className="card-arrow">↗</span>
            </Link>
            <Link className="service-card reveal delay-1" to="/services#social">
              <span className="service-no">02</span>
              <div className="service-icon">◌</div>
              <h3>Social Media &amp; Content</h3>
              <p>Strategy, content creation, community management and campaigns that make brands worth following.</p>
              <span className="card-arrow">↗</span>
            </Link>
            <Link className="service-card reveal delay-2" to="/services#seo">
              <span className="service-no">03</span>
              <div className="service-icon">⌕</div>
              <h3>SEO &amp; Online Marketing</h3>
              <p>Search visibility, audience growth and performance-focused digital marketing built for measurable outcomes.</p>
              <span className="card-arrow">↗</span>
            </Link>
            <Link className="service-card reveal delay-3" to="/services#creative">
              <span className="service-no">04</span>
              <div className="service-icon">✦</div>
              <h3>Graphic &amp; Brand Design</h3>
              <p>Logos, packaging, brochures, flyers, business identity and social creatives that build recognition.</p>
              <span className="card-arrow">↗</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="visual-band band-growth">
        <div className="image-overlay"></div>
        <div className="container visual-content right">
          <div className="eyebrow">BUILT FOR GROWTH</div>
          <h2>
            From first click
            <br />
            to <em>lasting recall.</em>
          </h2>
          <p>Our work connects brand identity, digital experience, discoverability and audience engagement into one coherent system.</p>
        </div>
      </section>

      <section className="section process-section">
        <div className="container">
          <div className="section-head reveal">
            <div>
              <div className="section-kicker">03 / HOW WE WORK</div>
              <h2>
                A step-by-step process
                <br />
                <em>without the noise.</em>
              </h2>
            </div>
          </div>
          <div className="process-grid">
            <div className="process-item reveal">
              <span>01</span>
              <h3>Discover</h3>
              <p>Business, audience, objectives and opportunity mapping.</p>
            </div>
            <div className="process-item reveal delay-1">
              <span>02</span>
              <h3>Strategize</h3>
              <p>A clear roadmap connecting creative and business goals.</p>
            </div>
            <div className="process-item reveal delay-2">
              <span>03</span>
              <h3>Create</h3>
              <p>Design, content, development and campaigns brought to life.</p>
            </div>
            <div className="process-item reveal delay-3">
              <span>04</span>
              <h3>Deploy</h3>
              <p>Launch, optimize, measure and keep improving.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section work-section">
        <div className="container">
          <div className="section-head reveal">
            <div>
              <div className="section-kicker">04 / SELECTED WORK</div>
              <h2>
                Work that speaks
                <br />
                <em>for itself.</em>
              </h2>
            </div>
            <Link className="text-link" to="/portfolio">
              See portfolio <span>→</span>
            </Link>
          </div>
          <div className="work-grid">
            <article className="work-card large reveal">
              <div className="work-image work-one">
                <span>BRAND</span>
              </div>
              <div>
                <h3>Dream World Production</h3>
                <p>Identity &amp; creative communication</p>
              </div>
            </article>
            <article className="work-card reveal delay-1">
              <div className="work-image work-two">
                <span>ECOMMERCE</span>
              </div>
              <div>
                <h3>V K Imports</h3>
                <p>E-commerce experience</p>
              </div>
            </article>
            <article className="work-card reveal delay-2">
              <div className="work-image work-three">
                <span>SOCIAL</span>
              </div>
              <div>
                <h3>Nirbhya</h3>
                <p>Social campaign creative</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section home-awards-section">
        <div className="container">
          <div className="section-head reveal">
            <div>
              <div className="section-kicker">05 / AWARDS &amp; RECOGNITION</div>
              <h2>
                Work recognised beyond
                <br />
                <em>the screen.</em>
              </h2>
            </div>
            <Link className="text-link" to="/about#awards">View all recognitions <span>→</span></Link>
          </div>
          <div className="home-awards-grid">
            <article className="home-award-card reveal">
              <div className="home-award-image"><img src="/assets/award-lifetime-achievement.jpg" alt="Lifetime Achievement Award" loading="lazy" /></div>
              <div><span>ENTREPRENEURSHIP</span><h3>Lifetime Achievement Award</h3><p>Multinational Book of World Record recognition.</p></div>
            </article>
            <article className="home-award-card reveal delay-1">
              <div className="home-award-image"><img src="/assets/award-glf-excellence-2022.jpg" alt="GLF Excellence Awards 2022" loading="lazy" /></div>
              <div><span>INFORMATION TECHNOLOGY</span><h3>GLF Excellence Awards 2022</h3><p>Recognition in the field of IT.</p></div>
            </article>
            <article className="home-award-card reveal delay-2">
              <div className="home-award-image"><img src="/assets/award-lifetime-event.jpg" alt="Recognition event" loading="lazy" /></div>
              <div><span>RECOGNITION MOMENT</span><h3>Golden Book Recognition</h3><p>Dharti Ke Bhagwan recognition recorded in the company profile.</p></div>
            </article>
          </div>
        </div>
      </section>

      <section className="visual-band band-people">
        <div className="image-overlay"></div>
        <div className="container visual-content">
          <div className="eyebrow">PEOPLE BEHIND THE WORK</div>
          <h2>
            15+ dynamic minds.
            <br />
            <em>One shared standard.</em>
          </h2>
          <p>
            Our team brings together graphic designers, social media managers, content writers and strategy developers —
            people who follow the digital world wherever it goes.
          </p>
          <Link className="btn btn-outline" to="/team">
            Meet the team <span>↗</span>
          </Link>
        </div>
      </section>

      <section className="section testimonial-section">
        <div className="container">
          <div className="section-kicker">05 / CLIENT VOICES</div>
          <div className="quote-wrap reveal">
            <div className="quote-mark">“</div>
            <blockquote>
              Under tight deadlines and with high expectations, YES Softech was a pleasure to partner with on a
              high-profile political campaign website.
            </blockquote>
            <div className="quote-author">
              Amit Khandelwal <span>· Director, Vedant Enterprises</span>
            </div>
          </div>
        </div>
      </section>

      <section className="long-section alt home-reviews-section reveal">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">05 / CLIENT REVIEWS</span>
              <h2>Trusted by clients who <em>know the difference.</em></h2>
            </div>
            <Link className="text-link" to="/reviews">View all reviews <span>→</span></Link>
          </div>
          <div className="home-reviews-grid">
            <article className="home-review-card">
              <div className="review-stars">★★★★★</div>
              <p>“Under tight deadlines and with high expectations, Yes Softech was a pleasure to partner with...”</p>
              <strong>Mr. Amit Khandelwal</strong>
              <span>Director · Vedant Enterprises</span>
            </article>
            <article className="home-review-card">
              <div className="review-stars">★★★★★</div>
              <p>“We have worked with Yes Softech on various projects, and find that they provide quality service and expertise...”</p>
              <strong>Mr. Deepak Khandelwal</strong>
              <span>Director · Teastar Cafe</span>
            </article>
            <article className="home-review-card">
              <div className="review-stars">★★★★★</div>
              <p>“I am really impressed by the quality of services I received from Yes Softech...”</p>
              <strong>Mr. Krishan Avtar Bajargan</strong>
              <span>Director · Hotel The Orion</span>
            </article>
          </div>
        </div>
      </section>

      <section className="long-section home-blog-section reveal">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">06 / LATEST FROM THE BLOG</span>
              <h2>Ideas, insights and <em>digital thinking.</em></h2>
            </div>
            <Link className="text-link" to="/blog">Explore all articles <span>→</span></Link>
          </div>
          <div className="home-blog-grid">
            <article className="home-blog-card">
              <span className="eyebrow">BRAND DESIGN</span>
              <div className="blog-date">09 Sept. 2025</div>
              <h3>Smart Packaging, Smarter Sales: Leading Package Design Service in Jaipur</h3>
              <p>Packaging can work as a product’s silent salesperson when creativity and strategy come together.</p>
              <Link className="text-link" to="/blog">Read article <span>→</span></Link>
            </article>
            <article className="home-blog-card">
              <span className="eyebrow">WEB DEVELOPMENT</span>
              <div className="blog-date">25 Aug. 2025</div>
              <h3>Website Development Company in Jaipur – Your Gateway to Digital Growth</h3>
              <p>A modern website can become the backbone of a brand’s digital identity and growth journey.</p>
              <Link className="text-link" to="/blog">Read article <span>→</span></Link>
            </article>
            <article className="home-blog-card">
              <span className="eyebrow">DIGITAL MARKETING</span>
              <div className="blog-date">25 Aug. 2025</div>
              <h3>Online Marketing Company in Jaipur – Driving Brands Toward Digital Growth</h3>
              <p>SEO, social media, PPC, creative content and analytics can work together as one growth system.</p>
              <Link className="text-link" to="/blog">Read article <span>→</span></Link>
            </article>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container cta-inner">
          <div className="eyebrow">READY WHEN YOU ARE</div>
          <h2>
            Let's build something
            <br />
            <em>worth remembering.</em>
          </h2>
          <Link className="btn btn-gold" to="/contact">
            Start your project <span>↗</span>
          </Link>
        </div>
      </section>

      <section className="long-section reveal">
        <div className="container long-grid">
          <div>
            <span className="eyebrow">01 / COMPANY INTRODUCTION</span>
            <h2>Technology, creativity and business growth — working together.</h2>
          </div>
          <div className="long-copy">
            <p className="lead">
              YES Softech works as a digital partner for businesses that need more than a website or a social media page.
              We bring strategy, design, development and digital marketing into one connected workflow.
            </p>
            <p>
              From a first conversation to launch and ongoing improvement, our focus is on understanding what the
              business needs to communicate, how customers discover it, and what the digital experience should help
              them achieve.
            </p>
            <p>
              Our work is designed to be practical: clear interfaces, purposeful content, dependable development and
              marketing activity that supports the wider business objective.
            </p>
          </div>
        </div>
      </section>

      <section className="long-section alt reveal">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">02 / WHAT WE DO</span>
            <h2>Digital services that cover the full journey.</h2>
          </div>
          <div className="long-grid three">
            <div className="rich-card">
              <span className="mini">01</span>
              <h3>Website Development</h3>
              <p>Responsive business websites, corporate pages, landing pages and custom digital experiences built around the brand and its audience.</p>
            </div>
            <div className="rich-card">
              <span className="mini">02</span>
              <h3>Web Applications</h3>
              <p>Purpose-built web experiences for workflows, customer interactions and business requirements where a standard website is not enough.</p>
            </div>
            <div className="rich-card">
              <span className="mini">03</span>
              <h3>Mobile App Development</h3>
              <p>Mobile-focused digital products planned around usability, performance and the practical needs of the business.</p>
            </div>
            <div className="rich-card">
              <span className="mini">04</span>
              <h3>UI/UX Design</h3>
              <p>Clean visual systems and user journeys that make digital products easier to understand, navigate and use.</p>
            </div>
            <div className="rich-card">
              <span className="mini">05</span>
              <h3>Software Development</h3>
              <p>Custom software thinking for businesses that need technology shaped around their processes rather than a one-size-fits-all template.</p>
            </div>
            <div className="rich-card">
              <span className="mini">06</span>
              <h3>Digital Marketing</h3>
              <p>SEO, social media, paid campaigns and creative communication working together to strengthen online visibility and engagement.</p>
            </div>
            <div className="rich-card">
              <span className="mini">07</span>
              <h3>E-commerce Solutions</h3>
              <p>Online storefront experiences with product presentation, responsive design and customer journeys built for digital commerce.</p>
            </div>
            <div className="rich-card">
              <span className="mini">08</span>
              <h3>Graphic &amp; Brand Design</h3>
              <p>Brand-led creative for digital and communication needs, keeping visual identity consistent across touchpoints.</p>
            </div>
            <div className="rich-card">
              <span className="mini">09</span>
              <h3>Maintenance &amp; Support</h3>
              <p>Post-launch assistance, updates and ongoing digital support to keep the experience useful as the business evolves.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="long-section reveal">
        <div className="container long-grid">
          <div>
            <span className="eyebrow">03 / WHY YES SOFTECH</span>
            <h2>A business-first approach to digital work.</h2>
          </div>
          <div className="feature-list">
            <div>
              <strong>Business-focused solutions</strong>
              <br />
              We start with the requirement, not the technology.
            </div>
            <div>
              <strong>Modern technologies</strong>
              <br />
              Use current tools where they genuinely improve the result.
            </div>
            <div>
              <strong>Custom development</strong>
              <br />
              Adapt the solution to the business instead of forcing a fixed template.
            </div>
            <div>
              <strong>Responsive experiences</strong>
              <br />
              Design and build for desktop, tablet and mobile visitors.
            </div>
            <div>
              <strong>Scalable thinking</strong>
              <br />
              Keep future updates and growth in mind from the beginning.
            </div>
            <div>
              <strong>Transparent communication</strong>
              <br />
              Keep requirements, progress and next steps clear.
            </div>
            <div>
              <strong>Long-term support</strong>
              <br />
              Stay useful after launch through maintenance and improvement.
            </div>
          </div>
        </div>
      </section>

      <section className="long-section alt reveal">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">04 / TECHNOLOGY &amp; EXPERTISE</span>
            <h2>The tools behind the work.</h2>
            <p>Our existing digital work is built around practical web, database, CMS, API, hosting and marketing capabilities.</p>
          </div>
          <div className="pill-list">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>React</span>
            <span>Node.js</span>
            <span>PHP</span>
            <span>MySQL</span>
            <span>MongoDB</span>
            <span>WordPress</span>
            <span>APIs</span>
            <span>Cloud &amp; Hosting</span>
            <span>SEO</span>
            <span>Digital Marketing</span>
          </div>
        </div>
      </section>

      <section className="long-section reveal">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">05 / OUR PROCESS</span>
            <h2>From first conversation to launch.</h2>
          </div>
          <div className="process-rich">
            <div className="rich-card">
              <span className="step-no">01 / DISCOVER</span>
              <h3>Understand the requirement</h3>
              <p>We clarify the business, audience, current situation and the outcome the project needs to support.</p>
            </div>
            <div className="rich-card">
              <span className="step-no">02 / PLAN</span>
              <h3>Turn needs into a direction</h3>
              <p>We organise scope, priorities, content, technical needs and the path from idea to execution.</p>
            </div>
            <div className="rich-card">
              <span className="step-no">03 / DESIGN</span>
              <h3>Create the experience</h3>
              <p>We shape layouts, visual hierarchy and user journeys before the experience moves into development.</p>
            </div>
            <div className="rich-card">
              <span className="step-no">04 / DEVELOP</span>
              <h3>Build with purpose</h3>
              <p>The approved direction is translated into responsive, functional digital experiences.</p>
            </div>
            <div className="rich-card">
              <span className="step-no">05 / TEST</span>
              <h3>Check the details</h3>
              <p>Responsive behaviour, interactions, forms, links and key user journeys are reviewed before release.</p>
            </div>
            <div className="rich-card">
              <span className="step-no">06 / LAUNCH &amp; SUPPORT</span>
              <h3>Go live and keep improving</h3>
              <p>Launch is followed by practical support so the digital presence can continue to evolve.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="long-section alt reveal">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">06 / INDUSTRIES</span>
            <h2>Different businesses. Different digital needs.</h2>
          </div>
          <div className="long-grid three">
            <div className="rich-card">
              <h3>Hospitality</h3>
              <p>Websites and digital communication that help hotels, resorts and hospitality brands present their experience clearly.</p>
            </div>
            <div className="rich-card">
              <h3>Healthcare</h3>
              <p>Clear, trust-led digital experiences for hospitals, clinics and healthcare-focused businesses.</p>
            </div>
            <div className="rich-card">
              <h3>E-commerce</h3>
              <p>Product-led experiences for brands selling and communicating through digital channels.</p>
            </div>
            <div className="rich-card">
              <h3>Education</h3>
              <p>Accessible websites and communication systems for educational organisations and initiatives.</p>
            </div>
            <div className="rich-card">
              <h3>Startups</h3>
              <p>Focused digital foundations for businesses building their identity, product or market presence.</p>
            </div>
            <div className="rich-card">
              <h3>Local Businesses</h3>
              <p>Practical websites, search visibility and digital communication for businesses serving local customers.</p>
            </div>
            <div className="rich-card">
              <h3>Professional Services</h3>
              <p>Credible digital profiles that explain expertise, services and the next step for prospective clients.</p>
            </div>
            <div className="rich-card">
              <h3>Corporate Businesses</h3>
              <p>Structured digital experiences that support a clear and professional business presence.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="long-section reveal">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">07 / FEATURED PROJECTS</span>
            <h2>Work that speaks for itself.</h2>
          </div>
          <div className="project-rich">
            <div className="project-row">
              <span className="mini">Hospitality / Production</span>
              <h3>Dream World Production</h3>
              <p>Brand and communication work represented in the existing YES Softech portfolio.</p>
              <Link className="text-link" to="/portfolio">
                View project ↗
              </Link>
            </div>
            <div className="project-row">
              <span className="mini">E-commerce</span>
              <h3>V K Imports</h3>
              <p>An e-commerce website project listed in the existing portfolio.</p>
              <Link className="text-link" to="/portfolio">
                View project ↗
              </Link>
            </div>
            <div className="project-row">
              <span className="mini">Social Media</span>
              <h3>Nirbhya</h3>
              <p>Social media creative work from the existing portfolio.</p>
              <Link className="text-link" to="/portfolio">
                View project ↗
              </Link>
            </div>
            <div className="project-row">
              <span className="mini">Digital / Creative</span>
              <h3>American Nuts</h3>
              <p>Logo design work represented in the existing portfolio.</p>
              <Link className="text-link" to="/portfolio">
                View project ↗
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="long-section alt reveal">
        <div className="container">
          <div className="long-grid">
            <div>
              <span className="eyebrow">08 / TRUST</span>
              <h2>Built around people, not just deliverables.</h2>
            </div>
            <div className="long-copy">
              <p className="lead">
                We believe a digital project works best when business understanding, creative thinking and dependable
                execution stay connected.
              </p>
              <p>
                Instead of adding unverified numbers, awards or claims, YES Softech's strongest trust signal is the
                breadth of disciplines represented in its existing work: development, design, SEO, social media,
                content, strategy and digital communication.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="long-section reveal">
        <div className="container cta-strip">
          <div>
            <span className="eyebrow">09 / START A PROJECT</span>
            <h2>Have an idea? Let's build it together.</h2>
          </div>
          <Link className="btn btn-gold" to="/contact">
            Start a Project ↗
          </Link>
        </div>
      </section>

      <section className="home-faq long-section alt reveal" id="faq">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">10 / FAQ</span>
            <h2>Questions? We have answers.</h2>
            <p>Everything you need to know before starting your digital project with YES Softech.</p>
          </div>
          <div className="faq-grid">
            <details>
              <summary>What services does YES Softech provide?</summary>
              <p>
                YES Softech works across website and web application development, software solutions, UI/UX,
                e-commerce, SEO, digital marketing, social media and graphic design.
              </p>
            </details>
            <details>
              <summary>Can you build a website according to our business needs?</summary>
              <p>
                Yes. We can plan the website around your business goals, audience, content and required functionality
                rather than using a one-size-fits-all approach.
              </p>
            </details>
            <details>
              <summary>Do you work with startups and small businesses?</summary>
              <p>Yes. Solutions can be planned according to the business stage, objectives and project scope.</p>
            </details>
            <details>
              <summary>Can you redesign our existing website?</summary>
              <p>
                Yes. An existing website can be improved in terms of design, responsiveness, user experience, content
                presentation and functionality.
              </p>
            </details>
            <details>
              <summary>Do you provide SEO and digital marketing?</summary>
              <p>
                Yes. SEO, social media marketing and other digital marketing services can be combined with development
                and creative work when required.
              </p>
            </details>
            <details>
              <summary>How can I start a project with YES Softech?</summary>
              <p>
                Use the Start a Project button or contact form to share your requirement. The team can then understand
                the project and discuss the next steps.
              </p>
            </details>
          </div>
          <div className="faq-cta">
            <span>Still have a question?</span>
            <Link className="text-link" to="/contact">
              Talk to our team ↗
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
