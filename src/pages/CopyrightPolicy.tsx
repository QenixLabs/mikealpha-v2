import { useState } from 'react';
import { Link } from 'react-router';
import { motion } from 'framer-motion';
import {
  FileText,
  ShieldAlert,
  ShieldCheck,
  ChevronRight,
  Mail,
  Phone,
  MapPin,
  CheckCircle2,
  AlertCircle,
  Copy,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/sections/Footer';
import FloatingActions from '@/components/FloatingActions';
import { staggerContainer, fadeUpVariant } from '@/lib/animations';

export default function CopyrightPolicy() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('copyright@mikealpha.in');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-brand-background text-brand-text-primary">
      <Navbar />

      <main className="pt-28 md:pt-32">
        {/* Hero Section */}
        <section className="relative bg-navy text-white py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="/images/hero-bg-2.jpg"
              alt="Copyright and IP Policy"
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
                <span className="text-white">Copyright Policy</span>
              </motion.div>

              <motion.span
                variants={fadeUpVariant}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary/20 text-emerald-300 border border-primary/30 mb-4"
              >
                <ShieldCheck className="w-3.5 h-3.5" />
                Indian Copyright Act 1957 & IT Rules 2021
              </motion.span>

              <motion.h1
                variants={fadeUpVariant}
                className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4"
              >
                Copyright & IP Policy
              </motion.h1>

              <motion.p
                variants={fadeUpVariant}
                className="text-white/80 text-base md:text-lg leading-relaxed mb-4"
              >
                Mike Alpha Agro Pvt. Ltd. respects the intellectual property rights of authors, creators, and researchers, and expects users of its digital platforms to do the same.
              </motion.p>

              <motion.p
                variants={fadeUpVariant}
                className="text-white/60 text-xs tracking-wider uppercase font-medium"
              >
                Published in compliance with Rule 3(1)(d) of the Information Technology (Intermediary Guidelines) Rules, 2021
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4 lg:px-6 space-y-10">
            {/* Overview Card */}
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm leading-relaxed text-gray-700 space-y-4">
              <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <FileText className="w-5 h-5 text-primary" />
                Notice of Copyright Protection in India
              </h2>
              <p>
                All creative content, written articles, agronomic research studies, crop guide diagrams, nutritional deficiency photos, software calculators, and product datasheets featured on this website are protected under the <strong>Indian Copyright Act, 1957</strong> (as amended), international copyright conventions, and reciprocal treaties to which the Republic of India is a party.
              </p>
              <p>
                No part of this portal may be reproduced, stored in a retrieval system, or transmitted in any form or by any means—electronic, mechanical, photocopying, recording, or otherwise—without the prior written consent of Mike Alpha Agro Pvt. Ltd.
              </p>
            </div>

            {/* Notice of Infringement */}
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm leading-relaxed text-gray-700 space-y-4">
              <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <ShieldAlert className="w-5 h-5 text-primary" />
                Reporting Copyright Infringement (Takedown Notice)
              </h2>
              <p>
                If you believe in good faith that any material, image, or text hosted on our website or mobile apps infringes your copyrighted work, you or your authorized legal representative may submit a written Takedown Notice to our designated Copyright & Grievance Officer in India.
              </p>
              <p className="font-semibold text-gray-900 text-sm">
                To be legally valid under Indian law, your notification must include:
              </p>
              <ol className="list-decimal pl-5 space-y-2 text-sm text-gray-600">
                <li>
                  <strong>Authorized Signature:</strong> A physical or electronic signature of the copyright owner or person authorized to act on their behalf.
                </li>
                <li>
                  <strong>Identification of Copyrighted Work:</strong> Clear description of the copyrighted work claimed to have been infringed, including proof of ownership or copyright registration certificate (if registered under the Indian Copyright Office).
                </li>
                <li>
                  <strong>Identification of Infringing Material:</strong> Specific URL(s) or precise digital location on our website where the alleged infringing material is located.
                </li>
                <li>
                  <strong>Complainant Contact Details:</strong> Full legal name, permanent address in India or country of domicile, telephone/mobile number, and active email address.
                </li>
                <li>
                  <strong>Good-Faith Statement:</strong> A declaration stating: <em>"I have a good faith belief that use of the material in the manner complained of is not authorized by the copyright owner, its agent, or the law."</em>
                </li>
                <li>
                  <strong>Statement of Accuracy:</strong> A statement made under penalty of perjury under Indian law that the information in the notification is accurate and that you are authorized to enforce the copyright.
                </li>
              </ol>
            </div>

            {/* Counter Notice */}
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm leading-relaxed text-gray-700 space-y-4">
              <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                Counter-Notification Procedure
              </h2>
              <p>
                If material posted by you has been removed or access to it was disabled as a result of a mistake or misidentification, you may send a written Counter-Notice to our Copyright Officer containing:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-sm text-gray-600">
                <li>Your physical or electronic signature;</li>
                <li>Identification of the material that was removed and the URL where it appeared prior to removal;</li>
                <li>A statement under penalty of perjury that you have a good faith belief that the material was removed or disabled as a result of mistake or misidentification;</li>
                <li>Your name, address, and telephone number, together with a statement consenting to the jurisdiction of the competent courts in India and that you will accept service of process from the original complainant.</li>
              </ul>
              <p className="text-sm">
                Upon receipt of a valid counter-notice, we will forward it to the original complaining party. If no legal action is instituted within fourteen (14) business days, we may restore the material at our sole discretion.
              </p>
            </div>

            {/* Repeat Infringers */}
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm leading-relaxed text-gray-700 space-y-4">
              <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-amber-600" />
                Repeat Infringer Policy
              </h2>
              <p className="text-sm">
                In appropriate circumstances and at our sole discretion, Mike Alpha Agro will terminate user accounts, partner portal access, or distributor privileges of users who are found to repeatedly infringe intellectual property rights or submit misleading copyright claims.
              </p>
            </div>

            {/* Designated Copyright Officer */}
            <div className="bg-white p-8 rounded-2xl border-2 border-primary/40 shadow-md space-y-4">
              <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <ShieldCheck className="w-6 h-6 text-primary" />
                Designated Copyright Nodal Officer — India
              </h2>
              <p className="text-sm text-gray-600">
                Please submit all notices of claimed copyright infringement to our designated Nodal Officer:
              </p>

              <div className="bg-[#EEF3EE] p-6 rounded-xl border border-emerald-200 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div>
                    <span className="text-xs uppercase tracking-wider text-gray-500 font-bold block">Officer Name</span>
                    <span className="text-base font-semibold text-gray-900">Mr. Anand Vardhan</span>
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-gray-500 font-bold block">Designation</span>
                    <span className="text-sm text-gray-800">Head of Legal & Copyright Nodal Officer</span>
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-gray-500 font-bold block">Company</span>
                    <span className="text-sm text-gray-800">Mike Alpha Agro Pvt. Ltd.</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-primary shrink-0 mt-1" />
                    <div>
                      <span className="text-xs uppercase tracking-wider text-gray-500 font-bold block">Postal Address</span>
                      <span className="text-sm text-gray-800">
                        Plot No. 42, GIDC Industrial Estate, Makarpura, Vadodara, Gujarat – 390010, India
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Mail className="w-4 h-4 text-primary shrink-0" />
                    <div>
                      <span className="text-xs uppercase tracking-wider text-gray-500 font-bold block">Copyright Email</span>
                      <div className="flex items-center gap-2">
                        <a href="mailto:copyright@mikealpha.in" className="text-sm text-primary font-medium hover:underline">
                          copyright@mikealpha.in
                        </a>
                        <button
                          onClick={copyEmail}
                          className="text-xs text-gray-500 hover:text-primary p-1 rounded"
                          title="Copy email"
                        >
                          <Copy className="w-3.5 h-3.5" />
                        </button>
                        {copied && <span className="text-xs text-emerald-600 font-medium">Copied!</span>}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-primary shrink-0" />
                    <div>
                      <span className="text-xs uppercase tracking-wider text-gray-500 font-bold block">Phone</span>
                      <span className="text-sm text-gray-800">+91 (0265) 263-4400 / 1800-120-MIKE</span>
                    </div>
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
