import { FaQuoteLeft } from 'react-icons/fa'
import { motion } from 'framer-motion'

export default function TestimonialSection({ data }) {
  const { testimonial } = data
  if (!testimonial) return null

  return (
 <section className="text-white">
          <div className="w-full max-w-[1240px] rounded-[16px] min-h-[292px] mx-auto px-4 sm:px-6 lg:px-8 mt-6 mb-6 py-15 bg-gradient-to-b from-[#704EF1] to-[#543FCA] text-white text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <FaQuoteLeft className="text-4xl text-white mx-auto mb-8" />
              <blockquote className="text-2xl md:text-3xl font-light leading-relaxed mb-8">
                "{data.testimonial.quote}"
              </blockquote>
              <div>
                <div className="text-xl font-semibold mb-2">{data.testimonial.author}</div>
                <div className="text-indigo-200">{data.testimonial.role}</div>
              </div>
            </motion.div>
          </div>
        </section>
  )
}
