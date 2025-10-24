// app/case-studies/Whatfix/page.js
import CaseStudyLayout from '../../../components/CaseStudyLayout'

const whatfixData = {
  slug: 'whatfix',
  company: 'Whatfix',
  title: "How PrimeRole's RevOps Solution ",
  colortitle: 'Delivered a 40% ROI Uplift for Whatfix',
  subtitle: 'Securing data integrity and transforming revenue operations for Financial Services clients',
  
  // Hero Section
  hero: {
    intro: "Whatfix, a global leader in Digital Adoption Platforms (DAP), reached a critical scaling juncture in its pursuit of high-value enterprise accounts within the Financial Services Institution (FSI) and Banking sectors. The organization faced severe constraints imposed by debilitating data fragmentation, persistent data decay, and high operational costs. The strategic resolution was the implementation of PrimeRole's AI-driven Revenue Operations (RevOps) platform, leveraging proprietary multi-vendor Waterfall Enrichment to achieve unparalleled contact data accuracy and completeness. This foundational shift enabled Whatfix to reallocate resources away from administrative tasks toward high-value customer engagement, transforming its data operations from a financial liability and compliance risk to a strategic, scalable asset.",
    logos: {
      company: 'whatfix',
      primerole: true
    }
  },

  // Results Banner
  results: {
    heading: 'Transformative Results',
    subheading: 'Achieved within the first 12 months of implementation',
    stats: [
      { 
        icon: 'meetings', 
        value: '40%', 
        label: 'Return on Investment',
        description: 'Achieved through cost consolidation and revenue acceleration'
      },
      { 
        icon: 'savings', 
        value: '30%', 
        label: 'Sales Cycle Reduction',
        description: 'From 98 days to 68.6 days in FSI verticals'
      },
      { 
        icon: 'time', 
        value: '20,000', 
        label: 'Hours Recaptured Annually',
        description: 'Equivalent of several full-time sales roles'
      },
      { 
        icon: '🎯', 
        value: '90%+', 
        label: 'Contact Match Rate',
        description: 'Up from 50-60% with single-source vendors'
      },
      { 
        icon: '👁️', 
        value: '25%', 
        label: 'Conversion Rate Increase',
        description: 'Lead-to-opportunity conversion improvement'
      },
      { 
        icon: 'accuracy', 
        value: '70%', 
        label: 'Data Decay Prevented',
        description: 'Annual B2B data decay rate reduced by 30%'
      }
    ]
  },

  // Problems Section
  problems: {
    title: 'The Challenges',
    subtitle: 'Whatfix faced multiple operational and compliance challenges in the highly regulated FSI sector',
    items: [
      {
        icon: '💰',
        title: 'Challenge',
        description: 'Data fragmentation across multiple vendors with 50-60% match rates and high fixed subscription costs',
        tick: '✅',
        title2: 'Solution',
        solution: 'PrimeRole\'s Waterfall Enrichment achieving 90%+ match rates with pay-for-success pricing model'

      },
      {
        icon: '⚙️',
        title: 'Challenge',
        description: '31,200 annual hours per 100 reps wasted on manual data entry, cleansing, and prospecting research',
        tick: '✅',
        title2: 'Solution',
        solution: 'Automated enrichment and CRM updates recaptured 20,000 selling hours annually'
      },
      {
        icon: '🎯',
        title: 'Challenge',
        description: '70% annual B2B data decay undermining pipeline integrity and accurate forecasting',
        tick: '✅',
        title2: 'Solution',
        solution: 'Real-time verification and continuous hygiene reducing decay rate by 30%'
      },
      {
        icon: '👁️',
        title: 'Challenge',
        description: '98-day average sales cycle in FSI sector limiting deal velocity and revenue growth',
        tick: '✅',
        title2: 'Solution',
        solution: 'Precision targeting and enhanced C-suite engagement compressed cycle to 68.6 days'


      }
    ]
  },

  // Why PrimeRole Section
  whyPrimerole: {
    title: 'The PrimeRole Solution',
    overview: 'AI-driven Revenue Operations platform with proprietary Waterfall Enrichment technology',
    solutions: [
      {
        role: 'Multi-Provider Waterfall',
        description: 'Sequential optimization through prioritized vendor chain, maximizing match rates and completeness.'
      },
      {
        role: 'AI-Powered Routing', 
        description: 'Intelligent cost optimization with pay-for-success model, eliminating wasted spend on failed lookups.'
      },
      {
        role: 'ICP Matching',
        description: 'Automated prospect assessment against 120+ company attributes with real-time signals.'
      },
      {
        role: 'Data Governance',
        description: 'Automated compliance checks, lead scoring, and real-time CRM updates ensuring data integrity.'
      }
    ]
  },


  // Before & After Section
  beforeAfter: {
    title: 'Performance Transformation',
    subtitle: 'Quantifiable improvements across all key metrics',
    items: [
      {
        title: 'Sales Cycle Duration',
        before: '98 days',
        after: '68.6 days (-30%)',
      },
      {
        title: 'Contact Match Rate',
        before: '50-60%',
        after: '90%+',
      },
      {
        title: 'Annual Rep Time Saved',
        before: '0 hours',
        after: '20,000 hours',
      },
      {
        title: 'Lead-to-Opportunity Conversion', 
        before: 'Industry Avg%',
        after: '+25%',
      },
       {
        title: 'Data Decay Rate',
        before: '70% annually',
        after: 'Reduced by 30%',
      }
    ]
  },

  // Results by Role Section
  resultsByRole: {
    title: 'Strategic Impact in Financial Services',
    subtitle: 'How enhanced data quality transformed sales engagement in the FSI sector',
    roles: [
      {
        role: 'Precision Targeting',
        icon: '🚀',
        description: '360-degree FSI prospect view with firmographic, technographic, and intent data enabling hyper-personalized engagement with C-suite executives',
        benefits: [],
      },
      {
        role: 'Risk Mitigation',
        icon: '💼',
        description: 'Multi-layered data verification demonstrating commitment to data integrity, critical for vendor onboarding in regulated banking environments', 
        benefits: [],
      },
      {
        role: 'Operational Excellence',
        icon: '📈',
        description: 'Whatfix became a living example of sophisticated, data-driven operations, reinforcing its DAP value proposition to banks pursuing digitization',
        benefits: [],
      },
      
    ]
  },



  // Summary Section
  summary: {
    title: 'The 40% ROI Breakdown',
    challenges: 'Comprehensive financial modeling triangulating cost savings with measurable revenue acceleration',
    outcomes: [
      { value: 'Gain Value', label: 'Monetary value of 20,000 recaptured selling hours converted to pipeline activities' },
      { value: 'Cost Reduction', label: 'Savings from vendor consolidation and reduced operational maintenance overhead' },
      { value: 'Revenue Lift', label: 'Value from 30% sales cycle compression and 25% conversion rate increase  ' }
    ],
  }
}

export default function WhatfixPage() {
  return <CaseStudyLayout data={whatfixData} />
}