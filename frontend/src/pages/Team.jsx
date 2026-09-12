import { Link } from "react-router-dom";
import { useDocumentMeta } from "../hooks";

export default function Team() {
  useDocumentMeta({
    title: "Leadership & Team | YES Softech",
    description:
      "Explore the YES Softech team culture, multidisciplinary capabilities and leadership of Ved Khandelwal.",
    canonical: "https://www.yessoftech.com/team.html",
  });

  return (
    <>
      <section className="page-hero team-hero">
        <div className="container page-hero-inner">
          <div className="eyebrow">THE PEOPLE BEHIND THE WORK</div>
          <h1>
            15+ minds.
            <br />
            <em>One digital team.</em>
          </h1>
          <p>
            A multidisciplinary team of young professionals working across social media, creative communication,
            technology and digital execution.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="team-lead">
            <div>
              <div className="section-kicker">01 / TEAM CULTURE</div>
              <h2>
                We follow the digital world
                <br />
                <em>wherever it goes.</em>
              </h2>
            </div>
            <p className="lead">
              The YES Softech profile describes 15+ dynamic young enthusiasts who love everything about social media and
              work together to cater to diversified clients simultaneously.
            </p>
          </div>

          <div className="team-capability-grid">
            <article><span>01</span><h3>Creative</h3><p>Design and visual communication that gives brands a recognisable voice.</p></article>
            <article><span>02</span><h3>Social Media</h3><p>Platform-focused communication, content and audience interaction.</p></article>
            <article><span>03</span><h3>Content</h3><p>Words and messages shaped around brand communication and audience relevance.</p></article>
            <article><span>04</span><h3>Strategy</h3><p>Planning that connects objectives, channels and consistent execution.</p></article>
            <article><span>05</span><h3>Technology</h3><p>Web and software capabilities that turn digital requirements into working experiences.</p></article>
            <article><span>06</span><h3>Marketing</h3><p>Search, social and performance activities designed around business goals.</p></article>
          </div>
        </div>
      </section>

      <section className="section team-leader-section">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="section-kicker">02 / LEADERSHIP</div>
              <h2>
                Meet the person behind
                <br />
                <em>the direction.</em>
              </h2>
            </div>
          </div>

          <div className="leader-profile team-leader-profile">
            <div className="leader-photo-wrap">
              <img src="/assets/ved-khandelwal-profile.jpg" alt="Ved Khandelwal" />
              <div className="leader-photo-caption">
                <span>DIRECTOR &amp; CO-FOUNDER</span>
                <strong>YES Softech</strong>
              </div>
            </div>
            <div className="leader-copy">
              <span className="eyebrow">VED KHANDELWAL</span>
              <h3>Engineer turned IT professional and entrepreneur.</h3>
              <p className="lead">
                Ved Khandelwal has been Director &amp; Co-Founder of YES Softech since 2014. His professional profile
                spans banking technology, migration, software training, project management, BPO operations and digital
                initiatives.
              </p>
              <p>
                He has led teams and technology projects for organisations including Central Co-Operative Bank, TCS,
                Infosys and NIC-related projects, while also supporting social causes through IT and digital
                communication.
              </p>
              <div className="leader-stats">
                <div><b>2014</b><span>YES Softech since</span></div>
                <div><b>60+</b><span>People trained / managed in key assignments</span></div>
                <div><b>94%</b><span>QC accuracy in a banking project</span></div>
                <div><b>15+</b><span>Team profile</span></div>
              </div>
              <Link className="btn btn-outline" to="/about">Read full profile <span>↗</span></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="visual-band band-team">
        <div className="image-overlay"></div>
        <div className="container visual-content">
          <div className="eyebrow">HOW WE WORK</div>
          <h2>
            Different skills.
            <br />
            <em>One shared direction.</em>
          </h2>
          <p>
            The company's approach brings creative, social, content, technology and strategy disciplines together around
            the requirement, goals and story of each brand.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="section-kicker">03 / WORKING PRINCIPLES</div>
              <h2>Simple principles that keep the work <em>moving.</em></h2>
            </div>
          </div>
          <div className="principles">
            <div><b>01</b><h3>Listen deeply</h3><p>Understand the exact requirement before choosing the solution.</p></div>
            <div><b>02</b><h3>Set goals</h3><p>Define objectives and priorities that can guide the work.</p></div>
            <div><b>03</b><h3>Tell the story</h3><p>Make sure the brand's story is communicated consistently.</p></div>
            <div><b>04</b><h3>Keep learning</h3><p>Adapt as platforms, audiences and technology continue to evolve.</p></div>
          </div>
        </div>
      </section>

      <section className="long-section alt">
        <div className="container long-grid">
          <div>
            <span className="eyebrow">04 / A TEAM BUILT FOR DIGITAL</span>
            <h2>From social communication to technology.</h2>
          </div>
          <div className="long-copy">
            <p className="lead">
              The profile's strength is the combination of specialists rather than a single discipline.
            </p>
            <p>
              A requirement can involve brand communication, social media, content, search, creative design, website
              development or a combination of these. The team structure is intended to let those capabilities work
              together.
            </p>
            <p>
              That multidisciplinary approach helps YES Softech serve diversified clients simultaneously while continuing
              to learn and improve its process.
            </p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container cta-inner">
          <div className="eyebrow">LET'S BUILD TOGETHER</div>
          <h2>
            Bring your requirement.
            <br />
            <em>We'll bring the team.</em>
          </h2>
          <Link className="btn btn-gold" to="/contact">Discuss Your Project <span>↗</span></Link>
        </div>
      </section>
    </>
  );
}
