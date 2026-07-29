import { Link } from 'react-router';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import {
  Target,
  Eye,
  ArrowRight,
  ChevronRight,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/sections/Footer';
import FloatingActions from '@/components/FloatingActions';
import { staggerContainer, fadeUpVariant } from '@/lib/animations';

const stats = [
  { value: 46, suffix: '+', label: 'Products' },
  { value: 10, suffix: '', label: 'Technologies' },
  { value: 4, suffix: '', label: 'Product Lines' },
  { value: 8, suffix: '', label: 'Categories' },
];

const tags = ['Fertilizers', 'Biologicals', 'Innovative'];

const timeline = [
  {
    year: '2020',
    title: 'Founded',
    description:
      'Established in Gujarat with a vision to transform Indian agriculture through science-driven nutrition.',
  },
  {
    year: '2022',
    title: 'Expanded',
    description:
      'Launched 4 product lines with 20+ specialized formulations serving farmers across the region.',
  },
  {
    year: '2024',
    title: 'Innovation',
    description:
      'Launched the Microgea biological range, with 11 FCO-compliant microbial formulations.',
  },
  {
    year: '2026',
    title: 'Leadership',
    description:
      'Reached 46+ products and 10 technologies, serving farmers nationwide with premium crop nutrition.',
  },
];

export default function About() {
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
              <motion.div variants={fadeUpVariant} className="flex items-center gap-2 text-white/70 text-sm mb-4">
                <Link to="/" className="hover:text-coral transition-colors">Home</Link>
                <ChevronRight className="w-4 h-4" />
                <span className="text-white">About Us</span>
              </motion.div>

              <motion.span
                variants={fadeUpVariant}
                className="inline-block text-xs font-bold uppercase tracking-widest text-coral mb-4"
              >
                About Company
              </motion.span>

              <motion.h1
                variants={fadeUpVariant}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
              >
                Better agriculture for a better future
              </motion.h1>

              <motion.div variants={fadeUpVariant} className="flex flex-wrap gap-2 mb-6">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-medium border border-white/30 text-white rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </motion.div>

              <motion.p
                variants={fadeUpVariant}
                className="text-xl md:text-2xl font-semibold text-white/90 mb-3"
              >
                Proven Crop Productivity
              </motion.p>

              <motion.p
                variants={fadeUpVariant}
                className="text-white/70 text-lg max-w-2xl mb-8"
              >
                Helping Indian farmers maximize yields through precision nutrition.
              </motion.p>

              <motion.p
                variants={fadeUpVariant}
                className="text-white/80 leading-relaxed max-w-2xl mb-8"
              >
                Mike Alpha Agro is an exclusive importer and manufacturer of advanced agricultural
                solutions based in Gujarat, India. We combine global nutritional technologies with
                local farming knowledge to deliver products that improve yield, quality, and
                sustainability.
              </motion.p>

              <motion.div variants={fadeUpVariant} className="flex flex-wrap gap-4">
                <Link
                  to="/products"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-coral text-white text-sm font-medium hover:bg-coral-dark transition-colors rounded"
                >
                  View Products <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-white/40 text-white text-sm font-medium hover:bg-white/10 transition-colors rounded"
                >
                  Contact Us
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Stats */}
        <section className="bg-white border-b border-brand-border">
          <div className="max-w-container mx-auto px-4 lg:px-6 py-12">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
            >
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  variants={fadeUpVariant}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold text-navy mb-2">
                    <CountUp
                      end={stat.value}
                      duration={2}
                      suffix={stat.suffix}
                      enableScrollSpy
                      scrollSpyOnce
                    />
                  </div>
                  <p className="text-sm text-brand-text-secondary uppercase tracking-wider">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 md:py-28">
          <div className="max-w-container mx-auto px-4 lg:px-6">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              <motion.div
                variants={fadeUpVariant}
                className="bg-white border border-brand-border p-8 md:p-10 rounded-lg"
              >
                <div className="w-12 h-12 bg-coral-subtle text-coral rounded-lg flex items-center justify-center mb-6">
                  <Target className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-navy mb-4">Our Mission</h2>
                <p className="text-brand-text-secondary leading-relaxed">
                  Empower Indian farmers with science-driven crop nutrition to raise productivity,
                  protect the environment, and improve livelihoods.
                </p>
              </motion.div>

              <motion.div
                variants={fadeUpVariant}
                className="bg-white border border-brand-border p-8 md:p-10 rounded-lg"
              >
                <div className="w-12 h-12 bg-coral-subtle text-coral rounded-lg flex items-center justify-center mb-6">
                  <Eye className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-navy mb-4">Our Vision</h2>
                <p className="text-brand-text-secondary leading-relaxed">
                  Become India's most trusted precision agriculture name through innovation,
                  quality, and farmer success.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Journey */}
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
                Our Journey
              </motion.span>
              <motion.h2
                variants={fadeUpVariant}
                className="text-3xl md:text-4xl font-bold text-navy"
              >
                Growing stronger every year
              </motion.h2>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative"
            >
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-brand-border -translate-x-1/2" />

              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <motion.div
                    key={item.year}
                    variants={fadeUpVariant}
                    className={`relative flex flex-col md:flex-row items-center gap-6 md:gap-12 ${
                      index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    <div className="flex-1 md:text-right">
                      <div className={`bg-brand-background border border-brand-border p-6 rounded-lg inline-block w-full md:max-w-md ${index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'}`}>
                        <span className="text-2xl font-bold text-coral block mb-2">
                          {item.year}
                        </span>
                        <h3 className="text-lg font-bold text-navy mb-2">{item.title}</h3>
                        <p className="text-brand-text-secondary text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    <div className="w-4 h-4 rounded-full bg-coral border-4 border-white shadow-card z-10 shrink-0" />

                    <div className="flex-1 hidden md:block" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingActions />
    </div>
  );
}
