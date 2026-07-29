import { Link } from 'react-router';
import { motion } from 'framer-motion';
import {
  Droplets,
  Sprout,
  Leaf,
  CloudRain,
  TreePine,
  Warehouse,
  RotateCcw,
  Waves,
  ChevronRight,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/sections/Footer';
import FloatingActions from '@/components/FloatingActions';
import { staggerContainer, fadeUpVariant } from '@/lib/animations';

const fertilizationMethods = [
  {
    icon: Droplets,
    title: 'Nutrigation™',
    description:
      'Deliver nutrients directly to the root zone through irrigation water. This precision method matches crop uptake, reduces leaching, and improves fertilizer use efficiency across every growth stage.',
    benefits: ['Precise nutrient timing', 'Higher uptake efficiency', 'Reduced labor and waste'],
  },
  {
    icon: CloudRain,
    title: 'Center Pivot',
    description:
      'Combine mechanized irrigation with fertigation for large-scale field crops. Uniform water and nutrient distribution supports consistent yields across broad acreages.',
    benefits: ['Scalable for large farms', 'Uniform application', 'Lower per-acre operating cost'],
  },
  {
    icon: Sprout,
    title: 'Foliar Fertilizer',
    description:
      'Apply nutrients through the leaf surface for rapid correction of deficiencies. Foliar feeding is especially effective during critical reproductive stages when root uptake may be limited.',
    benefits: ['Fast deficiency correction', 'Targeted micronutrients', 'Supports peak demand periods'],
  },
  {
    icon: Waves,
    title: 'Soil Application',
    description:
      'Broadcast or band granular fertilizers into the soil to build baseline fertility. This traditional approach remains the foundation of many crop nutrition programs.',
    benefits: ['Builds soil reserves', 'Simple to apply', 'Cost-effective for macronutrients'],
  },
  {
    icon: RotateCcw,
    title: 'CRF Application',
    description:
      'Controlled-release fertilizers supply nutrients gradually based on soil temperature and moisture. CRF reduces application frequency and minimizes nutrient losses.',
    benefits: ['Long-lasting nutrition', 'Reduced application passes', 'Lower environmental impact'],
  },
];

const farmingMethods = [
  {
    icon: Warehouse,
    title: 'Hydroponic',
    description:
      'Grow crops without soil using nutrient-rich water solutions. Hydroponics enables year-round production, faster growth, and precise control over plant nutrition.',
    benefits: ['Water-efficient', 'Year-round production', 'No soil-borne diseases'],
  },
  {
    icon: TreePine,
    title: 'Fruit Trees',
    description:
      'Long-term orchard management focuses on balanced canopy development, fruit load, and seasonal nutrient programs to maintain productivity over many years.',
    benefits: ['Long-term productivity', 'Seasonal nutrition plans', 'Improved fruit quality'],
  },
  {
    icon: Leaf,
    title: 'Greenhouses',
    description:
      'Protected cultivation creates controlled environments for high-value crops. Integrated nutrition and irrigation strategies maximize yield per square meter.',
    benefits: ['Climate control', 'Higher yields', 'Protected from pests'],
  },
  {
    icon: Sprout,
    title: 'Nurseries',
    description:
      'Young plants need gentle, consistent nutrition to develop strong root systems. Nursery programs focus on micronutrient balance and controlled release.',
    benefits: ['Strong root establishment', 'Uniform plantlets', 'Reduced transplant shock'],
  },
  {
    icon: CloudRain,
    title: 'Center Pivot',
    description:
      'Ideal for cereals, pulses, and row crops, center pivot systems support mechanized, uniform irrigation and fertigation across large fields.',
    benefits: ['Covers large areas', 'Automation-ready', 'Consistent crop stand'],
  },
  {
    icon: Waves,
    title: 'Open Field',
    description:
      'Traditional open-field farming relies on rainfall or surface irrigation combined with soil-applied and foliar fertilizers to feed field-scale crops.',
    benefits: ['Lower infrastructure cost', 'Flexible crop choices', 'Proven practices'],
  },
];

function MethodCard({
  method,
}: {
  method: (typeof fertilizationMethods)[0];
}) {
  const Icon = method.icon;
  return (
    <motion.div
      variants={fadeUpVariant}
      className="bg-white border border-brand-border rounded-lg p-6 md:p-8 hover:shadow-card transition-shadow h-full flex flex-col"
    >
      <div className="w-12 h-12 bg-primary-light rounded-lg flex items-center justify-center mb-5">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <h3 className="text-xl font-bold text-navy mb-3">{method.title}</h3>
      <p className="text-brand-text-secondary leading-relaxed mb-5 flex-1">
        {method.description}
      </p>
      <ul className="space-y-2">
        {method.benefits.map((benefit) => (
          <li key={benefit} className="flex items-start gap-2 text-sm text-brand-text-secondary">
            <span className="w-1.5 h-1.5 rounded-full bg-coral mt-2 flex-shrink-0" />
            {benefit}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function GrowingPractice() {
  return (
    <div className="min-h-screen bg-brand-background">
      <Navbar />

      <main className="pt-32">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="/images/hero-bg-2.jpg"
              alt="Agriculture field"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-navy/80" />
          </div>

          <div className="relative z-10 max-w-container mx-auto px-4 lg:px-6 py-20 md:py-28">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-3xl"
            >
              <motion.div
                variants={fadeUpVariant}
                className="flex items-center gap-2 text-white/70 text-sm mb-4"
              >
                <Link to="/" className="hover:text-coral transition-colors">
                  Home
                </Link>
                <ChevronRight className="w-4 h-4" />
                <span className="text-white">Growing Practice</span>
              </motion.div>

              <motion.span
                variants={fadeUpVariant}
                className="inline-block text-xs font-bold uppercase tracking-widest text-coral mb-4"
              >
                Cultivation Methods
              </motion.span>

              <motion.h1
                variants={fadeUpVariant}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
              >
                Better practices for better harvests
              </motion.h1>

              <motion.p
                variants={fadeUpVariant}
                className="text-white/80 text-lg max-w-2xl mb-8"
              >
                Explore proven fertilization and farming methods that help growers improve
                efficiency, protect natural resources, and raise crop performance season after
                season.
              </motion.p>

              <motion.div variants={fadeUpVariant} className="flex flex-wrap gap-4">
                <Link
                  to="/crop-guide"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-coral text-white text-sm font-medium hover:bg-coral-dark transition-colors rounded"
                >
                  Browse Crop Guides
                </Link>
                <Link
                  to="/products"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-white/40 text-white text-sm font-medium hover:bg-white/10 transition-colors rounded"
                >
                  View Products
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Fertilization Methods */}
        <section className="py-20 md:py-28">
          <div className="max-w-container mx-auto px-4 lg:px-6">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-12"
            >
              <motion.span
                variants={fadeUpVariant}
                className="text-xs font-bold uppercase tracking-widest text-coral mb-3 block"
              >
                Fertilization Methods
              </motion.span>
              <motion.h2
                variants={fadeUpVariant}
                className="text-3xl md:text-4xl font-bold text-navy mb-4"
              >
                Match nutrient delivery to crop needs
              </motion.h2>
              <motion.p
                variants={fadeUpVariant}
                className="text-brand-text-secondary max-w-2xl"
              >
                Choose the right application method to maximize nutrient uptake, reduce waste, and
                support each stage of plant development.
              </motion.p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {fertilizationMethods.map((method) => (
                <MethodCard key={method.title} method={method} />
              ))}
            </motion.div>
          </div>
        </section>

        {/* Farming Methods */}
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-container mx-auto px-4 lg:px-6">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-12"
            >
              <motion.span
                variants={fadeUpVariant}
                className="text-xs font-bold uppercase tracking-widest text-coral mb-3 block"
              >
                Farming Methods
              </motion.span>
              <motion.h2
                variants={fadeUpVariant}
                className="text-3xl md:text-4xl font-bold text-navy mb-4"
              >
                Systems for every growing environment
              </motion.h2>
              <motion.p
                variants={fadeUpVariant}
                className="text-brand-text-secondary max-w-2xl"
              >
                From soilless greenhouse production to broad-acre field crops, each farming system
                benefits from a tailored nutrition strategy.
              </motion.p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {farmingMethods.map((method) => (
                <MethodCard key={method.title} method={method} />
              ))}
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingActions />
    </div>
  );
}
