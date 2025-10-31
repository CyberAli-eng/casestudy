
'use client'
import { motion } from 'framer-motion'

export default function ResultsSection({ data, getIcon }) {
  const { results } = data
  if (!results) return null

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  }

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <section className="w-full max-w-[1240px] rounded-[16px] min-h-[292px] mx-auto px-4 sm:px-6 lg:px-8 mt-6 mb-6 py-15 bg-gradient-to-b from-[#704EF1] to-[#543FCA] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{results.heading}</h2>
          {results.subheading && <p className="text-2xl">{results.subheading}</p>}
        </motion.div>

        <motion.div
          variants={staggerChildren}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {results.stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-3 text-center border border-white/20 hover:bg-white/15 transition-all duration-300"
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-xl bg-white">{getIcon(stat.icon)}</div>
              </div>
              <div className="text-lg font-semibold mb-2">{stat.label}</div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">{stat.value}</div>
              <div className="text-lg tracking-wider mb-2">{stat.description}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
