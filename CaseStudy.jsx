import { useState } from "react";

// ─── DATA ──────────────────────────────────────────────────────────────────────
const CASE_STUDIES = [
  {
    id: "06",
    title: "Financial Fraud Detection with Machine Learning",
    timeline: "September 2025",
    tools: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn", "Streamlit", "Jupyter Notebook"],
    summary:
      "Detecting fraud in highly imbalanced financial transaction data — where 95% accuracy hides a dangerous flaw. This project became an exploration of why accuracy alone is misleading and how model evaluation must align with real business risk.",
    what: [
      "Built and cleaned a dataset: 10,000 training + 1,500 test transactions",
      "Engineered features: transaction details, customer demographics, account behavior, device and risk indicators",
      "Handled missing values using sentinel values (99999) — letting the model learn patterns of missingness",
      "Encoded categoricals with OrdinalEncoder for consistent, deployment-friendly preprocessing",
      "Tested Random Forest, XGBoost, and Logistic Regression",
      "Shifted focus from accuracy to recall and balanced metrics",
      "Tuned class weights and adjusted prediction threshold to 0.45",
      "Deployed via Streamlit — supports single and bulk CSV predictions",
    ],
    metrics: [
      { label: "Accuracy", value: "~0.78" },
      { label: "Balanced Accuracy", value: "~0.63" },
      { label: "Recall", value: "~0.46" },
      { label: "ROC AUC", value: "~0.64" },
      { label: "PR AUC", value: "~0.08 (≈2× baseline)" },
    ],
    insights: [
      "High accuracy can mask poor fraud detection in imbalanced datasets",
      "Tree-based models looked strong on paper but failed on minority fraud cases",
      "Logistic Regression with class weighting won on recall-focused objectives",
      "Missing values can be informative signals, not noise",
      "Threshold tuning is as important as model selection",
    ],
    outcomes: [
      "Demonstrated why recall matters more than accuracy in fraud detection",
      "Showed how evaluation must align with operational risk",
      "Built an end-to-end deployment-ready pipeline",
      "Delivered a usable fraud app for real-time and batch predictions",
    ],
    takeaway:
      "In fraud detection, it's better to flag a few legitimate transactions than to let real fraud slip through unnoticed.",
  },
  {
    id: "07",
    title: "Employee Performance, Productivity & Attrition Analysis",
    timeline: "September 2025",
    tools: ["Power BI", "Power Query", "Excel", "ZoomCharts"],
    summary:
      "Developed for FP20 Analytics Challenge 30 — analyzing workforce performance, satisfaction, attrition, and business outcomes across departments and store locations. The goal: connect people performance to business performance.",
    what: [
      "Cleaned and modeled a multi-year employee dataset: demographics, roles, tenure, performance ratings, satisfaction scores, compensation, store-level sales",
      "Built a three-page Power BI dashboard: workforce overview & attrition, performance & training, employee- and store-level deep dives",
      "Implemented KPI cards with YoY comparisons, performance group toggles, drill-downs by department, store, role, and age group",
      "Structured insights to support retention planning, performance management, and workforce investment decisions",
    ],
    metrics: [
      { label: "Total Employees", value: "7,500" },
      { label: "Active", value: "6,744" },
      { label: "Attrition YoY", value: "+82.6%" },
      { label: "Sales Achievement", value: "100.06%" },
      { label: "Avg Performance", value: "3.7 / 5" },
      { label: "Customer Satisfaction", value: "7.5 / 10" },
    ],
    insights: [
      "Highest attrition in the 31–40 age group (351 exits) — mid-career risk is real",
      "Manager count remained stable at 51 while overall exits surged +82.6% YoY",
      "Top performers consistently scored above 4.5; bottom performers averaged below 2.5",
      "Top stores exceeded 104% sales achievement; lagging stores averaged ~96%",
      "Average training investment was only 2.8 hours — a significant gap",
    ],
    outcomes: [
      "Attrition risk is highest among mid-career employees (31–40) — needs proactive action",
      "Training investment is low and represents the clearest lever to improve productivity",
      "High-performing stores can be benchmarked and used as internal mentors",
      "Compensation alignment is critical to retaining high-value talent",
    ],
    takeaway:
      "People drive performance — and performance drives business results. Workforce data, when connected properly, becomes a strategic advantage.",
  },
  {
    id: "08",
    title: "Animal Shelter Intake, Outcomes & Adoption Analysis",
    timeline: "December 2025",
    tools: ["Power BI", "Power Query", "Excel", "ZoomCharts"],
    summary:
      "Built for the Onyx DataDNA Challenge — analyzing animal shelter operations to uncover patterns in intake, outcomes, adoption performance, and live release rates. The focus: understanding where pressure builds and how to turn insight into preparedness.",
    what: [
      "Cleaned and modeled multi-year shelter data: intake volume, type, condition, age group, jurisdiction, length of stay, seasonality",
      "Built a two-page Power BI dashboard: intake overview & trends, outcome performance & adoption analysis",
      "Implemented time granularity controls (Day → Year), drill-downs by animal type, age group, condition, and jurisdiction",
      "Structured insights around capacity pressure, outcome efficiency, and adoption performance gaps",
    ],
    metrics: [
      { label: "Total Intakes", value: "52,343" },
      { label: "Recorded Outcomes", value: "51,943" },
      { label: "Live Release Rate", value: "79.1%" },
      { label: "Total Adoptions", value: "11,172" },
      { label: "Adoption Rate", value: "21.5%" },
      { label: "Avg Length of Stay", value: "19 days" },
    ],
    insights: [
      "Infants consistently record the highest intake volumes — strong seasonal pressure",
      "Cats account for the largest share of intakes, followed by dogs",
      "Mid-year peaks create predictable operational strain",
      "Adoption rate (21.5%) lags significantly behind overall live release rate (79.1%)",
      "Euthanasia remains notable under severe intake conditions despite strong overall live outcomes",
    ],
    outcomes: [
      "Intake pressure is seasonal and predictable — staff and capacity can be planned accordingly",
      "Cats and infant animals require focused resource allocation",
      "Adoption-specific strategies could close the gap between live release and adoption rates",
      "Reducing length of stay during peak seasons would meaningfully improve shelter efficiency",
    ],
    takeaway:
      "Animal shelter operations are deeply seasonal — data reveals exactly when, where, and how pressure builds, turning insight into preparedness.",
  },
  {
    id: "09",
    title: "PharmaScope: Multi-Country Pharmacy Performance Analysis",
    timeline: "February 2026",
    tools: ["Power BI", "Power Query", "Excel", "ZoomCharts", "Smart Frames UI"],
    summary:
      "Completed for the Onyx DataDNA Challenge — analyzing a multi-country pharmacy network to understand revenue growth, profitability, operational efficiency, and risk concentration. The real question: is this growth sustainable?",
    what: [
      "Modeled and analyzed multi-country pharmacy sales and transaction data",
      "Built a multi-page Power BI dashboard: revenue, profit, margin & volume trends; brand-level performance; country and pharmacy-type (Urban vs Rural) comparisons; product category and promotion performance",
      "Implemented Pareto/80–20 cumulative contribution analysis",
      "Built dynamic filters by brand, category, promotion, and geography with cross-period comparisons",
    ],
    metrics: [
      { label: "Revenue (Prior Year)", value: "$4.2M" },
      { label: "Revenue (Current)", value: "$8.6M" },
      { label: "Net Profit", value: "$2.42M" },
      { label: "Margin", value: "~28% (stable)" },
      { label: "Top Country", value: "Germany" },
      { label: "80% Revenue Driven By", value: "21 brands" },
    ],
    insights: [
      "Revenue doubled YoY — growth is volume-driven, not price-driven",
      "Margins held stable at ~28% despite scaling, showing healthy operational control",
      "80% of revenue concentrates in just 21 brands — a dependency risk",
      "Urban pharmacies consistently outperform rural in both volume and profitability",
      "Average revenue per transaction declined slightly despite volume growth",
    ],
    outcomes: [
      "Growth is real but concentrated — geographic and brand risk must be addressed",
      "Diversify revenue across additional countries to reduce single-market dependency",
      "Optimize the brand portfolio to reduce the 80/21 concentration",
      "Increase basket value through cross-selling rather than broad discounting",
    ],
    takeaway:
      "Growth looks strong on the surface, but long-term resilience depends on diversification and smarter revenue strategy.",
  },
];

