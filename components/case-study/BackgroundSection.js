'use client'
import { motion } from 'framer-motion'

export default function BackgroundSection({ data, getIcon }) {
  const { background } = data
  if (!background) return null

  return (
    <section className="py-15 bg-gray-50 bg-gradient-to-br from-white-150 via-purple-50 to-white-150">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Section title */}
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">
            {background.title}
          </h2>
          <p className="text-2xl text-gray-600 text-center max-w-4xl mx-auto mb-12">
            {background.description}
          </p>

          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {background.team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center hover:shadow-md transition-all duration-300"
              >
                <div className="flex gap-3 justify-start items-center mb-2 border-b border-gray-200 pb-4 text-indigo-600 text-3xl">
                  <span>{getIcon(member.icon)}</span>
                <h3 className="text-xl font-semibold text-gray-900">{member.title}</h3>
                </div>

                <p className="text-gray-600 text-left text-lg">{member.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Challenges */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
              {background.challengesTitle}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {background.challenges.map((challenge, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="flex gap-3 justify-start items-center mb-2 border-b border-gray-200 pb-2 text-red-600 text-3xl">
                    <span>{getIcon(challenge.icon)}</span>

                  <h4 className="text-xl font-semibold text-gray-900 ">
                    {challenge.title}
                  </h4>
                  </div>
                  <p className="text-gray-600 text-left text-lg">{challenge.description}</p>
                </motion.div>
              ))}
            </div>

            {background.realization && (
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="text-gray-700 italic mt-8 pt-6 border-t border-gray-100 text-left"
              >
                {background.realization}
              </motion.p>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
