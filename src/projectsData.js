export const projects = [
  {
    slug: 'sales-performance-dashboard',
    title: 'Sales Performance Dashboard',
    timeline: '5 months ago',
    tools: ['Power BI', 'SQL', 'Excel'],
    summary: 'Designed a sales dashboard to track revenue, growth, and top-performing categories across regions. Added drill-down filters so stakeholders could quickly isolate opportunities and underperforming segments.',
    projectSummary: 'This project unified fragmented monthly sales exports into one model for consistent KPI tracking. I cleaned source tables, created reusable DAX measures, and designed an executive-facing dashboard focused on trend clarity.',
    keyInsights: [
      'A small group of products generated most of the revenue concentration risk.',
      'One region had strong order volume but weak margin contribution.',
      'Weekly trend spikes were tied to campaign windows, not organic demand.'
    ],
    outcome: 'The dashboard replaced manual reporting and reduced monthly reporting effort while helping the team prioritize higher-margin segments.',
    links: {
      dashboard: 'https://app.powerbi.com/',
      github: 'https://github.com/Ade-Adeola',
      medium: 'https://medium.com/@adeolaaderibigbe10'
    },
    image: '/assets/design-1.svg'
  },
  {
    slug: 'customer-churn-prediction',
    title: 'Customer Churn Prediction Model',
    timeline: '4 months ago',
    tools: ['Python', 'Pandas', 'Scikit-learn'],
    summary: 'Built a churn prediction workflow using customer behavior and subscription history. Combined model outputs with customer segments to support retention decisions and proactive outreach.',
    projectSummary: 'I prepared usage, billing, and support-event features, then benchmarked multiple classification models to estimate churn probability. The final pipeline balanced interpretability with practical performance for business use.',
    keyInsights: [
      'Low engagement in the first weeks strongly correlated with churn risk.',
      'Repeated unresolved support tickets increased probability of cancellation.',
      'Pricing-tier transitions were a leading indicator for at-risk cohorts.'
    ],
    outcome: 'The model highlighted high-risk segments and informed targeted retention actions, improving prioritization for the customer success team.',
    links: {
      dashboard: 'https://app.powerbi.com/',
      github: 'https://github.com/Ade-Adeola'
    },
    image: '/assets/design-2.svg'
  },
  {
    slug: 'marketing-campaign-roi-tracker',
    title: 'Marketing Campaign ROI Tracker',
    timeline: '3 months ago',
    tools: ['Power BI', 'SQL', 'DAX'],
    summary: 'Created a campaign analytics tracker connecting spend, conversions, and customer value. Enabled cross-channel comparisons and clearer reporting on campaign effectiveness.',
    projectSummary: 'This project combined campaign, conversion, and revenue tables into a unified attribution view. I implemented campaign-level metrics and built visuals for ROI, CAC, and conversion trends by channel.',
    keyInsights: [
      'Some channels delivered low CAC but weak downstream conversion quality.',
      'Email nurtures produced stronger long-term value than short-run paid spikes.',
      'Campaign timing had stronger effect than creative variation in selected markets.'
    ],
    outcome: 'The tracker improved budget allocation discussions and made campaign tradeoffs easier to evaluate with shared metrics.',
    links: {
      dashboard: 'https://app.powerbi.com/',
      github: 'https://github.com/Ade-Adeola',
      medium: 'https://medium.com/@adeolaaderibigbe10'
    },
    image: '/assets/design-3.svg'
  },
  {
    slug: 'retail-inventory-optimization',
    title: 'Retail Inventory Optimization Analysis',
    timeline: '2 months ago',
    tools: ['Python', 'Excel', 'SQL'],
    summary: 'Analyzed inventory movement and demand seasonality to reduce stockouts and excess inventory. Proposed reorder points and category-level stock policies.',
    projectSummary: 'I studied sales velocity, lead time, and replenishment behavior across multiple SKUs. The analysis focused on balancing service levels with holding cost pressure in fast-moving categories.',
    keyInsights: [
      'Frequent stockouts were concentrated in a small number of high-volume SKUs.',
      'Several categories were overstocked due to static reorder assumptions.',
      'Seasonal patterns were not reflected in existing replenishment schedules.'
    ],
    outcome: 'The recommendations supported better reorder planning and reduced mismatch between inventory levels and demand behavior.',
    links: {
      dashboard: 'https://app.powerbi.com/',
      github: 'https://github.com/Ade-Adeola'
    },
    image: '/assets/design-4.svg'
  },
  {
    slug: 'loan-default-risk-model',
    title: 'Loan Default Risk Classification',
    timeline: '1 month ago',
    tools: ['Python', 'NumPy', 'Scikit-learn'],
    summary: 'Developed a loan-default classifier using borrower and repayment attributes. Focused on threshold tuning and interpretability for practical risk decisions.',
    projectSummary: 'I engineered credit-behavior features and compared baseline models for default classification. The final model emphasized stable recall for risky borrowers while limiting false positives.',
    keyInsights: [
      'Debt-to-income ratio and recent delinquencies were strong risk drivers.',
      'Some high-risk profiles were underweighted in existing rule-based checks.',
      'Threshold selection had a major impact on portfolio-level risk exposure.'
    ],
    outcome: 'The model offered a clearer, data-backed framework for screening applicants and discussing risk tolerance tradeoffs.',
    links: {
      dashboard: 'https://app.powerbi.com/',
      github: 'https://github.com/Ade-Adeola',
      medium: 'https://medium.com/@adeolaaderibigbe10'
    },
    image: '/assets/design-5.svg'
  },
  {
    slug: 'hr-attrition-analysis',
    title: 'HR Attrition & Workforce Insights',
    timeline: '6 weeks ago',
    tools: ['Power BI', 'Excel', 'SQL'],
    summary: 'Built an HR analytics report to understand attrition trends by role, tenure, and department. Highlighted retention pressure points and hiring implications.',
    projectSummary: 'This analysis combined employee records, tenure data, and exit trends to identify where attrition risk was most concentrated. Dashboard views were designed for HR and leadership decision-making.',
    keyInsights: [
      'Early-tenure exits were highest in a narrow set of teams.',
      'Promotion lag correlated with higher attrition in mid-level roles.',
      'Some units showed rising attrition alongside slower replacement rates.'
    ],
    outcome: 'The report supported retention planning and helped frame workforce priorities with measurable indicators.',
    links: {
      dashboard: 'https://app.powerbi.com/',
      github: 'https://github.com/Ade-Adeola'
    },
    image: '/assets/design-1.svg'
  },
  {
    slug: 'fraud-detection-exploration',
    title: 'Transaction Fraud Detection Exploration',
    timeline: '1 month ago',
    tools: ['Python', 'Pandas', 'NumPy'],
    summary: 'Explored transactional behavior to detect anomalous activity patterns. Compared rule-based and model-assisted approaches for fraud screening.',
    projectSummary: 'I profiled transactional events, engineered risk signals, and tested anomaly detection techniques. The analysis prioritized early pattern recognition and triage workflows.',
    keyInsights: [
      'Atypical transaction timing and value clusters flagged suspicious behavior.',
      'Sequence-based patterns revealed risk missed by static thresholds.',
      'Combining score-based alerts reduced false positives in preliminary tests.'
    ],
    outcome: 'The exploration produced a practical shortlist of fraud indicators and a starting framework for investigation prioritization.',
    links: {
      dashboard: 'https://app.powerbi.com/',
      github: 'https://github.com/Ade-Adeola'
    },
    image: '/assets/design-2.svg'
  },
  {
    slug: 'streamlit-kpi-monitor',
    title: 'Operations KPI Monitor (Streamlit)',
    timeline: '3 weeks ago',
    tools: ['Streamlit', 'Python', 'SQL'],
    summary: 'Built an interactive KPI monitor for operational metrics and trend tracking. Added quick filters and status signals for daily check-ins.',
    projectSummary: 'The app connected cleaned SQL outputs to a lightweight Streamlit interface for internal performance monitoring. It focused on speed, clarity, and repeatable daily usage.',
    keyInsights: [
      'Queue delays were concentrated in specific processing windows.',
      'Cycle-time variation increased after demand surges on key weekdays.',
      'A small set of bottlenecks drove most SLA misses.'
    ],
    outcome: 'Teams gained a simple live dashboard for routine performance checks and faster identification of operational bottlenecks.',
    links: {
      dashboard: 'https://share.streamlit.io/',
      github: 'https://github.com/Ade-Adeola',
      medium: 'https://medium.com/@adeolaaderibigbe10'
    },
    image: '/assets/design-3.svg'
  },
  {
    slug: 'power-query-data-cleaning-pipeline',
    title: 'Power Query Data Cleaning Pipeline',
    timeline: '2 weeks ago',
    tools: ['Power Query', 'Excel', 'Power BI'],
    summary: 'Created a repeatable data-cleaning flow for messy monthly reporting files. Standardized schema and transformed raw exports into analysis-ready tables.',
    projectSummary: 'I built a Power Query pipeline to automate recurring cleanup tasks, enforce consistent naming, and reduce manual preparation errors. The output fed directly into downstream reporting.',
    keyInsights: [
      'Source-file inconsistencies were the major cause of reporting delays.',
      'Automated column standardization reduced recurring cleanup effort.',
      'Validation checks caught data quality issues earlier in the process.'
    ],
    outcome: 'The pipeline improved reliability of monthly reporting and freed time previously spent on repetitive data preparation.',
    links: {
      dashboard: 'https://app.powerbi.com/',
      github: 'https://github.com/Ade-Adeola'
    },
    image: '/assets/design-4.svg'
  }
];
