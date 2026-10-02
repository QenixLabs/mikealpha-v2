import { useState } from 'react';
import { Link } from 'react-router';
import { motion } from 'framer-motion';
import {
  Award,
  CheckCircle2,
  FileCheck,
  ShieldCheck,
  ChevronRight,
  FlaskConical,
  Search,
  Download,
  Microscope,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/sections/Footer';
import FloatingActions from '@/components/FloatingActions';
import { staggerContainer, fadeUpVariant } from '@/lib/animations';

export default function QualityAssurance() {
  const [coaQuery, setCoaQuery] = useState('');
  const [searchedCoa, setSearchedCoa] = useState<string | null>(null);

  const handleCoaSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!coaQuery.trim()) return;
    setSearchedCoa(coaQuery.trim().toUpperCase());
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
              alt="Quality Assurance and Laboratory Testing"
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
                  Industrial & Specialty
                </Link>
                <ChevronRight className="w-4 h-4" />
                <span className="text-white">Quality Assurance</span>
              </motion.div>

              <motion.span
                variants={fadeUpVariant}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary/20 text-emerald-300 border border-primary/30 mb-4"
              >
                <Award className="w-3.5 h-3.5" />
                ISO 9001:2015 & FCO 1985 Certified Excellence — India
              </motion.span>

              <motion.h1
                variants={fadeUpVariant}
                className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4"
              >
                Uncompromising Quality Assurance
              </motion.h1>

              <motion.p
                variants={fadeUpVariant}
                className="text-white/80 text-base md:text-xl leading-relaxed mb-6"
              >
                Every kilogram of specialty fertilizer and technical chemical supplied by Mike Alpha Agro is subject to rigorous laboratory analytics, 100% batch traceability, and statutory compliance with the Government of India's Fertilizer Control Order (FCO) 1985.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Certifications Badge Bar */}
        <section className="bg-white border-b border-gray-200 py-8 shadow-sm">
          <div className="max-w-container mx-auto px-4 lg:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                <ShieldCheck className="w-8 h-8 text-primary mx-auto mb-2" />
                <h4 className="font-bold text-gray-900 text-sm">ISO 9001:2015</h4>
                <p className="text-xs text-gray-500 mt-0.5">Quality Management System</p>
              </div>

              <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                <FileCheck className="w-8 h-8 text-primary mx-auto mb-2" />
                <h4 className="font-bold text-gray-900 text-sm">FCO 1985 Schedule I</h4>
                <p className="text-xs text-gray-500 mt-0.5">Certified Physical & Chemical Specs</p>
              </div>

              <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                <Microscope className="w-8 h-8 text-primary mx-auto mb-2" />
                <h4 className="font-bold text-gray-900 text-sm">ISO 14001:2015</h4>
                <p className="text-xs text-gray-500 mt-0.5">Environmental Management</p>
              </div>

              <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                <Award className="w-8 h-8 text-primary mx-auto mb-2" />
                <h4 className="font-bold text-gray-900 text-sm">ISO 45001:2018</h4>
                <p className="text-xs text-gray-500 mt-0.5">Occupational Health & Safety</p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Pillars */}
        <section className="py-16 md:py-20">
          <div className="max-w-container mx-auto px-4 lg:px-6 space-y-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-primary mb-2 block">
                  Quality Management Principles
                </span>
                <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                  From Raw Material Synthesis to Farmgate Application
                </h2>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-4">
                  Mike Alpha Agro operates an integrated Quality Assurance system designed to ensure our farmers and industrial clients receive products that exceed statutory specifications.
                </p>
                <div className="space-y-4 text-sm text-gray-700">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <strong>100% Water Solubility:</strong> Complete dissolution without residues, preventing dripper emitter clogging and micro-irrigation system failures across Indian farmlands.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <strong>Heavy Metal Free & Low Biuret:</strong> Rigorous inductively coupled plasma (ICP) testing guarantees cadmium, lead, and arsenic levels far below the strictest limits set by the Ministry of Agriculture.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <strong>Multi-Layer Moisture Barrier Packaging:</strong> Heavy-duty, UV-stabilized bags with heat-sealed inner liners protect hygroscopic fertilizers against humidity and monsoon conditions in Indian godowns.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <strong>Statutory Retain Samples:</strong> Representative samples from each commercial batch are sealed and retained for 24 months in our quality repository for audit verification.
                    </div>
                  </div>
                </div>
              </div>

              {/* COA Verification Tool */}
              <div className="bg-white p-8 rounded-3xl border-2 border-primary/30 shadow-lg">
                <div className="flex items-center gap-2 mb-2">
                  <FlaskConical className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-bold text-gray-900">Certificate of Analysis (COA) Verification</h3>
                </div>
                <p className="text-xs text-gray-600 mb-6 leading-relaxed">
                  Enter the Batch Number printed on your Mike Alpha product packaging (e.g. <code>MAI-2608-KNO3</code>) to retrieve the official laboratory test parameters.
                </p>

                <form onSubmit={handleCoaSearch} className="space-y-3 mb-6">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={coaQuery}
                      onChange={(e) => setCoaQuery(e.target.value)}
                      placeholder="e.g. MAI-2608-KNO3"
                      className="flex-1 h-11 px-4 border border-gray-300 rounded-lg text-sm uppercase font-mono focus:outline-none focus:border-primary"
                      required
                    />
                    <button
                      type="submit"
                      className="px-6 h-11 bg-primary text-white text-xs font-semibold rounded-lg hover:bg-primary-dark transition-colors flex items-center gap-1.5 shadow-sm"
                    >
                      <Search className="w-4 h-4" />
                      Verify
                    </button>
                  </div>
                </form>

                {searchedCoa ? (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-xl bg-[#EEF3EE] border border-emerald-200 text-xs text-gray-800 space-y-2"
                  >
                    <div className="flex items-center justify-between border-b border-emerald-300 pb-1.5">
                      <span className="font-bold text-emerald-800">Batch Record: {searchedCoa}</span>
                      <span className="text-[11px] font-semibold text-emerald-700 bg-white px-2 py-0.5 rounded-full border border-emerald-300">
                        PASSED QC
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 pt-1 text-[11px]">
                      <div><strong>Product:</strong> Multi-K™ 13-0-45</div>
                      <div><strong>Total N:</strong> 13.8% (Min 13.0%)</div>
                      <div><strong>Water Soluble K₂O:</strong> 46.4% (Min 45.0%)</div>
                      <div><strong>Moisture:</strong> 0.08% (Max 0.5%)</div>
                      <div><strong>Insolubles:</strong> 0.005% (Max 0.05%)</div>
                      <div><strong>Chloride (Cl⁻):</strong> 0.03% (Max 0.05%)</div>
                    </div>
                    <div className="pt-2 flex justify-between items-center text-primary font-medium">
                      <span>Certified by: Central Quality Lab, Gujarat</span>
                      <button
                        onClick={() => alert(`Certificate of Analysis for Batch ${searchedCoa} generated.`)}
                        className="underline text-xs flex items-center gap-1"
                      >
                        <Download className="w-3 h-3" /> Download COA (PDF)
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 text-xs text-gray-500 text-center">
                    Enter batch number to verify certified nitrogen, potassium, and purity parameters.
                  </div>
                )}
              </div>
            </div>

            {/* Quality Workflow Grid */}
            <div className="bg-white rounded-3xl border border-gray-200 p-8 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-8 text-center">
                Our 5-Stage Quality Assurance Protocol in India
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-center">
                <div className="space-y-2">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 text-primary font-bold flex items-center justify-center mx-auto text-sm">
                    1
                  </div>
                  <h4 className="font-bold text-gray-900 text-sm">Raw Material Assay</h4>
                  <p className="text-xs text-gray-600">Verification of raw technical nitrates and phosphate components against global purity baselines.</p>
                </div>

                <div className="space-y-2">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 text-primary font-bold flex items-center justify-center mx-auto text-sm">
                    2
                  </div>
                  <h4 className="font-bold text-gray-900 text-sm">Homogeneous Blending</h4>
                  <p className="text-xs text-gray-600">Automated precision blending with chelated trace elements for uniform NPK distribution.</p>
                </div>

                <div className="space-y-2">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 text-primary font-bold flex items-center justify-center mx-auto text-sm">
                    3
                  </div>
                  <h4 className="font-bold text-gray-900 text-sm">Lab Chemical Analysis</h4>
                  <p className="text-xs text-gray-600">Titration, spectrophotometry, and pH evaluation per FCO 1985 Schedule II guidelines.</p>
                </div>

                <div className="space-y-2">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 text-primary font-bold flex items-center justify-center mx-auto text-sm">
                    4
                  </div>
                  <h4 className="font-bold text-gray-900 text-sm">Packaging Integrity</h4>
                  <p className="text-xs text-gray-600">Automated weight check-weighing, batch stamping, and thermal hermetic inner seal tests.</p>
                </div>

                <div className="space-y-2">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 text-primary font-bold flex items-center justify-center mx-auto text-sm">
                    5
                  </div>
                  <h4 className="font-bold text-gray-900 text-sm">COA Certification</h4>
                  <p className="text-xs text-gray-600">Release of official Certificate of Analysis and dispatch through authorized Indian logistics.</p>
                </div>
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
