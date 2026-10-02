import { useState } from 'react';
import { Link } from 'react-router';
import { motion } from 'framer-motion';
import {
  Sun,
  Zap,
  ChevronRight,
  Send,
  CheckCircle2,
  Layers,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/sections/Footer';
import FloatingActions from '@/components/FloatingActions';
import { staggerContainer, fadeUpVariant } from '@/lib/animations';

export default function Solar() {
  const [inquirySent, setInquirySent] = useState(false);
  const [inquiryData, setInquiryData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    projectLocation: '',
    saltQuantity: '',
    message: '',
  });

  const handleInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    setInquirySent(true);
  };

  return (
    <div className="min-h-screen bg-brand-background text-brand-text-primary">
      <Navbar />

      <main className="pt-28 md:pt-32">
        {/* Hero Section */}
        <section className="relative bg-navy text-white py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="/images/hero-bg-1.jpg"
              alt="Concentrated Solar Power and Molten Salts"
              className="w-full h-full object-cover opacity-25"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/95 to-amber-900/30" />
          </div>

          <div className="relative z-10 max-w-container mx-auto px-4 lg:px-6">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="max-w-3xl"
            >
              <motion.div
                variants={fadeUpVariant}
                className="flex items-center gap-2 text-white/70 text-sm mb-4"
              >
                <Link to="/" className="hover:text-primary transition-colors">
                  Home
                </Link>
                <ChevronRight className="w-4 h-4" />
                <Link to="/products" className="hover:text-primary transition-colors">
                  Industrial
                </Link>
                <ChevronRight className="w-4 h-4" />
                <span className="text-white">Solar Thermal Energy</span>
              </motion.div>

              <motion.span
                variants={fadeUpVariant}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/30 mb-4"
              >
                <Sun className="w-3.5 h-3.5" />
                Concentrated Solar Power (CSP) & Thermal Energy Storage — India
              </motion.span>

              <motion.h1
                variants={fadeUpVariant}
                className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4"
              >
                Solar Salts for 24/7 Green Power
              </motion.h1>

              <motion.p
                variants={fadeUpVariant}
                className="text-white/80 text-base md:text-xl leading-relaxed mb-6"
              >
                High-purity potassium nitrate (KNO₃) engineered for Thermal Energy Storage (TES) in Concentrated Solar Power (CSP) plants and industrial decarbonization across India.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Overview Stats */}
        <section className="bg-white border-b border-gray-200 py-8 shadow-sm">
          <div className="max-w-container mx-auto px-4 lg:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <p className="text-3xl font-extrabold text-primary">99.8%</p>
                <p className="text-xs text-gray-600 mt-1 uppercase tracking-wider font-medium">Minimum Purity Grade</p>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-navy">&lt; 50 ppm</p>
                <p className="text-xs text-gray-600 mt-1 uppercase tracking-wider font-medium">Ultra-Low Chloride (Corrosion Free)</p>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-amber-600">565°C</p>
                <p className="text-xs text-gray-600 mt-1 uppercase tracking-wider font-medium">Thermal Stability Limit</p>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-emerald-700">12+ Hours</p>
                <p className="text-xs text-gray-600 mt-1 uppercase tracking-wider font-medium">Overnight Power Generation</p>
              </div>
            </div>
          </div>
        </section>

        {/* Technology & Value Prop */}
        <section className="py-16 md:py-20">
          <div className="max-w-container mx-auto px-4 lg:px-6 space-y-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-primary mb-2 block">
                  How It Works
                </span>
                <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                  Storing Sun's Energy in Molten Salts for Round-the-Clock Clean Electricity
                </h2>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-4">
                  In Concentrated Solar Power (CSP) facilities, parabolic troughs or solar towers focus sunlight onto a central receiver. Solar salts—a binary eutectic mixture of <strong>60% Sodium Nitrate (NaNO₃) and 40% Potassium Nitrate (KNO₃)</strong>—are heated to over 565°C and stored in massive insulated tanks.
                </p>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-6">
                  During peak evening hours or when sun irradiation drops, the molten salt is pumped through heat exchangers to generate high-pressure steam, driving conventional turbine generators. This turns intermittent solar power into reliable, dispatchable baseload electricity.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-sm text-gray-800 font-medium">Guaranteed ultra-low impurity levels to eliminate boiler tube stress corrosion</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-sm text-gray-800 font-medium">High heat capacity and exceptional thermal cycle endurance over 30+ year plant lifespans</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-sm text-gray-800 font-medium">Non-toxic, eco-friendly inorganic salt mixture</span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-md">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-amber-600" />
                  Key Solar Projects & Applications in India
                </h3>
                <div className="space-y-4 text-sm text-gray-700">
                  <div className="p-4 rounded-xl bg-gray-50 border border-gray-200">
                    <h4 className="font-semibold text-gray-900 mb-1">Rajasthan & Thar Desert Solar Corridors</h4>
                    <p className="text-xs text-gray-600">Solar thermal installations in Jodhpur, Bikaner, and Jaisalmer regions where direct normal irradiance (DNI) exceeds 2,000 kWh/m²/year.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-gray-50 border border-gray-200">
                    <h4 className="font-semibold text-gray-900 mb-1">Gujarat Solar Parks & Industrial Hubs</h4>
                    <p className="text-xs text-gray-600">High-temperature industrial process heat (chemical processing, textiles, pharmaceuticals) replacing fossil-fuel boilers with zero-emission molten salt thermal batteries.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-gray-50 border border-gray-200">
                    <h4 className="font-semibold text-gray-900 mb-1">SECI & NTPC 24/7 Renewable Hybrid Projects</h4>
                    <p className="text-xs text-gray-600">Supplying thermal storage salt components to meet India's national mandate for firm, dispatchable renewable energy.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Specifications Table */}
            <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Layers className="w-5 h-5 text-primary" />
                Technical Specifications — Mike Alpha Solar Grade KNO₃
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm text-gray-700">
                  <thead className="bg-gray-50 text-xs uppercase text-gray-500 border-b">
                    <tr>
                      <th className="py-3 px-4">Parameter</th>
                      <th className="py-3 px-4">Standard Value</th>
                      <th className="py-3 px-4">Analytical Method</th>
                      <th className="py-3 px-4">Impact on CSP Operations</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr>
                      <td className="py-3 px-4 font-semibold text-gray-900">KNO₃ Purity</td>
                      <td className="py-3 px-4 text-primary font-bold">≥ 99.8%</td>
                      <td className="py-3 px-4">Titrimetric</td>
                      <td className="py-3 px-4 text-xs">Maximizes thermal heat capacity and phase stability</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold text-gray-900">Chloride (Cl⁻)</td>
                      <td className="py-3 px-4 text-emerald-700 font-bold">&lt; 50 ppm</td>
                      <td className="py-3 px-4">Potentiometric</td>
                      <td className="py-3 px-4 text-xs">Prevents stress corrosion cracking in stainless steel piping</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold text-gray-900">Sulfate (SO₄²⁻)</td>
                      <td className="py-3 px-4">&lt; 100 ppm</td>
                      <td className="py-3 px-4">Turbidimetric</td>
                      <td className="py-3 px-4 text-xs">Eliminates scale formation in high-pressure heat exchangers</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold text-gray-900">Moisture Content</td>
                      <td className="py-3 px-4">&lt; 0.1%</td>
                      <td className="py-3 px-4">Gravimetric</td>
                      <td className="py-3 px-4 text-xs">Guarantees easy melting and prevents vapor buildup</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold text-gray-900">Insoluble Matter</td>
                      <td className="py-3 px-4">&lt; 100 ppm</td>
                      <td className="py-3 px-4">Filtration</td>
                      <td className="py-3 px-4 text-xs">Protects pumps, valves, and flow meters from abrasive wear</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Industrial Inquiry Form */}
            <div className="bg-navy text-white rounded-3xl p-8 md:p-12 shadow-xl">
              <div className="max-w-3xl mx-auto">
                <div className="text-center mb-8">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">
                    Inquire for Industrial Solar Salt Supply in India
                  </h3>
                  <p className="text-white/70 text-sm">
                    Connect with our Industrial Chemicals & Thermal Storage engineering team for technical datasheets, bulk packaging options (1-ton big bags or bulk containers), and commercial quotations.
                  </p>
                </div>

                {inquirySent ? (
                  <div className="text-center py-8 space-y-3 bg-white/10 rounded-2xl p-6">
                    <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                    <h4 className="text-xl font-bold">Inquiry Successfully Received</h4>
                    <p className="text-sm text-white/80">
                      Our Head of Industrial Sales will contact you within 24 business hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleInquiry} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs uppercase tracking-wider text-white/70 mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={inquiryData.name}
                          onChange={(e) => setInquiryData({ ...inquiryData, name: e.target.value })}
                          placeholder="e.g. Alok Singhania"
                          className="w-full h-10 px-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:border-emerald-400"
                        />
                      </div>
                      <div>
                        <label className="block text-xs uppercase tracking-wider text-white/70 mb-1">
                          Company / EPC Developer *
                        </label>
                        <input
                          type="text"
                          required
                          value={inquiryData.company}
                          onChange={(e) => setInquiryData({ ...inquiryData, company: e.target.value })}
                          placeholder="Company Name"
                          className="w-full h-10 px-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:border-emerald-400"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs uppercase tracking-wider text-white/70 mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={inquiryData.email}
                          onChange={(e) => setInquiryData({ ...inquiryData, email: e.target.value })}
                          placeholder="name@company.com"
                          className="w-full h-10 px-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:border-emerald-400"
                        />
                      </div>
                      <div>
                        <label className="block text-xs uppercase tracking-wider text-white/70 mb-1">
                          Phone / Mobile *
                        </label>
                        <input
                          type="tel"
                          required
                          value={inquiryData.phone}
                          onChange={(e) => setInquiryData({ ...inquiryData, phone: e.target.value })}
                          placeholder="+91 98765 43210"
                          className="w-full h-10 px-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:border-emerald-400"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs uppercase tracking-wider text-white/70 mb-1">
                          Project Location in India
                        </label>
                        <input
                          type="text"
                          value={inquiryData.projectLocation}
                          onChange={(e) => setInquiryData({ ...inquiryData, projectLocation: e.target.value })}
                          placeholder="e.g. Bhadla, Rajasthan / Khavda, Gujarat"
                          className="w-full h-10 px-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:border-emerald-400"
                        />
                      </div>
                      <div>
                        <label className="block text-xs uppercase tracking-wider text-white/70 mb-1">
                          Estimated Volume Required
                        </label>
                        <input
                          type="text"
                          value={inquiryData.saltQuantity}
                          onChange={(e) => setInquiryData({ ...inquiryData, saltQuantity: e.target.value })}
                          placeholder="e.g. 500 Metric Tons"
                          className="w-full h-10 px-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:border-emerald-400"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-white/70 mb-1">
                        Specific Technical Requirements / Message
                      </label>
                      <textarea
                        rows={3}
                        value={inquiryData.message}
                        onChange={(e) => setInquiryData({ ...inquiryData, message: e.target.value })}
                        placeholder="Project timelines, temperature ranges, packaging preferences..."
                        className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:border-emerald-400"
                      />
                    </div>

                    <div className="text-center pt-2">
                      <button
                        type="submit"
                        className="px-8 h-12 bg-primary text-white font-semibold text-sm rounded-full hover:bg-primary-dark transition-colors inline-flex items-center gap-2 shadow-lg"
                      >
                        <Send className="w-4 h-4" />
                        Submit Solar Salts Inquiry
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingActions />
    </div>
  );
}
