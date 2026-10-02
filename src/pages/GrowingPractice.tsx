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
    id: 'nutrigation',
    detailUrl: '/nutrigation-fertigation',
    icon: Droplets,
    title: 'Nutrigation™',
    description:
      'Deliver nutrients directly to the root zone through irrigation water. This precision method matches crop uptake, reduces leaching, and improves fertilizer use efficiency across every growth stage.',
    benefits: ['Precise nutrient timing', 'Higher uptake efficiency', 'Reduced labor and waste'],
    productLink: {
      text: 'Solubles',
      url: '/products?category=Straight+Fertilizers',
    },
  },
  {
    id: 'center-pivot',
    detailUrl: '/articles/intro-center-pivot',
    icon: CloudRain,
    title: 'Center Pivot',
    description:
      'Combine mechanized irrigation with fertigation for large-scale field crops. Uniform water and nutrient distribution supports consistent yields across broad acreages.',
    benefits: ['Scalable for large farms', 'Uniform application', 'Lower per-acre operating cost'],
    productLink: {
      text: 'Field Crops',
      url: '/products?category=Straight+Fertilizers',
    },
  },
  {
    id: 'foliar-fertilizer',
    detailUrl: '/articles/foliar-fertilizer',
    icon: Sprout,
    title: 'Foliar Fertilizer',
    description:
      'Apply nutrients through the leaf surface for rapid correction of deficiencies. Foliar feeding is especially effective during critical reproductive stages when root uptake may be limited.',
    benefits: ['Fast deficiency correction', 'Targeted micronutrients', 'Supports peak demand periods'],
    productLink: {
      text: 'Foliar Range',
      url: '/products?category=Foliar+Solutions',
    },
  },
  {
    id: 'soil-application',
    detailUrl: '/soil-application',
    icon: Waves,
    title: 'Soil Application',
    description:
      'Broadcast or band granular fertilizers into the soil to build baseline fertility. This traditional approach remains the foundation of many crop nutrition programs.',
    benefits: ['Builds soil reserves', 'Simple to apply', 'Cost-effective for macronutrients'],
    productLink: {
      text: 'Soil NPKs',
      url: '/products?category=NPK+Fertilizers',
    },
  },
  {
    id: 'crf-application',
    detailUrl: '/crf-application',
    icon: RotateCcw,
    title: 'CRF Application',
    description:
      'Controlled-release fertilizers supply nutrients gradually based on soil temperature and moisture. CRF reduces application frequency and minimizes nutrient losses.',
    benefits: ['Long-lasting nutrition', 'Reduced application passes', 'Lower environmental impact'],
    productLink: {
      text: 'CRF Products',
      url: '/products?category=Controlled+Release+Fertilizers',
    },
  },
];

