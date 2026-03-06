import { useState } from "react";

// ─── DATA ──────────────────────────────────────────────────────────────────────
const SKILL_GROUPS = [
  {
    id: "01",
    category: "Data Analysis & BI",
    description: "Tools for building dashboards, reports, and business intelligence workflows.",
    tools: [
      { name: "Power BI", icon: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg" },
      { name: "Excel", icon: "https://upload.wikimedia.org/wikipedia/commons/3/34/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg" },
      { name: "Power Query", icon: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg" },
      { name: "DAX", icon: null },
      { name: "ZoomCharts", icon: null },
      { name: "Smart Frames UI", icon: null },
    ],
  },
  {
    id: "02",
    category: "Programming & Data Science",
    description: "Languages and libraries for data manipulation, modelling, and machine learning.",
    tools: [
      { name: "Python", icon: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" },
      { name: "Pandas", icon: "https://upload.wikimedia.org/wikipedia/commons/e/ed/Pandas_logo.svg" },
      { name: "NumPy", icon: "https://upload.wikimedia.org/wikipedia/commons/3/31/NumPy_logo_2020.svg" },
      { name: "Scikit-learn", icon: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" },
      { name: "Jupyter", icon: "https://upload.wikimedia.org/wikipedia/commons/3/38/Jupyter_logo.svg" },
    ],
  },
  {
    id: "03",
    category: "Visualisation",
    description: "Libraries and tools for charts, statistical plots, and exploratory visual analysis.",
    tools: [
      { name: "Matplotlib", icon: "https://upload.wikimedia.org/wikipedia/commons/8/84/Matplotlib_icon.svg" },
      { name: "Seaborn", icon: null },
    ],
  },
  {
    id: "04",
    category: "Deployment & Apps",
    description: "Frameworks for turning models and analyses into interactive, shareable applications.",
    tools: [
      { name: "Streamlit", icon: "https://streamlit.io/images/brand/streamlit-mark-color.svg" },
    ],
  },
  {
    id: "05",
    category: "Data Preparation",
    description: "Spreadsheet and ETL tooling used for cleaning, structuring, and validating data before analysis.",
    tools: [
      { name: "Excel", icon: "https://upload.wikimedia.org/wikipedia/commons/3/34/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg" },
      { name: "Power Query", icon: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg" },
    ],
  },
];

// ─── MONOGRAM fallback ─────────────────────────────────────────────────────────
const Monogram = ({ name }) => {
  const initials = name
    .split(/[\s\-_]/)
    .map((w) => w[0])
    .join("")
    .toUpperCase()
    .slice(0, 3);
  return (
    <div style={s.monogram}>
      {initials}
    </div>
  );
};

// ─── TOOL ITEM ─────────────────────────────────────────────────────────────────
const ToolItem = ({ tool }) => {
  const [imgErr, setImgErr] = useState(false);

  return (
    <div style={s.toolItem}>
      <div style={s.toolIcon}>
        {tool.icon && !imgErr ? (
          <img
            src={tool.icon}
            alt={tool.name}
            style={s.toolImg}
            onError={() => setImgErr(true)}
          />
        ) : (
          <Monogram name={tool.name} />
        )}
      </div>
      <span style={s.toolName}>{tool.name}</span>
    </div>
  );
};

// ─── SKILL GROUP ──────────────────────────────────────────────────────────────
const SkillGroup = ({ group, index }) => (
  <div style={s.group}>
    {/* Left: label column */}
    <div style={s.groupMeta}>
      <span style={s.groupId}>— {group.id}</span>
      <h2 style={s.groupTitle}>{group.category}</h2>
      <p style={s.groupDesc}>{group.description}</p>
      <span style={s.groupCount}>{group.tools.length} tool{group.tools.length !== 1 ? "s" : ""}</span>
    </div>

    {/* Right: tools grid */}
    <div style={s.toolGrid}>
      {group.tools.map((tool) => (
        <ToolItem key={tool.name} tool={tool} />
      ))}
    </div>
  </div>
);

// ─── APP ───────────────────────────────────────────────────────────────────────
export default function App() {
  const totalTools = [...new Set(SKILL_GROUPS.flatMap((g) => g.tools.map((t) => t.name)))].length;

  return (
    <div style={s.root}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Mono:wght@300;400;500&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #0b0b0b; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #0b0b0b; }
        ::-webkit-scrollbar-thumb { background: #222; border-radius: 3px; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .skill-group {
          animation: fadeUp 0.4s ease both;
        }
        .tool-item:hover .tool-name-text {
          color: #e8e8e8 !important;
        }
        .tool-item:hover {
          border-color: #2a2a2a !important;
          background: #161616 !important;
        }
      `}</style>

      {/* NAV */}
      <nav style={s.nav}>
        <span style={s.navBrand}>ade.</span>
        <div style={s.navLinks}>
          {["Work", "Skills", "About", "Contact"].map((l) => (
            <a key={l} href="#" style={{ ...s.navLink, ...(l === "Skills" ? s.navLinkActive : {}) }}>{l}</a>
          ))}
        </div>
      </nav>

      {/* HEADER */}
      <header style={s.header}>
        <div style={s.headerInner}>
          <span style={s.headerTag}>Skills</span>
          <h1 style={s.pageTitle}>Tools at a Glance</h1>
          <p style={s.pageSubtitle}>
            The stack behind the work — grouped by purpose, not just listed by name.
          </p>
        </div>
      </header>

      {/* GROUPS */}
      <main style={s.main}>
        {SKILL_GROUPS.map((group, i) => (
          <div
            key={group.id}
            className="skill-group"
            style={{ animationDelay: `${i * 70}ms` }}
          >
            <SkillGroup group={group} index={i} />
            {i < SKILL_GROUPS.length - 1 && <div style={s.separator} />}
          </div>
        ))}
      </main>

      {/* FOOTER */}
      <footer style={s.footer}>
        <span>{totalTools} distinct tools across {SKILL_GROUPS.length} categories</span>
      </footer>
    </div>
  );
}

// ─── STYLES ────────────────────────────────────────────────────────────────────
const FONT_DISPLAY = "'Syne', sans-serif";
const FONT_MONO    = "'DM Mono', monospace";

const C = {
  bg:        "#0b0b0b",
  surface:   "#111111",
  surfaceHover: "#161616",
  border:    "#1e1e1e",
  accent:    "#c8f060",
  accentMuted: "#8db83a",
  text:      "#e8e8e8",
  textMuted: "#555",
  textDim:   "#333",
};

const s = {
  root: {
    background: C.bg,
    minHeight: "100vh",
    fontFamily: FONT_DISPLAY,
    color: C.text,
  },

  // NAV
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
    textDecoration: "none",
  },
  navLinkActive: {
    color: C.accent,
  },

  // HEADER
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

  // MAIN
  main: {
    maxWidth: 1100,
    margin: "0 auto",
    padding: "0 40px 80px",
  },

  // GROUP ROW
  group: {
    display: "grid",
    gridTemplateColumns: "260px 1fr",
    gap: "0 56px",
    alignItems: "start",
    padding: "48px 0",
  },
  groupMeta: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
    position: "sticky",
    top: 32,
  },
  groupId: {
    fontFamily: FONT_MONO,
    fontSize: 10,
    color: C.textDim,
    letterSpacing: "0.1em",
  },
  groupTitle: {
    fontSize: 20,
    fontWeight: 700,
    letterSpacing: "-0.02em",
    lineHeight: 1.2,
    color: C.text,
  },
  groupDesc: {
    fontFamily: FONT_MONO,
    fontSize: 11,
    color: C.textMuted,
    lineHeight: 1.65,
    fontWeight: 300,
  },
  groupCount: {
    fontFamily: FONT_MONO,
    fontSize: 10,
    color: C.accent,
    letterSpacing: "0.08em",
    marginTop: 4,
  },

  separator: {
    height: 1,
    background: C.border,
    margin: "0",
  },

  // TOOL GRID
  toolGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))",
    gap: 12,
  },

  // TOOL ITEM
  toolItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 14,
    padding: "28px 16px 24px",
    background: C.surface,
    border: `1px solid ${C.border}`,
    borderRadius: 3,
    cursor: "default",
    transition: "background 0.15s ease, border-color 0.15s ease",
  },
  toolIcon: {
    width: 40,
    height: 40,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  toolImg: {
    width: 40,
    height: 40,
    objectFit: "contain",
    display: "block",
  },
  monogram: {
    width: 40,
    height: 40,
    borderRadius: 3,
    background: "#1a1a1a",
    border: `1px solid #2a2a2a`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: FONT_MONO,
    fontSize: 11,
    fontWeight: 500,
    color: C.textMuted,
    letterSpacing: "0.05em",
  },
  toolName: {
    fontFamily: FONT_MONO,
    fontSize: 11,
    color: C.textMuted,
    letterSpacing: "0.04em",
    textAlign: "center",
    lineHeight: 1.4,
    transition: "color 0.15s",
  },

  // FOOTER
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
