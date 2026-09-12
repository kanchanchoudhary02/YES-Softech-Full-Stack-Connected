import { Link, useParams } from "react-router-dom";
import { posts } from "./Blog";
import { useDocumentMeta } from "../hooks";

const details = {
  "smart-packaging-smarter-sales": {
    intro: "Packaging is often the first physical conversation between a product and its customer. Good package design can combine recognition, information and shelf impact.",
    sections: [
      ["Why packaging matters", "A package has to communicate quickly. Colour, typography, hierarchy, imagery and product information work together to help customers understand what they are looking at and remember the brand."],
      ["Design beyond decoration", "Effective packaging starts with the product, audience and market context. The design should be attractive, but it also needs to make the important information easy to find and the brand easy to recognise."],
      ["A practical design process", "Start with the brand direction, understand the audience, organise the information, explore visual routes, refine the strongest concept and prepare the final artwork for production."],
    ],
  },
  "website-development-company-jaipur": {
    intro: "A website can become the central point of a business's digital presence: the place where customers discover the brand, understand its offering and decide what to do next.",
    sections: [
      ["Start with the business goal", "A website should be designed around the outcome it needs to support. That may mean enquiries, bookings, sales, lead generation, information or stronger brand credibility."],
      ["Build for real users", "Responsive layouts, clear navigation, useful content, accessible forms and fast-loading pages make the experience easier across phones, tablets and desktops."],
      ["Technology that supports growth", "The right stack depends on the project. What matters is a maintainable implementation, secure forms, sensible content structure and a foundation that can evolve with the business."],
    ],
  },
  "online-marketing-company-jaipur": {
    intro: "Online marketing works best when individual channels are connected to a common business objective instead of being treated as separate activities.",
    sections: [
      ["Connect the channels", "SEO can improve discoverability, social media can build attention and relationships, paid campaigns can create targeted reach, and content can give every channel something useful to communicate."],
      ["Choose measurable objectives", "Awareness, engagement, enquiries, sales and returning customers require different campaign structures. Clear objectives make it easier to decide what to measure."],
      ["Optimise continuously", "Digital marketing is not a one-time launch. Performance data, audience response and changing platforms can inform what should be improved next."],
    ],
  },
  "web-design-company-jaipur": {
    intro: "Modern web design is more than making a page look attractive. It is about helping people understand a brand and move through a digital experience with confidence.",
    sections: [
      ["Visual hierarchy", "Headings, spacing, contrast, imagery and typography should guide attention toward the information that matters most."],
      ["Design for every screen", "A polished desktop layout is not enough. Navigation, buttons, cards, forms and media need to remain comfortable and readable on smaller screens."],
      ["Design with conversion in mind", "Calls to action should be clear without becoming aggressive. A good experience answers questions, reduces friction and gives visitors a natural next step."],
    ],
  },
  "social-media-marketing-jaipur": {
    intro: "Social media is not simply a publishing calendar. It is an ongoing communication layer between a brand and the people it wants to reach.",
    sections: [
      ["Move beyond hashtags", "Useful content begins with understanding the audience. Posts can educate, inform, entertain, demonstrate products, tell stories or invite conversation."],
      ["Consistency builds recognition", "A consistent visual language, tone and publishing rhythm helps people recognise a brand across platforms."],
      ["Measure the right response", "Depending on the goal, useful signals can include reach, engagement, enquiries, sales, community growth and brand advocacy."],
    ],
  },
  "best-website-development-company-jaipur": {
    intro: "A growth-focused website should work as a business asset rather than a static online brochure.",
    sections: [
      ["Make the first impression useful", "Visitors should quickly understand what the business does, who it serves and why they should continue exploring."],
      ["Build a strong foundation", "Responsive development, clear information architecture, reliable forms and maintainable code make the website easier to operate and improve."],
      ["Plan for the next stage", "Analytics, SEO, content updates, new landing pages and integrations can be considered as the business's digital requirements grow."],
    ],
  },
  "best-seo-company-jaipur": {
    intro: "Search visibility connects people who are already looking for a solution with the businesses that can provide it.",
    sections: [
      ["Technical foundations", "Search-friendly structure, crawlable pages, useful metadata, performance and mobile usability create a stronger technical base."],
      ["Content that answers intent", "Pages should address the questions and needs behind a search, rather than relying only on repeated keywords."],
      ["Long-term visibility", "SEO is a process of publishing, improving, monitoring and learning. Rankings can change, so sustainable work matters more than shortcuts."],
    ],
  },
  "best-ppc-company-jaipur": {
    intro: "PPC can put a business in front of a targeted audience quickly, but good performance depends on the relationship between targeting, creative, landing pages and measurement.",
    sections: [
      ["Target the right audience", "Campaign structure should reflect the people, locations, interests, search intent or business segments that matter."],
      ["Creative and landing pages", "The promise in an advertisement should connect naturally to the landing page. Clear messaging reduces friction after the click."],
      ["Optimise with evidence", "Spend, clicks, conversions and lead quality can reveal where a campaign needs refinement."],
    ],
  },
  "best-website-design-agency-jaipur": {
    intro: "A strong website design system can make a brand feel consistent, credible and easy to interact with.",
    sections: [
      ["Brand meets interface", "Colours, typography, imagery, motion and layout should feel like parts of the same identity."],
      ["Create useful journeys", "A beautiful interface still needs clear navigation and logical next steps. Every major page should have a reason to exist."],
      ["Keep improving", "Design can evolve after launch through feedback, analytics, content changes and new business requirements."],
    ],
  },
  "best-social-media-marketing-agency-jaipur": {
    intro: "A strong social-media presence is built through strategy, useful communication and consistency rather than volume alone.",
    sections: [
      ["Know the audience", "Content becomes more relevant when the team understands the people, interests and context behind the target audience."],
      ["Build a content system", "A planned mix of educational, promotional, community, visual and brand-story content helps keep communication balanced."],
      ["Turn attention into relationships", "The longer-term goal is to create recognition, engagement, trust and brand advocates — not just individual posts."],
    ],
  },
  "best-digital-marketing-agency-jaipur": {
    intro: "Digital marketing becomes more powerful when search, social, paid media, creative and content work toward the same business outcome.",
    sections: [
      ["Start with objectives", "Define what growth means for the business before selecting channels or campaign formats."],
      ["Build the digital journey", "A customer may discover a brand through search or social, visit a website, compare options and finally enquire or purchase. Each stage needs useful communication."],
      ["Learn from performance", "Campaign results and audience behaviour can guide the next decision, helping the digital presence become more effective over time."],
    ],
  },
  "professional-graphic-design-jaipur": {
    intro: "Graphic design gives businesses a visual language for communicating who they are and what they offer.",
    sections: [
      ["Identity and recognition", "Logos, typography, colour, imagery and layout can work together to create a recognisable brand system."],
      ["Design for every touchpoint", "Social posts, brochures, packaging, flyers, presentations and digital interfaces should feel connected even when their formats are different."],
      ["Clarity first", "Good creative work attracts attention, but it also communicates information clearly and supports the purpose of the business."],
    ],
  },
};

