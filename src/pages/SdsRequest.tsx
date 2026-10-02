import { useState } from 'react';
import { Link } from 'react-router';
import { motion } from 'framer-motion';
import {
  Download,
  Search,
  CheckCircle,
  Upload,
  ChevronRight,
  Shield,
  Send,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/sections/Footer';
import FloatingActions from '@/components/FloatingActions';
import { staggerContainer, fadeUpVariant } from '@/lib/animations';

type SdsDocument = {
  id: string;
  name: string;
  category: string;
  npk: string;
  formula: string;
  ghsClass: string;
  casNo: string;
  pdfUrl: string;
};

const popularSds: SdsDocument[] = [
  {
    id: 'sds-1',
    name: 'Multi-K™ Classic (Potassium Nitrate)',
    category: 'Potassium Nitrate',
    npk: '13-0-45',
    formula: 'KNO₃',
    ghsClass: 'Oxidizing Solid Cat. 3',
    casNo: '7757-79-1',
    pdfUrl: '#',
  },
  {
    id: 'sds-2',
    name: 'Poly-Feed™ Standard All-Round',
    category: 'Water Soluble NPK',
    npk: '19-19-19 + ME',
    formula: 'NPK + Trace Elements',
    ghsClass: 'Non-Hazardous Fertilizer Mixture',
    casNo: 'Mixture',
    pdfUrl: '#',
  },
  {
    id: 'sds-3',
    name: 'Multi-MKP™ (Mono Potassium Phosphate)',
    category: 'Water Soluble Phosphate',
    npk: '00-52-34',
    formula: 'KH₂PO₄',
    ghsClass: 'Non-Hazardous Fertilizer',
    casNo: '7778-77-0',
    pdfUrl: '#',
  },
  {
    id: 'sds-4',
    name: 'Multi-MAP™ (Mono Ammonium Phosphate)',
    category: 'Water Soluble Starter',
    npk: '12-61-00',
    formula: 'NH₄H₂PO₄',
    ghsClass: 'Non-Hazardous Fertilizer',
    casNo: '7722-76-1',
    pdfUrl: '#',
  },
  {
    id: 'sds-5',
    name: 'Haifa Cal™ Prime (Calcium Nitrate)',
    category: 'Water Soluble Calcium',
    npk: '15.5-0-0 + 19% Ca',
    formula: '5Ca(NO₃)₂·NH₄NO₃·10H₂O',
    ghsClass: 'Acute Toxicity Cat. 4, Eye Damage Cat. 1',
    casNo: '15245-12-2',
    pdfUrl: '#',
  },
  {
    id: 'sds-6',
    name: 'Magnisal™ (Magnesium Nitrate Flakes)',
    category: 'Specialty Nitrate',
    npk: '11-0-0 + 16% MgO',
    formula: 'Mg(NO₃)₂·6H₂O',
    ghsClass: 'Non-Hazardous in Dilution',
    casNo: '13446-18-9',
    pdfUrl: '#',
  },
  {
    id: 'sds-7',
    name: 'HaifaStim™ Mar (Seaweed Ascophyllum Nodosum)',
    category: 'Biostimulants',
    npk: 'Organic Bio-stimulant',
    formula: 'Ascophyllum Nodosum Bioactive Extract',
    ghsClass: 'Non-Hazardous Botanical Extract',
    casNo: '84775-78-0',
    pdfUrl: '#',
  },
  {
    id: 'sds-8',
    name: 'Haifa Turbo-K™ Complex Granular',
    category: 'Granular NPK',
    npk: '14-14-17 + 2MgO + TE',
    formula: 'KNO₃ Based Granular Complex',
    ghsClass: 'Non-Hazardous Granular Fertilizer',
    casNo: 'Mixture',
    pdfUrl: '#',
  },
];

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
];

