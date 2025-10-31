import { motion } from 'framer-motion'
export default function ProblemsSection({ data, getIcon }) {
  const { problems } = data
  if (!problems) return null

  return (
 <section className="py-15 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{data.problems.title}</h2>
              <p className="text-2xl text-gray-600">{data.problems.subtitle}</p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8" >
              {data.problems.items.map((problem, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-[#ededff] rounded-2xl p-8 border-l-4 border-indigo-500 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="text-2xl text-indigo-600 flex-shrink-0">{getIcon(problem.icon)}</div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">{problem.title}</h3>
                      <p className="text-gray-700 text-lg leading-relaxed">{problem.description}</p>
                    </div>
                    <div className="text-2xl text-indigo-600 flex-shrink-0">{getIcon(problem.tick)}</div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">{problem.title2}</h3>
                      <p className="text-gray-700 text-lg leading-relaxed">{problem.solution}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
  )
}
