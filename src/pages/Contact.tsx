import { useState } from 'react';
import { Link } from 'react-router';
import { motion } from 'framer-motion';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  ChevronRight,
  Factory,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/sections/Footer';
import FloatingActions from '@/components/FloatingActions';
import { staggerContainer, fadeUpVariant } from '@/lib/animations';

const contactDetails = [
  {
    icon: Phone,
    title: 'Call Us',
    value: '+91 87992 90971',
    href: 'tel:+918799290971',
  },
  {
    icon: Mail,
    title: 'Mail Us',
    value: 'mikealphaagro@gmail.com',
    href: 'mailto:mikealphaagro@gmail.com',
  },
  {
    icon: MapPin,
    title: 'Office',
    value: 'C-304, Vivaan Elementos, SP Ring Road, Gandhinagar, Gujarat 382421',
    href: 'https://maps.google.com/?q=C-304,+Vivaan+Elementos,+SP+Ring+Road,+Gandhinagar,+Gujarat+382421',
  },
  {
    icon: Clock,
    title: 'Hours',
    value: 'Mon–Fri: 9AM–6PM',
  },
];

const subjectOptions = [
  'Product Inquiry',
  'Technical Support',
  'Dealer Inquiry',
  'Other',
];

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: subjectOptions[0],
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: '', email: '', phone: '', subject: subjectOptions[0], message: '' });
  };

  return (
    <div className="min-h-screen bg-brand-background">
      <Navbar />

      <main className="pt-32">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="/images/hero-bg.jpg"
              alt="Agriculture field"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-navy/80" />
          </div>

          <div className="relative z-10 max-w-container mx-auto px-4 lg:px-6 py-20 md:py-28">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div variants={fadeUpVariant} className="flex items-center gap-2 text-white/70 text-sm mb-4">
                <Link to="/" className="hover:text-coral transition-colors">Home</Link>
                <ChevronRight className="w-4 h-4" />
                <span className="text-white">Contact</span>
              </motion.div>

              <motion.h1
                variants={fadeUpVariant}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
              >
                Contact Us
              </motion.h1>

              <motion.p
                variants={fadeUpVariant}
                className="text-white/70 text-lg max-w-2xl"
              >
                Reach out for product inquiries, technical support, or partnership opportunities.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Contact details */}
        <section className="py-16 md:py-20">
          <div className="max-w-container mx-auto px-4 lg:px-6">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {contactDetails.map((item) => (
                <motion.a
                  key={item.title}
                  variants={fadeUpVariant}
                  href={item.href || '#'}
                  target={item.href?.startsWith('http') ? '_blank' : undefined}
                  rel={item.href?.startsWith('http') ? 'noreferrer' : undefined}
                  className="bg-white border border-brand-border p-6 rounded-lg hover:shadow-card transition-shadow"
                >
                  <div className="w-10 h-10 bg-coral-subtle text-coral rounded-lg flex items-center justify-center mb-4">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-text-muted mb-2">
                    {item.title}
                  </h3>
                  <p className="text-brand-text-primary font-medium">{item.value}</p>
                </motion.a>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Connect form */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-container mx-auto px-4 lg:px-6">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              <motion.div variants={fadeUpVariant}>
                <span className="text-xs font-bold uppercase tracking-widest text-coral mb-3 block">
                  Let's Connect
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
                  Send us your message
                </h2>
                <p className="text-brand-text-secondary leading-relaxed mb-8">
                  Our agronomy team is ready to answer product questions and help you build a custom
                  crop nutrition program for your farm or business.
                </p>

                <div className="rounded-lg overflow-hidden">
                  <img
                    src="/images/hero-bg-2.jpg"
                    alt="Agriculture"
                    className="w-full h-64 object-cover"
                  />
                </div>
              </motion.div>

              <motion.div variants={fadeUpVariant}>
                {submitted ? (
                  <div className="bg-brand-background border border-brand-border p-8 rounded-lg text-center">
                    <div className="w-12 h-12 bg-coral-subtle text-coral rounded-full flex items-center justify-center mx-auto mb-4">
                      <Send className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-navy mb-2">Message sent</h3>
                    <p className="text-brand-text-secondary mb-6">We will get back to you soon.</p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-5 py-2.5 bg-coral text-white text-sm font-medium hover:bg-coral-dark transition-colors rounded"
                    >
                      Send another
                    </button>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="bg-brand-background border border-brand-border p-6 md:p-8 rounded-lg space-y-5"
                  >
                    <div>
                      <label className="block text-sm font-medium text-brand-text-primary mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        className="w-full h-10 px-3 bg-white border border-brand-border text-brand-text-primary focus:outline-none focus:border-navy rounded"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-brand-text-primary mb-1">
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          required
                          className="w-full h-10 px-3 bg-white border border-brand-border text-brand-text-primary focus:outline-none focus:border-navy rounded"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-brand-text-primary mb-1">
                          Phone
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          className="w-full h-10 px-3 bg-white border border-brand-border text-brand-text-primary focus:outline-none focus:border-navy rounded"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-brand-text-primary mb-1">
                        Subject
                      </label>
                      <select
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        className="w-full h-10 px-3 bg-white border border-brand-border text-brand-text-primary focus:outline-none focus:border-navy rounded"
                      >
                        {subjectOptions.map((option) => (
                          <option key={option} value={option}>{option}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-brand-text-primary mb-1">
                        Message
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={4}
                        required
                        className="w-full px-3 py-2 bg-white border border-brand-border text-brand-text-primary focus:outline-none focus:border-navy rounded resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-coral text-white text-sm font-medium hover:bg-coral-dark transition-colors rounded"
                    >
                      <Send className="w-4 h-4" /> Send Message
                    </button>
                  </form>
                )}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Manufacturing */}
        <section className="py-16 md:py-20">
          <div className="max-w-container mx-auto px-4 lg:px-6">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
            >
              <motion.div variants={fadeUpVariant}>
                <div className="w-12 h-12 bg-coral-subtle text-coral rounded-lg flex items-center justify-center mb-6">
                  <Factory className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-coral mb-3 block">
                  Manufacturing
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
                  Where It All Comes Together
                </h2>
                <p className="text-brand-text-secondary leading-relaxed mb-6">
                  Our modern manufacturing facility follows rigorous quality control at every stage,
                  ensuring that farmers receive consistent, high-performance crop nutrition products.
                </p>
                <div className="bg-white border border-brand-border p-5 rounded-lg">
                  <p className="text-sm text-brand-text-muted uppercase tracking-wider mb-2">Factory Address</p>
                  <p className="text-brand-text-primary font-medium">
                    Survey No. 289, Block No. 247/1, UMA Estate, K T Compound,
                    AT - Vasna (IYAVA), TA - Sanand, Dist-Ahmedabad, Gujarat - 383170
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeUpVariant} className="bg-white border border-brand-border rounded-xl p-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-brand-text-primary">Factory location</span>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Survey+No.+289%2C+Block+No.+247%2F1%2C+UMA+Estate%2C+K+T+Compound%2C+Vasna+IYAVA%2C+Sanand%2C+Ahmedabad%2C+Gujarat+383170"
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-medium text-coral hover:text-coral-dark transition-colors"
                  >
                    Open in Maps
                  </a>
                </div>
                <div className="rounded-xl overflow-hidden h-56 lg:h-64">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.5!2d72.68!3d23.22!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c2b977c8fb459%3A0x7c75b757c860f0e3!2sGandhinagar%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Location"
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingActions />
    </div>
  );
}
