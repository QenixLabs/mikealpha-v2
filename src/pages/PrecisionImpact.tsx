import { Link } from 'react-router';
import { motion } from 'framer-motion';
import {
  FileText,
  Target,
  Leaf,
  Users,
  ShieldCheck,
  ClipboardList,
  HardHat,
  Recycle,
  Globe,
  ChevronRight,
  ArrowRight,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/sections/Footer';
import FloatingActions from '@/components/FloatingActions';
import { staggerContainer, fadeUpVariant } from '@/lib/animations';

const focusAreas = [
  {
    icon: FileText,
    title: 'ESG Report 2022-2023',
    description:
      'Our latest ESG report details progress on environmental targets, social programs, and governance standards across the Mike Alpha Group.',
    tags: ['Transparency', 'ESG', 'Reporting'],
  },
  {
    icon: Target,
    title: 'Strategy and 2030 Goals',
    description:
      'Precision IMPACT frames every sustainability target around measurable outcomes: renewable energy, emissions reduction, and sustainable agriculture.',
    tags: ['2030 goals', 'Strategy', 'Metrics'],
  },
  {
    icon: Leaf,
    title: 'Environment',
    description:
      'We reduce water use, cut waste, and lower emissions in manufacturing and logistics while helping growers improve nutrient use efficiency.',
    tags: ['Climate', 'Water', 'Efficiency'],
  },
  {
    icon: Users,
    title: 'Social',
    description:
      'From farmer education to rural health initiatives, our social programs invest in the communities where we operate and source.',
    tags: ['Communities', 'Education', 'Health'],
  },
  {
    icon: ShieldCheck,
    title: 'Governance',
    description:
      'Strong governance, ethical business practices, and transparent reporting guide decisions at every level of the organization.',
    tags: ['Ethics', 'Compliance', 'Board'],
  },
  {
    icon: ClipboardList,
    title: 'Supplier Code of Conduct',
    description:
      'We expect suppliers to meet high standards for labor practices, environmental care, and business integrity throughout the value chain.',
    tags: ['Suppliers', 'Standards', 'Value chain'],
  },
  {
    icon: HardHat,
    title: 'Safety & Occupational Safety',
    description:
      'Protecting employees, contractors, and partners is non-negotiable. Safety training, audits, and protocols are embedded in daily operations.',
    tags: ['Workplace safety', 'Training', 'Audits'],
  },
  {
    icon: Recycle,
    title: 'Sustainability',
    description:
      'Sustainable product design, circular packaging pilots, and regenerative agriculture partnerships reduce long-term environmental impact.',
    tags: ['Circular economy', 'Packaging', 'Regenerative'],
  },
  {
    icon: Globe,
    title: 'We Support the UN Global Compact',
    description:
      'Mike Alpha is committed to the Ten Principles of the UN Global Compact on human rights, labor, environment, and anti-corruption.',
    tags: ['UNGC', 'Global Compact', 'Principles'],
  },
];

const goals = [
  {
    value: '50',
    suffix: '%',
    label: 'Renewable Energy Sources',
    description: 'Transition to renewable energy across Mike Alpha operations by 2030.',
  },
  {
    value: '20',
    suffix: '%',
    label: 'GHG Emissions Reduction',
    description: 'Cut greenhouse gas emissions through precision manufacturing and logistics.',
  },
  {
    value: '10',
    suffix: 'M ton',
    label: 'Sustainable Agriculture',
    description: 'Enable 10 million tons of sustainable agricultural output through advanced plant nutrition.',
  },
];

function FocusCard({ area }: { area: (typeof focusAreas)[0] }) {
  const Icon = area.icon;
  return (
    <motion.div
      variants={fadeUpVariant}
      className="bg-white border border-brand-border rounded-lg p-6 md:p-8 hover:shadow-card transition-shadow h-full flex flex-col"
    >
      <div className="w-12 h-12 bg-primary-light rounded-lg flex items-center justify-center mb-5">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <h3 className="text-xl font-bold text-navy mb-3">{area.title}</h3>
      <p className="text-brand-text-secondary leading-relaxed mb-5 flex-1">
        {area.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {area.tags.map((tag) => (
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

export default function PrecisionImpact() {
  return (
    <div className="min-h-screen bg-brand-background">
      <Navbar />

      <main className="pt-32">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="/images/impact-bg.jpg"
              alt="Sustainable agriculture"
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
                <span className="text-white">Precision IMPACT</span>
              </motion.div>

              <div className="inline-flex flex-col mb-6">
                <motion.span
                  variants={fadeUpVariant}
                  className="bg-accent-blue text-white text-xs font-bold px-4 py-1.5 uppercase tracking-wider w-fit"
                >
                  THIS IS
                </motion.span>
                <motion.span
                  variants={fadeUpVariant}
                  className="bg-primary text-white text-xs font-bold px-4 py-1.5 uppercase tracking-wider w-fit"
                >
                  PRECISION
                </motion.span>
                <motion.span
                  variants={fadeUpVariant}
                  className="bg-accent-purple text-white text-xs font-bold px-4 py-1.5 uppercase tracking-wider w-fit"
                >
                  IMPACT
                </motion.span>
              </div>

              <motion.h1
                variants={fadeUpVariant}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
              >
                Measurable impact for people and planet
              </motion.h1>

              <motion.p
                variants={fadeUpVariant}
                className="text-white/80 text-lg max-w-2xl mb-8"
              >
                Precision IMPACT turns sustainability commitments into clear targets, transparent
                reporting, and practical programs that benefit growers, communities, and the
                environment.
              </motion.p>

              <motion.div variants={fadeUpVariant} className="flex flex-wrap gap-4">
                <a
                  href="#focus-areas"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-coral text-white text-sm font-medium hover:bg-coral-dark transition-colors rounded"
                >
                  Explore Focus Areas
                </a>
                <a
                  href="#goals"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-white/40 text-white text-sm font-medium hover:bg-white/10 transition-colors rounded"
                >
                  View 2030 Goals
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Goals */}
        <section id="goals" className="py-20 md:py-28 bg-white">
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
                2030 Goals
              </motion.span>
              <motion.h2
                variants={fadeUpVariant}
                className="text-3xl md:text-4xl font-bold text-navy mb-4"
              >
                Targets that guide every decision
              </motion.h2>
              <motion.p
                variants={fadeUpVariant}
                className="text-brand-text-secondary max-w-2xl"
              >
                Our publicly stated goals keep us accountable and align operations with global
                climate and development priorities.
              </motion.p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {goals.map((goal) => (
                <motion.div
                  key={goal.label}
                  variants={fadeUpVariant}
                  className="text-center p-8 border border-brand-border rounded-lg bg-brand-background"
                >
                  <p className="text-5xl font-bold text-primary mb-3">
                    {goal.value}
                    <span className="text-3xl">{goal.suffix}</span>
                  </p>
                  <p className="text-sm uppercase tracking-wider text-navy mb-3">{goal.label}</p>
                  <p className="text-sm text-brand-text-secondary max-w-[280px] mx-auto">
                    {goal.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Focus Areas */}
        <section id="focus-areas" className="py-20 md:py-28">
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
                Focus Areas
              </motion.span>
              <motion.h2
                variants={fadeUpVariant}
                className="text-3xl md:text-4xl font-bold text-navy mb-4"
              >
                Where we concentrate our impact
              </motion.h2>
              <motion.p
                variants={fadeUpVariant}
                className="text-brand-text-secondary max-w-2xl"
              >
                From governance to field-level sustainability, these priorities shape how Mike Alpha
                creates long-term value responsibly.
              </motion.p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {focusAreas.map((area) => (
                <FocusCard key={area.title} area={area} />
              ))}
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-14 bg-white border border-brand-border rounded-lg p-8 md:p-10"
            >
              <motion.div
                variants={fadeUpVariant}
                className="flex flex-col md:flex-row md:items-center md:justify-between gap-6"
              >
                <div>
                  <h3 className="text-2xl font-bold text-navy mb-2">
                    Download the full ESG report
                  </h3>
                  <p className="text-brand-text-secondary">
                    Get detailed performance data, case studies, and verified sustainability metrics.
                  </p>
                </div>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-coral text-white text-sm font-medium hover:bg-coral-dark transition-colors rounded shrink-0"
                >
                  Request Report <ArrowRight className="w-4 h-4" />
                </a>
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
