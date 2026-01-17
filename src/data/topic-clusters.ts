// Topic clusters for pension.quest - 16 clusters covering UK pensions

export interface TopicCluster {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
  pillarPage: {
    title: string;
    slug: string;
    targetKeyword: string;
    volume: number;
  };
  supportingPages: {
    title: string;
    slug: string;
    targetKeyword: string;
    volume: number;
  }[];
  relatedClusters: string[];
  unsplashQuery: string;
  navGroup: 'public-sector' | 'private-pensions' | 'retirement-planning' | 'money-matters';
}

export const TOPIC_CLUSTERS: TopicCluster[] = [
  // PUBLIC SECTOR GROUP
  {
    id: 'state-pension',
    name: 'State Pension',
    slug: 'state-pension',
    description: 'Everything about the UK State Pension including age, amounts, and how to claim',
    icon: '🏛️',
    pillarPage: {
      title: 'Complete Guide to the UK State Pension',
      slug: 'guide',
      targetKeyword: 'state pension',
      volume: 1000000,
    },
    supportingPages: [
      { title: 'State Pension Age: When Can You Claim?', slug: 'age', targetKeyword: 'state pension age', volume: 90500 },
      { title: 'How Much is the State Pension in 2025?', slug: 'how-much', targetKeyword: 'how much is state pension', volume: 60500 },
      { title: 'State Pension Forecast: Check Your Entitlement', slug: 'forecast', targetKeyword: 'state pension forecast', volume: 40500 },
      { title: 'State Pension Increase 2025: Triple Lock Explained', slug: 'increase-2025', targetKeyword: 'state pension increase', volume: 60500 },
      { title: 'State Pension Calculator', slug: 'calculator', targetKeyword: 'state pension calculator', volume: 49500 },
      { title: 'New State Pension vs Basic State Pension', slug: 'new-vs-basic', targetKeyword: 'new state pension', volume: 9900 },
      { title: 'WASPI: Women Against State Pension Inequality', slug: 'waspi', targetKeyword: 'waspi', volume: 110000 },
      { title: 'State Pension News and Updates 2025', slug: 'news', targetKeyword: 'state pension news', volume: 110000 },
      { title: 'State Pension If You\'ve Never Worked', slug: 'never-worked', targetKeyword: 'state pension never worked', volume: 1300 },
      { title: 'State Pension Deferral: Is It Worth Delaying?', slug: 'deferral', targetKeyword: 'state pension deferral', volume: 590 },
    ],
    relatedClusters: ['retirement-age', 'tax-relief', 'pension-pot'],
    unsplashQuery: 'retired couple uk planning',
    navGroup: 'public-sector',
  },
  {
    id: 'nhs-pension',
    name: 'NHS Pension',
    slug: 'nhs-pension',
    description: 'Guide to the NHS Pension Scheme for healthcare workers',
    icon: '🏥',
    pillarPage: {
      title: 'Complete Guide to the NHS Pension Scheme',
      slug: 'guide',
      targetKeyword: 'nhs pension',
      volume: 40500,
    },
    supportingPages: [
      { title: 'NHS Pension Calculator', slug: 'calculator', targetKeyword: 'nhs pension calculator', volume: 8100 },
      { title: 'NHS Pension Contributions Explained', slug: 'contributions', targetKeyword: 'nhs pension contributions', volume: 12100 },
      { title: 'NHS Pension Changes 2025', slug: 'changes-2025', targetKeyword: 'nhs pension changes', volume: 27100 },
      { title: 'My NHS Pension Portal Guide', slug: 'portal', targetKeyword: 'nhs pension login', volume: 18100 },
      { title: 'NHS Pension vs Private Pension', slug: 'vs-private', targetKeyword: 'nhs pension vs private', volume: 480 },
      { title: 'NHS Pension Early Retirement Options', slug: 'early-retirement', targetKeyword: 'nhs pension early retirement', volume: 480 },
      { title: 'Average NHS Pension Per Month', slug: 'average-amount', targetKeyword: 'average nhs pension', volume: 1600 },
      { title: 'NHS Pension McCloud Remedy Explained', slug: 'mccloud-remedy', targetKeyword: 'nhs pension mccloud', volume: 590 },
    ],
    relatedClusters: ['tax-relief', 'calculators', 'contributions'],
    unsplashQuery: 'nhs healthcare professional uk',
    navGroup: 'public-sector',
  },
  {
    id: 'teachers-pension',
    name: 'Teachers Pension',
    slug: 'teachers-pension',
    description: 'Guide to the Teachers\' Pension Scheme for educators',
    icon: '📚',
    pillarPage: {
      title: 'Complete Guide to the Teachers Pension Scheme',
      slug: 'guide',
      targetKeyword: 'teachers pension',
      volume: 110000,
    },
    supportingPages: [
      { title: 'Teachers Pension Calculator', slug: 'calculator', targetKeyword: 'teachers pension calculator', volume: 3600 },
      { title: 'Teachers Pension Contributions Explained', slug: 'contributions', targetKeyword: 'teachers pension contributions', volume: 5400 },
      { title: 'Teachers Pension Estimate: Check Your Benefits', slug: 'estimate', targetKeyword: 'teachers pension estimate', volume: 3600 },
      { title: 'Teachers Pension Lump Sum Options', slug: 'lump-sum', targetKeyword: 'teachers pension lump sum', volume: 170 },
      { title: 'Teachers Pension Early Retirement', slug: 'early-retirement', targetKeyword: 'teachers pension early retirement', volume: 170 },
      { title: 'Teachers Pension Death Benefits', slug: 'death-benefits', targetKeyword: 'teachers pension death benefits', volume: 320 },
      { title: 'Teachers Pension Ill Health Retirement', slug: 'ill-health', targetKeyword: 'teachers pension ill health', volume: 210 },
    ],
    relatedClusters: ['tax-relief', 'calculators', 'inheritance'],
    unsplashQuery: 'teacher classroom education',
    navGroup: 'public-sector',
  },
  {
    id: 'civil-service-pension',
    name: 'Civil Service Pension',
    slug: 'civil-service-pension',
    description: 'Guide to the Civil Service Pension Scheme',
    icon: '🏢',
    pillarPage: {
      title: 'Complete Guide to the Civil Service Pension',
      slug: 'guide',
      targetKeyword: 'civil service pension',
      volume: 40500,
    },
    supportingPages: [
      { title: 'Civil Service Pension Calculator', slug: 'calculator', targetKeyword: 'civil service pension calculator', volume: 1600 },
      { title: 'Civil Service Pension Contributions', slug: 'contributions', targetKeyword: 'civil service pension contributions', volume: 2400 },
      { title: 'Civil Service Pension Alpha Scheme Explained', slug: 'alpha-scheme', targetKeyword: 'civil service alpha', volume: 1600 },
      { title: 'Civil Service Pension Increase 2025', slug: 'increase-2025', targetKeyword: 'civil service pension increase', volume: 2900 },
      { title: 'Civil Service Pension Lump Sum', slug: 'lump-sum', targetKeyword: 'civil service pension lump sum', volume: 140 },
      { title: 'Classic vs Alpha Civil Service Pension', slug: 'classic-vs-alpha', targetKeyword: 'classic vs alpha pension', volume: 170 },
    ],
    relatedClusters: ['tax-relief', 'calculators', 'contributions'],
    unsplashQuery: 'government office professional',
    navGroup: 'public-sector',
  },

  // PRIVATE PENSIONS GROUP
  {
    id: 'sipp',
    name: 'SIPP',
    slug: 'sipp',
    description: 'Self-Invested Personal Pensions explained',
    icon: '📈',
    pillarPage: {
      title: 'What is a SIPP? Complete Guide to Self-Invested Personal Pensions',
      slug: 'guide',
      targetKeyword: 'self invested personal pension',
      volume: 33100,
    },
    supportingPages: [
      { title: 'Best SIPP Providers UK 2025', slug: 'best-providers', targetKeyword: 'best sipp providers', volume: 2400 },
      { title: 'SIPP Calculator: Project Your Pension Pot', slug: 'calculator', targetKeyword: 'sipp calculator', volume: 2400 },
      { title: 'SIPP vs Personal Pension: Key Differences', slug: 'vs-personal-pension', targetKeyword: 'sipp vs personal pension', volume: 720 },
      { title: 'SIPP vs Workplace Pension', slug: 'vs-workplace', targetKeyword: 'sipp vs workplace pension', volume: 480 },
      { title: 'SIPP Pension Rules 2025', slug: 'rules', targetKeyword: 'sipp pension rules', volume: 880 },
      { title: 'SIPP Tax Relief Explained', slug: 'tax-relief', targetKeyword: 'sipp tax relief', volume: 1600 },
      { title: 'Transferring Your Pension to a SIPP', slug: 'transfers', targetKeyword: 'transfer pension to sipp', volume: 480 },
      { title: 'SIPP Drawdown: How to Access Your Pension', slug: 'drawdown', targetKeyword: 'sipp drawdown', volume: 320 },
      { title: 'SIPP Inheritance Tax Rules', slug: 'inheritance', targetKeyword: 'sipp inheritance tax', volume: 390 },
    ],
    relatedClusters: ['tax-relief', 'drawdown', 'transfers'],
    unsplashQuery: 'investment portfolio finance',
    navGroup: 'private-pensions',
  },
  {
    id: 'workplace-pension',
    name: 'Workplace Pension',
    slug: 'workplace-pension',
    description: 'Auto-enrolment and workplace pension schemes',
    icon: '🏭',
    pillarPage: {
      title: 'Workplace Pension Explained: Your Complete Guide',
      slug: 'guide',
      targetKeyword: 'workplace pension',
      volume: 5400,
    },
    supportingPages: [
      { title: 'Auto Enrolment Pension: Everything You Need to Know', slug: 'auto-enrolment', targetKeyword: 'auto enrolment', volume: 4400 },
      { title: 'Workplace Pension Contributions: Rates Explained', slug: 'contributions', targetKeyword: 'workplace pension contributions', volume: 880 },
      { title: 'Workplace Pension Calculator 2025', slug: 'calculator', targetKeyword: 'workplace pension calculator', volume: 1000 },
      { title: 'Employer Pension Contributions Explained', slug: 'employer-contributions', targetKeyword: 'employer pension contributions', volume: 5400 },
      { title: 'Workplace Pension vs Personal Pension', slug: 'vs-personal', targetKeyword: 'workplace vs personal pension', volume: 70 },
      { title: 'Can I Opt Out of Workplace Pension?', slug: 'opt-out', targetKeyword: 'opt out workplace pension', volume: 590 },
      { title: 'NEST Pension Scheme: Complete Guide', slug: 'nest', targetKeyword: 'nest pension', volume: 368000 },
      { title: 'The People\'s Pension Guide', slug: 'peoples-pension', targetKeyword: 'peoples pension', volume: 135000 },
      { title: 'NOW: Pensions Guide', slug: 'now-pensions', targetKeyword: 'now pensions', volume: 49500 },
      { title: 'Aviva Workplace Pension', slug: 'aviva', targetKeyword: 'aviva workplace pension', volume: 1900 },
      { title: 'Legal & General Workplace Pension', slug: 'legal-general', targetKeyword: 'legal and general workplace pension', volume: 1600 },
    ],
    relatedClusters: ['contributions', 'transfers', 'tax-relief'],
    unsplashQuery: 'office workplace professional',
    navGroup: 'private-pensions',
  },
  {
    id: 'final-salary',
    name: 'Final Salary / DB',
    slug: 'final-salary',
    description: 'Final salary and defined benefit pensions',
    icon: '💼',
    pillarPage: {
      title: 'Final Salary Pension: Complete UK Guide',
      slug: 'guide',
      targetKeyword: 'final salary pension',
      volume: 3600,
    },
    supportingPages: [
      { title: 'What is a Final Salary Pension?', slug: 'what-is', targetKeyword: 'what is final salary pension', volume: 1900 },
      { title: 'Final Salary Pension Calculator', slug: 'calculator', targetKeyword: 'final salary pension calculator', volume: 1900 },
      { title: 'How Does a Final Salary Pension Work?', slug: 'how-it-works', targetKeyword: 'how does final salary pension work', volume: 720 },
      { title: 'Final Salary vs Defined Contribution', slug: 'vs-defined-contribution', targetKeyword: 'final salary vs defined contribution', volume: 590 },
      { title: 'Final Salary Pension Transfer Advice', slug: 'transfer-advice', targetKeyword: 'final salary transfer advice', volume: 170 },
      { title: 'Defined Benefit Pension Calculator', slug: 'db-calculator', targetKeyword: 'defined benefit calculator', volume: 880 },
    ],
    relatedClusters: ['transfers', 'calculators', 'drawdown'],
    unsplashQuery: 'corporate office executive',
    navGroup: 'private-pensions',
  },

  // RETIREMENT PLANNING GROUP
  {
    id: 'drawdown',
    name: 'Pension Drawdown',
    slug: 'pension-drawdown',
    description: 'How to access your pension through drawdown',
    icon: '💰',
    pillarPage: {
      title: 'Pension Drawdown Explained: Complete UK Guide',
      slug: 'guide',
      targetKeyword: 'pension drawdown',
      volume: 6600,
    },
    supportingPages: [
      { title: 'Pension Drawdown Calculator', slug: 'calculator', targetKeyword: 'pension drawdown calculator', volume: 6600 },
      { title: 'What is Pension Drawdown?', slug: 'what-is', targetKeyword: 'what is pension drawdown', volume: 1900 },
      { title: 'Best Pension Drawdown Providers UK', slug: 'best-providers', targetKeyword: 'best pension drawdown providers', volume: 1600 },
      { title: 'Pension Drawdown Rules and Limits', slug: 'rules', targetKeyword: 'pension drawdown rules', volume: 1300 },
      { title: 'Pension Drawdown vs Annuity', slug: 'vs-annuity', targetKeyword: 'drawdown vs annuity', volume: 390 },
      { title: 'How Much Can I Draw Down From My Pension?', slug: 'how-much', targetKeyword: 'pension drawdown amount', volume: 720 },
      { title: 'Martin Lewis Pension Drawdown Advice', slug: 'martin-lewis', targetKeyword: 'martin lewis pension drawdown', volume: 2400 },
      { title: 'Flexible Drawdown Rules Explained', slug: 'flexible-drawdown', targetKeyword: 'flexible drawdown', volume: 480 },
    ],
    relatedClusters: ['annuities', 'tax-relief', 'retirement-age'],
    unsplashQuery: 'retirement freedom financial planning',
    navGroup: 'retirement-planning',
  },
  {
    id: 'annuities',
    name: 'Pension Annuities',
    slug: 'pension-annuity',
    description: 'Guaranteed income for life through annuities',
    icon: '🔒',
    pillarPage: {
      title: 'Pension Annuities Explained: Complete UK Guide',
      slug: 'guide',
      targetKeyword: 'pension annuity',
      volume: 3600,
    },
    supportingPages: [
      { title: 'Pension Annuity Calculator', slug: 'calculator', targetKeyword: 'pension annuity calculator', volume: 5400 },
      { title: 'What is a Pension Annuity?', slug: 'what-is', targetKeyword: 'what is annuity', volume: 1300 },
      { title: 'Best Annuity Rates UK 2025', slug: 'rates', targetKeyword: 'annuity rates', volume: 1300 },
      { title: 'Pension Annuity vs Drawdown', slug: 'vs-drawdown', targetKeyword: 'annuity vs drawdown', volume: 390 },
      { title: 'Compare Pension Annuity Quotes', slug: 'quotes', targetKeyword: 'annuity quotes', volume: 1000 },
      { title: 'Types of Pension Annuities', slug: 'types', targetKeyword: 'types of annuity', volume: 480 },
    ],
    relatedClusters: ['drawdown', 'retirement-age', 'pension-pot'],
    unsplashQuery: 'retirement security guaranteed income',
    navGroup: 'retirement-planning',
  },
  {
    id: 'retirement-age',
    name: 'Retirement Age',
    slug: 'retirement-age',
    description: 'When you can access your pension',
    icon: '📅',
    pillarPage: {
      title: 'UK Pension Age: When Can You Access Your Pension?',
      slug: 'guide',
      targetKeyword: 'state pension age',
      volume: 90500,
    },
    supportingPages: [
      { title: 'State Pension Age Calculator', slug: 'calculator', targetKeyword: 'state pension age calculator', volume: 9900 },
      { title: 'When Can I Retire? UK Pension Ages Explained', slug: 'when-can-i-retire', targetKeyword: 'when can i retire', volume: 74000 },
      { title: 'State Pension Age Changes 2025', slug: 'changes-2025', targetKeyword: 'state pension age changes', volume: 90500 },
      { title: 'Private Pension Age: When Can I Access?', slug: 'private-pension-age', targetKeyword: 'private pension age', volume: 590 },
      { title: 'Early Retirement at 55: Accessing Pension Early', slug: 'early-retirement-55', targetKeyword: 'retire at 55', volume: 390 },
      { title: 'Retirement Age by Birth Year', slug: 'by-birth-year', targetKeyword: 'retirement age by birth year', volume: 590 },
    ],
    relatedClusters: ['state-pension', 'drawdown', 'pension-pot'],
    unsplashQuery: 'retirement celebration freedom',
    navGroup: 'retirement-planning',
  },
  {
    id: 'inheritance',
    name: 'Pension Inheritance',
    slug: 'pension-inheritance',
    description: 'What happens to your pension when you die',
    icon: '👨‍👩‍👧‍👦',
    pillarPage: {
      title: 'Pension Inheritance: What Happens to Your Pension When You Die?',
      slug: 'guide',
      targetKeyword: 'pension inheritance tax',
      volume: 8100,
    },
    supportingPages: [
      { title: 'Pension Inheritance Tax Changes 2025', slug: 'tax-changes-2025', targetKeyword: 'pension inheritance tax changes', volume: 1000 },
      { title: 'What Happens to My Pension When I Die?', slug: 'what-happens', targetKeyword: 'pension when you die', volume: 390 },
      { title: 'Pension Death Benefits Explained', slug: 'death-benefits', targetKeyword: 'pension death benefits', volume: 320 },
      { title: 'Labour Pension Inheritance Tax Reform 2025', slug: 'labour-reform', targetKeyword: 'labour pension inheritance tax', volume: 1300 },
      { title: 'Naming Pension Beneficiaries', slug: 'beneficiaries', targetKeyword: 'pension beneficiaries', volume: 210 },
      { title: 'SIPP Inheritance Tax Rules', slug: 'sipp-rules', targetKeyword: 'sipp inheritance tax', volume: 390 },
      { title: 'State Pension Inheritance Rights', slug: 'state-pension', targetKeyword: 'state pension inheritance', volume: 480 },
    ],
    relatedClusters: ['tax-relief', 'sipp', 'state-pension'],
    unsplashQuery: 'family inheritance planning',
    navGroup: 'retirement-planning',
  },

  // MONEY MATTERS GROUP
  {
    id: 'tax-relief',
    name: 'Pension Tax Relief',
    slug: 'pension-tax-relief',
    description: 'How to get tax relief on your pension contributions',
    icon: '📋',
    pillarPage: {
      title: 'Pension Tax Relief UK: Complete Guide',
      slug: 'guide',
      targetKeyword: 'pension tax relief',
      volume: 5400,
    },
    supportingPages: [
      { title: 'How Pension Tax Relief Works', slug: 'how-it-works', targetKeyword: 'pension tax relief how it works', volume: 5400 },
      { title: 'Pension Tax Relief Calculator', slug: 'calculator', targetKeyword: 'tax relief calculator', volume: 2900 },
      { title: 'Pension Inheritance Tax 2025 Rules', slug: 'inheritance-tax', targetKeyword: 'pension inheritance tax', volume: 8100 },
      { title: 'Higher Rate Tax Relief on Pensions', slug: 'higher-rate', targetKeyword: 'higher rate tax relief pension', volume: 1000 },
      { title: 'Pension Annual Allowance Explained', slug: 'annual-allowance', targetKeyword: 'pension annual allowance', volume: 2400 },
      { title: 'Pension Tax Calculator UK', slug: 'pension-tax-calculator', targetKeyword: 'pension tax calculator', volume: 2900 },
      { title: 'Pension Carry Forward: Use Unused Allowances', slug: 'carry-forward', targetKeyword: 'carry forward pension', volume: 590 },
      { title: 'Labour Pension Tax Changes 2025', slug: 'labour-changes', targetKeyword: 'labour pension tax changes', volume: 1300 },
      { title: 'Pension Lump Sum Tax Calculator', slug: 'lump-sum-tax', targetKeyword: 'pension lump sum tax', volume: 1300 },
    ],
    relatedClusters: ['contributions', 'inheritance', 'sipp'],
    unsplashQuery: 'tax documents calculator savings',
    navGroup: 'money-matters',
  },
  {
    id: 'contributions',
    name: 'Pension Contributions',
    slug: 'pension-contributions',
    description: 'How much to contribute to your pension',
    icon: '💷',
    pillarPage: {
      title: 'Pension Contributions Guide: How Much Should You Pay?',
      slug: 'guide',
      targetKeyword: 'pension contributions',
      volume: 5400,
    },
    supportingPages: [
      { title: 'Pension Contribution Calculator UK', slug: 'calculator', targetKeyword: 'pension contribution calculator', volume: 5400 },
      { title: 'Employer Pension Contributions Explained', slug: 'employer', targetKeyword: 'employer pension contributions', volume: 5400 },
      { title: 'NHS Pension Contributions 2025', slug: 'nhs', targetKeyword: 'nhs pension contributions', volume: 12100 },
      { title: 'Teachers Pension Contributions', slug: 'teachers', targetKeyword: 'teachers pension contributions', volume: 5400 },
      { title: 'Maximum Pension Contributions 2025', slug: 'maximum', targetKeyword: 'maximum pension contributions', volume: 590 },
      { title: 'How Much Should I Contribute to My Pension?', slug: 'how-much', targetKeyword: 'how much pension contribution', volume: 480 },
    ],
    relatedClusters: ['tax-relief', 'workplace-pension', 'pension-pot'],
    unsplashQuery: 'money savings piggy bank',
    navGroup: 'money-matters',
  },
  {
    id: 'pension-pot',
    name: 'Pension Pot',
    slug: 'pension-pot',
    description: 'How much you need in your pension pot',
    icon: '🏺',
    pillarPage: {
      title: 'Pension Pot Guide: How Much Do You Need to Retire?',
      slug: 'guide',
      targetKeyword: 'average uk pension pot',
      volume: 4400,
    },
    supportingPages: [
      { title: 'Average Pension Pot UK by Age', slug: 'by-age', targetKeyword: 'average pension pot by age', volume: 1600 },
      { title: 'Average Pension Pot at 55', slug: 'at-55', targetKeyword: 'average pension pot at 55', volume: 480 },
      { title: 'Average Pension Pot at 65', slug: 'at-65', targetKeyword: 'average pension pot at 65', volume: 720 },
      { title: 'What is a Good Pension Pot?', slug: 'what-is-good', targetKeyword: 'good pension pot', volume: 880 },
      { title: 'How Much Do I Need in My Pension?', slug: 'how-much-need', targetKeyword: 'how much pension do i need', volume: 720 },
      { title: 'Is a 500k Pension Pot Enough to Retire?', slug: '500k', targetKeyword: '500k pension pot', volume: 590 },
      { title: 'Small Pension Pot Rules: Cash Out Options', slug: 'small-pots', targetKeyword: 'small pension pot rules', volume: 1300 },
      { title: 'Income From Your Pension Pot', slug: 'income', targetKeyword: 'pension pot income', volume: 2900 },
    ],
    relatedClusters: ['calculators', 'retirement-age', 'drawdown'],
    unsplashQuery: 'savings jar retirement fund',
    navGroup: 'money-matters',
  },
  {
    id: 'transfers',
    name: 'Pension Transfers',
    slug: 'pension-transfer',
    description: 'How to transfer your pension',
    icon: '🔄',
    pillarPage: {
      title: 'Pension Transfer Guide: Everything You Need to Know',
      slug: 'guide',
      targetKeyword: 'pension transfer',
      volume: 2400,
    },
    supportingPages: [
      { title: 'How to Transfer a Pension', slug: 'how-to', targetKeyword: 'how to transfer pension', volume: 880 },
      { title: 'Defined Benefit Pension Transfer Guide', slug: 'defined-benefit', targetKeyword: 'transfer defined benefit pension', volume: 880 },
      { title: 'Should I Transfer My Pension?', slug: 'should-i', targetKeyword: 'should i transfer my pension', volume: 720 },
      { title: 'Pension Transfer Value Calculator', slug: 'calculator', targetKeyword: 'pension transfer value', volume: 590 },
      { title: 'Final Salary Pension Transfer', slug: 'final-salary', targetKeyword: 'final salary pension transfer', volume: 590 },
      { title: 'Pension Transfer Specialists UK', slug: 'specialists', targetKeyword: 'pension transfer advisers', volume: 140 },
      { title: 'Transfer Pension to SIPP', slug: 'to-sipp', targetKeyword: 'transfer pension to sipp', volume: 480 },
      { title: 'QROPS: Transferring UK Pension Abroad', slug: 'qrops', targetKeyword: 'qrops', volume: 590 },
    ],
    relatedClusters: ['sipp', 'final-salary', 'workplace-pension'],
    unsplashQuery: 'financial transfer documents',
    navGroup: 'money-matters',
  },
  {
    id: 'calculators',
    name: 'Pension Calculators',
    slug: 'calculators',
    description: 'Interactive tools to plan your retirement',
    icon: '🧮',
    pillarPage: {
      title: 'UK Pension Calculators: Free Tools to Plan Your Retirement',
      slug: 'index',
      targetKeyword: 'pension calculator',
      volume: 49500,
    },
    supportingPages: [
      { title: 'State Pension Calculator UK', slug: 'state-pension', targetKeyword: 'state pension calculator', volume: 49500 },
      { title: 'Pension Pot Calculator', slug: 'pension-pot', targetKeyword: 'pension pot calculator', volume: 3600 },
      { title: 'Pension Drawdown Calculator', slug: 'drawdown', targetKeyword: 'pension drawdown calculator', volume: 6600 },
      { title: 'Pension Tax Relief Calculator', slug: 'tax-relief', targetKeyword: 'pension tax relief calculator', volume: 2900 },
      { title: 'Final Salary Pension Calculator', slug: 'final-salary', targetKeyword: 'final salary pension calculator', volume: 1900 },
      { title: 'Pension Contribution Calculator', slug: 'contribution', targetKeyword: 'pension contribution calculator', volume: 5400 },
      { title: 'Retirement Income Calculator', slug: 'retirement-income', targetKeyword: 'retirement income calculator', volume: 1300 },
      { title: 'Pension Annuity Calculator', slug: 'annuity', targetKeyword: 'pension annuity calculator', volume: 5400 },
      { title: 'NHS Pension Calculator', slug: 'nhs', targetKeyword: 'nhs pension calculator', volume: 8100 },
      { title: 'Teachers Pension Calculator', slug: 'teachers', targetKeyword: 'teachers pension calculator', volume: 3600 },
      { title: 'Civil Service Pension Calculator', slug: 'civil-service', targetKeyword: 'civil service pension calculator', volume: 1600 },
    ],
    relatedClusters: ['state-pension', 'pension-pot', 'drawdown'],
    unsplashQuery: 'calculator financial planning',
    navGroup: 'money-matters',
  },
];