export default function BlogDetail() {
  const { slug } = useParams();
  const post = posts.find((item) => item.slug === slug);
  const content = details[slug];

  useDocumentMeta({
    title: post ? `${post.title} | YES Softech` : "YES Softech Blog",
    description: post?.excerpt || "YES Softech digital insights.",
    canonical: `https://www.yessoftech.com/blog/${slug}`,
  });

  if (!post || !content) {
    return (
      <section className="section">
        <div className="container">
          <div className="section-kicker">404 / ARTICLE</div>
          <h1>Article not found.</h1>
          <Link className="btn btn-gold" to="/blog">Back to Blog <span>→</span></Link>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="page-hero blog-detail-hero">
        <div className="container page-hero-inner">
          <span className="eyebrow">{post.tag} · {post.date}</span>
          <h1>{post.title}</h1>
          <p>{content.intro}</p>
        </div>
      </section>

      <article className="section blog-detail">
        <div className="container blog-detail-layout">
          <aside>
            <span className="eyebrow">YES SOFTECH / INSIGHT</span>
            <div className="blog-detail-meta">{post.date}</div>
            <div className="blog-detail-tag">{post.tag}</div>
            <Link className="text-link" to="/blog">← All articles</Link>
          </aside>

          <div className="blog-detail-content">
            <p className="lead">{content.intro}</p>
            {content.sections.map(([heading, text], index) => (
              <section key={heading}>
                <span className="section-number">0{index + 1}</span>
                <h2>{heading}</h2>
                <p>{text}</p>
              </section>
            ))}

            <div className="blog-detail-cta">
              <span className="eyebrow">READY TO GROW?</span>
              <h2>Let's turn the next idea into a digital experience.</h2>
              <Link className="btn btn-gold" to="/contact">Discuss Your Requirement <span>↗</span></Link>
            </div>

            <a className="text-link" href={post.url} target="_blank" rel="noreferrer">
              Read the original YES Softech article <span>↗</span>
            </a>
          </div>
        </div>
      </article>
    </>
  );
}
