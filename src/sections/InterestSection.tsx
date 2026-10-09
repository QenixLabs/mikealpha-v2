import { useState, useRef } from 'react';
import { Link } from 'react-router';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Dna,
  Droplet,
  Droplets,
  FlaskConical,
  Globe,
  Leaf,
  Sparkles,
  Sprout,
  Sun,
  Target,
  TestTube,
  Timer,
  TreePine,
  Warehouse,
  Zap,
  MapPin,
  ShieldCheck,
  type LucideIcon,
} from 'lucide-react';
import { staggerContainer, fadeUpVariant } from '@/lib/animations';
import { categories, products } from '@/data/products';

type TabId = 'importer' | 'growing' | 'products';

const tabs: { id: TabId; label: string }[] = [
  { id: 'importer', label: 'Exclusive Importer of' },
  { id: 'growing', label: 'Growing method' },
  { id: 'products', label: 'Products' },
];

interface ImporterPartner {
  id: string;
  name: string;
  country: string;
  flag: string;
  location: string;
  tagline: string;
  specialty: string;
  productsUrl: string;
  accentColor: string;
  icon: LucideIcon;
}

const exclusiveImporters: ImporterPartner[] = [
  {
    id: 'fertinagro',
    name: 'Fertinagro Biotech',
    country: 'Spain',
    flag: '🇪🇸',
    location: 'Teruel, Spain',
    tagline: 'Global pioneer in technological, organo-mineral & sustainable plant nutrition with over 800 certified formulations.',
    specialty: 'Technological & Sustainable Nutrition',
    productsUrl: '/products',
    accentColor: '#059669',
    icon: Sprout,
  },
  {
    id: 'veganic',
    name: 'Veganic Bio',
    country: 'Spain',
    flag: '🇪🇸',
    location: 'Valencia, Spain',
    tagline: '100% Organic, vegan-certified biosolutions derived from plant extracts and exclusive MicroGea® biotechnology.',
    specialty: 'Certified Organic Vegan Biosolutions',
    productsUrl: '/products?q=Microgea',
    accentColor: '#16a34a',
    icon: Leaf,
  },
  {
    id: 'futureco',
    name: 'Futureco Bioscience',
    country: 'Spain',
    flag: '🇪🇸',
    location: 'Barcelona, Spain',
    tagline: 'Renowned agrobiotechnology leader developing high-efficacy biological biostimulants, biofertilizers & crop protection.',
    specialty: 'Agrobiotechnology & Biostimulants',
    productsUrl: '/products?category=2.+Biostimulant',
    accentColor: '#2563eb',
    icon: FlaskConical,
  },
  {
    id: 'sheffa',
    name: 'Sheffa',
    country: 'Israel',
    flag: '🇮🇱',
    location: 'Valley of the Springs, Israel',
    tagline: 'Pioneering Israeli manufacturer specializing in precision fertilization, dynamic crop protocols and custom fertigation.',
    specialty: 'Precision Fertilization & Dynamic Nutrition',
    productsUrl: '/products',
    accentColor: '#1e40af',
    icon: Droplets,
  },
];

const growingMethods: { name: string; icon: LucideIcon }[] = [
  { name: 'Soil Applications', icon: Globe },
  { name: 'Nurseries', icon: Sprout },
  { name: 'Open Field', icon: Sun },
  { name: 'Center Pivot', icon: Droplets },
  { name: 'Controlled Release Fertilizers', icon: Timer },
  { name: 'Foliar Feeding', icon: Leaf },
  { name: 'Nutrigation™', icon: Droplet },
  { name: 'Fruit Trees Fertilizers', icon: TreePine },
  { name: 'Greenhouse Agriculture', icon: Warehouse },
];

const methodIconMap: Record<string, string> = {
  'Soil Applications': '/growing-icons/Soil-Applications.png',
  Nurseries: '/growing-icons/Nurseries.png',
  'Open Field': '/growing-icons/Open-Field.png',
  'Center Pivot': '/growing-icons/Center-Pivot.png',
  'Controlled Release Fertilizers': '/growing-icons/Controlled-Release-Fertilizers.png',
  'Foliar Feeding': '/growing-icons/Foliar-Feeding.png',
  'Nutrigation™': '/growing-icons/Nutrigation.png',
  'Fruit Trees Fertilizers': '/growing-icons/Fruit-Trees-Fertilizers.png',
  'Greenhouse Agriculture': '/growing-icons/Greenhouse-Agriculture.jpg',
};

const productCategoryIcons: Record<string, LucideIcon> = {
  'Foliar Solutions': Leaf,
  'NPK Fertilizers': FlaskConical,
  'Specialty Fertilizers': Target,
  'Biological Fertilizers': Dna,
  Biostimulant: Zap,
  'Straight Fertilizers': ArrowRight,
  Micronutrients: Sparkles,
  Adjuvants: TestTube,
};

