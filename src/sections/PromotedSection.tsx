import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router';
import { staggerContainer, fadeUpVariant } from '@/lib/animations';

export default function PromotedSection() {
  return (
    <section className="w-full py-12 bg-white">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="max-w-container mx-auto px-4 lg:px-6 grid grid-cols-1 lg:grid-cols-3 gap-6"
      >
        {/* Card 1 - Text Card */}
        <motion.div
          variants={fadeUpVariant}
          className="bg-white border border-gray-200 rounded-lg p-6 lg:p-8 flex flex-col justify-between"
        >
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Agriculture Videos
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-6">
              Watch practical agronomy videos, product application guides, and field success stories from Mike Alpha experts across India. Explore featured clips and visit our YouTube channel for more inspiring content on plant nutrition and sustainable crop growth.
            </p>
          </div>
          <Link
            to="#"
            className="self-start inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white text-sm font-semibold px-6 py-3 rounded-md transition-all duration-200 hover:scale-[1.02]"
          >
            Read More
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        {/* Card 2 - Image Card */}
        <motion.div
          variants={fadeUpVariant}
          className="relative rounded-lg overflow-hidden min-h-[280px] lg:min-h-0 group"
        >
          <img
            src="/images/youtube-channel.jpg"
            alt="The Next Level of Plant Nutrition"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <Link
              to="/products"
              className="text-white hover:text-white/90"
            >
              <h3 className="text-xl font-semibold mb-2">
                The Next Level of Plant Nutrition
              </h3>
              <span className="inline-flex items-center gap-1 text-sm font-medium">
                Read More
                <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>
        </motion.div>

        {/* Card 3 - Split Card */}
        <motion.div variants={fadeUpVariant} className="flex flex-col gap-4">
          {/* Top mini-card */}
          <div className="bg-white border border-gray-200 rounded-lg p-5 flex-1">
            <h4 className="text-base font-semibold text-gray-800 mb-2">
              Nutrient Solutions for Greenhouse Crops in Soilless Media
            </h4>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              Soilless greenhouses represent the edge of horticulture technology. Discover how Mike Alpha precision nutrition supports optimal growth in soilless media.
            </p>
            <Link
              to="#"
              className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
            >
              Read More <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Bottom mini-card */}
          <div className="bg-white border border-gray-200 rounded-lg p-5 flex-1">
            <h4 className="text-base font-semibold text-gray-800 mb-2">
              Solutions for Open Field Agriculture
            </h4>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              From field crops to vegetables and orchards, our open-field programs help farmers improve yield, quality, and resource use efficiency.
            </p>
            <Link
              to="#"
              className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
            >
              Read More <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
