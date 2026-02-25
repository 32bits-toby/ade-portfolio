export const projects = [
  {
    slug: 'sales-performance-dashboard',
    title: 'Bike Sales Analysis Dashboard',
    timeline: '~10 months ago',
    tools: ['Power BI', 'Excel', 'Power Query'],
    summary: 'A multi-page interactive Power BI dashboard designed to analyze bike sales performance across revenue, orders, and contribution metrics.',
    projectSummary: 'This project is a multi-page interactive Power BI dashboard designed to analyze bike sales performance across revenue, orders, and contribution metrics.',
    keyInsights: [
      'Mountain and road bikes were the top revenue contributors',
      'Lost revenue increased by 3.6%, indicating fulfillment or operational gaps',
      'Sales activity peaked on Tuesdays and Saturdays'
    ],
    outcome: 'Revenue tells only part of the story — lost orders and fulfillment gaps quietly erode what strong sales have built.',
    links: {
      dashboard: 'https://app.powerbi.com/',
      github: 'https://github.com/Ade-Adeola',
      medium: 'https://medium.com/@adeolaaderibigbe10'
    },
    image: '/assets/design-1.svg',
    caseStudy: {
      summary: 'This project is a multi-page interactive Power BI dashboard designed to analyze bike sales performance across revenue, orders, and contribution metrics. The goal was to uncover sales trends, identify revenue leakage, and understand how products, brands, stores, and time periods contribute to overall performance. The dashboard was built with a strong focus on usability, interactivity, and decision-making support.',
      what: [
        'Cleaned and prepared the sales dataset using Excel and Power Query',
        'Designed a three-page Power BI report: revenue analysis, order trends, and staff & customer contribution',
        'Implemented page navigation buttons, flip cards for KPI explanations, filters and slicers, and custom tooltips for deeper context'
      ],
      metrics: [],
      insights: [
        'Mountain and road bikes were the top revenue contributors',
        'Lost revenue increased by 3.6%, indicating fulfillment or operational gaps',
        'Sales activity peaked on Tuesdays and Saturdays',
        'Certain brands consistently outperformed others across regions',
        'Revenue performance varied significantly by state and store'
      ],
      outcomes: [
        'Highlighted revenue leakage through lost orders',
        'Identified high-performing products and stores for inventory prioritization',
        'Recommended optimizing order fulfillment processes to reduce lost revenue',
        'Suggested targeted marketing on high-traffic sales days'
      ],
      takeaway: 'Revenue tells only part of the story — lost orders and fulfillment gaps quietly erode what strong sales have built.'
    }
  },
  {
    slug: 'customer-churn-prediction',
    title: 'Rate of Penetration (ROP) Prediction for Drilling Operations',
    timeline: 'April 2025',
    tools: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib', 'Seaborn', 'Streamlit'],
    summary: 'Building and deploying an end-to-end machine learning solution to predict Rate of Penetration (ROP) in drilling operations.',
    projectSummary: 'This project focuses on building and deploying an end-to-end machine learning solution to predict Rate of Penetration (ROP) in drilling operations.',
    keyInsights: [
      'ExtraTreesRegressor outperformed all other tested regressors on this dataset',
      'Feature selection meaningfully improved model stability',
      'Pipeline design ensures the preprocessing and model stay aligned across training and deployment'
    ],
    outcome: 'Applying machine learning to domain-specific engineering problems requires understanding the workflow first — the model is only as good as the pipeline behind it.',
    links: {
      dashboard: 'https://app.powerbi.com/',
      github: 'https://github.com/Ade-Adeola'
    },
    image: '/assets/design-2.svg',
    caseStudy: {
      summary: 'This project focuses on building and deploying an end-to-end machine learning solution to predict Rate of Penetration (ROP) in drilling operations. The objective was to apply data science techniques to a real petroleum engineering problem and deliver a practical, deployable prediction tool.',
      what: [
        'Worked with a historical ROP dataset (~1,500 rows) and a separate 200-row test set without targets',
        'Handled missing values through dropping and statistical imputation; encoded categoricals; scaled numerical features',
        'Applied feature selection to identify key predictors',
        'Tested up to 10 regression models on scaled and unscaled data — identified ExtraTreesRegressor as best-performing',
        'Built a complete ML pipeline: imputation, encoding, scaling, and modeling',
        'Tuned hyperparameters using RandomizedSearchCV',
        'Deployed as a Streamlit app supporting manual single predictions and bulk CSV uploads',
        'Saved reusable model assets: base pipeline, tuned pipeline, and hyperparameter search object'
      ],
      metrics: [
        { label: 'R² Score', value: '0.89' },
        { label: 'MAE', value: '1.37' },
        { label: 'MSE', value: '2.97' },
        { label: 'Test Set', value: '200 rows' }
      ],
      insights: [
        'ExtraTreesRegressor outperformed all other tested regressors on this dataset',
        'Feature selection meaningfully improved model stability',
        'Pipeline design ensures the preprocessing and model stay aligned across training and deployment',
        'Batch prediction on unseen data validated the model\'s generalization ability'
      ],
      outcomes: [
        'Demonstrated how ML can be applied directly to petroleum engineering workflows',
        'Delivered a production-ready prediction tool — not just a notebook',
        'Showed the importance of proper pipeline design and rigorous model evaluation'
      ],
      takeaway: 'Applying machine learning to domain-specific engineering problems requires understanding the workflow first — the model is only as good as the pipeline behind it.'
    }
  },
  {
    slug: 'marketing-campaign-roi-tracker',
    title: 'Blinkit Business Intelligence & Operations Analysis',
    timeline: 'May 2025',
    tools: ['Power BI', 'Excel', 'Power Query'],
    summary: 'A comprehensive business intelligence dashboard analyzing sales, marketing performance, operations, inventory, and customer behavior.',
    projectSummary: 'This project is a comprehensive business intelligence dashboard built using a Blinkit dataset to analyze sales, marketing performance, operations, inventory, and customer behavior.',
    keyInsights: [
      'Campaign profitability varied widely — some campaigns ran as low as 10% margin',
      '54.4% of inventory was damaged, representing a major hidden operational cost',
      'On-time delivery rate was 69.4%, with 9.8% significantly delayed'
    ],
    outcome: 'Revenue tells only half the story. What is wasted in operations can quietly erase the gains made by marketing and sales.',
    links: {
      dashboard: 'https://app.powerbi.com/',
      github: 'https://github.com/Ade-Adeola',
      medium: 'https://medium.com/@adeolaaderibigbe10'
    },
    image: '/assets/design-3.svg',
    caseStudy: {
      summary: 'This project is a comprehensive business intelligence dashboard built using a Blinkit dataset to analyze sales, marketing performance, operations, inventory, and customer behavior. What began as a sales performance review evolved into a full operational deep dive, uncovering hidden inefficiencies behind strong revenue numbers. The dashboard was designed to help decision-makers quickly identify not just growth, but where value is silently being lost.',
      what: [
        'Cleaned and modeled multi-domain business data using Excel and Power Query',
        'Designed a five-page Power BI dashboard: executive summary, sales, marketing, operations (delivery & inventory), and customer behavior',
        'Implemented page navigation and bookmarks, Top/Bottom N dynamic views, custom tooltips, and interactive drill-downs',
        'Structured insights to mirror real executive decision flows'
      ],
      metrics: [
        { label: 'Total Sales Revenue', value: '$11.0M' },
        { label: 'Campaign Revenue', value: '$32.1M' },
        { label: 'Campaign Margin', value: '49.3%' },
        { label: 'ROAS', value: '197.3%' },
        { label: 'Damaged Inventory', value: '54.4%' },
        { label: 'On-Time Delivery', value: '69.4%' },
        { label: 'Avg Customer Rating', value: '3.34 / 5' }
      ],
      insights: [
        'Campaign profitability varied widely — some campaigns ran as low as 10% margin',
        '54.4% of inventory was damaged, representing a major hidden operational cost',
        'On-time delivery rate was 69.4%, with 9.8% significantly delayed',
        'Top revenue states: Uttar Pradesh, Maharashtra, and West Bengal',
        'Pet Treats led in revenue; toilet cleaners had high volume but thin margins',
        'Frequent customer complaints: missing items, late delivery, and poor service'
      ],
      outcomes: [
        'Revealed how strong revenue can mask serious backend inefficiencies',
        'Flagged inventory damage as a major silent cost driver requiring immediate attention',
        'Demonstrated the direct link between delivery performance and customer satisfaction',
        'Reinforced that operational efficiency, not just sales, determines business health'
      ],
      takeaway: 'Revenue tells only half the story. What is wasted in operations can quietly erase the gains made by marketing and sales.'
    }
  },
  {
    slug: 'retail-inventory-optimization',
    title: 'Banking Revenue & Customer Insight Analysis',
    timeline: 'June 2025',
    tools: ['Power BI', 'Power Query', 'Excel', 'ZoomCharts'],
    summary: 'Analyzing banking transactions across revenue, customer behavior, transaction patterns, and performance trends.',
    projectSummary: 'This project was built as part of FP20 Analytics Challenge 27 and marks my first participation in the challenge.',
    keyInsights: [
      'Not every transaction is revenue — misclassifying them would have overstated income significantly',
      'Mobile and branch channels dominated transaction volume',
      'High-income and middle-income segments drove the largest revenue share'
    ],
    outcome: 'Accuracy in analytics begins with understanding the data — not rushing to conclusions.',
    links: {
      dashboard: 'https://app.powerbi.com/',
      github: 'https://github.com/Ade-Adeola'
    },
    image: '/assets/design-4.svg',
    caseStudy: {
      summary: 'This project was built as part of FP20 Analytics Challenge 27 and marks my first participation in the challenge. The goal was to analyze banking transactions across revenue, customer behavior, transaction patterns, and performance trends. What made this project stand out was a key analytical correction: realizing that not every transaction represents revenue. That single insight reshaped the entire analysis and led to a far more accurate financial story.',
      what: [
        'Explored and validated transaction data before modeling revenue',
        'Identified and separated Core Revenue (Loan Payments, Card Payments) from Fee-Based Revenue (Insurance Fees, Credit Card Fees, Late Payment Fees)',
        'Built a multi-page Power BI dashboard: revenue & cost analysis, trends over time, transaction behavior by channel and product, customer insights and segmentation',
        'Implemented a multi-currency toggle (USD / EUR) for dynamic analysis',
        'Used advanced visuals, slicers, and interactive filters for decision-focused exploration'
      ],
      metrics: [
        { label: 'Core Revenue (USD)', value: '$37.58M' },
        { label: 'Fee Revenue (USD)', value: '$713K' },
        { label: 'Total Revenue (USD)', value: '$38.29M' },
        { label: 'Total Transactions', value: '$113.01M' },
        { label: 'Peak Month', value: 'Apr 2025 — $4.25M' },
        { label: 'Period', value: '2023–2025' }
      ],
      insights: [
        'Not every transaction is revenue — misclassifying them would have overstated income significantly',
        'Murcia ranked highest by transactions and customers; Bilbao ranked lowest',
        'Mobile and branch channels dominated transaction volume',
        'High-income and middle-income segments drove the largest revenue share',
        'April 2025 recorded the highest single-month transaction value'
      ],
      outcomes: [
        'Prevented revenue overstatement by correctly classifying transaction types',
        'Delivered a clearer and more trustworthy financial picture for decision-makers',
        'Demonstrated how small analytical assumptions can lead to large reporting errors',
        'Reinforced the importance of questioning metrics before visualizing them'
      ],
      takeaway: 'Accuracy in analytics begins with understanding the data — not rushing to conclusions.'
    }
  },
  {
    slug: 'loan-default-risk-model',
    title: 'Sports Injuries: Trends, Recovery & Cost Analysis',
    timeline: 'August 2025',
    tools: ['Power BI', 'Power Query', 'Excel', 'ZoomCharts'],
    summary: 'Analyzing 15,000 recorded sports injury cases to uncover patterns in injury frequency, severity, recovery time, recurrence, and financial impact.',
    projectSummary: 'This project was developed as part of FP20 Analytics Challenge 29.',
    keyInsights: [
      'Fractures were the most frequent injury (2,043 cases) and alone cost €3.6M',
      'Female athletes accounted for 65.52% of all injuries',
      'UK had both the highest injury count (1,071) and highest recurrence rate (21.94%)'
    ],
    outcome: 'Injury prevention is a data problem — and data can save careers, costs, and seasons.',
    links: {
      dashboard: 'https://app.powerbi.com/',
      github: 'https://github.com/Ade-Adeola',
      medium: 'https://medium.com/@adeolaaderibigbe10'
    },
    image: '/assets/design-5.svg',
    caseStudy: {
      summary: 'This project was developed as part of FP20 Analytics Challenge 29, where I analyzed 15,000 recorded sports injury cases to uncover patterns in injury frequency, severity, recovery time, recurrence, and financial impact. Rather than stopping at descriptive statistics, the goal was to tell a prevention-focused story: identifying where injuries repeat, who is most at risk, and how data can guide safer training and recovery strategies.',
      what: [
        'Cleaned and modeled a large multi-dimensional injury dataset (15,000 cases)',
        'Built a multi-page Power BI dashboard: injury trends over time, recovery & treatment effectiveness, severity by sport, event, and surface, and geographic injury concentration & recurrence',
        'Designed KPI flip cards, drill-downs by sport, country, season, and treatment, and severity & recurrence toggles',
        'Structured insights to support injury prevention and cost reduction decisions'
      ],
      metrics: [
        { label: 'Total Cases', value: '15,000' },
        { label: 'Total Injury Cost', value: '€27.70M' },
        { label: 'Peak Season Cost', value: '€9.37M (2022–23)' },
        { label: 'Avg Recovery Time', value: '49 days' },
        { label: 'Most Frequent Injury', value: 'Fractures (2,043)' },
        { label: 'Highest Recurrence', value: 'UK — 21.94%' }
      ],
      insights: [
        'Fractures were the most frequent injury (2,043 cases) and alone cost €3.6M',
        'Athletics recorded the most injuries (3,041); competition events caused the most (5,101)',
        'Indoor courts were the riskiest surface; clay surfaces showed the lowest injury counts',
        'Female athletes accounted for 65.52% of all injuries; highest risk group: ages 31–35 (2,004 cases)',
        'Boxing led in severe injuries; Achilles injuries had the longest recovery time (54 days)',
        'Rest proved the most effective treatment at an average of 47 days recovery',
        'UK had both the highest injury count (1,071) and highest recurrence rate (21.94%)'
      ],
      outcomes: [
        'Injuries follow identifiable patterns and are not random — prevention is possible',
        'High-cost, long-recovery injuries should be prioritized for targeted prevention programs',
        'Female athletes and high-risk age groups require dedicated intervention strategies',
        'Surface selection and training design directly influence injury rates',
        'Rest and workload management significantly reduce recurrence'
      ],
      takeaway: 'Injury prevention is a data problem — and data can save careers, costs, and seasons.'
    }
  },
  {
    slug: 'hr-attrition-analysis',
    title: 'Employee Performance, Productivity & Attrition Analysis',
    timeline: 'September 2025',
    tools: ['Power BI', 'Power Query', 'Excel', 'ZoomCharts'],
    summary: 'Analyzing a comprehensive employee performance dataset covering workforce size, salaries, performance ratings, satisfaction, attrition, and business outcomes.',
    projectSummary: 'This project was developed as part of FP20 Analytics Challenge 30.',
    keyInsights: [
      'Highest attrition in the 31–40 age group (351 exits) — mid-career risk is real',
      'Top performers consistently scored above 4.5; bottom performers averaged below 2.5',
      'Average training investment was only 2.8 hours — a significant gap'
    ],
    outcome: 'People drive performance — and performance drives business results.',
    links: {
      dashboard: 'https://app.powerbi.com/',
      github: 'https://github.com/Ade-Adeola'
    },
    image: '/assets/design-1.svg',
    caseStudy: {
      summary: 'This project was developed as part of FP20 Analytics Challenge 30, where I analyzed a comprehensive employee performance dataset covering workforce size, salaries, performance ratings, satisfaction, attrition, and business outcomes across multiple departments and store locations. The goal was to move beyond headcount reporting and uncover how people performance connects to business performance — identifying who drives results, where attrition risk exists, and how compensation, training, and satisfaction influence outcomes.',
      what: [
        'Cleaned and modeled a multi-year employee dataset: demographics, roles, tenure, performance ratings, satisfaction scores, compensation, store-level sales',
        'Built a three-page Power BI dashboard: workforce overview & attrition, performance & training, employee- and store-level deep dives',
        'Implemented KPI cards with YoY comparisons, performance group toggles, drill-downs by department, store, role, and age group',
        'Structured insights to support retention planning, performance management, and workforce investment decisions'
      ],
      metrics: [
        { label: 'Total Employees', value: '7,500' },
        { label: 'Active', value: '6,744' },
        { label: 'Attrition YoY', value: '+82.6%' },
        { label: 'Sales Achievement', value: '100.06%' },
        { label: 'Avg Performance', value: '3.7 / 5' },
        { label: 'Customer Satisfaction', value: '7.5 / 10' }
      ],
      insights: [
        'Highest attrition in the 31–40 age group (351 exits) — mid-career risk is real',
        'Manager count remained stable at 51 while overall exits surged +82.6% YoY',
        'Top performers consistently scored above 4.5; bottom performers averaged below 2.5',
        'Top stores exceeded 104% sales achievement; lagging stores averaged ~96%',
        'Average training investment was only 2.8 hours — a significant gap'
      ],
      outcomes: [
        'Attrition risk is highest among mid-career employees (31–40) — needs proactive action',
        'Training investment is low and represents the clearest lever to improve productivity',
        'High-performing stores can be benchmarked and used as internal mentors',
        'Compensation alignment is critical to retaining high-value talent'
      ],
      takeaway: 'People drive performance — and performance drives business results. Workforce data, when connected properly, becomes a strategic advantage.'
    }
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
    title: 'Animal Shelter Intake, Outcomes & Adoption Analysis',
    timeline: 'December 2025',
    tools: ['Power BI', 'Power Query', 'Excel', 'ZoomCharts'],
    summary: 'Analyzing an animal shelter operations dataset to uncover patterns in animal intake, shelter outcomes, adoption performance, and live release rates.',
    projectSummary: 'This project was built for the dataDNA Challenge by Onyx Data.',
    keyInsights: [
      'Infants consistently record the highest intake volumes — strong seasonal pressure',
      'Adoption rate (21.5%) lags significantly behind overall live release rate (79.1%)',
      'Mid-year peaks create predictable operational strain'
    ],
    outcome: 'Animal shelter operations are deeply seasonal — data reveals exactly when, where, and how pressure builds.',
    links: {
      dashboard: 'https://share.streamlit.io/',
      github: 'https://github.com/Ade-Adeola',
      medium: 'https://medium.com/@adeolaaderibigbe10'
    },
    image: '/assets/design-3.svg',
    caseStudy: {
      summary: 'This project was built for the dataDNA Challenge by Onyx Data, where I analyzed an animal shelter operations dataset to uncover patterns in animal intake, shelter outcomes, adoption performance, and live release rates. The objective was to move beyond surface-level counts and understand where pressure builds within the shelter system, how outcomes evolve over time, and what factors influence adoption and survival outcomes.',
      what: [
        'Cleaned and modeled multi-year shelter data: intake volume, type, condition, age group, jurisdiction, length of stay, seasonality',
        'Built a two-page Power BI dashboard: intake overview & trends, outcome performance & adoption analysis',
        'Implemented time granularity controls (Day → Year), drill-downs by animal type, age group, condition, and jurisdiction',
        'Structured insights around capacity pressure, outcome efficiency, and adoption performance gaps'
      ],
      metrics: [
        { label: 'Total Intakes', value: '52,343' },
        { label: 'Recorded Outcomes', value: '51,943' },
        { label: 'Live Release Rate', value: '79.1%' },
        { label: 'Total Adoptions', value: '11,172' },
        { label: 'Adoption Rate', value: '21.5%' },
        { label: 'Avg Length of Stay', value: '19 days' }
      ],
      insights: [
        'Infants consistently record the highest intake volumes — strong seasonal pressure',
        'Cats account for the largest share of intakes, followed by dogs',
        'Mid-year peaks create predictable operational strain',
        'Adoption rate (21.5%) lags significantly behind overall live release rate (79.1%)',
        'Euthanasia remains notable under severe intake conditions despite strong overall live outcomes'
      ],
      outcomes: [
        'Intake pressure is seasonal and predictable — staff and capacity can be planned accordingly',
        'Cats and infant animals require focused resource allocation',
        'Adoption-specific strategies could close the gap between live release and adoption rates',
        'Reducing length of stay during peak seasons would meaningfully improve shelter efficiency'
      ],
      takeaway: 'Animal shelter operations are deeply seasonal — data reveals exactly when, where, and how pressure builds, turning insight into preparedness.'
    }
  },
  {
    slug: 'pharmascope-analytics',
    title: 'PharmaScope: Multi-Country Pharmacy Performance Analysis',
    timeline: 'February 2026',
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
  }
];
