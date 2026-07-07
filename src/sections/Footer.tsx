import { motion } from 'framer-motion';
import { Facebook, Youtube, Linkedin } from 'lucide-react';
import { staggerContainer, fadeUpVariant } from '@/lib/animations';

const footerLinks = {
  products: {
    title: 'Products',
    items: ['Plant Nutrition', 'NPK Fertilizers', 'Specialty Fertilizers', 'Biological Fertilizers', 'Micronutrients', 'Biostimulants', 'Products catalog', 'FAQ'],
  },
  growingPractice: {
    title: 'Growing Practice',
    items: ['Fertilization Methods', 'Foliar Feeding', 'Soil Application', 'Drip Fertigation', 'Seed Treatment', 'Growing Methods', 'Crop Guides'],
  },
};

// X (Twitter) icon component
const XIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="w-full bg-white text-brand-text-primary">
      {/* Main Footer */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="max-w-container mx-auto px-4 lg:px-6 py-16"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Column 1 - Logo & Description */}
          <motion.div variants={fadeUpVariant} className="lg:col-span-5">
            {/* Logo */}
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

          <div className="lg:col-span-7 grid grid-cols-2 gap-8">
            {/* Column 2 - Products */}
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

            {/* Column 3 - Growing Practice */}
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
          </div>
        </div>
      </motion.div>

      {/* Bottom Bar */}
      <div className="border-t border-brand-border">
        <div className="max-w-container mx-auto px-4 lg:px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
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
          </div>
        </div>
      </div>
    </footer>
  );
}
