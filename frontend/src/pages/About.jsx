import { Link } from "react-router-dom";
import { useDocumentMeta } from "../hooks";

const awards = [
  {
    title: "Lifetime Achievement Award",
    subtitle: "Multinational Book of World Record",
    text: "Awarded to Ved Khandelwal in the field of entrepreneurship.",
    image: "/assets/award-lifetime-achievement.jpg",
  },
  {
    title: "GLF Excellence Awards 2022",
    subtitle: "Information Technology",
    text: "Recognition in the field of IT, presented in the presence of noted dignitaries.",
    image: "/assets/award-glf-excellence-2022.jpg",
  },
  {
    title: "Golden Book of World Record",
    subtitle: "Dharti Ke Bhagwan",
    text: "Recognition connected with the Most NPO Participation in an Online Corona Warriors Adoration Program on July 1, 2021.",
    image: "/assets/award-lifetime-event.jpg",
  },
  {
    title: "CWEI Recognition",
    subtitle: "Consortium of Women Entrepreneurs of India · 2021",
    text: "Recognition received on February 17, 2021.",
    image: "/assets/award-glf-event.jpg",
  },
];

const experience = [
  ["2014 →", "Director & Co-Founder of YES Softech", "Building and leading the IT and digital-services company."],
  ["Banking", "Central Co-Operative Bank", "Head of a 60-member database preparation team with 94% QC accuracy; also handled migration and go-live administration across Kota, Baran and Bundi."],
  ["TCS", "Training & Project Leadership", "Head Trainer for TCS BANKS24 software, training 60+ employees, and Project Head for a TCS/Zenith Software engagement with a 35+ person team."],
  ["Infosys", "Post Office Migration Project", "Project Manager for the Post Office Migration Project across Jaipur, Alwar and Barmer."],
  ["NIC", "PACS Tool Projects", "Project Manager for a PACS tool by National Informatics Centre for data entry work across five Rajasthan districts."],
  ["Social Impact", "Diabetes Roshni & Nirbhaya Squad", "IT support for Diabetes Roshni since 2020 and social-media promotion for Nirbhaya Squad."],
];