// Navigation groups for mega menu
export const NAV_GROUPS = {
  'public-sector': {
    name: 'Public Sector Pensions',
    description: 'State and public sector pension schemes',
    clusters: ['state-pension', 'nhs-pension', 'teachers-pension', 'civil-service-pension'],
  },
  'private-pensions': {
    name: 'Private Pensions',
    description: 'Personal and workplace pension options',
    clusters: ['sipp', 'workplace-pension', 'final-salary'],
  },
  'retirement-planning': {
    name: 'Retirement Planning',
    description: 'Plan your retirement income',
    clusters: ['drawdown', 'annuities', 'retirement-age', 'inheritance'],
  },
  'money-matters': {
    name: 'Money Matters',
    description: 'Tax, contributions, and transfers',
    clusters: ['tax-relief', 'contributions', 'pension-pot', 'transfers', 'calculators'],
  },
};

// Helper functions
export function getClusterById(id: string): TopicCluster | undefined {
  return TOPIC_CLUSTERS.find(c => c.id === id);
}

export function getClusterBySlug(slug: string): TopicCluster | undefined {
  return TOPIC_CLUSTERS.find(c => c.slug === slug);
}

export function getAllPages(): { cluster: string; slug: string; title: string; isPillar: boolean }[] {
  const pages: { cluster: string; slug: string; title: string; isPillar: boolean }[] = [];

  for (const cluster of TOPIC_CLUSTERS) {
    // Add pillar page
    pages.push({
      cluster: cluster.slug,
      slug: cluster.pillarPage.slug,
      title: cluster.pillarPage.title,
      isPillar: true,
    });

    // Add supporting pages
    for (const page of cluster.supportingPages) {
      pages.push({
        cluster: cluster.slug,
        slug: page.slug,
        title: page.title,
        isPillar: false,
      });
    }
  }

  return pages;
}

export function getRelatedPages(clusterId: string, currentSlug: string, limit: number = 5): { cluster: string; slug: string; title: string }[] {
  const cluster = getClusterById(clusterId);
  if (!cluster) return [];

  const related: { cluster: string; slug: string; title: string }[] = [];

  // Add pages from same cluster (excluding current)
  for (const page of cluster.supportingPages) {
    if (page.slug !== currentSlug && related.length < limit) {
      related.push({ cluster: cluster.slug, slug: page.slug, title: page.title });
    }
  }

  // Add pages from related clusters
  for (const relatedId of cluster.relatedClusters) {
    const relatedCluster = getClusterById(relatedId);
    if (relatedCluster && related.length < limit) {
      related.push({
        cluster: relatedCluster.slug,
        slug: relatedCluster.pillarPage.slug,
        title: relatedCluster.pillarPage.title,
      });
    }
  }

  return related.slice(0, limit);
}
