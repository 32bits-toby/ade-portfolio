export const projects = [
  {
    slug: 'pharmascope-analytics',
    title: 'PharmaScope: Multi-Country Pharmacy Performance Analysis',
    timeline: 'February 2026 (2 days ago)',
    tools: ['Power BI', 'Power Query', 'Excel', 'ZoomCharts', 'Smart Frames UI'],
    summary: 'Analyzed the business performance of a multi-country pharmacy network to understand revenue growth, profitability, operational efficiency, and risk concentration.',
    projectSummary: 'This project was completed as part of the Onyx DataDNA Challenge. The objective went beyond visualizing growth—the real focus was identifying what is driving performance, where risk is concentrated, and whether growth is sustainable.',
    keyInsights: [
      'Growth is volume-driven, not price-driven.',
      'Revenue increased from $4.2M to $8.6M YoY while margins remained stable at ~28%.',
      '80% of total revenue is driven by just 21 brands, creating dependency risk.'
    ],
    outcome: 'Growth looks strong on the surface, but long-term resilience depends on diversification and smarter revenue strategy.',
    links: {
      dashboard: 'https://app.powerbi.com/view?r=eyJrIjoiNjBiNThkODAtZmNlNC00YjA2LTgzZDQtOWNjNThjNWJlZGU4IiwidCI6IjA3NTY1ZTVjLTU2ODEtNDk5OC1hN2RjLTU1OGZiM2U2OGU3NSJ9',
      github: 'https://github.com/Ade-Adeola/Pharmascope-Analytics',
      medium: 'https://www.linkedin.com/posts/aderibigbe-adeola_datafam-datadna-activity-7430480653428858880-Qgip'
    },
    image: '/assets/design-1.svg',
    caseStudy: {
      summary: 'Completed for the Onyx DataDNA Challenge — analyzing a multi-country pharmacy network to understand revenue growth, profitability, operational efficiency, and risk concentration. The real question: is this growth sustainable?',
      what: [
        'Modeled and analyzed multi-country pharmacy sales and transaction data',
        'Built a multi-page Power BI dashboard: revenue, profit, margin & volume trends; brand-level performance; country and pharmacy-type (Urban vs Rural) comparisons; product category and promotion performance',
        'Implemented Pareto/80–20 cumulative contribution analysis',
        'Built dynamic filters by brand, category, promotion, and geography with cross-period comparisons'
      ],
      metrics: [
        { label: 'Revenue (Prior Year)', value: '$4.2M' },
        { label: 'Revenue (Current)', value: '$8.6M' },
        { label: 'Net Profit', value: '$2.42M' },
        { label: 'Margin', value: '~28% (stable)' },
        { label: 'Top Country', value: 'Germany' },
        { label: '80% Revenue Driven By', value: '21 brands' }
      ],
      insights: [
        'Revenue doubled YoY — growth is volume-driven, not price-driven',
        'Margins held stable at ~28% despite scaling, showing healthy operational control',
        '80% of revenue concentrates in just 21 brands — a dependency risk',
        'Urban pharmacies consistently outperform rural in both volume and profitability',
        'Average revenue per transaction declined slightly despite volume growth'
      ],
      outcomes: [
        'Growth is real but concentrated — geographic and brand risk must be addressed',
        'Diversify revenue across additional countries to reduce single-market dependency',
        'Optimize the brand portfolio to reduce the 80/21 concentration',
        'Increase basket value through cross-selling rather than broad discounting'
      ],
      takeaway: 'Growth looks strong on the surface, but long-term resilience depends on diversification and smarter revenue strategy.'
    }
  },
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
    title: 'Fraud Detection in Imbalanced Financial Transactions',
    timeline: '1 month ago',
    tools: ['Python', 'Pandas', 'Scikit-learn', 'XGBoost', 'Streamlit'],
    summary: 'Built and deployed a fraud detection pipeline for highly imbalanced transaction data, shifting model evaluation from accuracy to recall and risk-aware metrics.',
    projectSummary: 'This project tackles a classic but difficult problem: detecting fraud in highly imbalanced financial transaction data.',
    keyInsights: [
      'High accuracy can hide poor fraud detection performance in imbalanced datasets.',
      'Logistic Regression with class weighting outperformed more complex models for recall-focused detection.',
      'Threshold tuning was as important as model selection for real fraud capture.'
    ],
    outcome: 'In fraud detection, it is better to flag a few legitimate transactions than to let real fraud slip through unnoticed.',
    links: {
      dashboard: 'https://app.powerbi.com/',
      github: 'https://github.com/Ade-Adeola',
      medium: 'https://medium.com/@adeolaaderibigbe10'
    },
    image: '/assets/design-2.svg',
    images: ['/assets/design-2.svg', '/assets/design-3.svg', '/assets/design-4.svg'],
    caseStudy: {
      summary: 'Detecting fraud in highly imbalanced financial transaction data — where 95% accuracy hides a dangerous flaw. This project became an exploration of why accuracy alone is misleading and how model evaluation must align with real business risk.',
      what: [
        'Built and cleaned a dataset: 10,000 training + 1,500 test transactions',
        'Engineered features: transaction details, customer demographics, account behavior, device and risk indicators',
        'Handled missing values using sentinel values (99999) — letting the model learn patterns of missingness',
        'Encoded categoricals with OrdinalEncoder for consistent, deployment-friendly preprocessing',
        'Tested Random Forest, XGBoost, and Logistic Regression',
        'Shifted focus from accuracy to recall and balanced metrics',
        'Tuned class weights and adjusted prediction threshold to 0.45',
        'Deployed via Streamlit — supports single and bulk CSV predictions'
      ],
      metrics: [
        { label: 'Accuracy', value: '~0.78' },
        { label: 'Balanced Accuracy', value: '~0.63' },
        { label: 'Recall', value: '~0.46' },
        { label: 'ROC AUC', value: '~0.64' },
        { label: 'PR AUC', value: '~0.08 (≈2× baseline)' }
      ],
      insights: [
        'High accuracy can mask poor fraud detection in imbalanced datasets',
        'Tree-based models looked strong on paper but failed on minority fraud cases',
        'Logistic Regression with class weighting won on recall-focused objectives',
        'Missing values can be informative signals, not noise',
        'Threshold tuning is as important as model selection'
      ],
      outcomes: [
        'Demonstrated why recall matters more than accuracy in fraud detection',
        'Showed how evaluation must align with operational risk',
        'Built an end-to-end deployment-ready pipeline',
        'Delivered a usable fraud app for real-time and batch predictions'
      ],
      takeaway: 'In fraud detection, it\'s better to flag a few legitimate transactions than to let real fraud slip through unnoticed.'
    }
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
