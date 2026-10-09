import { useState } from 'react';
import { Link } from 'react-router';
import { motion } from 'framer-motion';
import {
  ShieldCheck,
  Lock,
  Database,
  UserCheck,
  ChevronRight,
  Mail,
  Phone,
  MapPin,
  CheckCircle2,
  FileText,
  AlertCircle,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/sections/Footer';
import FloatingActions from '@/components/FloatingActions';
import { staggerContainer, fadeUpVariant } from '@/lib/animations';

export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState<string>('notice');

  const sections = [
    { id: 'notice', label: '1. Notice & Scope' },
    { id: 'data-collected', label: '2. Data We Collect' },
    { id: 'purposes', label: '3. Processing Grounds' },
    { id: 'rights', label: '4. Data Principal Rights' },
    { id: 'storage', label: '5. Security & Localization' },
    { id: 'cookies', label: '6. Cookies & Tracking' },
    { id: 'children', label: '7. Children\'s Privacy' },
    { id: 'grievance', label: '8. Grievance Redressal' },
  ];

  return (
    <div className="min-h-screen bg-brand-background text-brand-text-primary">
      <Navbar />

      <main className="pt-28 md:pt-32">
        {/* Hero Banner */}
        <section className="relative bg-navy text-white py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="/images/hero-bg-2.jpg"
              alt="Agricultural privacy and data protection"
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
                <span className="text-white">Privacy Policy</span>
              </motion.div>

              <motion.span
                variants={fadeUpVariant}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary/20 text-emerald-300 border border-primary/30 mb-4"
              >
                <ShieldCheck className="w-3.5 h-3.5" />
                DPDP Act 2023 & IT Act 2000 Compliant
              </motion.span>

              <motion.h1
                variants={fadeUpVariant}
                className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4"
              >
                Privacy Policy
              </motion.h1>

              <motion.p
                variants={fadeUpVariant}
                className="text-white/80 text-base md:text-lg leading-relaxed mb-4"
              >
                Mike Alpha Agro Pvt. Ltd. is committed to protecting the privacy, confidentiality, and data sovereignty of our farmers, distributors, business partners, and digital app users across India.
              </motion.p>

              <motion.p
                variants={fadeUpVariant}
                className="text-white/60 text-xs tracking-wider uppercase font-medium"
              >
                Last Updated: September 2026 • Republic of India Jurisdiction
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Highlights Row */}
        <section className="border-b border-gray-200 bg-white py-8 shadow-sm">
          <div className="max-w-container mx-auto px-4 lg:px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="flex items-start gap-3 p-3 rounded-lg bg-[#EEF3EE]/50 border border-emerald-100">
                <Lock className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-gray-900">Consent-Driven</h4>
                  <p className="text-xs text-gray-600 mt-0.5">Explicit consent under Section 6 of the DPDP Act 2023.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-lg bg-[#EEF3EE]/50 border border-emerald-100">
                <Database className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-gray-900">India Data Residency</h4>
                  <p className="text-xs text-gray-600 mt-0.5">Securely processed and stored on cloud servers within India.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-lg bg-[#EEF3EE]/50 border border-emerald-100">
                <UserCheck className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-gray-900">Principal Rights</h4>
                  <p className="text-xs text-gray-600 mt-0.5">Access, correction, erasure, and nomination rights guaranteed.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-lg bg-[#EEF3EE]/50 border border-emerald-100">
                <ShieldCheck className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-gray-900">Grievance Officer</h4>
                  <p className="text-xs text-gray-600 mt-0.5">Statutory redressal within 30 days per Indian law.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content Layout */}
        <section className="py-12 md:py-16">
          <div className="max-w-container mx-auto px-4 lg:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              {/* Quick Navigation Sidebar */}
              <aside className="lg:col-span-3">
                <div className="sticky top-32 bg-white rounded-xl border border-gray-200 p-4 shadow-sm">
                  <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 px-2">
                    Table of Contents
                  </h3>
                  <nav className="space-y-1">
                    {sections.map((s) => (
                      <a
                        key={s.id}
                        href={`#${s.id}`}
                        onClick={() => setActiveSection(s.id)}
                        className={`block px-3 py-2 text-sm rounded-lg transition-colors font-medium ${activeSection === s.id
                            ? 'bg-primary text-white'
                            : 'text-gray-700 hover:bg-emerald-50 hover:text-primary'
                          }`}
                      >
                        {s.label}
                      </a>
                    ))}
                  </nav>

                  <div className="mt-6 pt-6 border-t border-gray-100 px-2">
                    <p className="text-xs text-gray-500 mb-2">Have privacy concerns?</p>
                    <a
                      href="#grievance"
                      className="text-xs font-semibold text-primary hover:underline flex items-center gap-1"
                    >
                      Contact Grievance Officer <ChevronRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </aside>

              {/* Main Policy Text */}
              <div className="lg:col-span-9 space-y-12">
                {/* 1. Notice & Scope */}
                <div id="notice" className="scroll-mt-36 bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <FileText className="w-6 h-6 text-primary" />
                    1. Notice & Scope of Policy
                  </h2>
                  <div className="prose prose-sm max-w-none text-gray-700 space-y-4 leading-relaxed">
                    <p>
                      This Privacy Policy governs the collection, processing, storage, and transfer of Personal Data by <strong>Mike Alpha Agro Pvt. Ltd.</strong> (“Mike Alpha”, “we”, “us”, or “our”), a company incorporated under the Companies Act, 2013 with its registered and principal operations in the Republic of India.
                    </p>
                    <p>
                      This policy applies to individuals (“Data Principals”) interacting with Mike Alpha through:
                    </p>
                    <ul className="list-disc pl-5 space-y-1.5">
                      <li>Our official website (<a href="https://mikealpha.in" className="text-primary font-medium">https://mikealpha.in</a>) and web applications (including NutriNet™, MultiMatch™, Deficiency Pro, Nitric Acid Calculator, and Conversion Calculator);</li>
                      <li>Our mobile applications (including nitrotune, FoliMatch, and agricultural advisory services);</li>
                      <li>Commercial engagements as distributors, agro-dealers, commercial growers, or suppliers;</li>
                      <li>In-person agronomic field trials, farmer meetings (Kisan Gosthis), exhibitions, and educational workshops across India.</li>
                    </ul>
                    <p>
                      This policy has been drafted in strict conformity with the <strong>Digital Personal Data Protection Act, 2023 (DPDP Act)</strong>, the <strong>Information Technology Act, 2000</strong>, and the <strong>Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011</strong>.
                    </p>
                  </div>
                </div>

                {/* 2. Data We Collect */}
                <div id="data-collected" className="scroll-mt-36 bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Database className="w-6 h-6 text-primary" />
                    2. Categories of Personal Data We Collect
                  </h2>
                  <div className="prose prose-sm max-w-none text-gray-700 space-y-4 leading-relaxed">
                    <p>
                      In our agronomic, commercial, and technical operations, we collect only such personal data as is reasonably necessary for the specified purposes:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                      <div className="p-4 rounded-xl border border-gray-200 bg-gray-50/50">
                        <h4 className="font-semibold text-gray-900 text-sm mb-1">A. Identity & Contact Information</h4>
                        <p className="text-xs text-gray-600">Full name, mobile phone number, WhatsApp contact, postal address, village/district, State, PIN code, and email address.</p>
                      </div>
                      <div className="p-4 rounded-xl border border-gray-200 bg-gray-50/50">
                        <h4 className="font-semibold text-gray-900 text-sm mb-1">B. Agricultural & Field Information</h4>
                        <p className="text-xs text-gray-600">Landholding acreage, crops grown, soil test parameters, irrigation method (drip/flood/pivot), water analysis metrics, and crop deficiency photos.</p>
                      </div>
                      <div className="p-4 rounded-xl border border-gray-200 bg-gray-50/50">
                        <h4 className="font-semibold text-gray-900 text-sm mb-1">C. Commercial & Dealer Data</h4>
                        <p className="text-xs text-gray-600">Fertilizer retail license numbers (under FCO 1985), GSTIN numbers, PAN, business bank account details for authorized distributor invoicing.</p>
                      </div>
                      <div className="p-4 rounded-xl border border-gray-200 bg-gray-50/50">
                        <h4 className="font-semibold text-gray-900 text-sm mb-1">D. Digital & Device Telemetry</h4>
                        <p className="text-xs text-gray-600">Internet Protocol (IP) address, browser type, device identifiers, regional location coordinates (state/district level), and usage logs.</p>
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 italic">
                      Note: We do not seek or collect Aadhaar biometric data or sensitive personal health data unless explicitly mandated by statutory government subsidy/fertilizer distribution regulations.
                    </p>
                  </div>
                </div>

                {/* 3. Processing Grounds */}
                <div id="purposes" className="scroll-mt-36 bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                    3. Lawful Grounds and Purposes of Processing
                  </h2>
                  <div className="prose prose-sm max-w-none text-gray-700 space-y-4 leading-relaxed">
                    <p>
                      Under the DPDP Act 2023, Mike Alpha processes your personal data on the following lawful bases:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>
                        <strong>Explicit Consent (Section 6, DPDP Act):</strong> When you register for our smart farming web apps, request agronomic consultations, sign up for SMS/WhatsApp crop alerts, or submit a form on our website. You have the right to withdraw your consent at any time.
                      </li>
                      <li>
                        <strong>Performance of a Commercial Contract:</strong> Processing orders, dispatching specialty fertilizers, issuing GST invoices, and managing distributor agreements under the Indian Sale of Goods Act, 1930.
                      </li>
                      <li>
                        <strong>Compliance with Statutory Obligations:</strong> Maintaining statutory sales and stock registers under the Fertilizer Control Order (FCO) 1985, Essential Commodities Act 1955, and Goods and Services Tax (GST) laws of India.
                      </li>
                      <li>
                        <strong>Legitimate Uses per Section 7 of the DPDP Act:</strong> Responding to farmer inquiries, providing Safety Data Sheets (SDS), and safeguarding digital platforms from cyber fraud or technical failure.
                      </li>
                    </ul>
                  </div>
                </div>

                {/* 4. Data Principal Rights */}
                <div id="rights" className="scroll-mt-36 bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <UserCheck className="w-6 h-6 text-primary" />
                    4. Rights of Data Principals in India
                  </h2>
                  <div className="prose prose-sm max-w-none text-gray-700 space-y-4 leading-relaxed">
                    <p>
                      As recognized under Chapter III of the Digital Personal Data Protection Act, 2023, you enjoy the following enforceable rights:
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3 p-3.5 rounded-lg border border-emerald-100 bg-[#EEF3EE]/30">
                        <span className="font-bold text-primary text-sm min-w-6">4.1</span>
                        <div>
                          <strong className="text-gray-900 text-sm block">Right to Access Information (Section 11)</strong>
                          <span className="text-xs text-gray-600">You may request a summary of the personal data being processed by us, the processing activities undertaken, and the identities of any authorized third parties with whom it has been shared.</span>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 p-3.5 rounded-lg border border-emerald-100 bg-[#EEF3EE]/30">
                        <span className="font-bold text-primary text-sm min-w-6">4.2</span>
                        <div>
                          <strong className="text-gray-900 text-sm block">Right to Correction and Erasure (Section 12)</strong>
                          <span className="text-xs text-gray-600">You have the right to correct inaccurate or misleading personal data, complete incomplete data, and request erasure of personal data that is no longer necessary for the purpose it was collected.</span>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 p-3.5 rounded-lg border border-emerald-100 bg-[#EEF3EE]/30">
                        <span className="font-bold text-primary text-sm min-w-6">4.3</span>
                        <div>
                          <strong className="text-gray-900 text-sm block">Right of Grievance Redressal (Section 13)</strong>
                          <span className="text-xs text-gray-600">You have the right to register grievances with our designated Grievance Officer in India and receive a formal response within statutory timelines.</span>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 p-3.5 rounded-lg border border-emerald-100 bg-[#EEF3EE]/30">
                        <span className="font-bold text-primary text-sm min-w-6">4.4</span>
                        <div>
                          <strong className="text-gray-900 text-sm block">Right to Nominate (Section 14)</strong>
                          <span className="text-xs text-gray-600">You have the right to nominate an individual who, in the event of death or incapacity, shall exercise your privacy rights on your behalf.</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 5. Security & Localization */}
                <div id="storage" className="scroll-mt-36 bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Lock className="w-6 h-6 text-primary" />
                    5. Data Security & Storage Within India
                  </h2>
                  <div className="prose prose-sm max-w-none text-gray-700 space-y-4 leading-relaxed">
                    <p>
                      Mike Alpha maintains stringent technical, operational, and organizational safeguards designed to protect personal data against unauthorized access, alteration, disclosure, or destruction:
                    </p>
                    <ul className="list-disc pl-5 space-y-1.5">
                      <li><strong>Data Residency:</strong> In compliance with Government of India regulations, primary databases for Indian customers and farmers are hosted in secure, enterprise-grade cloud data centers located within India (e.g. Mumbai / Pune / Hyderabad regions).</li>
                      <li><strong>Encryption:</strong> All data transmitted over our websites and web applications is encrypted using Transport Layer Security (TLS 1.3 / SSL). Sensitive data at rest is protected with AES-256 encryption.</li>
                      <li><strong>Access Controls:</strong> Role-based access restrictions ensure that only authorized agronomists and commercial officers can view customer information on a strict need-to-know basis.</li>
                      <li><strong>Data Retention:</strong> We retain personal data only for as long as necessary to fulfill the intended purpose, satisfy warranty/traceability requirements under FCO 1985, or comply with tax retention laws (generally 8 years for financial books under the Companies Act 2013).</li>
                    </ul>
                  </div>
                </div>

                {/* 6. Cookies */}
                <div id="cookies" className="scroll-mt-36 bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Database className="w-6 h-6 text-primary" />
                    6. Cookies and Tracking Technologies
                  </h2>
                  <div className="prose prose-sm max-w-none text-gray-700 space-y-4 leading-relaxed">
                    <p>
                      We utilize cookies and similar technologies to improve site functionality and provide customized agronomic recommendations:
                    </p>
                    <ul className="list-disc pl-5 space-y-1.5">
                      <li><strong>Essential Cookies:</strong> Required for site navigation, language selection (Hindi / English), and secure session management.</li>
                      <li><strong>Analytics Cookies:</strong> We utilize anonymized analytics (such as Google Analytics with IP masking) to evaluate page traffic and improve crop guide content.</li>
                      <li><strong>Opt-Out:</strong> You may control or disable non-essential cookies via your browser settings at any time without forfeiting access to our public crop guides and product catalog.</li>
                    </ul>
                  </div>
                </div>

                {/* 7. Children's Privacy */}
                <div id="children" className="scroll-mt-36 bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <AlertCircle className="w-6 h-6 text-primary" />
                    7. Protection of Children’s Personal Data
                  </h2>
                  <div className="prose prose-sm max-w-none text-gray-700 space-y-4 leading-relaxed">
                    <p>
                      In compliance with Section 9 of the DPDP Act 2023, Mike Alpha Agro does not target its products, services, or web applications to individuals under eighteen (18) years of age. We do not knowingly collect personal data from children or engage in tracking, behavioral monitoring, or targeted advertising directed at minors.
                    </p>
                    <p>
                      If a parent or guardian discovers that a minor has provided personal information without verifiable parental consent, please contact our Grievance Officer immediately for prompt deletion.
                    </p>
                  </div>
                </div>

                {/* 8. Grievance Redressal */}
                <div id="grievance" className="scroll-mt-36 bg-white p-8 rounded-2xl border-2 border-primary/40 shadow-md">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <ShieldCheck className="w-6 h-6 text-primary" />
                    8. Statutory Grievance Redressal Officer — India
                  </h2>
                  <p className="text-sm text-gray-600 mb-6">
                    In compliance with the Information Technology Act, 2000 and Section 13 of the Digital Personal Data Protection Act, 2023, the details of our designated Grievance Officer in India are as follows:
                  </p>

                  <div className="bg-[#EEF3EE] p-6 rounded-xl border border-emerald-200 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <div>
                        <span className="text-xs uppercase tracking-wider text-gray-500 font-bold block">Officer Name</span>
                        <span className="text-base font-semibold text-gray-900">Mr. Anand Vardhan</span>
                      </div>
                      <div>
                        <span className="text-xs uppercase tracking-wider text-gray-500 font-bold block">Designation</span>
                        <span className="text-sm text-gray-800">Head of Legal & Data Protection Grievance Officer</span>
                      </div>
                      <div>
                        <span className="text-xs uppercase tracking-wider text-gray-500 font-bold block">Entity</span>
                        <span className="text-sm text-gray-800">Mike Alpha Agro Pvt. Ltd.</span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-start gap-2.5">
                        <MapPin className="w-4 h-4 text-primary shrink-0 mt-1" />
                        <div>
                          <span className="text-xs uppercase tracking-wider text-gray-500 font-bold block">Office Address</span>
                          <span className="text-sm text-gray-800">
                            Plot No. 42, GIDC Industrial Estate, Makarpura, Vadodara, Gujarat – 390010, India
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <Mail className="w-4 h-4 text-primary shrink-0" />
                        <div>
                          <span className="text-xs uppercase tracking-wider text-gray-500 font-bold block">Official Email</span>
                          <a href="mailto:grievance@mikealpha.in" className="text-sm text-primary font-medium hover:underline">
                            grievance@mikealpha.in
                          </a>
                        </div>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <Phone className="w-4 h-4 text-primary shrink-0" />
                        <div>
                          <span className="text-xs uppercase tracking-wider text-gray-500 font-bold block">Toll-Free Helpline</span>
                          <span className="text-sm text-gray-800">+91 (0265) 263-4400 / 1800-120-MIKE</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 p-4 rounded-lg bg-gray-50 border border-gray-200 text-xs text-gray-600 leading-relaxed">
                    <strong>Response Timeline:</strong> All grievances received will be acknowledged within forty-eight (48) hours with a unique grievance tracking number, and resolved in accordance with applicable rules within a maximum period of thirty (30) days from receipt.
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
