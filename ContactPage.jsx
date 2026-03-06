export default function App() {
  const contacts = [
    {
      id: "01",
      platform: "Email",
      handle: "Adeolaaderibigbe10@gmail.com",
      href: "mailto:Adeolaaderibigbe10@gmail.com",
      action: "Send a message",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="4" width="20" height="16" rx="2"/>
          <path d="m2 7 10 7 10-7"/>
        </svg>
      ),
    },
    {
      id: "02",
      platform: "LinkedIn",
      handle: "linkedin.com/in/aderibigbe-adeola",
      href: "https://linkedin.com/in/aderibigbe-adeola",
      action: "View profile",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
          <rect x="2" y="9" width="4" height="12"/>
          <circle cx="4" cy="4" r="2"/>
        </svg>
      ),
    },
    {
      id: "03",
      platform: "GitHub",
      handle: "github.com/Ade-Adeola",
      href: "https://github.com/Ade-Adeola",
      action: "Browse repositories",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
        </svg>
      ),
    },
    {
      id: "04",
      platform: "Medium",
      handle: "medium.com/@adeolaaderibigbe10",
      href: "https://medium.com/@adeolaaderibigbe10",
      action: "Read articles",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
        </svg>
      ),
    },
  ];

  return (
    <div style={s.root}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Mono:wght@300;400;500&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #0b0b0b; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #0b0b0b; }
        ::-webkit-scrollbar-thumb { background: #222; border-radius: 3px; }
        a { text-decoration: none; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .contact-row {
          animation: fadeUp 0.4s ease both;
        }
        .contact-row:hover .row-platform { color: #c8f060 !important; }
        .contact-row:hover .row-handle   { color: #e8e8e8 !important; }
        .contact-row:hover .row-action   { opacity: 1 !important; transform: translateX(0) !important; }
        .contact-row:hover .row-arrow    { transform: translateX(3px) !important; }
        .contact-row:hover { border-color: #2a2a2a !important; background: #131313 !important; }
      `}</style>

      {/* NAV */}
      <nav style={s.nav}>
        <span style={s.navBrand}>ade.</span>
        <div style={s.navLinks}>
          {["Work", "Skills", "About", "Contact"].map((l) => (
            <a key={l} href="#" style={{ ...s.navLink, ...(l === "Contact" ? s.navLinkActive : {}) }}>{l}</a>
          ))}
        </div>
      </nav>

      {/* HEADER */}
      <header style={s.header}>
        <div style={s.headerInner}>
          <span style={s.headerTag}>Contact</span>
          <h1 style={s.pageTitle}>Let's Connect</h1>
          <p style={s.pageSubtitle}>
            Open to data analyst, BI, and data science opportunities —<br />
            reach out through any of the channels below.
          </p>
        </div>
      </header>

      {/* CONTACT GRID */}
      <main style={s.main}>
        <div style={s.grid}>
          {contacts.map((c, i) => (
            <a
              key={c.id}
              href={c.href}
              target={c.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="contact-row"
              style={{ ...s.card, animationDelay: `${i * 70}ms` }}
            >
              {/* Top: number + arrow */}
              <div style={s.cardTop}>
                <span style={s.rowId}>— {c.id}</span>
                <span className="row-arrow" style={s.rowArrow}>→</span>
              </div>

              {/* Icon */}
              <div style={s.rowIcon}>{c.icon}</div>

              {/* Platform + handle */}
              <div style={s.rowText}>
                <span className="row-platform" style={s.rowPlatform}>{c.platform}</span>
                <span className="row-handle" style={s.rowHandle}>{c.handle}</span>
              </div>

              {/* Action CTA */}
              <span className="row-action" style={s.rowAction}>{c.action}</span>
            </a>
          ))}
        </div>

        {/* availability note */}
        <div style={s.availability}>
          <span style={s.availDot} />
          <span style={s.availText}>Currently available for new opportunities</span>
        </div>
      </main>

      <footer style={s.footer}>
        <span>Built with data. Designed with intention.</span>
      </footer>
    </div>
  );
}

// ─── STYLES ────────────────────────────────────────────────────────────────────
const FONT_DISPLAY = "'Syne', sans-serif";
const FONT_MONO    = "'DM Mono', monospace";

const C = {
  bg:          "#0b0b0b",
  surface:     "#111111",
  border:      "#1e1e1e",
  accent:      "#c8f060",
  accentMuted: "#8db83a",
  text:        "#e8e8e8",
  textMuted:   "#555",
  textDim:     "#333",
};

const s = {
  root: {
    background: C.bg,
    minHeight: "100vh",
    fontFamily: FONT_DISPLAY,
    color: C.text,
  },

  nav: {
    maxWidth: 1100,
    margin: "0 auto",
    padding: "24px 40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  navBrand: {
    fontFamily: FONT_MONO,
    fontSize: 14,
    fontWeight: 500,
    color: C.text,
  },
  navLinks: { display: "flex", gap: 32 },
  navLink: {
    fontFamily: FONT_MONO,
    fontSize: 11,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    color: C.textMuted,
  },
  navLinkActive: { color: C.accent },

  header: {
    borderBottom: `1px solid ${C.border}`,
    marginBottom: 64,
  },
  headerInner: {
    maxWidth: 1100,
    margin: "0 auto",
    padding: "64px 40px 48px",
  },
  headerTag: {
    fontFamily: FONT_MONO,
    fontSize: 11,
    letterSpacing: "0.15em",
    textTransform: "uppercase",
    color: C.accentMuted,
    display: "block",
    marginBottom: 20,
  },
  pageTitle: {
    fontSize: "clamp(42px, 7vw, 80px)",
    fontWeight: 800,
    letterSpacing: "-0.04em",
    lineHeight: 0.95,
    marginBottom: 24,
  },
  pageSubtitle: {
    fontFamily: FONT_MONO,
    fontSize: 13,
    color: C.textMuted,
    fontWeight: 300,
    lineHeight: 1.7,
  },

  main: {
    maxWidth: 1100,
    margin: "0 auto",
    padding: "0 40px 80px",
    display: "flex",
    flexDirection: "column",
    gap: 32,
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: 16,
  },

  card: {
    display: "flex",
    flexDirection: "column",
    gap: 20,
    padding: "28px 28px 24px",
    background: C.surface,
    border: `1px solid ${C.border}`,
    cursor: "pointer",
    transition: "background 0.15s ease, border-color 0.15s ease",
  },

  cardTop: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },

  rowId: {
    fontFamily: FONT_MONO,
    fontSize: 10,
    color: C.textDim,
    letterSpacing: "0.1em",
  },

  rowIcon: {
    width: 44,
    height: 44,
    borderRadius: 3,
    background: "#161616",
    border: `1px solid ${C.border}`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: C.textMuted,
    flexShrink: 0,
    transition: "color 0.15s",
  },
  rowText: {
    display: "flex",
    flexDirection: "column",
    gap: 6,
  },
  rowPlatform: {
    fontFamily: FONT_MONO,
    fontSize: 10,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    color: C.textMuted,
    transition: "color 0.15s",
  },
  rowHandle: {
    fontSize: 16,
    fontWeight: 600,
    letterSpacing: "-0.02em",
    color: "#aaa",
    transition: "color 0.15s",
  },

  rowAction: {
    fontFamily: FONT_MONO,
    fontSize: 11,
    color: C.accent,
    letterSpacing: "0.06em",
    opacity: 0,
    transform: "translateX(-6px)",
    transition: "opacity 0.2s ease, transform 0.2s ease",
    marginTop: "auto",
  },
  rowArrow: {
    fontFamily: FONT_MONO,
    fontSize: 14,
    color: C.textDim,
    transition: "transform 0.2s ease",
  },

  availability: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    padding: "24px 0 0",
    marginTop: 16,
    borderTop: `1px solid ${C.border}`,
  },
  availDot: {
    width: 7,
    height: 7,
    borderRadius: "50%",
    background: C.accent,
    boxShadow: `0 0 8px ${C.accent}80`,
    flexShrink: 0,
  },
  availText: {
    fontFamily: FONT_MONO,
    fontSize: 11,
    color: C.textMuted,
    letterSpacing: "0.06em",
  },

  footer: {
    maxWidth: 1100,
    margin: "0 auto",
    padding: "24px 40px",
    borderTop: `1px solid ${C.border}`,
    fontFamily: FONT_MONO,
    fontSize: 11,
    color: C.textDim,
    letterSpacing: "0.08em",
  },
};
