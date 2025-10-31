'use client'
import { motion } from 'framer-motion'

export default function HeroSection({ data }) {
  return (
      <section className="relative items-center bg-gradient-to-br from-white-150 via-purple-50 to-white-150 py-15 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:radial-gradient(0deg,white,rgba(140, 94, 231, 0.6))]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="text-lg text-[#151515] text-center h-10 w-48 bg-white px-4 gap-2 rounded-full border border-transparent mb-8 mx-auto flex items-center justify-center"
              style={{ background: 'linear-gradient(white, white) padding-box, linear-gradient(248.95deg, rgba(118, 76, 250, 0.05) 11.71%, rgba(118, 76, 250, 0.7) 50.73%, rgba(118, 76, 250, 0.05) 89.75%) border-box', borderWidth: '1px', borderStyle: 'solid' }}>
              Case Study
            </div>
            
            <div className='flex flex-col-reverse lg:flex-row gap-8 lg:gap-4 items-center justify-center'>
              
              <div className="max-w-4xl w-full text-center lg:text-left mx-auto mt-0 lg:mt-8 mb-8 lg:mb-8">
    
                {/* Title - Reduced bottom margin on mobile */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4 lg:mb-6">
                  {data.title}{' '}
                  <span className="bg-gradient-to-b from-[#704EF1] to-[#543FCA] bg-clip-text text-transparent">
                    {data.colortitle}
                  </span>
                </h1>
                <p className="text-2xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-0 lg:mb-8">
                  {data.subtitle}
                </p>
              </div>
              <div className="flex-shrink-0 flex items-center justify-center gap-6 mt-0 mb-8 lg:mb-12 lg:mt-0">
                <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-100">
              <img src={`/logos/${data.hero.logos.company}.svg`} alt={data.company} className="w-28 h-auto" />
                </div>
                <div className="text-2xl">+</div>
                <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-100">
  <img src="/logos/primerole.svg" alt="PrimeRole Logo" className="w-28 h-auto" />
                </div>
              </div>
            </div>
    
            {/* Introduction */}
            {data.hero?.intro && (
              <div className="max-w-8xl mx-auto mt-4">
                <p className="text-2xl text-left text-gray-700 leading-relaxed bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-sm">
                  {data.hero.intro}
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </section>
  )
}
