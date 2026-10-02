import { useState } from 'react';
import { Link } from 'react-router';
import { motion } from 'framer-motion';
import {
  FileText,
  Scale,
  ShieldCheck,
  AlertTriangle,
  ChevronRight,
  Gavel,
  CheckCircle2,
  Building,
  Sprout,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/sections/Footer';
import FloatingActions from '@/components/FloatingActions';
import { staggerContainer, fadeUpVariant } from '@/lib/animations';

export default function TermsOfUse() {
  const [activeSection, setActiveSection] = useState<string>('agreement');

  const sections = [
    { id: 'agreement', label: '1. Acceptance of Terms' },
    { id: 'agronomic-disclaimer', label: '2. Agronomic & Advisory Disclaimer' },
    { id: 'fco-compliance', label: '3. FCO & Regulatory Compliance' },
    { id: 'intellectual-property', label: '4. Intellectual Property & Trademarks' },
    { id: 'user-accounts', label: '5. Accounts & Digital Tools' },
    { id: 'prohibited-conduct', label: '6. User Conduct & Intermediary Rules' },
    { id: 'liability', label: '7. Limitation of Liability & Indemnity' },
    { id: 'governing-law', label: '8. Governing Law & Dispute Resolution' },
  ];

  return (
    <div className="min-h-screen bg-brand-background text-brand-text-primary">
      <Navbar />

      <main className="pt-28 md:pt-32">
        {/* Hero Section */}
        <section className="relative bg-navy text-white py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="/images/hero-bg-2.jpg"
              alt="Terms of Use"
              className="w-full h-full object-cover opacity-20"
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
                <span className="text-white">Terms of Use</span>
              </motion.div>

              <motion.span
                variants={fadeUpVariant}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary/20 text-emerald-300 border border-primary/30 mb-4"
              >
                <Scale className="w-3.5 h-3.5" />
                Indian Contract Act 1872 & IT Act 2000 Compliant
              </motion.span>

              <motion.h1
                variants={fadeUpVariant}
                className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4"
              >
                Terms of Use
              </motion.h1>

              <motion.p
                variants={fadeUpVariant}
                className="text-white/80 text-base md:text-lg leading-relaxed mb-4"
              >
                These Terms of Use govern your access to and use of all websites, digital calculators, mobile apps, agronomic recommendations, and digital portals operated by Mike Alpha Agro Pvt. Ltd.
              </motion.p>

              <motion.p
                variants={fadeUpVariant}
                className="text-white/60 text-xs tracking-wider uppercase font-medium"
              >
                Effective Date: September 2026 • Governed by the Laws of the Republic of India
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12 md:py-16">
          <div className="max-w-container mx-auto px-4 lg:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              {/* Quick Navigation Sidebar */}
              <aside className="lg:col-span-3">
                <div className="sticky top-32 bg-white rounded-xl border border-gray-200 p-4 shadow-sm">
                  <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 px-2">
                    Quick Navigation
                  </h3>
                  <nav className="space-y-1">
                    {sections.map((s) => (
                      <a
                        key={s.id}
                        href={`#${s.id}`}
                        onClick={() => setActiveSection(s.id)}
                        className={`block px-3 py-2 text-sm rounded-lg transition-colors font-medium ${
                          activeSection === s.id
                            ? 'bg-primary text-white'
                            : 'text-gray-700 hover:bg-emerald-50 hover:text-primary'
                        }`}
                      >
                        {s.label}
                      </a>
                    ))}
                  </nav>

                  <div className="mt-6 pt-6 border-t border-gray-100 px-2 space-y-2">
                    <Link
                      to="/privacy-policy"
                      className="text-xs font-semibold text-gray-600 hover:text-primary flex items-center gap-1"
                    >
                      <ShieldCheck className="w-3.5 h-3.5" /> View Privacy Policy
                    </Link>
                    <Link
                      to="/condition-sales"
                      className="text-xs font-semibold text-gray-600 hover:text-primary flex items-center gap-1"
                    >
                      <FileText className="w-3.5 h-3.5" /> Conditions of Sale (India)
                    </Link>
                  </div>
                </div>
              </aside>

              {/* Main Content */}
              <div className="lg:col-span-9 space-y-10">
                {/* 1. Acceptance */}
                <div id="agreement" className="scroll-mt-36 bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Scale className="w-6 h-6 text-primary" />
                    1. Acceptance of Terms & Legal Binding Agreement
                  </h2>
                  <div className="prose prose-sm max-w-none text-gray-700 space-y-4 leading-relaxed">
                    <p>
                      Welcome to the official website and digital services of <strong>Mike Alpha Agro Pvt. Ltd.</strong> (“Mike Alpha”, “we”, “our”, or “us”). By accessing, browsing, or utilizing this website (<a href="/" className="text-primary font-medium">mikealpha.in</a>), our web applications (including NutriNet™, MultiMatch™, Deficiency Pro, Nitric Acid Calculator), or our mobile agricultural software applications, you acknowledge that you have read, understood, and agree to be bound by these Terms of Use and all related policies incorporated herein.
                    </p>
                    <p>
                      This electronic record is generated by a computer system and does not require any physical or digital signatures. This document is published in accordance with the provisions of Rule 3(1) of the <strong>Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021</strong> under the <strong>Information Technology Act, 2000</strong>.
                    </p>
                    <p>
                      You affirm that you are at least eighteen (18) years of age and competent to enter into a valid contract under the <strong>Indian Contract Act, 1872</strong>. If you do not agree to these terms, you must immediately refrain from accessing or using our websites and services.
                    </p>
                  </div>
                </div>

                {/* 2. Agronomic Disclaimer */}
                <div id="agronomic-disclaimer" className="scroll-mt-36 bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Sprout className="w-6 h-6 text-primary" />
                    2. Agronomic Recommendations & Yield Disclaimer
                  </h2>
                  <div className="prose prose-sm max-w-none text-gray-700 space-y-4 leading-relaxed">
                    <div className="p-4 rounded-xl border border-amber-200 bg-amber-50/60 mb-4 flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                      <p className="text-xs text-amber-900 font-medium leading-relaxed">
                        <strong>Important Notice for Indian Growers & Dealers:</strong> Agricultural results depend on unpredictable climatic events, micro-environmental soil variations, irrigation water salinity, pest outbreaks, and application timing. All crop guides, dosage tables, and software calculators are provided as general technical guidance only.
                      </p>
                    </div>
                    <p>
                      While Mike Alpha’s agronomic research is conducted to high scientific standards, local soil conditions across India vary greatly (ranging from calcareous black soils of Gujarat/Maharashtra to sandy loams of Northern India and red laterite soils of the South).
                    </p>
                    <p>
                      Therefore, Mike Alpha Agro makes no guarantee or warranty—express or implied—regarding crop yield, harvest timing, financial profitability, or specific physical crop outcomes. Growers are urged to perform comprehensive local soil and irrigation water testing and consult local agronomists or Krishi Vigyan Kendras (KVKs) prior to making large-scale fertilizer investments.
                    </p>
                  </div>
                </div>

                {/* 3. FCO Compliance */}
                <div id="fco-compliance" className="scroll-mt-36 bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Building className="w-6 h-6 text-primary" />
                    3. Fertilizer Control Order (FCO 1985) & Quality Standards
                  </h2>
                  <div className="prose prose-sm max-w-none text-gray-700 space-y-4 leading-relaxed">
                    <p>
                      All specialty fertilizer formulations, water-soluble 100% NPK grades, potassium nitrate (KNO3), micronutrient chelates, and biostimulants marketed by Mike Alpha Agro are manufactured, imported, labeled, and distributed in strict compliance with the:
                    </p>
                    <ul className="list-disc pl-5 space-y-1.5">
                      <li><strong>Fertilizer (Inorganic, Organic or Mixed) (Control) Order, 1985 (FCO)</strong>, promulgated under Section 3 of the Essential Commodities Act, 1955;</li>
                      <li><strong>Legal Metrology (Packaged Commodities) Rules, 2011</strong> regarding net weight declarations, Maximum Retail Price (MRP), batch numbering, and manufacturing dates;</li>
                      <li><strong>Bureau of Indian Standards (BIS)</strong> certifications where mandated by Central Government notifications.</li>
                    </ul>
                    <p>
                      Authorized distributors and retailers must maintain valid fertilizer retail/wholesale licenses issued by respective State Departments of Agriculture and must not tamper with, repack, adulterate, or alter genuine Mike Alpha packaging.
                    </p>
                  </div>
                </div>

                {/* 4. Intellectual Property */}
                <div id="intellectual-property" className="scroll-mt-36 bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <ShieldCheck className="w-6 h-6 text-primary" />
                    4. Intellectual Property, Trademarks & Patents in India
                  </h2>
                  <div className="prose prose-sm max-w-none text-gray-700 space-y-4 leading-relaxed">
                    <p>
                      All content published on this website and our digital apps—including but not limited to brand names (Multi-K™, Poly-Feed™, HaifaStim™, MultiMatch™, NutriNet™), trademarks, logos, crop photography, graphic icons, technical datasheets, calculation algorithms, software code, and texts—is the exclusive intellectual property of Mike Alpha or its licensors, protected under the <strong>Indian Copyright Act, 1957</strong>, the <strong>Trade Marks Act, 1999</strong>, and the <strong>Patents Act, 1970</strong>.
                    </p>
                    <p>
                      You are granted a limited, revocable, non-exclusive, non-transferable license to view and download crop guides and product brochures for personal, non-commercial farm advisory use. Any unauthorized copying, reproduction, distribution, reverse engineering, scraping, or commercial exploitation is strictly prohibited and subject to civil injunctions and criminal prosecution under Indian law.
                    </p>
                  </div>
                </div>

                {/* 5. User Accounts */}
                <div id="user-accounts" className="scroll-mt-36 bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                    5. User Accounts & Smart Farming Web Tools
                  </h2>
                  <div className="prose prose-sm max-w-none text-gray-700 space-y-4 leading-relaxed">
                    <p>
                      To access advanced features (such as NutriNet™ customized fertigation plans, Partner Zone, or MultiMatch™ recipes), you may be required to register an account. You agree to provide true, accurate, and current information.
                    </p>
                    <p>
                      You are solely responsible for maintaining the confidentiality of your credentials and for all activities that occur under your account. Mike Alpha reserves the right to suspend or terminate accounts that provide fraudulent information or violate these Terms.
                    </p>
                  </div>
                </div>

                {/* 6. Prohibited Conduct */}
                <div id="prohibited-conduct" className="scroll-mt-36 bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <AlertTriangle className="w-6 h-6 text-primary" />
                    6. User Conduct & Intermediary Guidelines (Rule 3(1)(b))
                  </h2>
                  <div className="prose prose-sm max-w-none text-gray-700 space-y-4 leading-relaxed">
                    <p>
                      Under the <strong>Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021</strong>, you agree not to host, display, upload, modify, publish, transmit, or share any information on our website, comment boards, or chatbot that:
                    </p>
                    <ul className="list-disc pl-5 space-y-1.5">
                      <li>Belongs to another person and to which you do not have any right;</li>
                      <li>Is defamatory, obscene, pornographic, pedophilic, invasive of another\'s privacy, insulting on the basis of gender, or racially or ethnically objectionable;</li>
                      <li>Infringes any patent, trademark, copyright, or other proprietary rights;</li>
                      <li>Deceives or misleads the addressee about the origin of the message or knowingly communicates false or misleading information;</li>
                      <li>Contains software viruses or any other computer code designed to interrupt, destroy, or limit the functionality of any computer resource;</li>
                      <li>Threatens the unity, integrity, defense, security, or sovereignty of India, friendly relations with foreign States, or public order.</li>
                    </ul>
                  </div>
                </div>

                {/* 7. Liability & Indemnity */}
                <div id="liability" className="scroll-mt-36 bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Scale className="w-6 h-6 text-primary" />
                    7. Limitation of Liability & Indemnity
                  </h2>
                  <div className="prose prose-sm max-w-none text-gray-700 space-y-4 leading-relaxed">
                    <p>
                      To the fullest extent permitted by the laws of India, Mike Alpha Agro Pvt. Ltd., its directors, officers, employees, distributors, and agents shall not be liable for any indirect, incidental, special, punitive, or consequential damages (including loss of crop harvest, anticipated profits, business interruption, or loss of agricultural data) arising out of or in connection with the use of or inability to use this website or digital tools.
                    </p>
                    <p>
                      You agree to defend, indemnify, and hold harmless Mike Alpha and its affiliates from and against any claims, liabilities, damages, losses, or legal expenses (including reasonable attorneys' fees) arising out of your violation of these Terms or your infringement of any third-party rights.
                    </p>
                  </div>
                </div>

                {/* 8. Governing Law */}
                <div id="governing-law" className="scroll-mt-36 bg-white p-8 rounded-2xl border-2 border-primary/40 shadow-md">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Gavel className="w-6 h-6 text-primary" />
                    8. Governing Law, Dispute Resolution & Exclusive Jurisdiction
                  </h2>
                  <div className="prose prose-sm max-w-none text-gray-700 space-y-4 leading-relaxed">
                    <p>
                      These Terms of Use, their validity, interpretation, and performance shall be governed by and construed in all respects strictly in accordance with the <strong>substantive laws of the Republic of India</strong>, without regard to conflict of law principles.
                    </p>
                    <p>
                      <strong>Arbitration:</strong> Any dispute, difference, controversy, or claim arising out of or relating to these Terms of Use, or the breach, termination, or invalidity thereof, shall be settled by arbitration in accordance with the provisions of the <strong>Arbitration and Conciliation Act, 1996</strong> (as amended). The arbitration tribunal shall consist of a sole arbitrator appointed mutually by the parties. The seat and venue of arbitration shall be New Delhi or Ahmedabad, India, and the proceedings shall be conducted in English.
                    </p>
                    <p>
                      <strong>Exclusive Jurisdiction:</strong> Subject to the arbitration clause above, the competent Civil Courts situated in <strong>New Delhi or Ahmedabad, Gujarat, India</strong>, shall have exclusive territorial and subject-matter jurisdiction to entertain any legal suits, interim reliefs, or proceedings arising out of these Terms of Use.
                    </p>
                  </div>
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
