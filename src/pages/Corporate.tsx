import { Link } from 'react-router';
import { motion } from 'framer-motion';
import {
  Building2,
  Users,
  FileCheck,
  FlaskConical,
  Heart,
  Calendar,
  Sprout,
  Globe,
  ChevronRight,
  ArrowRight,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/sections/Footer';
import FloatingActions from '@/components/FloatingActions';
import { staggerContainer, fadeUpVariant } from '@/lib/animations';

const corporateAreas = [
  {
    icon: Building2,
    title: 'About Us',
    description:
      'Mike Alpha is a global plant nutrition company committed to helping growers produce more with less through advanced fertilizers, digital tools, and agronomic expertise.',
    link: '/about',
    image: '/images/hero-bg.jpg',
  },
  {
    icon: Users,
    title: 'Leadership Team',
    description:
      'Our executives bring together decades of experience in agronomy, manufacturing, sustainability, and global markets to guide the company forward.',
    link: '/about',
    image: '/images/success-1.jpg',
  },
  {
    icon: FileCheck,
    title: 'Conditions of Sales',
    description:
      'Standard terms, delivery conditions, and service policies that ensure transparent and reliable commercial relationships worldwide.',
    link: '/contact',
    image: '/images/event-1.jpg',
  },
  {
    icon: FlaskConical,
    title: 'R&D Innovative Center',
    description:
      'From formulation labs to field trials, our R&D centers develop next-generation nutrition solutions tailored to diverse crops and climates.',
    link: '/products',
    image: '/images/blog-2.jpg',
  },
  {
    icon: Heart,
    title: 'Mike Alpha Values',
    description:
      'Integrity, innovation, sustainability, and customer success shape every decision we make and every partnership we build.',
    link: '/about',
    image: '/images/blog-3.jpg',
  },
  {
    icon: Calendar,
    title: 'News & Events',
    description:
      'Stay current with product launches, conference appearances, sustainability milestones, and agronomy events around the world.',
    link: '/#news',
    image: '/images/event-2.jpg',
  },
  {
    icon: Sprout,
    title: 'Mike Alpha Grows',
    description:
      'A closer look at how we expand our portfolio, enter new markets, and invest in people and technology to support global food security.',
    link: '/about',
    image: '/images/blog-1.jpg',
  },
  {
    icon: Globe,
    title: 'Mike Alpha Worldwide',
    description:
      'With production, distribution, and agronomy teams across continents, we deliver local expertise backed by global resources.',
    link: '/contact',
    image: '/images/event-3.jpg',
  },
];

function CorporateCard({ area }: { area: (typeof corporateAreas)[0] }) {
  const Icon = area.icon;
  return (
    <motion.div
      variants={fadeUpVariant}
      className="group bg-white border border-brand-border rounded-lg overflow-hidden hover:shadow-card-hover transition-all h-full flex flex-col"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={area.image}
          alt={area.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent" />
        <div className="absolute bottom-4 left-4 w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow">
          <Icon className="w-5 h-5 text-primary" />
        </div>
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-bold text-navy mb-3">{area.title}</h3>
        <p className="text-brand-text-secondary leading-relaxed mb-5 flex-1">
          {area.description}
        </p>
        <Link
          to={area.link}
          className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
        >
          Learn more <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </motion.div>
  );
}

export default function Corporate() {
  return (
    <div className="min-h-screen bg-brand-background">
      <Navbar />

      <main className="pt-32">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="/images/hero-bg.jpg"
              alt="Corporate office"
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
                <span className="text-white">Corporate</span>
              </motion.div>

              <motion.span
                variants={fadeUpVariant}
                className="inline-block text-xs font-bold uppercase tracking-widest text-coral mb-4"
              >
                About Mike Alpha
              </motion.span>

              <motion.h1
                variants={fadeUpVariant}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
              >
                Corporate overview
              </motion.h1>

              <motion.p
                variants={fadeUpVariant}
                className="text-white/80 text-lg max-w-2xl mb-8"
              >
                Learn about our company, leadership, values, global presence, and the commercial
                frameworks that support trusted partnerships with growers and distributors.
              </motion.p>

              <motion.div variants={fadeUpVariant} className="flex flex-wrap gap-4">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-coral text-white text-sm font-medium hover:bg-coral-dark transition-colors rounded"
                >
                  About Us
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-white/40 text-white text-sm font-medium hover:bg-white/10 transition-colors rounded"
                >
                  Contact
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Corporate Areas */}
        <section className="py-20 md:py-28">
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
                Corporate
              </motion.span>
              <motion.h2
                variants={fadeUpVariant}
                className="text-3xl md:text-4xl font-bold text-navy mb-4"
              >
                Explore our company
              </motion.h2>
              <motion.p
                variants={fadeUpVariant}
                className="text-brand-text-secondary max-w-2xl"
              >
                From governance and values to global operations, these pages provide a complete
                picture of Mike Alpha.
              </motion.p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {corporateAreas.map((area) => (
                <CorporateCard key={area.title} area={area} />
              ))}
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingActions />
    </div>
  );
}
