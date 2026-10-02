import { useState } from 'react';
import { Link } from 'react-router';
import { motion } from 'framer-motion';
import {
  FlaskConical,
  Sparkles,
  ChevronRight,
  Layers,
  Send,
  CheckCircle2,
  FileText,
  Boxes,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/sections/Footer';
import FloatingActions from '@/components/FloatingActions';
import { staggerContainer, fadeUpVariant } from '@/lib/animations';

export default function TechnicalKno3() {
  const [inquirySent, setInquirySent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    industry: 'Specialty Glass & Touchscreens',
    gradePreference: 'High Purity Crystalline (99.8%)',
    quantity: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
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
              src="/images/hero-bg-2.jpg"
              alt="Technical Grade Potassium Nitrate"
              className="w-full h-full object-cover opacity-25"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/95 to-primary/30" />
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
                <span className="text-white">Technical KNO₃</span>
              </motion.div>

              <motion.span
                variants={fadeUpVariant}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary/20 text-emerald-300 border border-primary/30 mb-4"
              >
                <FlaskConical className="w-3.5 h-3.5" />
                High-Purity Industrial Chemistry — India
              </motion.span>

              <motion.h1
                variants={fadeUpVariant}
                className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4"
              >
                Technical Potassium Nitrate (KNO₃)
              </motion.h1>

              <motion.p
                variants={fadeUpVariant}
                className="text-white/80 text-base md:text-xl leading-relaxed mb-6"
              >
                Ultra-pure industrial-grade potassium nitrate manufactured to exacting standards for high-tech glass strengthening, metallurgy, ceramics, and specialty chemical synthesis in India.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Industry Specs Overview */}
        <section className="bg-white border-b border-gray-200 py-8 shadow-sm">
          <div className="max-w-container mx-auto px-4 lg:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <p className="text-3xl font-extrabold text-primary">≥ 99.8%</p>
                <p className="text-xs text-gray-600 mt-1 uppercase tracking-wider font-medium">Assay Purity</p>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-navy">&lt; 0.05%</p>
                <p className="text-xs text-gray-600 mt-1 uppercase tracking-wider font-medium">Insoluble Matter</p>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-amber-600">Free Flowing</p>
                <p className="text-xs text-gray-600 mt-1 uppercase tracking-wider font-medium">Anti-Caking Crystalline / Prills</p>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-emerald-700">PESO Certified</p>
                <p className="text-xs text-gray-600 mt-1 uppercase tracking-wider font-medium">Compliant Indian Packaging</p>
              </div>
            </div>
          </div>
        </section>

        {/* Industrial Applications */}
        <section className="py-16 md:py-20">
          <div className="max-w-container mx-auto px-4 lg:px-6 space-y-16">
            <div>
              <div className="text-center max-w-2xl mx-auto mb-12">
                <span className="text-xs font-bold uppercase tracking-wider text-primary mb-2 block">
                  Industrial Solutions in India
                </span>
                <h2 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight">
                  High-Precision Applications Across Indian Manufacturing
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:border-primary transition-all">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-primary flex items-center justify-center mb-4">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Chemically Strengthened Glass</h3>
                  <p className="text-xs text-gray-600 leading-relaxed mb-3">
                    Used in molten salt ion-exchange baths (at ~400°C) where larger potassium ions substitute smaller sodium ions in the glass surface layer, creating high surface compressive stress. Essential for scratch-resistant smartphone cover glasses, touchscreen panels, and architectural safety glass.
                  </p>
                  <span className="text-xs font-semibold text-primary">Ultra-low sodium & low chloride grade</span>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:border-primary transition-all">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-primary flex items-center justify-center mb-4">
                    <Layers className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Metallurgy & Heat Treatment</h3>
                  <p className="text-xs text-gray-600 leading-relaxed mb-3">
                    Key constituent of liquid heat-treating molten salt baths used for annealing, quenching, and martempering of alloy steel components, aircraft fasteners, and precision tooling. Provides uniform temperature control without decarburization.
                  </p>
                  <span className="text-xs font-semibold text-primary">Thermal stability up to 550°C</span>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:border-primary transition-all">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-primary flex items-center justify-center mb-4">
                    <Boxes className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Ceramics, Frits & Enamels</h3>
                  <p className="text-xs text-gray-600 leading-relaxed mb-3">
                    Acts as an active fluxing and oxidizing agent in ceramic glazes, glass melts, and porcelain enamels. Lowers melting temperatures, eliminates trapped gases, and enhances mechanical brilliance and gloss across Morbi tile and ceramic manufacturing clusters.
                  </p>
                  <span className="text-xs font-semibold text-primary">High chemical purity & low iron (&lt;10 ppm)</span>
                </div>
              </div>
            </div>

            {/* Technical Specifications */}
            <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <FileText className="w-5 h-5 text-primary" />
                Technical Grade Analysis Specifications
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm text-gray-700">
                  <thead className="bg-gray-50 text-xs uppercase text-gray-500 border-b">
                    <tr>
                      <th className="py-3 px-4">Chemical Constituent</th>
                      <th className="py-3 px-4">Guaranteed Specification</th>
                      <th className="py-3 px-4">Typical Batch Result</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr>
                      <td className="py-3 px-4 font-semibold text-gray-900">Potassium Nitrate (KNO₃)</td>
                      <td className="py-3 px-4 font-bold text-primary">Min. 99.8%</td>
                      <td className="py-3 px-4">99.87%</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold text-gray-900">Potassium Content (as K₂O)</td>
                      <td className="py-3 px-4">Min. 46.2%</td>
                      <td className="py-3 px-4">46.5%</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold text-gray-900">Nitrogen (as N-NO₃)</td>
                      <td className="py-3 px-4">Min. 13.7%</td>
                      <td className="py-3 px-4">13.8%</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold text-gray-900">Chloride (Cl⁻)</td>
                      <td className="py-3 px-4 text-emerald-700 font-medium">Max. 0.02% (200 ppm)</td>
                      <td className="py-3 px-4">&lt; 80 ppm</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold text-gray-900">Iron (Fe)</td>
                      <td className="py-3 px-4">Max. 10 ppm</td>
                      <td className="py-3 px-4">2 ppm</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold text-gray-900">Water Insoluble Matter</td>
                      <td className="py-3 px-4">Max. 0.01%</td>
                      <td className="py-3 px-4">0.004%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Inquiry Form */}
            <div className="bg-navy text-white rounded-3xl p-8 md:p-12 shadow-xl">
              <div className="max-w-3xl mx-auto">
                <div className="text-center mb-8">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">
                    Request Technical Data Sheet (TDS) or Commercial Quote
                  </h3>
                  <p className="text-white/70 text-sm">
                    Available in 25 kg bags, 1,000 kg jumbo bags, and customized bulk packaging compliant with Indian transport and PESO standards.
                  </p>
                </div>

                {inquirySent ? (
                  <div className="text-center py-8 space-y-3 bg-white/10 rounded-2xl p-6">
                    <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                    <h4 className="text-xl font-bold">Inquiry Successfully Dispatched</h4>
                    <p className="text-sm text-white/80">
                      Our Technical Industrial Chemicals team in India will respond with full batch COA and pricing within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs uppercase tracking-wider text-white/70 mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Your Name"
                          className="w-full h-10 px-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:border-emerald-400"
                        />
                      </div>
                      <div>
                        <label className="block text-xs uppercase tracking-wider text-white/70 mb-1">
                          Company / Manufacturing Unit *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
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
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="procurement@company.com"
                          className="w-full h-10 px-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:border-emerald-400"
                        />
                      </div>
                      <div>
                        <label className="block text-xs uppercase tracking-wider text-white/70 mb-1">
                          Contact Phone *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 98765 43210"
                          className="w-full h-10 px-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:border-emerald-400"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs uppercase tracking-wider text-white/70 mb-1">
                          Industry / Application
                        </label>
                        <select
                          value={formData.industry}
                          onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                          className="w-full h-10 px-3 rounded-lg bg-navy border border-white/20 text-white text-sm focus:outline-none focus:border-emerald-400"
                        >
                          <option value="Specialty Glass & Touchscreens">Specialty Glass & Touchscreens</option>
                          <option value="Metallurgy & Molten Salt Baths">Metallurgy & Molten Salt Baths</option>
                          <option value="Ceramics, Tiles & Glazes">Ceramics, Tiles & Glazes</option>
                          <option value="Chemical Synthesis & Reagents">Chemical Synthesis & Reagents</option>
                          <option value="Pyrotechnics / Regulated Applications">Pyrotechnics / Regulated Applications</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs uppercase tracking-wider text-white/70 mb-1">
                          Estimated Volume (Tons / Month)
                        </label>
                        <input
                          type="text"
                          value={formData.quantity}
                          onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                          placeholder="e.g. 20 MT / month"
                          className="w-full h-10 px-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:border-emerald-400"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-white/70 mb-1">
                        Specific Chemical Requirements or Packaging Request
                      </label>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Chloride thresholds, delivery location in India, custom particle size..."
                        className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:border-emerald-400"
                      />
                    </div>

                    <div className="text-center pt-2">
                      <button
                        type="submit"
                        className="px-8 h-12 bg-primary text-white font-semibold text-sm rounded-full hover:bg-primary-dark transition-colors inline-flex items-center gap-2 shadow-lg"
                      >
                        <Send className="w-4 h-4" />
                        Submit Technical KNO₃ Inquiry
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
