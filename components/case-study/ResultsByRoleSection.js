'use client'
import { motion } from 'framer-motion'
import { FaCheck } from 'react-icons/fa'

export default function ResultsByRoleSection({ data, getIcon }) {
  const { resultsByRole } = data
  if (!resultsByRole) return null

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' },
    }),
  }

  return (
    <section className="relative py-20 bg-white overflow-hidden">
      {/* Subtle background grid */}
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
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
            {resultsByRole.title}
          </h2>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {resultsByRole.subtitle}
          </p>
        </motion.div>

        {/* Role Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {resultsByRole.roles.map((role, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              custom={index * 0.2}
              viewport={{ once: true }}
              className="group bg-white rounded-2xl p-8 shadow-sm border border-gray-100 
                         hover:shadow-xl hover:border-indigo-200 transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl 
                                bg-indigo-100 text-indigo-600 flex-shrink-0">
                  {getIcon(role.icon)}
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 group-hover:text-indigo-700 transition-colors">
                    {role.role}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {role.description}
                  </p>
                </div>
              </div>

              {/* Benefits */}
              <div className="bg-gray-50 rounded-xl p-5 mb-6 border border-gray-100">
                <h4 className="font-semibold text-gray-900 mb-3 text-lg">{role.benefitsTitle}</h4>
                <ul className="space-y-2">
                  {role.benefits.map((benefit, benefitIndex) => (
                    <li
                      key={benefitIndex}
                      className="flex items-center gap-3 text-gray-700 leading-snug"
                    >
                      <FaCheck className="text-green-500 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Details */}
              <p className="text-gray-700 text-lg leading-relaxed">
                {role.details}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Subtle glow behind grid */}
        <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] 
                        bg-purple-200/30 blur-3xl rounded-full pointer-events-none" />
      </div>
    </section>
  )
}