export default function InterestSection() {
  const [activeTab, setActiveTab] = useState<TabId>('importer');
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 'left' | 'right') => {
    scrollRef.current?.scrollBy({ left: dir === 'left' ? -500 : 500, behavior: 'smooth' });
  };

  const getItems = () => {
    switch (activeTab) {
      case 'importer':
        return [];
      case 'growing':
        return growingMethods.map((m) => m.name);
      case 'products':
        return categories.filter((c) => c !== 'All');
    }
  };

  const items = getItems();

  const getItemUrl = (name: string) => {
    if (activeTab === 'growing') return `/products?q=${encodeURIComponent(name)}`;
    return `/products?category=${encodeURIComponent(name)}`;
  };

  const renderIcon = (name: string) => {
    if (activeTab === 'growing') {
      const iconSrc = methodIconMap[name];
      if (iconSrc) {
        return (
          <img
            src={iconSrc}
            alt={name}
            className="h-16 w-16 object-contain mb-2"
            style={{ filter: 'hue-rotate(-135deg) saturate(1.6) brightness(1.05)' }}
          />
        );
      }
      const method = growingMethods.find((m) => m.name === name);
      const Icon = method?.icon ?? Sprout;
      return (
        <div className="w-14 h-14 rounded-full flex items-center justify-center bg-primary/10 text-primary mb-2">
          <Icon className="w-7 h-7" />
        </div>
      );
    }

    const product = products.find((p) => p.category === name);
    if (product?.image) {
      return (
        <img
          src={product.image}
          alt={name}
          className="h-16 w-auto object-contain mb-2"
        />
      );
    }

    const Icon = productCategoryIcons[name] ?? Leaf;
    return (
      <div className="w-12 h-12 rounded-full flex items-center justify-center bg-primary text-white mb-2">
        <Icon className="w-6 h-6" />
      </div>
    );
  };

  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-container mx-auto px-4 lg:px-6">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-2 mb-10"
        >
          <Leaf className="w-6 h-6 text-primary" />
          <h2 className="text-2xl md:text-3xl font-semibold text-center text-gray-800 uppercase tracking-widest">
            Choose your interest
          </h2>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex justify-center gap-2 md:gap-3 flex-wrap mb-10"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 md:px-8 md:py-3 rounded-full text-xs md:text-sm font-medium transition-all duration-200 ${
                activeTab === tab.id
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-white text-gray-500 border border-gray-300 hover:border-primary hover:text-primary'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Content */}
        {activeTab === 'importer' ? (
          <div>
            <div className="text-center mb-8">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary mb-2">
                <ShieldCheck className="w-3.5 h-3.5" />
                Trusted Global Partnerships
              </span>
              <p className="text-sm text-gray-600 max-w-2xl mx-auto">
                Mike Alpha Agro is the exclusive importer in India for premier international agricultural biotechnology and crop nutrition leaders.
              </p>
            </div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
            >
              {exclusiveImporters.map((partner) => {
                const IconComponent = partner.icon;
                return (
                  <motion.div
                    key={partner.id}
                    variants={fadeUpVariant}
                    className="relative group rounded-2xl border border-gray-200 bg-white p-6 shadow-xs hover:shadow-card hover:border-navy transition-all duration-300 flex flex-col justify-between overflow-hidden"
                  >
                    <div
                      className="absolute top-0 right-0 left-0 h-1.5"
                      style={{ backgroundColor: partner.accentColor }}
                    />

                    <div>
                      {/* Country badge */}
                      <div className="flex items-center justify-between gap-2 mb-4">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-800 border border-gray-200">
                          <span className="text-sm">{partner.flag}</span>
                          <span>{partner.country}</span>
                        </span>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-primary">
                          Exclusive Importer
                        </span>
                      </div>

                      {/* Icon & Title */}
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-white shadow-xs"
                        style={{ backgroundColor: partner.accentColor }}
                      >
                        <IconComponent className="w-6 h-6" />
                      </div>

                      <h3 className="text-lg font-bold text-navy group-hover:text-primary transition-colors mb-1 leading-snug">
                        {partner.name}
                      </h3>
                      <p className="text-xs text-gray-400 font-medium mb-3 flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-gray-400" />
                        {partner.location}
                      </p>

                      <p className="text-xs text-gray-600 leading-relaxed mb-4">
                        {partner.tagline}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                      <span className="text-[11px] font-medium text-gray-500 truncate max-w-[170px]">
                        {partner.specialty}
                      </span>
                      <Link
                        to={partner.productsUrl}
                        className="inline-flex items-center gap-1 text-xs font-bold text-primary group-hover:translate-x-0.5 transition-transform"
                      >
                        Explore
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        ) : (
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                ref={scrollRef}
                key={activeTab}
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, transition: { duration: 0.2 } }}
                className="flex gap-4 overflow-x-auto hide-scrollbar pb-4 justify-start md:justify-center"
              >
                {items.map((item) => (
                  <Link
                    key={item}
                    to={getItemUrl(item)}
                    className="flex-shrink-0 w-[120px] md:w-[140px] group cursor-pointer"
                  >
                    <motion.div
                      variants={fadeUpVariant}
                      className="w-full aspect-square rounded-xl border border-gray-200 bg-white flex flex-col items-center justify-center p-4 transition-all duration-300 group-hover:border-primary group-hover:shadow-card group-hover:-translate-y-1"
                    >
                      {renderIcon(item)}
                      <span className="text-xs font-medium text-gray-700 text-center leading-tight">
                        {item}
                      </span>
                    </motion.div>
                  </Link>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* Scroll Arrows */}
            <button
              onClick={() => scroll('left')}
              aria-label="Scroll left"
              className="absolute -left-12 top-1/2 -translate-y-1/2 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-white border border-gray-200 shadow-sm text-gray-500 hover:border-primary hover:text-primary hover:shadow-md transition-all duration-200"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              aria-label="Scroll right"
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-white border border-gray-200 shadow-sm text-gray-500 hover:border-primary hover:text-primary hover:shadow-md transition-all duration-200"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
