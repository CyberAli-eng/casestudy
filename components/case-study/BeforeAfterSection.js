import { motion } from 'framer-motion'
export default function BeforeAfterSection({ data }) {
  const { beforeAfter } = data
  if (!beforeAfter) return null

  return (
<section className="py-20 bg-white">
  <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-3xl font-bold text-gray-900 text-center mb-12"
    >
      Before vs After: Measurable Impact
    </motion.h2>
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.2 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
    >
      <table className="w-full text-left">
        <thead className="bg-gradient-to-r from-gray-50 to-gray-100 text-gray-700">
          <motion.tr
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <th className="p-6 font-bold text-lg border-r border-gray-200">Metric</th>
            <th className="p-6 font-bold text-lg text-red-600 border-r border-gray-200">Before</th>
            <th className="p-6 font-bold text-lg text-green-600 border-r border-gray-200">After</th>
            <th className="p-6 font-bold text-lg text-[#704EF1]">Improvement</th>
          </motion.tr>
        </thead>
        <tbody className="text-lg">
          {data.beforeAfter.items.map((item, i) => (
            <motion.tr
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.1 * i,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true }}
              whileHover={{
                backgroundColor: "rgba(249, 250, 251, 0.8)",
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className="border-t border-gray-100 hover:bg-gray-50 transition-all duration-200 group"
            >
              <motion.td
                className="p-6 font-semibold text-gray-900 border-r border-gray-200 group-hover:bg-white/50"
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                {item.title}
              </motion.td>
              <motion.td
                className="p-6 text-red-600 font-medium border-r border-gray-200"
                initial={{ opacity: 0.5 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 + (i * 0.1) }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-2">
                  <motion.span
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      delay: 0.3 + (i * 0.1)
                    }}
                    viewport={{ once: true }}
                    className="w-2 h-2 bg-red-500 rounded-full"
                  />
                  {item.before}
                </div>
              </motion.td>
              <motion.td
                className="p-6 text-green-600 font-medium border-r border-gray-200"
                initial={{ opacity: 0.5 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 + (i * 0.1) }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-2">
                  <motion.span
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      delay: 0.4 + (i * 0.1)
                    }}
                    viewport={{ once: true }}
                    className="w-2 h-2 bg-green-500 rounded-full"
                  />
                  {item.after}
                </div>
              </motion.td>
              <motion.td
                className="p-6 text-indigo-600 font-bold"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  delay: 0.5 + (i * 0.1)
                }}
                viewport={{ once: true }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center gap-2 bg-indigo-50 px-3 py-1 rounded-full"
                >
                  <motion.span
                    animate={{
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.2, 1]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 3
                    }}
                  >
                    :arrow_up:
                  </motion.span>
                  {item.improvement}
                </motion.div>
              </motion.td>
            </motion.tr>
          ))}
        </tbody>
      </table>
      {/* Animated border effect */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={{ once: true }}
        className="h-1 bg-[#704EF1] origin-left"
        style={{ originX: 0 }}
      />
    </motion.div>
    {/* Summary stats animation */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      viewport={{ once: true }}
      className="mt-12 text-center"
    >
      <div className="inline-flex flex-wrap justify-center gap-8">
        {data.beforeAfter.items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              delay: 0.9 + (i * 0.2)
            }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.2 }
            }}
            className="text-center"
          >
            <div className="text-2xl font-bold text-[#704EF1] mb-1">
              {item.improvement}
            </div>
            <div className="text-sm text-gray-600 font-medium max-w-[120px]">
              {item.title}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </div>
</section>
  )
}
