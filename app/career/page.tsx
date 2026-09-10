import type { Metadata } from "next";
import { Footer, SiteNav } from "../site-components";

export const metadata: Metadata = { title: "Fanglan Shi, CHRP | People Operations, Systems & AI", description: "Toronto-based People Operations leader building clear processes, reliable controls and practical AI-enabled workflows." };

const metrics = [
  { value: "2,000+", label: "reported efficiency hours", note: "AI and automation portfolio" },
  { value: "100K", label: "US files in scope", note: "North America transformation" },
  { value: "40-50", label: "workflows built", note: "across HR Operations teams" },
  { value: "~1 min", label: "refresh time", note: "from roughly two hours" },
];

const deskLinks = [
  { href: "/career/work", code: "01", label: "Selected work", note: "Systems that scaled", className: "record-item record-work" },
  { href: "/career/experience", code: "02", label: "Experience", note: "TikTok / PwC / RBC", className: "record-item record-experience" },
  { href: "/career/profile", code: "03", label: "Profile", note: "Education / CHRP / Tools", className: "record-item record-profile" },
];

export default function CareerHome() {
  return <main>
    <SiteNav current="home" />
    <section className="home-hero shell">
      <div className="hero-message page-enter">
        <p className="eyebrow">People Operations · Systems & AI</p>
        <h1>I build the systems behind <em>better people experiences.</em></h1>
        <p className="hero-summary">I turn complex HR operations into clear, reliable systems that work at scale.</p>
        <div className="hero-actions">
          <a className="button button-dark" href="/career/work">View selected work <span aria-hidden="true">↗</span></a>
          <a className="text-link" href="https://www.linkedin.com/in/fanglanshi" target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
        </div>
      </div>

      <aside className="record-display page-enter delay-one" aria-label="Explore Fanglan's portfolio">
        <div className="record-display-head"><span>Fanglan Shi, CHRP</span><span>Career collection / 03</span></div>
        <div className="record-shelf">
          {deskLinks.map((item) => <a href={item.href} className={item.className} key={item.href}>
            <span className="record-vinyl" aria-hidden="true"><span className="vinyl-disc"><i>O / T / E</i></span></span>
            <span className="record-sleeve"><small>{item.code}</small><strong>{item.label}</strong><em>{item.note}</em><i aria-hidden="true">↗</i></span>
          </a>)}
        </div>
        <div className="record-display-foot"><span>Operate / Transform / Enable</span><span>Choose a record</span></div>
      </aside>
    </section>

    <section className="metric-band" aria-label="Impact at a glance"><div className="shell metric-grid">
      {metrics.map((metric) => <article key={metric.value}><strong>{metric.value}</strong><p>{metric.label}</p><small>{metric.note}</small></article>)}
    </div></section>

    <section className="home-intro shell">
      <div><p className="section-label">What I bring</p><h2>Operational judgment.<br/><em>A builder's mindset.</em></h2></div>
      <div className="capability-list">
        <article><span>Operate</span><p>Country ownership, employee lifecycle and complex cross-border delivery.</p></article>
        <article><span>Transform</span><p>Process design, controls, data governance and scalable HR systems.</p></article>
        <article><span>Enable</span><p>Practical AI adoption, learning and influence across teams and regions.</p></article>
      </div>
    </section>

    <section className="next-chapter shell"><p>Four systems that work better.</p><a href="/career/work">View selected work <span aria-hidden="true">→</span></a></section>
    <Footer />
  </main>;
}
