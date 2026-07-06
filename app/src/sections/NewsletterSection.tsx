import { useState } from 'react';
import { motion } from 'framer-motion';
import { Checkbox } from '@/components/ui/checkbox';

export default function NewsletterSection() {
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
    <section className="w-full py-16 bg-[#EEF3EE]">
      <div className="max-w-container mx-auto px-4 lg:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 uppercase tracking-wider mb-4">
              Get the very latest from Mike Alpha
            </h2>
            <p className="text-base text-gray-600 leading-relaxed">
              The Mike Alpha newsletter keeps you updated on advanced plant nutrition information, and provides the latest news &amp; events you and your crops should know about.
            </p>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-sm font-medium text-gray-700 uppercase tracking-wider mb-4">
              Enter your email and get the very latest from Mike Alpha
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Email Input */}
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="w-full h-14 pl-6 pr-28 border border-gray-300 rounded-full text-base focus:outline-none focus:border-primary bg-white"
                  required
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 h-10 px-6 bg-primary text-white font-semibold text-sm rounded-full hover:bg-primary-dark transition-colors"
                >
                  Send
                </button>
              </div>

              {/* Checkbox */}
              <div className="flex items-start gap-3">
                <Checkbox
                  id="agree"
                  checked={agreed}
                  onCheckedChange={(checked) => setAgreed(checked === true)}
                  className="mt-0.5 border-gray-400 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                />
                <label htmlFor="agree" className="text-sm text-gray-600 cursor-pointer">
                  I agree to receive information via email
                </label>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
