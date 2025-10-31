'use client'

import React from 'react'
import { getIcon } from '../icons'
import HeroSection from './HeroSection'
import ResultsSection from './ResultsSection'
import BackgroundSection from './BackgroundSection'
import ProblemsSection from './ProblemsSection'
import WhyPrimeRoleSection from './WhyPrimeRoleSection'
import TransformationSection from './TransformationSection'
import BeforeAfterSection from './BeforeAfterSection'
import ResultsByRoleSection from './ResultsByRoleSection'
import TestimonialSection from './TestimonialSection'
import SummarySection from './SummarySection'

export default function CaseStudyLayout({ data }) {
  return (
    <main className="overflow-hidden bg-white text-gray-900">
      <HeroSection data={data} />
      <ResultsSection data={data} getIcon={getIcon} />
      <BackgroundSection data={data} getIcon={getIcon} />
      <ProblemsSection data={data} getIcon={getIcon} />
      <WhyPrimeRoleSection data={data} />
      <TransformationSection data={data} getIcon={getIcon} />
      <BeforeAfterSection data={data} />
      <ResultsByRoleSection data={data} getIcon={getIcon} />
      <TestimonialSection data={data} />
      <SummarySection data={data} />
    </main>
  )
}
