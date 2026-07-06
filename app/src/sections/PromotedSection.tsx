import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { staggerContainer, fadeUpVariant } from '@/lib/animations';

export default function PromotedSection() {
  return (
    <section className="w-full py-12 bg-white">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-container mx-auto px-4 lg:px-6 grid grid-cols-1 lg:grid-cols-3 gap-6"
      >
        {/* Card 1 - Text Card */}
        <motion.div
          variants={fadeUpVariant}
          className="bg-white border border-gray-200 rounded-lg p-6 lg:p-8 flex flex-col justify-between"
        >
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Mike Alpha Agronomy Insights
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-6">
              Explore practical agronomy guides, product application tips, and field success stories from across India. Our agronomy team shares science-driven advice for stronger yields and healthier crops.
            </p>
          </div>
          <button className="self-start bg-primary hover:bg-primary-dark text-white text-sm font-semibold px-6 py-3 rounded-md transition-all duration-200 hover:scale-[1.02]">
            Read More
          </button>
        </motion.div>

        {/* Card 2 - Image Card */}
        <motion.div
          variants={fadeUpVariant}
          className="relative rounded-lg overflow-hidden min-h-[280px] lg:min-h-0"
        >
          <img
            src="/images/youtube-channel.jpg"
            alt="Mike Alpha Agro Digital Platform"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Card 3 - Split Card */}
        <motion.div variants={fadeUpVariant} className="flex flex-col gap-4">
          {/* Top mini-card */}
          <div className="bg-white border border-gray-200 rounded-lg p-5 flex-1">
            <h4 className="text-base font-semibold text-gray-800 mb-2">
              Stress Recovery with AMINOVIT 22
            </h4>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              How free L-amino acids help vegetable and fruit crops recover from heat, water, and transplant stress.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
            >
              Read More <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Bottom mini-card */}
          <div className="bg-white border border-gray-200 rounded-lg p-5 flex-1">
            <h4 className="text-base font-semibold text-gray-800 mb-2">
              Choosing the Right Starter NPK
            </h4>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              Why a balanced 19-19-19 foundation sets up uniform vegetative growth and healthier blooming.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
            >
              Read More <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
