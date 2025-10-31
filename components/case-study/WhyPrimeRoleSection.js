'use client'
import { motion } from 'framer-motion'

export default function WhyPrimeRoleSection({ data }) {
  const { whyPrimerole } = data
  if (!whyPrimerole) return null

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' },
    }),
  }

  return (
    <section className="relative py-20 bg-[radial-gradient(circle_at_50%_0,rgba(233,228,255,.6)_0,hsla(0,0%,100%,0)_50%),#fff]">
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:radial-gradient(white,transparent_85%)] pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            {whyPrimerole.title}
          </h2>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto mt-6 leading-relaxed">
            {whyPrimerole.overview}
          </p>
        </motion.div>

        {/* Solution Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyPrimerole.solutions.map((solution, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              custom={index * 0.15}
              viewport={{ once: true }}
              className="relative group bg-white rounded-2xl p-4 shadow-sm border border-gray-100 
                         hover:shadow-xl hover:border-indigo-200 transition-all duration-300 overflow-hidden"
            >
              {/* Animated Accent Bar */}
              <div className="absolute top-0 left-0 h-1 w-0 bg-indigo-600 group-hover:w-full transition-all duration-500" />

              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full 
                                bg-indigo-100 text-indigo-600 font-semibold text-lg">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-indigo-700 transition-colors">
                  {solution.role}
                </h3>
              </div>

              <p className="text-gray-600 text-lg leading-relaxed">
                {solution.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Subtle Glow Background Effect */}
        <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-200/30 blur-3xl rounded-full pointer-events-none" />
      </div>
    </section>
  )
}
