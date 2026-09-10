const navigation = [
  { key: "home", href: "/career", label: "Home" },
  { key: "work", href: "/career/work", label: "Work" },
  { key: "experience", href: "/career/experience", label: "Experience" },
  { key: "profile", href: "/career/profile", label: "Profile" },
];

export function SiteNav({ current }: { current: string }) {
  return <nav className="site-nav shell" aria-label="Primary navigation">
    <a className="wordmark" href="/career" aria-label="Fanglan Shi, career portfolio home">FANGLAN <span>/</span> SHI</a>
    <div className="nav-pages">{navigation.map((item) => <a className={current === item.key ? "active" : ""} href={item.href} key={item.key}>{item.label}</a>)}</div>
    <a className="nav-contact" href="https://www.linkedin.com/in/fanglanshi" target="_blank" rel="noreferrer">Connect <span aria-hidden="true">↗</span></a>
  </nav>;
}

type AlbumKey = "work" | "experience" | "profile";

const albumRecords: Record<AlbumKey, { number: string; title: string }> = {
  work: { number: "01", title: "Selected work" },
  experience: { number: "02", title: "Experience" },
  profile: { number: "03", title: "Profile" },
};

function AlbumMarker({ album }: { album: AlbumKey }) {
  const record = albumRecords[album];
  return <div className={`album-marker album-marker-${album}`} aria-label={`Record ${record.number}: ${record.title}`}>
    <span className="album-miniature" aria-hidden="true">
      <span className="album-mini-vinyl"><i /></span>
      <span className="album-mini-sleeve" />
    </span>
    <span className="album-marker-copy"><small>Record {record.number}</small><strong>{record.title}</strong><em>Now viewing</em></span>
  </div>;
}

export function PageIntro({ label, title, copy, album }: { label: string; title: React.ReactNode; copy: string; album: AlbumKey }) {
  return <header className={`page-intro page-intro-${album} shell page-enter`}><p className="eyebrow">{label}</p><div><h1>{title}</h1><div className="page-intro-side"><AlbumMarker album={album} /><p>{copy}</p></div></div></header>;
}

export function Footer() {
  return <footer className="site-footer"><div className="shell footer-inner">
    <span>© 2026 Fanglan Shi · Toronto, Canada</span>
    <a href="https://www.linkedin.com/in/fanglanshi" target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
  </div></footer>;
}