export default function SdsRequest() {
  const [searchQuery, setSearchQuery] = useState('');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    country: 'India',
    state: '',
    address: '',
    brandName: '',
    npkFormula: '',
    productDescription: '',
    language: 'English (India)',
    agree: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const [fileName, setFileName] = useState('');
  const [downloadModalDoc, setDownloadModalDoc] = useState<SdsDocument | null>(null);

  const filteredDocs = popularSds.filter(
    (doc) =>
      doc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.npk.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.brandName) {
      alert('Please fill out all required fields.');
      return;
    }
    setSubmitted(true);
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
              alt="Safety Data Sheets"
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
                <Link to="/products" className="hover:text-primary transition-colors">
                  Products
                </Link>
                <ChevronRight className="w-4 h-4" />
                <span className="text-white">SDS Request</span>
              </motion.div>

              <motion.span
                variants={fadeUpVariant}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary/20 text-emerald-300 border border-primary/30 mb-4"
              >
                <Shield className="w-3.5 h-3.5" />
                GHS & Indian MSIHC Rules 1989 Compliant
              </motion.span>

              <motion.h1
                variants={fadeUpVariant}
                className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4"
              >
                Safety Data Sheets (SDS) & Technical Data
              </motion.h1>

              <motion.p
                variants={fadeUpVariant}
                className="text-white/80 text-base md:text-lg leading-relaxed mb-4"
              >
                Access official Safety Data Sheets (SDS) and technical safety bulletins relating to the handling, storage, transport, and application of Mike Alpha plant nutrition products in India.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Quick Downloads Section */}
        <section className="py-12 bg-white border-b border-gray-200">
          <div className="max-w-container mx-auto px-4 lg:px-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Instant SDS Downloads (India GHS Versions)
                </h2>
                <p className="text-sm text-gray-600 mt-1">
                  Download certified 16-section Safety Data Sheets for top specialty fertilizer formulations.
                </p>
              </div>

              {/* Search Bar */}
              <div className="relative w-full md:w-80">
                <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by grade or name..."
                  className="w-full h-10 pl-9 pr-4 rounded-full border border-gray-300 text-sm focus:outline-none focus:border-primary"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredDocs.map((doc) => (
                <div
                  key={doc.id}
                  className="p-5 rounded-2xl border border-gray-200 bg-brand-background hover:border-primary hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 inline-block mb-3">
                      {doc.category}
                    </span>
                    <h3 className="font-bold text-gray-900 text-base mb-1">{doc.name}</h3>
                    <div className="space-y-1 text-xs text-gray-600 mb-4">
                      <div>
                        <strong>NPK Grade:</strong> {doc.npk}
                      </div>
                      <div>
                        <strong>Chemical:</strong> {doc.formula}
                      </div>
                      <div>
                        <strong>CAS No:</strong> {doc.casNo}
                      </div>
                      <div className="text-[11px] text-gray-500 pt-1 border-t border-gray-200 mt-2">
                        {doc.ghsClass}
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => setDownloadModalDoc(doc)}
                    className="w-full py-2 px-3 bg-white border border-primary text-primary text-xs font-semibold rounded-lg hover:bg-primary hover:text-white transition-colors flex items-center justify-center gap-1.5 shadow-sm"
                  >
                    <Download className="w-3.5 h-3.5" />
                    Download SDS (PDF)
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Custom SDS Request Form */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 lg:px-6">
            <div className="bg-white p-8 md:p-12 rounded-2xl border border-gray-200 shadow-sm">
              <div className="text-center max-w-xl mx-auto mb-10">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  Request a Custom Product SDS or COA
                </h2>
                <p className="text-sm text-gray-600">
                  Can't find your specific blend or customized NPK formulation? Submit the form below and our Indian technical regulatory department will issue the certified datasheet to your email.
                </p>
              </div>

              {submitted ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-16 h-16 bg-emerald-100 text-primary rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    SDS Request Dispatched Successfully!
                  </h3>
                  <p className="text-sm text-gray-600 max-w-md mx-auto">
                    Thank you, {formData.fullName}. A copy of the Safety Data Sheet for <strong>{formData.brandName}</strong> has been forwarded to <strong>{formData.email}</strong>.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2 bg-primary text-white text-sm font-semibold rounded-full hover:bg-primary-dark transition-colors"
                  >
                    Request Another SDS
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Dr. Rajesh Sharma"
                        className="w-full h-10 px-3 border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:border-primary"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                        Official / Personal Email *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@company.com"
                        className="w-full h-10 px-3 border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:border-primary"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                        Contact Telephone / Mobile *
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full h-10 px-3 border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:border-primary"
                        required
                      />
                    </div>

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
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                      Brand Name of the Product *
                    </label>
                    <select
                      value={formData.brandName}
                      onChange={(e) => setFormData({ ...formData, brandName: e.target.value })}
                      className="w-full h-11 px-3 border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:border-primary"
                      required
                    >
                      <option value="">-- Choose Brand Name --</option>
                      <option value="Multi-K™ (Potassium Nitrate)">Multi-K™ (Potassium Nitrate 13-0-45)</option>
                      <option value="Poly-Feed™ (Water Soluble NPKs)">Poly-Feed™ (Water Soluble NPK Blends)</option>
                      <option value="Multi-MKP™ (00-52-34)">Multi-MKP™ (Mono Potassium Phosphate)</option>
                      <option value="Multi-MAP™ (12-61-00)">Multi-MAP™ (Mono Ammonium Phosphate)</option>
                      <option value="Haifa Cal™ Prime (Calcium Nitrate)">Haifa Cal™ Prime (Calcium Nitrate)</option>
                      <option value="Magnisal™ (Magnesium Nitrate)">Magnisal™ (Magnesium Nitrate)</option>
                      <option value="HaifaStim™ (Bio-stimulants)">HaifaStim™ (Bio-stimulants Range)</option>
                      <option value="Haifa Micro™ (Chelated Micronutrients)">Haifa Micro™ (Chelated Micronutrients)</option>
                      <option value="Haifa Turbo-K™ (Complex NPK)">Haifa Turbo-K™ (Complex NPK)</option>
                      <option value="Multicote™ (Controlled Release)">Multicote™ (Controlled Release Fertilizer)</option>
                      <option value="Other Specialty Formulation">Other Specialty Formulation</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                        NPK Formula (e.g., 19-19-19, 13-00-45)
                      </label>
                      <input
                        type="text"
                        value={formData.npkFormula}
                        onChange={(e) => setFormData({ ...formData, npkFormula: e.target.value })}
                        placeholder="As specified on bag label"
                        className="w-full h-10 px-3 border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:border-primary"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                        Language of SDS
                      </label>
                      <select
                        value={formData.language}
                        onChange={(e) => setFormData({ ...formData, language: e.target.value })}
                        className="w-full h-10 px-3 border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:border-primary"
                      >
                        <option value="English (India)">English (India)</option>
                        <option value="Hindi">हिन्दी (Hindi)</option>
                        <option value="Gujarati">ગુજરાતી (Gujarati)</option>
                        <option value="Marathi">मराठी (Marathi)</option>
                      </select>
                    </div>
                  </div>

                  {/* Bag photo upload */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                      Upload Bag Label / Batch Stamp Photo (Optional)
                    </label>
                    <div className="border border-dashed border-gray-300 rounded-xl p-4 text-center hover:border-primary transition-colors cursor-pointer bg-gray-50/50">
                      <input
                        type="file"
                        id="sds-file-upload"
                        className="hidden"
                        onChange={(e) => {
                          if (e.target.files?.[0]) setFileName(e.target.files[0].name);
                        }}
                      />
                      <label htmlFor="sds-file-upload" className="cursor-pointer">
                        <Upload className="w-6 h-6 text-gray-400 mx-auto mb-1" />
                        <span className="text-xs text-primary font-medium">Upload photo of product bag</span>
                        <span className="text-xs text-gray-500 block mt-0.5">JPG, PNG, PDF up to 25MB</span>
                      </label>
                      {fileName && (
                        <p className="mt-2 text-xs font-semibold text-emerald-600">Selected: {fileName}</p>
                      )}
                    </div>
                  </div>

                  <div className="flex items-start gap-2 pt-2">
                    <input
                      type="checkbox"
                      id="sds-agree"
                      checked={formData.agree}
                      onChange={(e) => setFormData({ ...formData, agree: e.target.checked })}
                      className="w-4 h-4 text-primary rounded border-gray-300 focus:ring-primary mt-0.5"
                      required
                    />
                    <label htmlFor="sds-agree" className="text-xs text-gray-600 leading-relaxed cursor-pointer">
                      I agree to receive the requested Safety Data Sheet and relevant agronomic safety updates via email in compliance with the Privacy Policy.
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full h-12 bg-primary text-white font-semibold text-sm rounded-full hover:bg-primary-dark transition-colors flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
                  >
                    <Send className="w-4 h-4" />
                    Request Safety Data Sheet
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      {/* SDS Preview / Download Modal */}
      {downloadModalDoc && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-gray-100 space-y-4">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                  Official Safety Data Sheet
                </span>
                <h3 className="text-lg font-bold text-gray-900 mt-0.5">
                  {downloadModalDoc.name}
                </h3>
              </div>
              <button
                onClick={() => setDownloadModalDoc(null)}
                className="text-gray-400 hover:text-gray-600 text-lg font-bold"
              >
                ✕
              </button>
            </div>

            <div className="bg-gray-50 p-4 rounded-xl space-y-2 text-xs text-gray-700">
              <div className="flex justify-between border-b pb-1.5">
                <span className="text-gray-500">NPK Formulation:</span>
                <span className="font-semibold">{downloadModalDoc.npk}</span>
              </div>
              <div className="flex justify-between border-b pb-1.5">
                <span className="text-gray-500">Chemical Formula:</span>
                <span className="font-semibold">{downloadModalDoc.formula}</span>
              </div>
              <div className="flex justify-between border-b pb-1.5">
                <span className="text-gray-500">CAS Registry No.:</span>
                <span className="font-semibold">{downloadModalDoc.casNo}</span>
              </div>
              <div className="flex justify-between border-b pb-1.5">
                <span className="text-gray-500">Regulatory Status:</span>
                <span className="font-semibold text-emerald-700">FCO 1985 & GHS Compliant</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Jurisdiction:</span>
                <span className="font-semibold">Republic of India</span>
              </div>
            </div>

            <p className="text-xs text-gray-500 leading-relaxed">
              This document contains all 16 mandatory sections per the Globally Harmonized System (GHS) and the Indian Manufacture, Storage and Import of Hazardous Chemical Rules 1989.
            </p>

            <div className="flex gap-3 pt-2">
              <button
                onClick={() => {
                  alert(`Downloading SDS for ${downloadModalDoc.name}...`);
                  setDownloadModalDoc(null);
                }}
                className="flex-1 h-11 bg-primary text-white font-semibold text-xs rounded-full hover:bg-primary-dark transition-colors flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                Confirm Download (PDF)
              </button>
              <button
                onClick={() => setDownloadModalDoc(null)}
                className="px-5 h-11 border border-gray-300 text-gray-700 font-semibold text-xs rounded-full hover:bg-gray-50 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
      <FloatingActions />
    </div>
  );
}
