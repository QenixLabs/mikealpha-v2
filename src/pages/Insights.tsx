import { Link } from 'react-router';
import { motion } from 'framer-motion';
import {
  BookOpen,
  Mail,
  Headphones,
  Trophy,
  HelpCircle,
  Play,
  ArrowRight,
  ChevronRight,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/sections/Footer';
import FloatingActions from '@/components/FloatingActions';
import { staggerContainer, fadeUpVariant } from '@/lib/animations';

const insightCategories = [
  {
    icon: BookOpen,
    title: 'Blog',
    description:
      'Agronomy articles, research summaries, and practical tips from the Mike Alpha team on crop nutrition and sustainable farming.',
    image: '/images/blog-1.jpg',
    link: '#blog',
  },
  {
    icon: Mail,
    title: 'Newsletters',
    description:
      'Subscribe for the latest product updates, event invitations, seasonal agronomy advice, and company news delivered to your inbox.',
    image: '/images/blog-2.jpg',
    link: '#newsletter',
  },
  {
    icon: Headphones,
    title: 'Podcasts',
    description:
      'Listen to conversations with agronomists, researchers, and growers about real-world challenges and innovations in plant nutrition.',
    image: '/images/blog-3.jpg',
    link: '#podcasts',
  },
  {
    icon: Trophy,
    title: 'Success Stories',
    description:
      'See how growers around the world are improving yield, quality, and ROI with Mike Alpha products and programs.',
    image: '/images/success-1.jpg',
    link: '#success-stories',
  },
  {
    icon: HelpCircle,
    title: 'FAQ',
    description:
      'Find answers to common questions about products, application methods, compatibility, storage, and agronomic recommendations.',
    image: '/images/event-1.jpg',
    link: '#faq',
  },
  {
    icon: Play,
    title: 'Mike Alpha Agriculture Videos',
    description:
      'Watch product demos, application tutorials, grower testimonials, and expert interviews from the field and the lab.',
    image: '/images/event-2.jpg',
    link: '#videos',
  },
];

const faqs = [
  {
    question: 'How do I choose the right fertilizer for my crop?',
    answer:
      'Use the MultiMatch tool or browse our crop guides to match products to your crop, growth stage, and application method.',
  },
  {
    question: 'Can Mike Alpha products be mixed with other inputs?',
    answer:
      'Many products are compatible, but always perform a jar test and consult compatibility charts before tank-mixing.',
  },
  {
    question: 'Where can I buy Mike Alpha products?',
    answer:
      'Contact our regional sales team or a local authorized distributor through the Contact page.',
  },
  {
    question: 'Do you offer agronomic support?',
    answer:
      'Yes. Our agronomists and digital tools provide guidance on nutrition programs, deficiency diagnosis, and application timing.',
  },
];

const featuredBlogs = [
  {
    title: 'Overcoming Soil Barriers: Effective Fertilization in Calcareous and Alkaline Soils',
    image: '/images/blog-1.jpg',
  },
  {
    title: 'Improving Nitrogen Management and Yield Potential with Croptune™',
    image: '/images/blog-2.jpg',
  },
  {
    title: 'Match-Day Snacks, Powered by Plant Nutrition',
    image: '/images/blog-3.jpg',
  },
];

function InsightCard({ item }: { item: (typeof insightCategories)[0] }) {
  const Icon = item.icon;
  return (
    <motion.div
      variants={fadeUpVariant}
      className="group bg-white border border-brand-border rounded-lg overflow-hidden hover:shadow-card-hover transition-all h-full flex flex-col"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent" />
        <div className="absolute bottom-4 left-4 w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow">
          <Icon className="w-5 h-5 text-primary" />
        </div>
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-bold text-navy mb-3">{item.title}</h3>
        <p className="text-brand-text-secondary leading-relaxed mb-5 flex-1">
          {item.description}
        </p>
        <a
          href={item.link}
          className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
        >
          Explore <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </motion.div>
  );
}

export default function Insights() {
  return (
    <div className="min-h-screen bg-brand-background">
      <Navbar />

      <main className="pt-32">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="/images/hero-bg-2.jpg"
              alt="Agriculture insights"
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
              className="max-w-3xl"
            >
              <motion.div
                variants={fadeUpVariant}
                className="flex items-center gap-2 text-white/70 text-sm mb-4"
              >
                <Link to="/" className="hover:text-coral transition-colors">
                  Home
                </Link>
                <ChevronRight className="w-4 h-4" />
                <span className="text-white">Insights</span>
              </motion.div>

              <motion.span
                variants={fadeUpVariant}
                className="inline-block text-xs font-bold uppercase tracking-widest text-coral mb-4"
              >
                Knowledge Hub
              </motion.span>

              <motion.h1
                variants={fadeUpVariant}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
              >
                Insights for smarter growing
              </motion.h1>

              <motion.p
                variants={fadeUpVariant}
                className="text-white/80 text-lg max-w-2xl mb-8"
              >
                Discover articles, newsletters, podcasts, success stories, and videos that help you
                stay ahead in crop nutrition and sustainable agriculture.
              </motion.p>

              <motion.div variants={fadeUpVariant} className="flex flex-wrap gap-4">
                <a
                  href="#categories"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-coral text-white text-sm font-medium hover:bg-coral-dark transition-colors rounded"
                >
                  Browse Insights
                </a>
                <a
                  href="#newsletter"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-white/40 text-white text-sm font-medium hover:bg-white/10 transition-colors rounded"
                >
                  Subscribe
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Categories */}
        <section id="categories" className="py-20 md:py-28">
          <div className="max-w-container mx-auto px-4 lg:px-6">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-12"
            >
              <motion.span
                variants={fadeUpVariant}
                className="text-xs font-bold uppercase tracking-widest text-coral mb-3 block"
              >
                Explore
              </motion.span>
              <motion.h2
                variants={fadeUpVariant}
                className="text-3xl md:text-4xl font-bold text-navy mb-4"
              >
                Insight categories
              </motion.h2>
              <motion.p
                variants={fadeUpVariant}
                className="text-brand-text-secondary max-w-2xl"
              >
                Curated content for growers, agronomists, and distributors looking for practical
                agronomy knowledge and company updates.
              </motion.p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {insightCategories.map((item) => (
                <InsightCard key={item.title} item={item} />
              ))}
            </motion.div>
          </div>
        </section>

        {/* Featured Blog */}
        <section id="blog" className="py-20 md:py-28 bg-white">
          <div className="max-w-container mx-auto px-4 lg:px-6">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-12"
            >
              <motion.span
                variants={fadeUpVariant}
                className="text-xs font-bold uppercase tracking-widest text-coral mb-3 block"
              >
                Featured
              </motion.span>
              <motion.h2
                variants={fadeUpVariant}
                className="text-3xl md:text-4xl font-bold text-navy mb-4"
              >
                Latest from the blog
              </motion.h2>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {featuredBlogs.map((post) => (
                <motion.a
                  key={post.title}
                  variants={fadeUpVariant}
                  href="#"
                  className="group block bg-brand-background border border-brand-border rounded-lg overflow-hidden hover:shadow-card-hover transition-all"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-semibold text-navy leading-snug group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-20 md:py-28">
          <div className="max-w-container mx-auto px-4 lg:px-6">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-12"
            >
              <motion.span
                variants={fadeUpVariant}
                className="text-xs font-bold uppercase tracking-widest text-coral mb-3 block"
              >
                FAQ
              </motion.span>
              <motion.h2
                variants={fadeUpVariant}
                className="text-3xl md:text-4xl font-bold text-navy mb-4"
              >
                Common questions
              </motion.h2>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {faqs.map((faq) => (
                <motion.div
                  key={faq.question}
                  variants={fadeUpVariant}
                  className="bg-white border border-brand-border rounded-lg p-6"
                >
                  <h3 className="font-semibold text-navy mb-2">{faq.question}</h3>
                  <p className="text-brand-text-secondary text-sm leading-relaxed">{faq.answer}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Newsletter */}
        <section id="newsletter" className="py-20 md:py-28 bg-white">
          <div className="max-w-container mx-auto px-4 lg:px-6">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-navy rounded-2xl overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <motion.div
                  variants={fadeUpVariant}
                  className="p-8 md:p-12 lg:p-14 flex flex-col justify-center"
                >
                  <Mail className="w-10 h-10 text-coral mb-4" />
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    Subscribe to the Mike Alpha newsletter
                  </h2>
                  <p className="text-white/80 mb-6">
                    Get agronomy tips, product updates, event invites, and company news delivered to
                    your inbox.
                  </p>
                  <form className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="flex-1 h-12 px-5 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-coral"
                    />
                    <button
                      type="button"
                      className="h-12 px-6 bg-coral text-white font-medium rounded-lg hover:bg-coral-dark transition-colors"
                    >
                      Subscribe
                    </button>
                  </form>
                </motion.div>

                <motion.div variants={fadeUpVariant} className="hidden lg:block">
                  <img
                    src="/images/youtube-channel.jpg"
                    alt="Mike Alpha agriculture content"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingActions />
    </div>
  );
}
