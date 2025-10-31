// app/case-studies/lambdatest/page.js
import CaseStudyLayout from '../../../components/case-study/CaseStudyLayout'

const lambdatestData = {
  slug: 'lambdatest',
  company: 'LambdaTest',
  title: '3X Growth with',
  colortitle: 'RevOps Transformation',
  subtitle: 'How LambdaTest achieved remarkable revenue growth using PrimeRole',
  
  // Hero Section
  hero: {
    intro: 'LambdaTest was expanding its sales operations at a fast pace, but the team faced challenges with fragmented data, limited visibility into the pipeline, and inefficient forecasting. PrimeRole worked with LambdaTest to address these issues by streamlining RevOps processes, improving data consistency, and providing clear insights that supported faster and more accurate decision-making.',
    logos: {
      company: 'lambdatest',
      primerole: true
    }
  },

  // Results Banner
  results: {
    heading: 'Key Results',
    subheading: 'Achieved within the first 6 months of implementation',
    stats: [
      { 
        icon: 'meetings', 
        value: '3X', 
        label: 'Increase in meetings booked',
        description: 'Meeting Bookings'
      },
      { 
        icon: 'savings', 
        value: '$210K', 
        label: 'Annual data spend reduction',
        description: 'Cost Savings'
      },
      { 
        icon: 'time', 
        value: '4+ Hours', 
        label: 'Daily Sales per Representative',
        description: 'Time Saved'
      },
      { 
        icon: 'accuracy', 
        value: '90%+', 
        label: 'Up from <70% of previous data accuracy',
        description: 'Data Accuracy'
      }
    ]
  },

  // Background Section
  background: {
    title: 'Background',
    description: 'LambdaTest is an AI-native test orchestration platform used by 10,000+ customers in 132 countries. To drive growth, the company built a large revenue team that included:',
    team: [
      { 
        icon: 'users',
        title: '100+ BDRs', 
        description: 'Business Development Representatives for outbound prospecting'
      },
      { 
        icon: 'inbox',
        title: 'Inbound Team', 
        description: 'Strong inbound qualification team'
      },
      { 
        icon: 'briefcase',
        title: 'Account Executives', 
        description: 'Multiple AEs managing opportunities'
      },
      { 
        icon: 'line-chart',
        title: 'Account Managers', 
        description: 'AMs focusing on retention and expansion'
      }
    ],

    challengesTitle: 'By 2024, Scaling This Model Had Become Difficult',
    challenges: [
      {
        icon: 'dollar-sign',
        title: 'Rising Costs',
        description: 'Costs were rising across tools and data providers'
      },
      {
        icon: 'zap',
        title: 'Slipping Efficiency', 
        description: 'Efficiency was slipping due to manual work and fragmented processes'
      },
      {
        icon: 'eye',
        title: 'Limited Visibility',
        description: 'Leadership lacked consistent visibility into performance'
      }
    ],

    realization: 'LambdaTest realized that fixing one piece at a time would not be enough. They needed a unified approach that improved outcomes for every role in the revenue organization.'
  },

  // Problems Section
  problems: {
    title: 'The Problem: Scaling Revenue Created Complexity',
    subtitle: 'Key challenges that needed solving',
    items: [
      {
        icon: 'dollar-sign',
        title: 'Costly, Unreliable Data',
        description: 'LambdaTest was spending more than $250,000 annually across several data providers. Despite the spending, contact records were often duplicated, inconsistent, or outdated. Reps wasted time verifying contacts manually, and bounce rates remained high. The company was paying for volume but not achieving the quality needed for consistent outreach.'
      },
      {
        icon: 'clock',
        title: 'Manual Work Consumed Time',
        description: 'BDRs and SDRs lost more than four hours each day to enrichment, CRM updates, and research before sending their first email or making their first call. AEs spent hours writing call notes and updating systems. AMs relied on scattered tools to track account health. Across the revenue team, a large portion of time went into tasks that could not directly create pipeline or revenue.'
      },
      {
        icon: 'target',
        title: 'Personalization at Scale Got Challenging',
        description: 'Prospects expect communication that reflects their role, company situation, and priorities. For LambdaTest, doing this at scale was difficult. Without a reliable way to surface insights quickly, personalization required heavy manual effort. Outreach lacked consistency across the team, and response rates were not as strong as expected.'
      },
      {
        icon: 'settings',
        title: 'Coaching Tools Were Siloed',
        description: 'Coaching tools were available, but they worked in silos and could not be orchestrated within a single platform or connected easily to the existing tech stack. Less than 40 percent of outbound calls were consistently recorded, and only 20 percent of those were reviewed by managers. More than 70 percent of the feedback was anecdotal.'
      },
      {
        icon: 'pie-chart',
        title: 'Pipeline Insights Were Fragmented and Delayed',
        description: 'At the leadership level, information was spread across multiple systems. Reporting was inconsistent and often delayed. It was difficult to track inbound conversion, pipeline health, or deal risk. Forecasts were built on partial information, which made them less reliable. Decisions often relied on intuition rather than consistent signals.'
      }
    ]
  },

  // Why PrimeRole Section
  whyPrimerole: {
    title: 'Why PrimeRole',
    overview: 'LambdaTest needed a unified system that could support every part of the revenue workflow. PrimeRole was selected because it combined data enrichment, engagement automation, conversation intelligence, deal analytics, and account management in one platform.',
    solutions: [
      {
        role: 'BDRs and SDRs',
        description: 'PrimeRole offered accurate data, automatic enrichment, intelligent prioritization, and personalized outreach at scale.'
      },
      {
        role: 'Account Executives', 
        description: 'It provided deal scoring, real-time coaching, and forecasting.'
      },
      {
        role: 'Account Managers',
        description: 'It delivered account health tracking, churn and upsell signals, and structured renewal planning.'
      },
      {
        role: 'Leadership',
        description: 'It created a single source of truth across the entire funnel.'
      }
    ]
  },

  // Transformation Section
  transformation: {
    title: 'The Transformation',
    subtitle: 'Four-Step Transformation Process',
    steps: [
      {
        icon: 'database',
        title: 'Data Unification',
        description: 'Consolidated multiple data sources into accurate, verified contacts'
      },
      {
        icon: 'workflow',
        title: 'Workflow Automation', 
        description: 'Automated manual tasks, freeing up 4+ hours daily per rep'
      },
      {
        icon: 'brain',
        title: 'AI-Powered Insights',
        description: 'Intelligent scoring and personalization at scale'
      },
      {
        icon: 'link',
        title: 'Unified Platform',
        description: 'Single source of truth for leadership visibility'
      }
    ],
    results: [
      {
        title: 'Reliable and Accurate Data',
        description: 'PrimeRole introduced waterfall verification that combined several layers of checks to improve contact and account accuracy. Accuracy rose over 90 percent within weeks. Bounce rates dropped, and duplicate records were removed. The company reduced its annual data spend from over $250,000 to under $40,000 while improving quality.'
      },
      {
        title: 'Less Manual Work and More Selling', 
        description: 'PrimeRole automated lead creation, enrichment, and CRM updates. BDRs and SDRs reclaimed more than four hours daily. AEs no longer had to write long notes after calls because conversations were transcribed and synced automatically. AMs had customer activity tracked without manual updates.'
      },
      {
        title: 'Smarter Targeting',
        description: 'AI-driven scoring ranked accounts and contacts against LambdaTest\'s ideal customer profile. BDRs focused on the 20 percent of accounts most likely to convert. SDRs qualified inbound leads faster because PrimeRole enriched and scored them instantly.'
      }
    ]
  },

  // Before & After Section
  beforeAfter: {
    title: 'Before vs After: Measurable Impact',
    subtitle: 'Key Performance Improvements',
    items: [
      {
        title: 'Annual Data Spend',
        before: '$250,000+',
        after: '$40,000', 
        improvement: '$210K Saved'
      },
      {
        title: 'Data Accuracy',
        before: '<70%',
        after: '90%+',
        improvement: '+20%'
      },
      {
        title: 'Daily Manual Work',
        before: '4+ hours',
        after: '<1 hour',
        improvement: '75% Reduction'
      },
      {
        title: 'Call Recording', 
        before: '40%',
        after: '95%+',
        improvement: '+55%'
      }
    ]
  },

  // Results by Role Section
  resultsByRole: {
    title: 'The Results: Clear, Measurable Impact',
    subtitle: 'The changes were visible across every role in the revenue team',
    roles: [
      {
        role: 'BDRs & SDRs',
        icon: 'rocket',
        description: 'Increased productivity and meeting bookings',
        benefitsTitle: 'Key Benefits:',
        benefits: [
          '3X more meetings booked',
          '4+ hours saved daily', 
          'Higher response rates'
        ],
        details: 'BDRs and SDRs booked three times more meetings. Each rep saved more than four hours daily, adding up to over 400 hours weekly, redirected into prospecting and conversations. Inbound leads were qualified faster and with higher accuracy, leading to stronger conversion to sales opportunities.'
      },
      {
        role: 'Account Executives',
        icon: 'briefcase',
        description: 'Faster deal closure and improved win rates', 
        benefitsTitle: 'Key Benefits:',
        benefits: [
          'Faster deal velocity',
          'Higher win rates',
          'Better forecast accuracy'
        ],
        details: 'AEs closed deals faster and with higher win rates. Real-time coaching and structured analysis improved deal execution. Forecast accuracy improved significantly, which gave managers and leadership greater confidence in their pipelines.'
      },
      {
        role: 'Account Managers',
        icon: 'trending_up',
        description: 'Proactive account management and expansion',
        benefitsTitle: 'Key Benefits:',
        benefits: [
          'Earlier churn detection',
          'Better expansion signals', 
          'Structured renewals'
        ],
        details: 'AMs had better visibility into account health. They identified churn risks earlier and received alerts on expansion signals. Renewal and upsell conversations became more structured and proactive.'
      },
      {
        role: 'Leadership', 
        icon: 'eye',
        description: 'Complete visibility and data-driven decisions',
        benefitsTitle: 'Key Benefits:',
        benefits: [
          '$210K annual savings',
          '90%+ data accuracy',
          'Unified reporting'
        ],
        details: 'Leadership reduced annual data spend by more than $210,000 while improving accuracy to over 90 percent. Forecasts were built on reliable data, risks were identified earlier, and overall decision-making became data-driven.'
      }
    ]
  },

  // Testimonial Section
  testimonial: {
    quote: 'Before PrimeRole, we were juggling too many tools and still didn\'t have reliable data. Now everything runs in one place. Our reps save time, book more meetings, and we finally have clear visibility across the funnel.',
    author: 'Jay Singh',
    role: 'Chief Customer Officer, LambdaTest'
  },

  // Summary Section
  summary: {
    title: 'Summary',
    challenges: 'LambdaTest faced challenges common to many growing companies: high data costs with limited accuracy, time lost to manual work, difficulty scaling personalization, siloed coaching tools, and limited leadership visibility.',
    solution: 'By implementing PrimeRole, LambdaTest addressed all of these challenges in a unified way. Data was accurate, workflows were automated, outreach was personalized, conversations were analyzed, deals were tracked with precision, and leadership had reliable visibility.',
    outcometitle: "The Outcome",
    outcomes: [
      { value: '3X', label: 'Growth in meeting bookings' },
      { value: '$210K', label: 'Annual savings' },
      { value: '90%+', label: 'Data accuracy' }
    ],
    conclusion: 'LambdaTest transformed from a fragmented revenue process to a unified, efficient system. With PrimeRole, they achieved 3X growth in meeting bookings, saved $210K annually, and gave their entire revenue team the tools to succeed. The result: a revenue organization that\'s efficient, predictable, and ready to scale.'
  }
}

export default function LambdaTestPage() {
  return <CaseStudyLayout data={lambdatestData} />
}