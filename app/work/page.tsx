import type { Metadata } from "next";
import { Footer, PageIntro, SiteNav } from "../site-components";

export const metadata: Metadata = { title: "Selected Work | Fanglan Shi", description: "Sanitized People Operations, controls, data and AI transformation case studies." };

const cases = [
  { tone: "case-lime", category: "AI enablement", title: "Making AI useful for People Operations", metric: "2,000+", metricLabel: "reported efficiency hours", challenge: "Turn scattered experimentation into repeatable, practical adoption across the Americas.", move: "Built an automation portfolio, capability model and hands-on learning program around real operational pain points.", impact: "Reported efficiency savings across multiple use cases, supported by a two-day regional workshop and ongoing bite-sized learning.", tags: ["Regional model", "Capability building", "Multiple use cases"] },
  { tone: "case-mint", category: "Data governance", title: "Rebuilding employee-file operations at scale", metric: "100K", metricLabel: "US files in transformation scope", challenge: "Make a high-volume, cross-border filing process more reliable, governed and less manual.", move: "Combined migration delivery, control design, operating rules and automation across US and Canada workstreams.", impact: "Approximately 100,000 US files and 3,000+ Canadian historical documents were included in the North America program.", tags: ["3,000+ CA documents", "NA program", "Control design"] },
  { tone: "case-coral", category: "Controls", title: "Turning leave-pay exceptions into a durable system", metric: "Recurring", metricLabel: "control cycle established", challenge: "Replace undocumented fixes with a framework that detects issues and supports employees consistently.", move: "Created recurring audits, historical exception tracking, a vendor escalation rhythm and practical calculation support.", impact: "A repeatable control cycle replaced one-off remediation and made root-cause patterns visible for follow-up.", tags: ["Root-cause tracking", "Vendor governance", "Employee support"] },
  { tone: "case-blue", category: "Workflow automation", title: "Scaling reliable workflows across HR Operations", metric: "~1 min", metricLabel: "refresh time, from roughly 2 hours", challenge: "Reduce manual effort and risk across recurring Leave, Payroll, Reporting and Job Change work.", move: "Built a cross-team workflow portfolio, strengthened controls and transferred capability so teams could operate and improve it confidently.", impact: "Built approximately 40-50 Alteryx workflows across HR Operations teams; one recurring report moved from roughly two hours to about one minute.", tags: ["40-50 workflows", "Cross-team portfolio", "Reusable controls"] },
];

export default function WorkPage() {
  return <main><SiteNav current="work" />
    <PageIntro album="work" label="Selected work" title={<>Four problems.<br/><em>Four clearer systems.</em></>} copy="Sanitized case studies showing the challenge, my contribution and the outcome without exposing employee data or confidential business rules." />
    <section className="case-files shell">
      {cases.map((item, index) => <article className={`case-file ${item.tone}`} key={item.title}>
        <header><span>{item.category}</span><small>{String(index + 1).padStart(2, "0")}</small></header>
        <div className="case-title"><h2>{item.title}</h2><div><strong>{item.metric}</strong><span>{item.metricLabel}</span></div></div>
        <div className="case-columns"><div><h3>Challenge</h3><p>{item.challenge}</p></div><div><h3>My move</h3><p>{item.move}</p></div><div><h3>Impact</h3><p>{item.impact}</p></div></div>
        <footer>{item.tags.map(tag => <span key={tag}>{tag}</span>)}</footer>
      </article>)}
    </section><Footer />
  </main>;
}
