import type { Metadata } from "next";
import { Footer, PageIntro, SiteNav } from "../site-components";

export const metadata: Metadata = { title: "Experience | Fanglan Shi", description: "Fanglan Shi's People Operations career across TikTok, PwC and RBC." };

const roles = [
  { years: "2024 - Now", company: "TikTok", logo: "/company-logos/tiktok.svg", role: "HR Operations Partner, Canada", scope: "Country operations / Cross-border programs / AMS AI enablement", summary: "Own local HR operations in Canada while leading complex regional programs and practical AI enablement across HR Operations in the Americas.", highlights: ["First HR Operations Partner in Canada", "2,000+ reported efficiency hours across AI and automation use cases", "North America employee-file transformation", "US leave controls and cross-border employee programs"] },
  { years: "2022 - 2024", company: "PwC", logo: "/company-logos/pwc.svg", role: "Senior Associate / Associate, Human Capital", scope: "Workday data · Reporting controls · Workflow automation", summary: "Progressed quickly by taking on complex HR reporting, building automation and transferring capability across the organization.", highlights: ["Off-cycle promotion within the first year", "Approximately 40-50 Alteryx workflows built in year one", "Led the HR Reporting rotation", "Digital Lab participant to company-wide facilitator"] },
  { years: "2019 - 2022", company: "RBC", logo: "/company-logos/rbc.svg", role: "HR Representative", scope: "Manager guidance · Employee service · Policy interpretation", summary: "Built the operational foundation for handling employee questions, interpreting policy and guiding managers through real workplace situations.", highlights: ["Front-line employee and manager support", "Policy interpretation and case navigation", "High-volume HR service delivery"] },
];

export default function ExperiencePage() {
  return <main><SiteNav current="experience" />
    <PageIntro album="experience" label="Experience" title={<>From workflow builder<br/><em>to regional operator.</em></>} copy="A career shaped by taking on unclear work, building structure around it and helping others operate it confidently." />
    <section className="career-path shell">
      {roles.map((role, index) => <details className="role-card" open={index === 0} key={role.company}>
        <summary><span className={`company-mark company-mark-${role.company.toLowerCase()}`} aria-hidden="true"><img src={role.logo} alt="" /></span><div className="role-main"><small>{role.years}</small><h2>{role.company}</h2><p>{role.role}</p></div><strong>{role.scope}</strong><i aria-hidden="true">+</i></summary>
        <div className="role-detail"><p>{role.summary}</p><ul>{role.highlights.map(item => <li key={item}>{item}</li>)}</ul></div>
      </details>)}
    </section>
    <section className="experience-note shell"><p>My through-line</p><h2>Make the work visible.<br/>Make the system reliable.<br/><em>Make the improvement last.</em></h2></section>
    <Footer />
  </main>;
}
