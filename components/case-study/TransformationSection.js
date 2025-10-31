import { motion } from 'framer-motion'


export default function TransformationSection({ data, getIcon }) {
  const { transformation } = data
  if (!transformation) return null

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
     <section className="py-15  bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{data.transformation.title}</h2>
              <p className="text-2xl text-gray-600">{data.transformation.subtitle}</p>
            </motion.div>

            {/* Steps */}
            <motion.div
              variants={staggerChildren}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
            >
              {data.transformation.steps.map((step, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-gray-50 rounded-2xl p-6 text-left hover:shadow-lg transition-all duration-300"
                >
                  <div className="text-3xl flex items-center justify-start gap-3  text-indigo-600 mb-4">
                    <span>{getIcon(step.icon)}</span>
                    <span className="text-2xl font-semibold text-indigo-600"> Step {index + 1}</span>
                    </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 text-lg">{step.description}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Results */}
            <div className="grid grid-cols-1 gap-8">
              {data.transformation.results.map((result, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8 border border-indigo-100"
                >
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">{result.title}</h3>
                  <p className="text-gray-700 text-xl leading-relaxed">{result.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
  )
}
