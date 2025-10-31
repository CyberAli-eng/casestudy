import { motion } from 'framer-motion'

export default function SummarySection({ data }) {

  const { summary } = data
  if (!summary) return null

  return (
    <section className=" py-15  bg-white">
          <div className="max-w-5xl max-w-[1240px] m-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              
              <div className="bg-white  rounded-2xl p-8 shadow-sm border border-gray-100">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">{data.summary.title}</h2>

                <p className="text-gray-700 text-2xl leading-relaxed mb-6">
                  {data.summary.challenges}
                </p>
                
                <p className="text-gray-700 text-2xl leading-relaxed mb-8">
                  {data.summary.solution}
                </p>

                {/* Outcome Stats */}
                <div className="grid grid-cols-1 text-center md:grid-cols-3 gap-6 mb-8">
                  {data.summary.outcomes.map((outcome, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-indigo-50 rounded-2xl p-6 border border-indigo-100 hover:shadow-lg transition-all duration-300"
                    >

                      <div className="text-2xl md:text-3xl font-bold text-indigo-600 mb-2">
                        {outcome.value}
                      </div>
                      <div className="text-gray-600 text-lg font-medium">
                        {outcome.label}
                      </div>
                    </motion.div>
                  ))}
                </div>
              

                <div className="border-t border-gray-200 pt-8">
                  <h2 className="text-3xl text-center font-bold text-gray-900 mb-8">{data.summary.outcometitle}</h2>
                  <p className="text-gray-700 text-2xl leading-relaxed font-medium">
                    {data.summary.conclusion}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
  )
}
