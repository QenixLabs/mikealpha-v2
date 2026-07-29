import { Link } from 'react-router';
import { motion } from 'framer-motion';
import {
  Users,
  Handshake,
  Leaf,
  Scale,
  Eye,
  Heart,
  ChevronRight,
  ArrowRight,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/sections/Footer';
import FloatingActions from '@/components/FloatingActions';
import NewsletterSection from '@/sections/NewsletterSection';
import { staggerContainer, fadeUpVariant } from '@/lib/animations';

const principles = [
  {
    icon: Users,
    title: 'People-Centric Approach',
    description:
      'At Mike Alpha, we view our employees, their families, customers, suppliers, and partners foremost as individuals. This people-first perspective informs every decision we make and every interaction we have.',
  },
  {
    icon: Handshake,
    title: 'Collaboration & Partnership',
    description:
      'We nurture a spirit of collaboration and build authentic, meaningful partnerships, both internally and externally, recognizing that we achieve more when we work together.',
  },
  {
    icon: Leaf,
    title: 'Caring for the Environment & Community',
    description:
      'We take into account the potential impact of our actions on both the environment and the communities we serve. We empower the communities where we live and work by encouraging active employee involvement and supporting voluntary activities.',
  },
  {
    icon: Scale,
    title: 'Fairness & Respect',
    description:
      'Fairness underpins every decision, and we aim to show respect in all interactions, ensuring that our actions reflect our values.',
  },
  {
    icon: Eye,
    title: 'Transparency & Openness',
    description:
      'We believe in transparency and are committed to open, respectful communication at all levels and through all channels.',
  },
  {
    icon: Heart,
    title: 'Embracing Diversity',
    description:
      'Our recruitment and employment practices are grounded in the principles of Diversity, Equity, and Inclusion (DEI). We prioritize high-quality candidates from underrepresented groups, including women, individuals over 45, people with disabilities, and minority populations, fostering a diverse and inclusive workplace.',
  },
];

const relatedArticles = [
  {
    title: 'IMPACT is our Compass',
    excerpt:
      'At Mike Alpha, our commitment to promoting a better future for humanity and the planet is at the center of everything we do.',
    image: '/images/blog-1.jpg',
    link: '/precision-impact',
  },
  {
    title: 'Social IMPACT: Compassion is Our Organizational Compass',
    excerpt:
      'Compassion is the cornerstone of our organizational culture, guiding our actions and shaping how we engage with people and communities.',
    image: '/images/blog-2.jpg',
    link: '/precision-impact',
  },
  {
    title: 'Strengthening Partnerships: CEO Visit to South Korea',
    excerpt:
      'Insights from a recent visit to South Korea, where we had the privilege of meeting partners and growers across the region.',
    image: '/images/event-3.jpg',
    link: '/insights',
  },
];

function PrincipleCard({
  principle,
  index,
}: {
  principle: (typeof principles)[0];
  index: number;
}) {
  const Icon = principle.icon;
  return (
    <motion.div
      variants={fadeUpVariant}
      className="flex flex-col sm:flex-row gap-5 p-6 bg-white border border-brand-border rounded-xl hover:shadow-card transition-shadow"
    >
      <div className="w-16 h-16 shrink-0 rounded-full bg-primary-light flex items-center justify-center">
        <Icon className="w-7 h-7 text-primary" />
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-bold text-navy mb-2">
          {index + 1}. {principle.title}
        </h3>
        <p className="text-brand-text-secondary leading-relaxed">{principle.description}</p>
      </div>
    </motion.div>
  );
}

export default function Compassion() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="pt-32">
        {/* Header */}
        <section className="py-12 md:py-16">
          <div className="max-w-container mx-auto px-4 lg:px-6">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div
                variants={fadeUpVariant}
                className="flex items-center gap-2 text-sm text-brand-text-secondary mb-6"
              >
                <Link to="/" className="hover:text-primary transition-colors">
                  HOME
                </Link>
                <ChevronRight className="w-4 h-4" />
                <span className="text-navy">Our COMPASSion Guide</span>
              </motion.div>

              <motion.h1
                variants={fadeUpVariant}
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-6"
              >
                Our COMPASSion Guide
              </motion.h1>

              <motion.p
                variants={fadeUpVariant}
                className="text-lg text-brand-text-secondary leading-relaxed max-w-3xl"
              >
                COMPASSion is our guiding principle, shaping how we engage with people,
                communities, and the environment. Our business ethos is built on creating humane,
                caring, fair, and respectful relationships that foster cooperation and trust, both
                within our organization and beyond. We are committed to adding positive value to
                everyone we encounter, striving for win-win outcomes in all our interactions.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Principles */}
        <section className="py-12 md:py-16 bg-brand-background">
          <div className="max-w-container mx-auto px-4 lg:px-6">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {principles.map((principle, idx) => (
                <PrincipleCard key={principle.title} principle={principle} index={idx} />
              ))}
            </motion.div>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-16 md:py-24">
          <div className="max-w-container mx-auto px-4 lg:px-6">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-12 text-center"
            >
              <motion.h2
                variants={fadeUpVariant}
                className="text-2xl md:text-3xl font-bold text-navy"
              >
                You may also be interested in this
              </motion.h2>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {relatedArticles.map((article) => (
                <motion.div
                  key={article.title}
                  variants={fadeUpVariant}
                  className="group bg-white border border-brand-border rounded-lg overflow-hidden hover:shadow-card-hover transition-all"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-navy mb-2 leading-snug">
                      {article.title}
                    </h3>
                    <p className="text-sm text-brand-text-secondary leading-relaxed mb-4">
                      {article.excerpt}
                    </p>
                    <Link
                      to={article.link}
                      className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                    >
                      Read more <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <NewsletterSection />
      </main>

      <Footer />
      <FloatingActions />
    </div>
  );
}
