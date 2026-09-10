import type { Metadata } from "next";
import { Footer, PageIntro, SiteNav } from "../../site-components";

export const metadata: Metadata = { title: "Profile | Fanglan Shi", description: "Education, CHRP credential, capabilities, tools and working method." };

const method = [
  { title: "Understand", copy: "The employee need, operating risk and decision behind the process." },
  { title: "Standardize", copy: "Make the work visible, clarify rules and strengthen controls." },
  { title: "Automate", copy: "Choose the simplest tool that improves quality and frees capacity." },
  { title: "Scale", copy: "Build capability and ownership so the improvement lasts." },
];

export default function ProfilePage() {
  return <main><SiteNav current="profile" />
    <PageIntro album="profile" label="Profile" title={<>HR judgment.<br/><em>A builder's mindset.</em></>} copy="The credentials, capabilities and tools behind a practical approach to People Operations transformation." />
    <section className="foundation-grid shell">
      <article className="credential-feature"><p>Professional credential</p><strong>CHRP</strong><h2>Certified Human Resources Professional</h2><span>Ontario, Canada</span></article>
      <div className="education-stack"><article><span>Education</span><h2>MSc</h2><p>International Human Resources Management</p></article><article><span>Education</span><h2>Master</h2><p>Professional Accounting</p></article></div>
      <article className="toolbox"><p>Working toolkit</p><div>{["Workday", "Alteryx", "ServiceNow", "Apps Script", "VBA", "People data", "Controls", "AI enablement"].map(tool => <span key={tool}>{tool}</span>)}</div></article>
    </section>
    <section className="method-section"><div className="shell method-layout"><div><p>How I work</p><h2>Start with the work.<br/><em>Not the tool.</em></h2></div><ol>{method.map((step, index) => <li key={step.title}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{step.title}</h3><p>{step.copy}</p></div></li>)}</ol></div></section>
    <section className="capability-statement shell"><article><span>Operate</span><p>Own complex operations with sound judgment.</p></article><article><span>Transform</span><p>Turn unclear processes into reliable systems.</p></article><article><span>Enable</span><p>Help people adopt better ways of working.</p></article></section>
    <Footer />
  </main>;
}
