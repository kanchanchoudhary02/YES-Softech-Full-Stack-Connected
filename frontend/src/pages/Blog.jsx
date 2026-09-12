import { Link } from "react-router-dom";
import { useDocumentMeta } from "../hooks";

export const posts = [
  {
    date: "09 Sept. 2025",
    title: "Smart Packaging, Smarter Sales: Leading Package Design Service in Jaipur",
    slug: "smart-packaging-smarter-sales",
    excerpt: "How professional packaging blends creativity and strategy to attract attention, build recall and support sales.",
    url: "https://www.yessoftech.com/smart-packaging-design-jaipur-blog.html",
    tag: "Brand Design",
  },
  {
    date: "25 Aug. 2025",
    title: "Website Development Company in Jaipur – Your Gateway to Digital Growth",
    slug: "website-development-company-jaipur",
    excerpt: "Why a responsive, modern website can strengthen visibility, trust, conversions and long-term digital growth.",
    url: "https://www.yessoftech.com/website-development-company-in-jaipur-blog.html",
    tag: "Web Development",
  },
  {
    date: "25 Aug. 2025",
    title: "Online Marketing Company in Jaipur – Driving Brands Toward Digital Growth",
    slug: "online-marketing-company-jaipur",
    excerpt: "A look at SEO, social media, PPC, creative content and analytics as connected parts of online marketing.",
    url: "https://www.yessoftech.com/online-marketing-company-in-jaipur-blog.html",
    tag: "Digital Marketing",
  },
  {
    date: "23 Aug. 2025",
    title: "Web Design Company in Jaipur – Shaping the Future of Digital Presence",
    slug: "web-design-company-jaipur",
    excerpt: "Why modern web design should attract the right audience, guide visitors and support measurable business results.",
    url: "https://www.yessoftech.com/web-design-company-in-jaipur-blog.html",
    tag: "Web Design",
  },
  {
    date: "23 Aug. 2025",
    title: "Beyond Hashtags: How a Social Media Marketing Company in Jaipur Builds Connections",
    slug: "social-media-marketing-jaipur",
    excerpt: "Moving beyond posting to create meaningful audience connections and consistent brand communication.",
    url: "https://www.yessoftech.com/social-media-marketing-company-in-jaipur-blog.html",
    tag: "Social Media",
  },
  {
    date: "21 Aug. 2025",
    title: "Your Growth Partner: Best Website Development Company in Jaipur",
    slug: "best-website-development-company-jaipur",
    excerpt: "A business website should work as a growth asset, not simply as an online brochure.",
    url: "https://www.yessoftech.com/best-website-development-company-in-jaipur-blog.html",
    tag: "Growth",
  },
  {
    date: "21 Aug. 2025",
    title: "Boost Your Brand Online with the Best SEO Company in Jaipur",
    slug: "best-seo-company-jaipur",
    excerpt: "Why search visibility matters when a great website needs to be discovered by the right customers.",
    url: "https://www.yessoftech.com/best-seo-company-in-jaipur-blog.html",
    tag: "SEO",
  },
  {
    date: "21 Aug. 2025",
    title: "Best PPC Company in Jaipur – Performance Marketing That Delivers Results",
    slug: "best-ppc-company-jaipur",
    excerpt: "A practical view of paid visibility, targeting and performance-focused marketing campaigns.",
    url: "https://www.yessoftech.com/best-ppc-company-in-jaipur-blog.html",
    tag: "PPC",
  },
  {
    date: "20 Aug. 2025",
    title: "Discover the Best Website Design Agency in Jaipur for Your Brand Success",
    slug: "best-website-design-agency-jaipur",
    excerpt: "How thoughtful website design can communicate a brand story and create stronger digital experiences.",
    url: "https://www.yessoftech.com/best-website-design-agency-in-jaipur-blog.html",
    tag: "Web Design",
  },
  {
    date: "20 Aug. 2025",
    title: "Your Partner for Success: Best Social Media Marketing Agency in Jaipur",
    slug: "best-social-media-marketing-agency-jaipur",
    excerpt: "Building a stronger social presence with strategy, consistency and audience-focused communication.",
    url: "https://www.yessoftech.com/best-social-media-marketing-agency-in-jaipur-blog.html",
    tag: "Social Media",
  },
  {
    date: "19 Aug. 2025",
    title: "Smart Marketing, Smarter Results: Best Digital Marketing Agency in Jaipur",
    slug: "best-digital-marketing-agency-jaipur",
    excerpt: "How businesses can combine digital channels to build visibility, engagement and long-term value.",
    url: "https://www.yessoftech.com/best-digital-marketing-agency-in-jaipur-blog.html",
    tag: "Marketing",
  },
  {
    date: "19 Aug. 2025",
    title: "Unleash Creativity with Professional Graphic Design Services in Jaipur",
    slug: "professional-graphic-design-jaipur",
    excerpt: "Why visual identity, logos, brochures and social creatives play an important role in brand recognition.",
    url: "https://www.yessoftech.com/graphic-design-services-in-jaipur-blog.html",
    tag: "Graphic Design",
  },
];

export default function Blog() {
  useDocumentMeta({
    title: "YES Softech | Blog",
    description: "Latest web development, digital marketing, SEO, social media and design articles from YES Softech.",
    canonical: "https://www.yessoftech.com/blog.html",
  });

  return (
    <>
      <section className="page-hero blog-hero">
        <div className="container page-hero-inner">
          <span className="eyebrow">INSIGHTS / YES SOFTECH</span>
          <h1>Ideas that move<br /><em>business forward.</em></h1>
          <p>Explore YES Softech articles on web development, digital marketing, SEO, social media, branding and design.</p>
        </div>
      </section>

      <section className="long-section blog-section">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">LATEST ARTICLES</span>
              <h2>From the YES Softech <em>blog.</em></h2>
            </div>
            <a className="text-link" href="https://www.yessoftech.com/blog.html" target="_blank" rel="noreferrer">
              View original blog <span>↗</span>
            </a>
          </div>

          <div className="blog-grid">
            {posts.map((post, index) => (
              <article className="blog-card reveal" key={post.title}>
                <div className="blog-card-top">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <span>{post.tag}</span>
                </div>
                <div className="blog-date">{post.date}</div>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <Link className="text-link" to={`/blog/${post.slug}`}>
                  Read full article <span>→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="long-section alt">
        <div className="container cta-strip">
          <div>
            <span className="eyebrow">NEED DIGITAL HELP?</span>
            <h2>Turn an idea into something people remember.</h2>
          </div>
          <Link className="btn btn-gold" to="/contact">Start a Project ↗</Link>
        </div>
      </section>
    </>
  );
}
