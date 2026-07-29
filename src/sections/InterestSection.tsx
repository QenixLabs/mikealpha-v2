import { useState } from 'react';
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
  type LucideIcon,
} from 'lucide-react';
import { staggerContainer, fadeUpVariant } from '@/lib/animations';
import { categories } from '@/data/products';
import { getCropGuideByName } from '@/data/cropGuides';

type TabId = 'crop' | 'growing' | 'products';

const tabs: { id: TabId; label: string }[] = [
  { id: 'crop', label: 'Crop' },
  { id: 'growing', label: 'Growing method' },
  { id: 'products', label: 'Products' },
];

const cropItems = [
  'Tomato',
  'Pepper',
  'Cucumber',
  'Potato',
  'Strawberry',
  'Citrus',
  'Banana',
  'Olives',
  'Rice',
  'Wheat',
  'Onion',
  'Apple',
  'Grapes',
  'Corn',
  'Sugar Beet',
  'Garlic',
  'Almond',
  'Soybean',
  'Turf',
];

const cropIconColors = [
  '#E74C3C',
  '#C0392B',
  '#27AE60',
  '#8E44AD',
  '#E84393',
  '#F39C12',
  '#F1C40F',
  '#16A085',
  '#3498DB',
  '#D4AC0D',
  '#E67E22',
  '#95A5A6',
  '#9B59B6',
  '#F4D03F',
  '#ECF0F1',
  '#BDC3C7',
  '#D35400',
  '#2ECC71',
  '#1ABC9C',
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

const interestToCropName: Record<string, string> = {
  grapes: 'Vineyard/Grape',
  corn: 'Corn/Maize',
};

export default function InterestSection() {
  const [activeTab, setActiveTab] = useState<TabId>('crop');

  const getItems = () => {
    switch (activeTab) {
      case 'crop':
        return cropItems;
      case 'growing':
        return growingMethods.map((m) => m.name);
      case 'products':
        return categories.filter((c) => c !== 'All');
    }
  };

  const items = getItems();

  const getItemUrl = (name: string) => {
    if (activeTab === 'crop') {
      const cropName = interestToCropName[name.toLowerCase()] || name;
      const guide = getCropGuideByName(cropName);
      if (guide) return `/${guide.slug}`;
      return `/products?crop=${encodeURIComponent(name)}`;
    }
    if (activeTab === 'growing') return `/products?q=${encodeURIComponent(name)}`;
    return `/products?category=${encodeURIComponent(name)}`;
  };

  const renderIcon = (name: string, index: number) => {
    if (activeTab === 'crop') {
      const color = cropIconColors[index % cropIconColors.length];
      return (
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center text-white mb-2"
          style={{ backgroundColor: color }}
        >
          <Sprout className="w-6 h-6" />
        </div>
      );
    }

    if (activeTab === 'growing') {
      const method = growingMethods.find((m) => m.name === name);
      const Icon = method?.icon ?? Sprout;
      return (
        <div className="w-12 h-12 rounded-full flex items-center justify-center bg-primary text-white mb-2">
          <Icon className="w-6 h-6" />
        </div>
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
          className="flex justify-center gap-3 mb-10"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-8 py-3 rounded-full text-sm font-medium transition-all duration-200 ${
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
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, transition: { duration: 0.2 } }}
              className="flex gap-4 overflow-x-auto hide-scrollbar pb-4 justify-start md:justify-center"
            >
              {items.map((item, index) => (
                <Link
                  key={item}
                  to={getItemUrl(item)}
                  className="flex-shrink-0 w-[120px] md:w-[140px] group cursor-pointer"
                >
                  <motion.div
                    variants={fadeUpVariant}
                    className="w-full aspect-square rounded-xl border border-gray-200 bg-white flex flex-col items-center justify-center p-4 transition-all duration-300 group-hover:border-primary group-hover:shadow-card group-hover:-translate-y-1"
                  >
                    {renderIcon(item, index)}
                    <span className="text-xs font-medium text-gray-700 text-center leading-tight">
                      {item}
                    </span>
                  </motion.div>
                </Link>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Scroll Arrows - Mobile */}
          <button className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center text-gray-400 hover:text-primary transition-colors md:hidden">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center text-gray-400 hover:text-primary transition-colors md:hidden">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
