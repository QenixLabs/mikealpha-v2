import { useState } from 'react';
import { Link } from 'react-router';
import { motion } from 'framer-motion';
import {
  Send,
  Shield,
  CheckCircle,
  Upload,
  ChevronRight,
  Phone,
  Mail,
  Lock,
  Building,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/sections/Footer';
import FloatingActions from '@/components/FloatingActions';
import { staggerContainer, fadeUpVariant } from '@/lib/animations';

const indianStates = [
  'Andhra Pradesh',
  'Arunachal Pradesh',
  'Assam',
  'Bihar',
  'Chhattisgarh',
  'Goa',
  'Gujarat',
  'Haryana',
  'Himachal Pradesh',
  'Jharkhand',
  'Karnataka',
  'Kerala',
  'Madhya Pradesh',
  'Maharashtra',
  'Manipur',
  'Meghalaya',
  'Mizoram',
  'Nagaland',
  'Odisha',
  'Punjab',
  'Rajasthan',
  'Sikkim',
  'Tamil Nadu',
  'Telangana',
  'Tripura',
  'Uttar Pradesh',
  'Uttarakhand',
  'West Bengal',
  'Delhi (NCT)',
  'Jammu & Kashmir',
];

export default function ConcernFeedback() {
  const [formData, setFormData] = useState({
    category: 'Product Quality & FCO Compliance',
    isAnonymous: false,
    fullName: '',
    email: '',
    phone: '',
    state: '',
    district: '',
    userType: 'Farmer',
    productName: '',
    batchNumber: '',
    subject: '',
    description: '',
    agreed: false,
  });

  const [submittedTicket, setSubmittedTicket] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.description || (!formData.isAnonymous && !formData.phone && !formData.email)) {
      alert('Please complete the required fields.');
      return;
    }
    const ticketId = `MAI-${Math.floor(100000 + Math.random() * 900000)}`;
    setSubmittedTicket(ticketId);
  };

  const handleReset = () => {
    setSubmittedTicket(null);
    setFormData({
      category: 'Product Quality & FCO Compliance',
      isAnonymous: false,
      fullName: '',
      email: '',
      phone: '',
      state: '',
      district: '',
      userType: 'Farmer',
      productName: '',
      batchNumber: '',
      subject: '',
      description: '',
      agreed: false,
    });
    setFileName('');
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
              alt="Concern and Feedback"
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
                <span className="text-white">Concern & Feedback</span>
              </motion.div>

              <motion.span
                variants={fadeUpVariant}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary/20 text-emerald-300 border border-primary/30 mb-4"
              >
                <Shield className="w-3.5 h-3.5" />
                Vigil Mechanism & Quality Grievance Portal — India
              </motion.span>

              <motion.h1
                variants={fadeUpVariant}
                className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4"
              >
                Concern, Grievance & Feedback
              </motion.h1>

              <motion.p
                variants={fadeUpVariant}
                className="text-white/80 text-base md:text-lg leading-relaxed mb-4"
              >
                Your feedback matters. Whether you have an inquiry about fertilizer quality under FCO 1985, crop performance feedback, or an ethical concern, our dedicated Indian grievance committee will address it with confidentiality and urgency.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Form Container */}
        <section className="py-12 md:py-16">
          <div className="max-w-container mx-auto px-4 lg:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              {/* Left Info Column */}
              <div className="lg:col-span-4 space-y-6">
                <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-4">
                  <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                    <Lock className="w-5 h-5 text-primary" />
                    Whistleblower & Confidentiality Guarantee
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Under the Companies Act, 2013 and Mike Alpha's Vigil Mechanism, any employee, partner, or farmer may report ethical breaches, fraud, bribery, or safety violations confidentially or anonymously without fear of reprisal.
                  </p>
                  <div className="pt-3 border-t border-gray-100 space-y-2">
                    <div className="flex items-center gap-2 text-xs text-gray-700">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span>Encrypted Submission Channel</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-700">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span>Official Acknowledgment within 48 Hours</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-700">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span>Time-bound resolution within 30 days</span>
                    </div>
                  </div>
                </div>

                <div className="bg-[#EEF3EE] p-6 rounded-2xl border border-emerald-200 space-y-3">
                  <h4 className="font-bold text-gray-900 text-sm">Direct Contact in India</h4>
                  <div className="space-y-2 text-xs text-gray-700">
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-primary shrink-0" />
                      <span>National Toll-Free: <strong>1800-120-MIKE (6453)</strong></span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-primary shrink-0" />
                      <span>Email: <strong>grievance@mikealpha.in</strong></span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Building className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span>Vigil Committee, Makarpura, Vadodara, Gujarat – 390010</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Form Column */}
              <div className="lg:col-span-8">
                <div className="bg-white p-8 md:p-10 rounded-2xl border border-gray-200 shadow-sm">
                  {submittedTicket ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-10 space-y-4"
                    >
                      <div className="w-16 h-16 bg-emerald-100 text-primary rounded-full flex items-center justify-center mx-auto">
                        <CheckCircle className="w-8 h-8" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        Thank You! Your Concern Has Been Registered.
                      </h3>
                      <p className="text-sm text-gray-600 max-w-md mx-auto">
                        Your submission has been logged into our Indian grievance tracking system. Our nodal team has been notified.
                      </p>
                      <div className="inline-block px-5 py-3 rounded-xl bg-gray-50 border border-gray-200 text-sm font-mono text-gray-900 font-bold">
                        Grievance Ticket ID: {submittedTicket}
                      </div>
                      <p className="text-xs text-gray-500 max-w-md mx-auto">
                        Please preserve this Ticket ID for all future follow-up. An acknowledgment has been generated.
                      </p>
                      <div className="pt-4">
                        <button
                          onClick={handleReset}
                          className="px-6 py-2.5 bg-primary text-white text-sm font-semibold rounded-full hover:bg-primary-dark transition-colors"
                        >
                          Submit Another Feedback
                        </button>
                      </div>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <h2 className="text-xl font-bold text-gray-900 mb-1">
                          Submit Your Concern or Feedback
                        </h2>
                        <p className="text-xs text-gray-500">
                          Please provide accurate details so our technical or compliance team can investigate thoroughly.
                        </p>
                      </div>

                      {/* Category Selection */}
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                          Category of Concern / Feedback *
                        </label>
                        <select
                          value={formData.category}
                          onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                          className="w-full h-11 px-3 border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:border-primary"
                          required
                        >
                          <option value="Product Quality & FCO Compliance">Product Quality & FCO 1985 Compliance</option>
                          <option value="Agronomic & Crop Performance">Agronomic & Crop Performance Feedback</option>
                          <option value="Safety & Environmental Issue">Safety & Environmental Hazard</option>
                          <option value="Ethics, Code of Conduct & Vigil Mechanism">Ethics, Anti-Bribery & Code of Conduct (Vigil Mechanism)</option>
                          <option value="Supply Chain, Packaging & Delivery">Supply Chain, Packaging & Logistics</option>
                          <option value="Farmer Training & General Suggestion">Farmer Training & General Suggestion</option>
                        </select>
                      </div>

                      {/* Anonymous Toggle */}
                      <div className="p-3.5 rounded-xl border border-gray-200 bg-gray-50/60 flex items-center justify-between">
                        <div>
                          <span className="text-sm font-semibold text-gray-800 block">Submit Anonymously?</span>
                          <span className="text-xs text-gray-500">Your identity will remain completely hidden from the review committee.</span>
                        </div>
                        <input
                          type="checkbox"
                          id="anonymous-toggle"
                          checked={formData.isAnonymous}
                          onChange={(e) => setFormData({ ...formData, isAnonymous: e.target.checked })}
                          className="w-4 h-4 text-primary rounded border-gray-300 focus:ring-primary"
                        />
                      </div>

                      {/* Contact Fields (Hidden if Anonymous) */}
                      {!formData.isAnonymous && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                              Full Name *
                            </label>
                            <input
                              type="text"
                              value={formData.fullName}
                              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                              placeholder="e.g. Ramesh Patel"
                              className="w-full h-10 px-3 border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:border-primary"
                              required={!formData.isAnonymous}
                            />
                          </div>

                          <div>
                            <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                              I Am A *
                            </label>
                            <select
                              value={formData.userType}
                              onChange={(e) => setFormData({ ...formData, userType: e.target.value })}
                              className="w-full h-10 px-3 border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:border-primary"
                            >
                              <option value="Farmer">Farmer / Grower</option>
                              <option value="Authorized Dealer / Distributor">Authorized Dealer / Distributor</option>
                              <option value="Agronomist / Consultant">Agronomist / Consultant</option>
                              <option value="Employee / Contractor">Employee / Contractor</option>
                              <option value="Supplier / Vendor">Supplier / Vendor</option>
                              <option value="Other">Other</option>
                            </select>
                          </div>

                          <div>
                            <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                              Mobile Number *
                            </label>
                            <input
                              type="tel"
                              value={formData.phone}
                              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                              placeholder="+91 98765 43210"
                              className="w-full h-10 px-3 border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:border-primary"
                              required={!formData.isAnonymous}
                            />
                          </div>

                          <div>
                            <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                              Email Address
                            </label>
                            <input
                              type="email"
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              placeholder="yourname@gmail.com"
                              className="w-full h-10 px-3 border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:border-primary"
                            />
                          </div>
                        </div>
                      )}

                      {/* State & District */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                            State in India *
                          </label>
                          <select
                            value={formData.state}
                            onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                            className="w-full h-10 px-3 border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:border-primary"
                            required
                          >
                            <option value="">-- Select State --</option>
                            {indianStates.map((s) => (
                              <option key={s} value={s}>{s}</option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                            District / Tehsil
                          </label>
                          <input
                            type="text"
                            value={formData.district}
                            onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                            placeholder="e.g. Nashik, Vadodara, Ludhiana"
                            className="w-full h-10 px-3 border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:border-primary"
                          />
                        </div>
                      </div>

                      {/* Product Details (If relevant) */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                            Product Involved (Optional)
                          </label>
                          <input
                            type="text"
                            value={formData.productName}
                            onChange={(e) => setFormData({ ...formData, productName: e.target.value })}
                            placeholder="e.g. Multi-K Potassium Nitrate, Poly-Feed 19-19-19"
                            className="w-full h-10 px-3 border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:border-primary"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                            Batch Number (Optional)
                          </label>
                          <input
                            type="text"
                            value={formData.batchNumber}
                            onChange={(e) => setFormData({ ...formData, batchNumber: e.target.value })}
                            placeholder="Printed on the bag seal"
                            className="w-full h-10 px-3 border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:border-primary"
                          />
                        </div>
                      </div>

                      {/* Subject */}
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                          Subject / Summary of Concern *
                        </label>
                        <input
                          type="text"
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          placeholder="Brief summary of your inquiry or report"
                          className="w-full h-10 px-3 border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:border-primary"
                          required
                        />
                      </div>

                      {/* Description */}
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                          Detailed Description of Concern / Feedback *
                        </label>
                        <textarea
                          rows={5}
                          value={formData.description}
                          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                          placeholder="Please provide full details, dates, crop response observations, or incident context..."
                          className="w-full p-3 border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:border-primary"
                          required
                        />
                      </div>

                      {/* Attachment Simulation */}
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                          Attach Photo / Bag Label / Test Report (Optional)
                        </label>
                        <div className="border border-dashed border-gray-300 rounded-xl p-4 text-center hover:border-primary transition-colors cursor-pointer bg-gray-50/50">
                          <input
                            type="file"
                            id="file-upload"
                            className="hidden"
                            onChange={(e) => {
                              if (e.target.files?.[0]) setFileName(e.target.files[0].name);
                            }}
                          />
                          <label htmlFor="file-upload" className="cursor-pointer">
                            <Upload className="w-6 h-6 text-gray-400 mx-auto mb-1" />
                            <span className="text-xs text-primary font-medium">Click to upload file</span>
                            <span className="text-xs text-gray-500 block mt-0.5">JPG, PNG, PDF up to 25MB</span>
                          </label>
                          {fileName && (
                            <p className="mt-2 text-xs font-semibold text-emerald-600">Attached: {fileName}</p>
                          )}
                        </div>
                      </div>

                      {/* Declaration */}
                      <div className="flex items-start gap-2 pt-2">
                        <input
                          type="checkbox"
                          id="confirm-accurate"
                          checked={formData.agreed}
                          onChange={(e) => setFormData({ ...formData, agreed: e.target.checked })}
                          className="w-4 h-4 text-primary rounded border-gray-300 focus:ring-primary mt-0.5"
                          required
                        />
                        <label htmlFor="confirm-accurate" className="text-xs text-gray-600 leading-relaxed cursor-pointer">
                          I declare that the information provided is truthful to the best of my knowledge. I understand that submitting knowingly false statements is prohibited.
                        </label>
                      </div>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        className="w-full md:w-auto px-8 h-12 bg-primary text-white font-semibold text-sm rounded-full hover:bg-primary-dark transition-colors flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
                      >
                        <Send className="w-4 h-4" />
                        Submit Grievance / Feedback
                      </button>
                    </form>
                  )}
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