// ─── ICONS ─────────────────────────────────────────────────────────────────────
const IconChevron = ({ open }) => (
  <svg
    width="16" height="16" viewBox="0 0 16 16" fill="none"
    style={{ transform: open ? "rotate(90deg)" : "rotate(0deg)", transition: "transform 0.25s ease" }}
  >
    <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// ─── SECTION BLOCK ─────────────────────────────────────────────────────────────
const Section = ({ label, children }) => (
  <div style={s.section}>
    <div style={s.sectionLabel}>{label}</div>
    <div style={s.sectionBody}>{children}</div>
  </div>
);

// ─── BULLET LIST ───────────────────────────────────────────────────────────────
const List = ({ items }) => (
  <ul style={s.list}>
    {items.map((item, i) => (
      <li key={i} style={s.listItem}>
        <span style={s.bullet}>—</span>
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

// ─── METRICS GRID ─────────────────────────────────────────────────────────────
const MetricsGrid = ({ metrics }) => (
  <div style={s.metricsGrid}>
    {metrics.map((m, i) => (
      <div key={i} style={s.metricCard}>
        <div style={s.metricValue}>{m.value}</div>
        <div style={s.metricLabel}>{m.label}</div>
      </div>
    ))}
  </div>
);

// ─── TOOL PILL ─────────────────────────────────────────────────────────────────
const ToolPill = ({ name }) => <span style={s.pill}>{name}</span>;

// ─── CASE STUDY CARD ──────────────────────────────────────────────────────────
const CaseStudyCard = ({ cs, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <article style={{ ...s.card, ...(open ? s.cardOpen : {}) }}>
      {/* HEADER — always visible */}
      <button style={s.header} onClick={() => setOpen(!open)} aria-expanded={open}>
        <div style={s.headerLeft}>
          <span style={s.projectId}>Project {cs.id}</span>
          <h2 style={s.title}>{cs.title}</h2>
          <span style={s.timeline}>{cs.timeline}</span>
        </div>
        <div style={s.chevron}>
          <IconChevron open={open} />
        </div>
      </button>

      {/* BODY — expands on click */}
      <div style={{ ...s.body, ...(open ? s.bodyOpen : s.bodyClosed) }}>
        <div style={s.bodyInner}>
          {/* Tools */}
          <Section label="Tools">
            <div style={s.pillRow}>{cs.tools.map((t) => <ToolPill key={t} name={t} />)}</div>
          </Section>

          {/* Summary */}
          <Section label="Summary">
            <p style={s.prose}>{cs.summary}</p>
          </Section>

          {/* What I Did */}
          <Section label="What I Did">
            <List items={cs.what} />
          </Section>

          {/* Metrics — only if present */}
          {cs.metrics?.length > 0 && (
            <Section label="Key Metrics">
              <MetricsGrid metrics={cs.metrics} />
            </Section>
          )}

          {/* Key Insights */}
          <Section label="Key Insights">
            <List items={cs.insights} />
          </Section>

          {/* Outcomes */}
          <Section label="Outcomes & Recommendations">
            <List items={cs.outcomes} />
          </Section>

          {/* Takeaway */}
          <div style={s.takeaway}>
            <span style={s.takeawayIcon}>↳</span>
            <p style={s.takeawayText}>{cs.takeaway}</p>
          </div>
        </div>
      </div>
    </article>
  );
};

// ─── APP ───────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <div style={s.root}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Mono:wght@300;400;500&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        button { cursor: pointer; font: inherit; background: none; border: none; text-align: left; }
        ul { list-style: none; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #0d0d0d; }
        ::-webkit-scrollbar-thumb { background: #2a2a2a; border-radius: 3px; }
      `}</style>

      <header style={s.pageHeader}>
        <div style={s.headerTag}>Portfolio</div>
        <h1 style={s.pageTitle}>Case Studies</h1>
        <p style={s.pageSubtitle}>Data analysis, machine learning, and business intelligence projects</p>
      </header>

      <main style={s.main}>
        {CASE_STUDIES.map((cs, i) => (
          <CaseStudyCard key={cs.id} cs={cs} defaultOpen={i === 0} />
        ))}
      </main>

      <footer style={s.footer}>
        <span>Built with data. Designed with intention.</span>
      </footer>
    </div>
  );
}

// ─── STYLES ────────────────────────────────────────────────────────────────────
const FONT_DISPLAY = "'Syne', sans-serif";
const FONT_MONO = "'DM Mono', monospace";

const C = {
  bg: "#0b0b0b",
  surface: "#111111",
  surfaceHover: "#161616",
  border: "#1e1e1e",
  borderActive: "#2e2e2e",
  accent: "#c8f060",       // sharp lime-green
  accentMuted: "#8db83a",
  text: "#e8e8e8",
  textMuted: "#666",
  textDim: "#3a3a3a",
  metric: "#f5f5f5",
};

const s = {
  root: {
    background: C.bg,
    minHeight: "100vh",
    fontFamily: FONT_DISPLAY,
    color: C.text,
    padding: "0 0 80px",
  },
  pageHeader: {
    maxWidth: 860,
    margin: "0 auto",
    padding: "80px 24px 56px",
    borderBottom: `1px solid ${C.border}`,
    marginBottom: 40,
  },
  headerTag: {
    fontFamily: FONT_MONO,
    fontSize: 11,
    letterSpacing: "0.15em",
    textTransform: "uppercase",
    color: C.accentMuted,
    marginBottom: 16,
  },
  pageTitle: {
    fontSize: "clamp(36px, 6vw, 64px)",
    fontWeight: 800,
    letterSpacing: "-0.03em",
    lineHeight: 1,
    color: C.text,
    marginBottom: 16,
  },
  pageSubtitle: {
    fontFamily: FONT_MONO,
    fontSize: 13,
    color: C.textMuted,
    fontWeight: 300,
  },
  main: {
    maxWidth: 860,
    margin: "0 auto",
    padding: "0 24px",
    display: "flex",
    flexDirection: "column",
    gap: 2,
  },
  card: {
    background: C.surface,
    border: `1px solid ${C.border}`,
    borderRadius: 4,
    overflow: "hidden",
    transition: "border-color 0.2s ease",
  },
  cardOpen: {
    borderColor: C.borderActive,
  },
  header: {
    width: "100%",
    padding: "24px 28px",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: 16,
    transition: "background 0.15s ease",
    ":hover": { background: C.surfaceHover },
  },
  headerLeft: {
    display: "flex",
    flexDirection: "column",
    gap: 6,
  },
  projectId: {
    fontFamily: FONT_MONO,
    fontSize: 10,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    color: C.accent,
  },
  title: {
    fontSize: "clamp(15px, 2.5vw, 19px)",
    fontWeight: 700,
    letterSpacing: "-0.02em",
    color: C.text,
    lineHeight: 1.3,
  },
  timeline: {
    fontFamily: FONT_MONO,
    fontSize: 11,
    color: C.textMuted,
    fontWeight: 300,
  },
  chevron: {
    color: C.textMuted,
    flexShrink: 0,
    marginTop: 4,
  },
  body: {
    overflow: "hidden",
    transition: "max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease",
  },
  bodyOpen: {
    maxHeight: "4000px",
    opacity: 1,
  },
  bodyClosed: {
    maxHeight: 0,
    opacity: 0,
  },
  bodyInner: {
    padding: "0 28px 32px",
    borderTop: `1px solid ${C.border}`,
    display: "flex",
    flexDirection: "column",
    gap: 28,
    paddingTop: 28,
  },
  section: {
    display: "grid",
    gridTemplateColumns: "140px 1fr",
    gap: "0 24px",
    alignItems: "start",
  },
  sectionLabel: {
    fontFamily: FONT_MONO,
    fontSize: 10,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    color: C.textMuted,
    paddingTop: 3,
    lineHeight: 1.6,
  },
  sectionBody: {},
  prose: {
    fontSize: 14,
    lineHeight: 1.7,
    color: "#c8c8c8",
    fontWeight: 400,
  },
  list: {
    display: "flex",
    flexDirection: "column",
    gap: 8,
  },
  listItem: {
    display: "flex",
    gap: 10,
    fontSize: 14,
    lineHeight: 1.6,
    color: "#c0c0c0",
    alignItems: "flex-start",
  },
  bullet: {
    fontFamily: FONT_MONO,
    color: C.accent,
    flexShrink: 0,
    fontSize: 12,
    marginTop: 2,
  },
  pillRow: {
    display: "flex",
    flexWrap: "wrap",
    gap: 8,
  },
  pill: {
    fontFamily: FONT_MONO,
    fontSize: 11,
    padding: "4px 10px",
    borderRadius: 2,
    background: "#1a1a1a",
    border: `1px solid ${C.border}`,
    color: "#aaa",
    letterSpacing: "0.03em",
  },
  metricsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(130px, 1fr))",
    gap: 1,
    background: C.border,
    border: `1px solid ${C.border}`,
    borderRadius: 3,
    overflow: "hidden",
  },
  metricCard: {
    background: "#111",
    padding: "16px 16px 14px",
    display: "flex",
    flexDirection: "column",
    gap: 4,
  },
  metricValue: {
    fontFamily: FONT_MONO,
    fontSize: 18,
    fontWeight: 500,
    color: C.accent,
    letterSpacing: "-0.02em",
    lineHeight: 1,
  },
  metricLabel: {
    fontFamily: FONT_MONO,
    fontSize: 10,
    color: C.textMuted,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
  },
  takeaway: {
    display: "flex",
    gap: 14,
    alignItems: "flex-start",
    background: "#0f150a",
    border: `1px solid #1e2a12`,
    borderLeft: `3px solid ${C.accent}`,
    borderRadius: 3,
    padding: "16px 20px",
  },
  takeawayIcon: {
    fontFamily: FONT_MONO,
    color: C.accent,
    fontSize: 16,
    flexShrink: 0,
    marginTop: 1,
  },
  takeawayText: {
    fontSize: 13.5,
    lineHeight: 1.65,
    color: "#b0b0b0",
    fontStyle: "italic",
  },
  footer: {
    maxWidth: 860,
    margin: "60px auto 0",
    padding: "24px 24px 0",
    borderTop: `1px solid ${C.border}`,
    fontFamily: FONT_MONO,
    fontSize: 11,
    color: C.textDim,
    letterSpacing: "0.08em",
  },
};
