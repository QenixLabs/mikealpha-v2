import { useState } from 'react';
import { motion } from 'framer-motion';
import { Facebook, Youtube, Linkedin } from 'lucide-react';
import { Checkbox } from '@/components/ui/checkbox';
import { staggerContainer, fadeUpVariant } from '@/lib/animations';

const footerLinks = {
  products: {
    title: 'Products',
    items: [
      'Plant Nutrition',
      'NPK Fertilizers',
      'Specialty Fertilizers',
      'Biological Fertilizers',
      'Micronutrients',
      'Biostimulants',
      'Products Catalog',
      'FAQ',
    ],
  },
  growingPractice: {
    title: 'Growing Practice',
    items: [
      'Fertilization Methods',
      'Foliar Feeding',
      'Soil Application',
      'Drip Fertigation',
      'Seed Treatment',
      'Growing Methods',
      'Crop Guides',
    ],
  },
  myTools: {
    title: 'My Tools',
    items: [
      'NutriNet™',
      'FertiMatch™',
      'FoliMatch™',
      'Conversion Calculator',
      'Deficiency Pro',
    ],
  },
  aboutUs: {
    title: 'About us',
    items: [
      'About Mike Alpha',
      'Leadership Team',
      'R&D Center',
      'Values',
      'News & Events',
      'Worldwide',
      'Contact us',
    ],
  },
};

// X (Twitter) icon component
const XIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export default function Footer() {
  const [email, setEmail] = useState('');
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && agreed) {
      alert('Thank you for subscribing!');
      setEmail('');
      setAgreed(false);
    }
  };

  return (
    <footer className="w-full bg-white text-brand-text-primary">
      {/* Newsletter Band */}
      <div className="bg-[#EEF3EE] py-12">
        <div className="max-w-container mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl md:text-2xl font-semibold text-gray-800 uppercase tracking-wider mb-3">
                GET THE VERY LATEST FROM MIKE ALPHA
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                The Mike Alpha newsletter keeps you updated on advanced plant nutrition information, and provides the latest news & events you and your crops should know about.
              </p>
            </div>
            <div>
              <p className="text-xs font-medium text-gray-700 uppercase tracking-wider mb-3">
                Enter your email and get the very latest from Mike Alpha
              </p>
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className="w-full h-12 pl-4 pr-24 border border-gray-300 rounded-full text-sm focus:outline-none focus:border-primary bg-white"
                    required
                  />
                  <button
                    type="submit"
                    className="absolute right-1.5 top-1/2 -translate-y-1/2 h-9 px-5 bg-primary text-white font-semibold text-sm rounded-full hover:bg-primary-dark transition-colors"
                  >
                    Send
                  </button>
                </div>
                <div className="flex items-start gap-2">
                  <Checkbox
                    id="footer-agree"
                    checked={agreed}
                    onCheckedChange={(checked) => setAgreed(checked === true)}
                    className="mt-0.5 border-gray-400 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                  />
                  <label htmlFor="footer-agree" className="text-xs text-gray-600 cursor-pointer">
                    I agree to receive information via email
                  </label>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="max-w-container mx-auto px-4 lg:px-6 py-16"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Column 1 - Logo & Description */}
          <motion.div variants={fadeUpVariant} className="lg:col-span-4">
            <a href="/" className="flex items-center gap-2 mb-6">
              <img src="/images/logo.png" alt="Mike Alpha" className="h-16 w-auto" />
            </a>

            <p className="text-sm font-semibold text-brand-text-primary mb-2">
              Pioneering the Future
            </p>
            <p className="text-sm text-brand-text-secondary leading-relaxed mb-6 max-w-sm">
              Mike Alpha Agro is a leading supplier of specialty fertilizers in India, bringing advanced plant nutrition technologies to farmers across the country. We combine global science with deep understanding of Indian farming conditions for stronger yields and healthier crops.
            </p>

            {/* Social Icons */}
            <div>
              <p className="text-sm font-medium text-brand-text-primary mb-3">Follow us</p>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-9 h-9 rounded-full border border-brand-border flex items-center justify-center text-brand-text-secondary hover:border-primary hover:text-primary hover:bg-primary/10 transition-all"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-9 h-9 rounded-full border border-brand-border flex items-center justify-center text-brand-text-secondary hover:border-primary hover:text-primary hover:bg-primary/10 transition-all"
                  aria-label="YouTube"
                >
                  <Youtube className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-9 h-9 rounded-full border border-brand-border flex items-center justify-center text-brand-text-secondary hover:border-primary hover:text-primary hover:bg-primary/10 transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-9 h-9 rounded-full border border-brand-border flex items-center justify-center text-brand-text-secondary hover:border-primary hover:text-primary hover:bg-primary/10 transition-all"
                  aria-label="X"
                >
                  <XIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>

          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div variants={fadeUpVariant}>
              <h4 className="text-sm font-semibold text-brand-text-primary uppercase tracking-wider mb-4">
                {footerLinks.products.title}
              </h4>
              <ul className="space-y-2.5">
                {footerLinks.products.items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-brand-text-secondary hover:text-brand-text-primary transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={fadeUpVariant}>
              <h4 className="text-sm font-semibold text-brand-text-primary uppercase tracking-wider mb-4">
                {footerLinks.growingPractice.title}
              </h4>
              <ul className="space-y-2.5">
                {footerLinks.growingPractice.items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-brand-text-secondary hover:text-brand-text-primary transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={fadeUpVariant}>
              <h4 className="text-sm font-semibold text-brand-text-primary uppercase tracking-wider mb-4">
                {footerLinks.myTools.title}
              </h4>
              <ul className="space-y-2.5">
                {footerLinks.myTools.items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-brand-text-secondary hover:text-brand-text-primary transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={fadeUpVariant}>
              <h4 className="text-sm font-semibold text-brand-text-primary uppercase tracking-wider mb-4">
                {footerLinks.aboutUs.title}
              </h4>
              <ul className="space-y-2.5">
                {footerLinks.aboutUs.items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-brand-text-secondary hover:text-brand-text-primary transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Bottom Bar */}
      <div className="border-t border-brand-border">
        <div className="max-w-container mx-auto px-4 lg:px-6 pt-5 pb-24 md:pb-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-brand-text-muted">
            &copy; All rights reserved (2026) Mike Alpha Agro Ltd
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-brand-text-muted hover:text-brand-text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-brand-text-muted hover:text-brand-text-primary transition-colors">
              Terms of Use
            </a>
            <a href="#" className="text-xs text-brand-text-muted hover:text-brand-text-primary transition-colors">
              Copyright policy
            </a>
            <a href="#" className="text-xs text-brand-text-muted hover:text-brand-text-primary transition-colors">
              Concern & Feedback
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
