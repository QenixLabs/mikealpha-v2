import { Link } from 'react-router';
import { motion } from 'framer-motion';
import {
  Calculator,
  Beaker,
  Leaf,
  Smartphone,
  Tablet,
  Cloud,
  ChevronRight,
  ArrowRight,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/sections/Footer';
import FloatingActions from '@/components/FloatingActions';
import { staggerContainer, fadeUpVariant } from '@/lib/animations';

const webApps = [
  {
    icon: Beaker,
    title: 'MyMultifeed™',
    description:
      'Design balanced fertigation recipes tailored to your water analysis, crop stage, and yield target. The calculator recommends compatible fertilizers and rates.',
    tags: ['Recipe design', 'Water analysis', 'Fertigation'],
  },
  {
    icon: Calculator,
    title: 'Nitric Acid Calculator',
    description:
      'Calculate safe nitric acid dosing for pH adjustment and nitrogen supply in hydroponic and fertigation systems.',
    tags: ['pH adjustment', 'Safety', 'Dosing'],
  },
  {
    icon: Cloud,
    title: 'NutriNet™',
    description:
      'Plan complete crop nutrition programs online. Compare nutrient demand against available products and generate seasonal schedules.',
    tags: ['Crop planning', 'Seasonal schedule', 'Nutrition'],
  },
  {
    icon: Leaf,
    title: 'MultiMatch™',
    description:
      'Match the right fertilizer blend to your crop, soil, and irrigation system. Simplifies product selection for advisors and growers.',
    tags: ['Product selection', 'Compatibility', 'Advisory'],
  },
  {
    icon: Calculator,
    title: 'Conversion Calculator',
    description:
      'Convert between nutrient units, fertilizer weights, and application rates. A practical tool for daily agronomic calculations.',
    tags: ['Unit conversion', 'Rates', 'Quick tool'],
  },
  {
    icon: Beaker,
    title: 'Deficiency Pro',
    description:
      'Diagnose nutrient deficiency symptoms by crop and growth stage. Get corrective fertilizer recommendations based on visual cues.',
    tags: ['Diagnosis', 'Visual symptoms', 'Corrective action'],
  },
];

const mobileApps = [
  {
    icon: Smartphone,
    title: 'FertiMatch™',
    description:
      'Mobile fertilizer matching for field use. Scan a crop or symptom and receive product and rate recommendations on the go.',
    tags: ['Mobile', 'Field tool', 'Recommendations'],
  },
  {
    icon: Leaf,
    title: 'FoliMatch™',
    description:
      'Plan foliar spray programs from your phone. Select crop, target nutrient, and growth stage to generate spray recipes.',
    tags: ['Foliar sprays', 'Mobile', 'Recipe builder'],
  },
  {
    icon: Tablet,
    title: 'Croptune',
    description:
      'Leaf-based nitrogen monitoring supported by laboratory analysis. Track crop nitrogen status and refine top-dress decisions.',
    tags: ['Nitrogen monitoring', 'Lab analysis', 'Precision'],
  },
];

function AppCard({ app }: { app: (typeof webApps)[0] }) {
  const Icon = app.icon;
  return (
    <motion.div
      variants={fadeUpVariant}
      className="bg-white border border-brand-border rounded-lg p-6 md:p-8 hover:shadow-card transition-shadow h-full flex flex-col"
    >
      <div className="w-12 h-12 bg-primary-light rounded-lg flex items-center justify-center mb-5">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <h3 className="text-xl font-bold text-navy mb-3">{app.title}</h3>
      <p className="text-brand-text-secondary leading-relaxed mb-5 flex-1">{app.description}</p>
      <div className="flex flex-wrap gap-2">
        {app.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs font-medium bg-brand-background text-brand-text-secondary px-2.5 py-1 rounded"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function SmartFarming() {
  return (
    <div className="min-h-screen bg-brand-background">
      <Navbar />

      <main className="pt-32">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="/images/hero-bg-2.jpg"
              alt="Agriculture technology"
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
                <span className="text-white">Smart Farming</span>
              </motion.div>

              <motion.span
                variants={fadeUpVariant}
                className="inline-block text-xs font-bold uppercase tracking-widest text-coral mb-4"
              >
                Digital Agriculture
              </motion.span>

              <motion.h1
                variants={fadeUpVariant}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
              >
                Precision tools for modern farms
              </motion.h1>

              <motion.p
                variants={fadeUpVariant}
                className="text-white/80 text-lg max-w-2xl mb-8"
              >
                Use calculators, planners, and mobile apps to make informed nutrition decisions,
                diagnose deficiencies, and fine-tune every application.
              </motion.p>

              <motion.div variants={fadeUpVariant} className="flex flex-wrap gap-4">
                <a
                  href="#web-apps"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-coral text-white text-sm font-medium hover:bg-coral-dark transition-colors rounded"
                >
                  Explore Web Apps
                </a>
                <a
                  href="#mobile-apps"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-white/40 text-white text-sm font-medium hover:bg-white/10 transition-colors rounded"
                >
                  Mobile Apps
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Web Apps */}
        <section id="web-apps" className="py-20 md:py-28">
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
                Web Apps
              </motion.span>
              <motion.h2
                variants={fadeUpVariant}
                className="text-3xl md:text-4xl font-bold text-navy mb-4"
              >
                Plan, calculate, and optimize from your browser
              </motion.h2>
              <motion.p
                variants={fadeUpVariant}
                className="text-brand-text-secondary max-w-2xl"
              >
                Browser-based agronomic tools help advisors and growers design recipes, convert
                units, and diagnose crop issues without installing software.
              </motion.p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {webApps.map((app) => (
                <AppCard key={app.title} app={app} />
              ))}
            </motion.div>
          </div>
        </section>

        {/* Mobile Apps */}
        <section id="mobile-apps" className="py-20 md:py-28 bg-white">
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
                Mobile Apps
              </motion.span>
              <motion.h2
                variants={fadeUpVariant}
                className="text-3xl md:text-4xl font-bold text-navy mb-4"
              >
                Agronomy in your pocket
              </motion.h2>
              <motion.p
                variants={fadeUpVariant}
                className="text-brand-text-secondary max-w-2xl"
              >
                Take fertilizer recommendations, spray recipes, and nitrogen monitoring into the
                field with mobile-first tools designed for quick decisions on the go.
              </motion.p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {mobileApps.map((app) => (
                <AppCard key={app.title} app={app} />
              ))}
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-14 bg-brand-background border border-brand-border rounded-lg p-8 md:p-10"
            >
              <motion.div
                variants={fadeUpVariant}
                className="flex flex-col md:flex-row md:items-center md:justify-between gap-6"
              >
                <div>
                  <h3 className="text-2xl font-bold text-navy mb-2">Need help choosing the right tool?</h3>
                  <p className="text-brand-text-secondary">
                    Our agronomy team can recommend the best digital tools for your crops and
                    farming system.
                  </p>
                </div>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-coral text-white text-sm font-medium hover:bg-coral-dark transition-colors rounded shrink-0"
                >
                  Contact Us <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingActions />
    </div>
  );
}