const farmingMethods = [
  {
    id: 'hydroponic',
    detailUrl: '/hydroponic-fertilizers',
    icon: Warehouse,
    title: 'Hydroponic',
    description:
      'Grow crops without soil using nutrient-rich water solutions. Hydroponics enables year-round production, faster growth, and precise control over plant nutrition.',
    benefits: ['Water-efficient', 'Year-round production', 'No soil-borne diseases'],
    productLink: {
      text: 'Hydro Nutrients',
      url: '/products?category=Straight+Fertilizers',
    },
  },
  {
    id: 'fruit-trees',
    detailUrl: '/fruit-trees-fertilizers',
    icon: TreePine,
    title: 'Fruit Trees',
    description:
      'Long-term orchard management focuses on balanced canopy development, fruit load, and seasonal nutrient programs to maintain productivity over many years.',
    benefits: ['Long-term productivity', 'Seasonal nutrition plans', 'Improved fruit quality'],
    productLink: {
      text: 'Orchard Range',
      url: '/products?category=Specialty+Fertilizers',
    },
  },
  {
    id: 'greenhouses',
    detailUrl: '/greenhouses',
    icon: Leaf,
    title: 'Greenhouses',
    description:
      'Protected cultivation creates controlled environments for high-value crops. Integrated nutrition and irrigation strategies maximize yield per square meter.',
    benefits: ['Climate control', 'Higher yields', 'Protected from pests'],
    productLink: {
      text: 'Greenhouse Range',
      url: '/products?category=Straight+Fertilizers',
    },
  },
  {
    id: 'nurseries',
    detailUrl: '/nurseries',
    icon: Sprout,
    title: 'Nurseries',
    description:
      'Young plants need gentle, consistent nutrition to develop strong root systems. Nursery programs focus on micronutrient balance and controlled release.',
    benefits: ['Strong root establishment', 'Uniform plantlets', 'Reduced transplant shock'],
    productLink: {
      text: 'Nursery CRF',
      url: '/products?category=Controlled+Release+Fertilizers',
    },
  },
  {
    id: 'center-pivot-farming',
    detailUrl: '/center-pivot',
    icon: CloudRain,
    title: 'Center Pivot',
    description:
      'Ideal for cereals, pulses, and row crops, center pivot systems support mechanized, uniform irrigation and fertigation across large fields.',
    benefits: ['Covers large areas', 'Automation-ready', 'Consistent crop stand'],
    productLink: {
      text: 'Broadacre Solubles',
      url: '/products?category=Straight+Fertilizers',
    },
  },
  {
    id: 'open-field',
    detailUrl: '/open-field',
    icon: Waves,
    title: 'Open Field',
    description:
      'Traditional open-field farming relies on rainfall or surface irrigation combined with soil-applied and foliar fertilizers to feed field-scale crops.',
    benefits: ['Lower infrastructure cost', 'Flexible crop choices', 'Proven practices'],
    productLink: {
      text: 'Open Field NPK',
      url: '/products?category=NPK+Fertilizers',
    },
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
      id={method.id}
      variants={fadeUpVariant}
      className="scroll-mt-36 bg-white border border-brand-border rounded-xl p-6 md:p-8 hover:shadow-card hover:border-primary/40 transition-all h-full flex flex-col"
    >
      <div className="w-12 h-12 bg-primary-light rounded-lg flex items-center justify-center mb-5">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <h3 className="text-xl font-bold text-navy mb-3">{method.title}</h3>
      <p className="text-brand-text-secondary leading-relaxed mb-5 flex-1 text-sm md:text-base">
        {method.description}
      </p>
      <ul className="space-y-2 mb-6">
        {method.benefits.map((benefit) => (
          <li key={benefit} className="flex items-start gap-2 text-sm text-brand-text-secondary">
            <span className="w-1.5 h-1.5 rounded-full bg-coral mt-2 flex-shrink-0" />
            {benefit}
          </li>
        ))}
      </ul>
      <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between gap-2">
        <Link
          to={method.detailUrl}
          className="text-xs font-bold text-navy hover:text-primary transition-colors inline-flex items-center gap-1 group"
        >
          Detailed Guide <span className="group-hover:translate-x-1 transition-transform">→</span>
        </Link>
        {method.productLink && (
          <Link
            to={method.productLink.url}
            className="text-xs font-semibold text-primary hover:text-primary-dark inline-flex items-center gap-1"
          >
            {method.productLink.text} →
          </Link>
        )}
      </div>
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
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Fertilization Methods */}
        <section id="fertilization-methods" className="py-20 md:py-28">
          <div className="max-w-container mx-auto px-4 lg:px-6">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
            >
              <div className="max-w-2xl">
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
                  className="text-brand-text-secondary"
                >
                  Choose the right application method to maximize nutrient uptake, reduce waste, and
                  support each stage of plant development across Indian soils.
                </motion.p>
              </div>
              <motion.div variants={fadeUpVariant}>
                <Link
                  to="/articles/fertilization-methods"
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-emerald-50 text-primary font-bold text-xs rounded-lg hover:bg-primary hover:text-white transition-all border border-emerald-200 shrink-0 shadow-sm"
                >
                  Full Fertilization Methods Guide →
                </Link>
              </motion.div>
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
        <section id="farming-methods" className="py-20 md:py-28 bg-white">
          <div className="max-w-container mx-auto px-4 lg:px-6">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
            >
              <div className="max-w-2xl">
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
                  className="text-brand-text-secondary"
                >
                  From soilless greenhouse production to broad-acre field crops, each farming system
                  benefits from a tailored nutrition strategy in India.
                </motion.p>
              </div>
              <motion.div variants={fadeUpVariant}>
                <Link
                  to="/articles/farming-methods"
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-emerald-50 text-primary font-bold text-xs rounded-lg hover:bg-primary hover:text-white transition-all border border-emerald-200 shrink-0 shadow-sm"
                >
                  Full Farming Systems Guide →
                </Link>
              </motion.div>
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
