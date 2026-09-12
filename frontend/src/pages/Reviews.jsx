import { Link } from "react-router-dom";
import { useDocumentMeta } from "../hooks";

const reviews = [
  {
    quote: "Under tight deadlines and with high expectations, Yes Softech was a pleasure to partner with, on a high profile political campaign website. Professional, conscientious and thoroughly competent - I wouldn't hesitate in recommending them to other agencies.",
    name: "Mr. Amit Khandelwal",
    role: "Director",
    company: "Vedant Enterprises",
  },
  {
    quote: "We have worked with Yes Softech on various projects, and find that they provide quality service and expertise for our programming needs. It is rare to find a service provider with such professional consistency - they are a valued service provider to our business!",
    name: "Mr. Deepak Khandelwal",
    role: "Director",
    company: "Teastar Cafe",
  },
  {
    quote: "When our own skills did not manage to get where we wanted, Yes Softech took care of the rest. The expertize, customer service and follow up we experienced from Yes Softech were simply flawless.",
    name: "Shranik Chopra",
    role: "Director",
    company: "Floret Group",
  },
  {
    quote: "I am really impressed by the quality of services I received from Yes Softech. You were right on schedule, charged reasonable prices, were professional and courteous in dealings, and delivered items well before time. I have got a good e-commerce site for my products. My revenue has increased because of Yes Softech and I will definitely use your services again.",
    name: "Mr. Krishan Avtar Bajargan",
    role: "Director",
    company: "Hotel The Orion",
  },
  {
    quote: "We thank Yes Softech for the wonderful job in helping us develop our program. Everyone was professional, excellent and hard working. Thanks to them, we were able to achieve our goal on time, and we look forward to continue to continue our work.",
    name: "Mr. Sourabh Patodiya",
    role: "Commissioner Of KPL / Director",
    company: "C2C Interiors",
  },
];

export default function Reviews() {
  useDocumentMeta({
    title: "YES Softech | Client Reviews",
    description: "Read client testimonials published by YES Softech.",
    canonical: "https://www.yessoftech.com/about.html",
  });

  return (
    <>
      <section className="page-hero reviews-hero">
        <div className="container page-hero-inner">
          <span className="eyebrow">CLIENT VOICES</span>
          <h1>People we've<br /><em>worked with.</em></h1>
          <p>Real testimonials published on the YES Softech website, presented in the new YES Softech experience.</p>
        </div>
      </section>

      <section className="long-section">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">REVIEWS / TESTIMONIALS</span>
              <h2>What our clients <em>say.</em></h2>
            </div>
            <a className="text-link" href="https://www.yessoftech.com/about.html" target="_blank" rel="noreferrer">
              View original testimonials <span>↗</span>
            </a>
          </div>

          <div className="review-grid">
            {reviews.map((review, index) => (
              <article className="review-card reveal" key={review.name + review.company}>
                <div className="review-stars">★★★★★</div>
                <div className="review-number">0{index + 1}</div>
                <blockquote>“{review.quote}”</blockquote>
                <div className="review-author">
                  <strong>{review.name}</strong>
                  <span>{review.role}</span>
                  <small>{review.company}</small>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="long-section alt">
        <div className="container cta-strip">
          <div>
            <span className="eyebrow">YOUR TURN</span>
            <h2>Let's create the next success story.</h2>
          </div>
          <Link className="btn btn-gold" to="/contact">Start a Project ↗</Link>
        </div>
      </section>
    </>
  );
}