export default function About() {
  useDocumentMeta({
    title: "About YES Softech | Ved Khandelwal | Jaipur",
    description:
      "Learn about YES Softech, its mission and approach, and the professional journey, experience and recognitions of Ved Khandelwal.",
    canonical: "https://www.yessoftech.com/about.html",
  });

  return (
    <>
      <section className="page-hero about-hero">
        <div className="container page-hero-inner">
          <span className="eyebrow">ABOUT YES SOFTECH</span>
          <h1>
            Technology,
            <br />
            <em>with purpose.</em>
          </h1>
          <p>
            A digital partner combining technology, creative communication, social media and business-focused execution.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container split-intro">
          <div>
            <div className="section-kicker">01 / WHO WE ARE</div>
            <h2>
              Digital work that starts with
              <br />
              <em>understanding.</em>
            </h2>
          </div>
          <div className="intro-content">
            <p className="lead">
              YES Softech is a social media communications and IT services company based in India. Its profile describes
              a team of digital professionals working across social media, creative communication, technology and
              business requirements.
            </p>
            <p>
              The company focuses on understanding a brand and its audience before creating, developing and communicating
              its message. The objective is to add value to potential and existing stakeholders rather than simply
              pushing a product.
            </p>
            <p>
              YES Softech's stated mission is to build long-term relationships and deliver a consistent social-media
              experience through clear communication, goal setting, planning and execution.
            </p>
          </div>
        </div>
      </section>

      <section className="visual-band band-about">
        <div className="image-overlay"></div>
        <div className="container visual-content">
          <span className="eyebrow">OUR MISSION</span>
          <h2>
            Build long-term
            <br />
            <em>digital relationships.</em>
          </h2>
          <p>
            Knowing the client, understanding the scenario, setting goals and maintaining a consistent approach are at
            the heart of the company's mission.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="section-kicker">02 / VED KHANDELWAL</div>
              <h2>
                Engineer turned IT professional,
                <br />
                <em>entrepreneur by execution.</em>
              </h2>
            </div>
          </div>

          <div className="leader-profile">
            <div className="leader-photo-wrap">
              <img src="/assets/ved-khandelwal-profile.jpg" alt="Ved Khandelwal" />
              <div className="leader-photo-caption">
                <span>DIRECTOR &amp; CO-FOUNDER</span>
                <strong>YES Softech</strong>
              </div>
            </div>
            <div className="leader-copy">
              <p className="lead">
                Ved Khandelwal, born on May 18, 1990, in Deeg, Bharatpur district of Rajasthan, is an engineer turned IT
                professional and the Director &amp; Co-Founder of YES Softech since 2014.
              </p>
              <p>
                He graduated from Rajasthan Technical University, Kota, specialising in Electronics and Communication,
                and built a team of digital professionals across their respective fields.
              </p>
              <p>
                His profile reflects experience across banking technology, migration and go-live operations, software
                training, project management, BPO operations, social-media initiatives and IT support for social causes.
              </p>

              <div className="leader-stats">
                <div><b>2014</b><span>YES Softech journey</span></div>
                <div><b>60+</b><span>Employees trained / managed in key assignments</span></div>
                <div><b>94%</b><span>QC accuracy on a banking database project</span></div>
                <div><b>15+</b><span>Young professionals in the YES Softech team profile</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="long-section alt">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">03 / PROFESSIONAL JOURNEY</span>
              <h2>Experience across technology, banking &amp; digital projects.</h2>
            </div>
          </div>
          <div className="experience-timeline">
            {experience.map(([label, title, text]) => (
              <article className="experience-item" key={label}>
                <span>{label}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section awards" id="awards">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="section-kicker">04 / AWARDS &amp; RECOGNITIONS</div>
              <h2>
                Recognition that is part of
                <br />
                the <em>YES Softech story.</em>
              </h2>
            </div>
            <p className="section-side-note">Award names and recognition details are taken from the YES Softech profile.</p>
          </div>

          <div className="award-grid award-grid-photo">
            {awards.map((award) => (
              <article className="award-card award-photo-card" key={award.title}>
                <div className="award-image">
                  <img src={award.image} alt={award.title} loading="lazy" />
                </div>
                <div className="award-body">
                  <span>RECOGNITION</span>
                  <h3>{award.title}</h3>
                  <b>{award.subtitle}</b>
                  <p>{award.text}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="recognition-gallery">
            <div>
              <span className="eyebrow">RECOGNITION MOMENTS</span>
              <h3>Milestones worth remembering.</h3>
            </div>
            <div className="recognition-gallery-images">
              <img src="/assets/award-lifetime-event.jpg" alt="YES Softech recognition event" loading="lazy" />
              <img src="/assets/award-glf-event.jpg" alt="GLF recognition event" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <section className="long-section alt">
        <div className="container long-grid">
          <div>
            <span className="eyebrow">05 / SOCIAL IMPACT</span>
            <h2>Technology can support more than business.</h2>
          </div>
          <div className="long-copy">
            <p className="lead">
              The YES Softech profile records active participation in social causes and events through IT support and
              digital communication.
            </p>
            <p>
              This includes IT support for the Diabetes Roshni mission since 2020, social-media promotion for Nirbhaya
              Squad, a task force formed for the safety and security of women, and participation in NGO and social-cause
              events.
            </p>
            <div className="impact-points">
              <span>Diabetes Roshni · IT Support</span>
              <span>Nirbhaya Squad · Social Media Promotion</span>
              <span>NGO &amp; Social Cause Events</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="section-kicker">06 / OUR APPROACH</div>
              <h2>Understand. Set goals. Create. <em>Deliver.</em></h2>
            </div>
          </div>
          <div className="reason-grid">
            <div><span>01</span><h3>Know the requirement</h3><p>Start by understanding the exact business requirement and scenario.</p></div>
            <div><span>02</span><h3>Set clear goals</h3><p>Choose objectives that can guide creative, social and digital activity.</p></div>
            <div><span>03</span><h3>Tell the brand story</h3><p>Every brand has a story; the profile emphasises portraying it across social platforms.</p></div>
            <div><span>04</span><h3>Stay consistent</h3><p>Build a consistent communication approach rather than disconnected campaigns.</p></div>
            <div><span>05</span><h3>Measure what matters</h3><p>Campaign objectives can include awareness, engagement, sales and brand advocates.</p></div>
            <div><span>06</span><h3>Build the relationship</h3><p>The long-term aim is a strong connection and a better digital experience.</p></div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container cta-inner">
          <div className="eyebrow">WORK WITH YES SOFTECH</div>
          <h2>
            Have a business idea?
            <br />
            <em>Let's build it.</em>
          </h2>
          <Link className="btn btn-gold" to="/contact">Discuss Your Requirement <span>↗</span></Link>
        </div>
      </section>
    </>
  );
}
