import { Link } from 'react-router';
import { motion } from 'framer-motion';
import {
  Briefcase,
  ChevronRight,
  Globe,
  Lightbulb,
  MapPin,
  Users,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/sections/Footer';
import FloatingActions from '@/components/FloatingActions';
import NewsletterSection from '@/sections/NewsletterSection';
import { staggerContainer, fadeUpVariant } from '@/lib/animations';

const benefits = [
  {
    icon: Globe,
    title: 'Global Impact',
    description:
      'Help farmers around the world grow more with less, shaping sustainable agriculture for future generations.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation First',
    description:
      'Work with cutting-edge crop nutrition technologies, digital agronomy tools, and R&D-driven solutions.',
  },
  {
    icon: Users,
    title: 'People Focused',
    description:
      'Join a collaborative culture where diverse perspectives are valued and every contribution matters.',
  },
  {
    icon: Briefcase,
    title: 'Growth & Development',
    description:
      'Access continuous learning, career paths, and opportunities to expand your expertise across the business.',
  },
];

const openings = [
  {
    title: 'Regional Agronomy Manager',
    location: 'Gujarat, India',
    type: 'Full-time',
  },
  {
    title: 'R&D Formulation Scientist',
    location: 'Gujarat, India',
    type: 'Full-time',
  },
  {
    title: 'Digital Marketing Specialist',
    location: 'Remote / Hybrid',
    type: 'Full-time',
  },
  {
    title: 'Supply Chain Analyst',
    location: 'Gujarat, India',
    type: 'Full-time',
  },
];

export default function Careers() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="pt-32">
        {/* Header */}
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
                <span className="text-white">Careers</span>
              </motion.div>

              <motion.h1
                variants={fadeUpVariant}
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
              >
                Grow Your Career With Us
              </motion.h1>

              <motion.p
                variants={fadeUpVariant}
                className="text-lg text-white/80 leading-relaxed max-w-2xl"
              >
                Be part of a team that is transforming agriculture through
                precision nutrition, innovation, and a commitment to people and
                the planet.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Why Join */}
        <section className="py-16 md:py-24 bg-brand-background">
          <div className="max-w-container mx-auto px-4 lg:px-6">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center max-w-2xl mx-auto mb-12"
            >
              <motion.h2
                variants={fadeUpVariant}
                className="text-2xl md:text-3xl font-bold text-navy mb-4"
              >
                Why Work at Mike Alpha
              </motion.h2>
              <motion.p
                variants={fadeUpVariant}
                className="text-brand-text-secondary"
              >
                We believe great people drive great outcomes. Here is what you
                can expect when you join us.
              </motion.p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {benefits.map((benefit) => {
                const Icon = benefit.icon;
                return (
                  <motion.div
                    key={benefit.title}
                    variants={fadeUpVariant}
                    className="p-6 bg-white border border-brand-border rounded-xl hover:shadow-card transition-shadow"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary-light flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-navy mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-brand-text-secondary leading-relaxed">
                      {benefit.description}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-16 md:py-24">
          <div className="max-w-container mx-auto px-4 lg:px-6">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-10"
            >
              <motion.h2
                variants={fadeUpVariant}
                className="text-2xl md:text-3xl font-bold text-navy mb-4"
              >
                Open Positions
              </motion.h2>
              <motion.p variants={fadeUpVariant} className="text-brand-text-secondary">
                Explore current opportunities and find the right role for you.
              </motion.p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {openings.map((job) => (
                <motion.div
                  key={job.title}
                  variants={fadeUpVariant}
                  className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 bg-white border border-brand-border rounded-xl hover:shadow-card transition-shadow"
                >
                  <div>
                    <h3 className="text-lg font-bold text-navy mb-2">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-brand-text-secondary">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {job.location}
                      </span>
                      <span>{job.type}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => alert('Application form coming soon.')}
                    className="inline-flex items-center justify-center px-5 py-2.5 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    Apply Now
                  </button>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <NewsletterSection />
      </main>

      <Footer />
      <FloatingActions />
    </div>
  );
}
