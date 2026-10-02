import { Link } from 'react-router';
import { motion } from 'framer-motion';
import { MapPin, Phone, ChevronRight, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/sections/Footer';
import FloatingActions from '@/components/FloatingActions';
import { staggerContainer, fadeUpVariant } from '@/lib/animations';

const distributorsByState: { state: string; locations: string[] }[] = [
  {
    state: 'Kutch Region (Gujarat)',
    locations: ['Bhuj', 'Anjar'],
  },
  {
    state: 'Saurashtra Region (Gujarat)',
    locations: ['Morbi', 'Junagadh', 'Halvad', 'Dhrangadhra', 'Surendranagar'],
  },
  {
    state: 'Central Gujarat',
    locations: ['Viramgam', 'Sanand', 'Kheda', 'Nadiad', 'Anand'],
  },
  {
    state: 'South Gujarat',
    locations: ['Vadodara', 'Bharuch', 'Ankleshwar', 'Surat', 'Bardoli'],
  },
  {
    state: 'North Gujarat',
    locations: ['Sabarkantha', 'Banaskantha'],
  },
  {
    state: 'Madhya Pradesh',
    locations: ['Indore', 'Bhopal', 'Ujjain', 'Jabalpur', 'Gwalior'],
  },
  {
    state: 'Chhattisgarh',
    locations: ['Raipur', 'Bilaspur', 'Durg-Bhilai', 'Rajnandgaon'],
  },
];

const regionColors: Record<string, string> = {
  'Kutch Region (Gujarat)': 'from-[#1B4332] to-[#40916C]',
  'Saurashtra Region (Gujarat)': 'from-[#1B2A4A] to-[#2D4A8A]',
  'Central Gujarat': 'from-[#7B2D00] to-[#E85A3C]',
  'South Gujarat': 'from-[#3D1A78] to-[#7B5EA7]',
  'North Gujarat': 'from-[#005F73] to-[#0A9396]',
  'Madhya Pradesh': 'from-[#6D4C41] to-[#A1887F]',
  'Chhattisgarh': 'from-[#2E7D32] to-[#66BB6A]',
};

export default function Distributors() {
  const totalLocations = distributorsByState.reduce(
    (acc, s) => acc + s.locations.length,
    0
  );

  return (
    <div className="min-h-screen bg-brand-background">
      <Navbar />

      <main className="pt-32">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="/images/hero-bg-2.jpg"
              alt="Distributor network"
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
                <span className="text-white">Distributors</span>
              </motion.div>

              <motion.span
                variants={fadeUpVariant}
                className="inline-block text-xs font-bold uppercase tracking-widest text-coral mb-4"
              >
                Our Network
              </motion.span>

              <motion.h1
                variants={fadeUpVariant}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
              >
                Find a Mike Alpha distributor near you
              </motion.h1>

              <motion.p
                variants={fadeUpVariant}
                className="text-white/80 text-lg max-w-2xl mb-8"
              >
                With {totalLocations} distributor locations across Gujarat, Madhya Pradesh, and Chhattisgarh,
                premium Mike Alpha crop nutrition is always within reach for progressive Indian farmers.
              </motion.p>

              <motion.div variants={fadeUpVariant} className="flex flex-wrap gap-4">
                <a
                  href="#locations"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-coral text-white text-sm font-medium hover:bg-coral-dark transition-colors rounded"
                >
                  View All Locations
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-white/40 text-white text-sm font-medium hover:bg-white/10 transition-colors rounded"
                >
                  Become a Distributor
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Stats Banner */}
        <section className="bg-white border-b border-brand-border">
          <div className="max-w-container mx-auto px-4 lg:px-6 py-10">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
            >
              {[
                { value: `${totalLocations}+`, label: 'Distributor Hubs' },
                { value: '3', label: 'States (GJ, MP, CG)' },
                { value: '7', label: 'Regional Zones' },
                { value: '100%', label: 'Genuine Products' },
              ].map((stat) => (
                <motion.div key={stat.label} variants={fadeUpVariant}>
                  <div className="text-3xl md:text-4xl font-bold text-navy mb-1">
                    {stat.value}
                  </div>
                  <p className="text-sm text-brand-text-secondary uppercase tracking-wider">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Locations Grid */}
        <section id="locations" className="py-20 md:py-28">
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
                Distributor Network
              </motion.span>
              <motion.h2
                variants={fadeUpVariant}
                className="text-3xl md:text-4xl font-bold text-navy mb-4"
              >
                Locations across India
              </motion.h2>
              <motion.p
                variants={fadeUpVariant}
                className="text-brand-text-secondary max-w-2xl"
              >
                Our growing distributor network spans key agricultural zones across Gujarat, Madhya Pradesh, and Chhattisgarh to ensure Mike Alpha
                products are accessible to every farmer.
              </motion.p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-10"
            >
              {distributorsByState.map((region) => (
                <motion.div key={region.state} variants={fadeUpVariant}>
                  {/* Region Header */}
                  <div className="flex items-center gap-3 mb-5">
                    <div
                      className={`w-1.5 h-6 rounded-full bg-gradient-to-b ${regionColors[region.state]}`}
                    />
                    <h3 className="text-lg font-bold text-navy uppercase tracking-wider">
                      {region.state}
                    </h3>
                    <span className="text-xs font-medium text-brand-text-secondary bg-brand-background border border-brand-border px-2 py-0.5 rounded-full">
                      {region.locations.length} location
                      {region.locations.length > 1 ? 's' : ''}
                    </span>
                  </div>

                  {/* Location Cards */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                    {region.locations.map((location) => (
                      <Link
                        key={location}
                        to="/contact"
                        className="group bg-white border border-brand-border rounded-lg p-4 flex flex-col items-center justify-center text-center gap-2 hover:border-coral hover:shadow-card transition-all duration-200 hover:-translate-y-0.5"
                      >
                        <div
                          className={`w-10 h-10 rounded-full bg-gradient-to-br ${regionColors[region.state]} flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}
                        >
                          <MapPin className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-sm font-semibold text-navy leading-tight">
                          {location}
                        </span>
                        <span className="text-xs text-coral font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                          Contact →
                        </span>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-white border-t border-brand-border">
          <div className="max-w-container mx-auto px-4 lg:px-6">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-navy rounded-lg p-10 md:p-14 flex flex-col md:flex-row md:items-center md:justify-between gap-8"
            >
              <motion.div variants={fadeUpVariant}>
                <div className="flex items-center gap-2 mb-3">
                  <Phone className="w-5 h-5 text-coral" />
                  <span className="text-xs font-bold uppercase tracking-widest text-coral">
                    Get in Touch
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  Interested in becoming a distributor?
                </h3>
                <p className="text-white/70 max-w-lg">
                  Join the Mike Alpha distributor network and bring world-class precision nutrition
                  to farmers in your region.
                </p>
              </motion.div>
              <motion.div variants={fadeUpVariant} className="shrink-0">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-7 py-4 bg-coral text-white font-semibold hover:bg-coral-dark transition-colors rounded text-sm"
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
