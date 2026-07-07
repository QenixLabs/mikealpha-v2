import { useState } from 'react';
import { Link } from 'react-router';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight, CloudRain, Dna, Droplet, Droplets, FlaskConical, Globe, Leaf, Microscope, ShieldCheck, Sparkles, Sprout, Target, TestTube, Zap, type LucideIcon } from 'lucide-react';
import { staggerContainer, fadeUpVariant } from '@/lib/animations';

type TabId = 'products' | 'application' | 'productLines';

const tabs: { id: TabId; label: string }[] = [
  { id: 'products', label: 'Products' },
  { id: 'application', label: 'Application' },
  { id: 'productLines', label: 'Product Lines' },
];

const cropIcons = [
  { name: 'Foliar Solutions', icon: Leaf, description: 'Direct leaf nutrition for rapid uptake' },
  { name: 'NPK Fertilizers', icon: FlaskConical, description: 'Complete balanced plant nutrition' },
  { name: 'Specialty Fertilizers', icon: Target, description: 'Targeted crop nutrition solutions' },
  { name: 'Biological Fertilizers', icon: Dna, description: 'Bio-enhanced growth solutions' },
  { name: 'Biostimulant', icon: Zap, description: 'Plant vitality and stress recovery' },
  { name: 'Straight Fertilizers', icon: ArrowRight, description: 'Single nutrient focus formulas' },
  { name: 'Micronutrients', icon: Sparkles, description: 'Trace element deficiency correctors' },
  { name: 'Adjuvants', icon: TestTube, description: 'Application enhancers' },
];

const growingMethods = [
  { name: 'Foliar Spray', icon: Droplets, description: 'Direct leaf nutrition for rapid uptake' },
  { name: 'Drip Fertigation', icon: Droplet, description: 'Precision feeding through irrigation' },
  { name: 'Soil Application', icon: Globe, description: 'Root zone nutrition for sustained release' },
  { name: 'Seed Treatment', icon: Sprout, description: 'Early-stage protection and vigor' },
];

const productLines: { name: string; tag: string; description: string; accent: string; icon: LucideIcon }[] = [
  { name: 'Vitagea', tag: '6 PRODUCTS', description: 'Excellence in Plant Nutrition — Gold standard. Enhances crop performance and corrects deficiencies.', accent: '#19204A', icon: Leaf },
  { name: 'Pluvigea', tag: 'STRESS MGMT', description: 'Efficacy Under Stress — Performs under fungal and abiotic stress. Optimizes in challenging environments.', accent: '#3B8D99', icon: CloudRain },
  { name: 'Protega', tag: 'CROP SHIELD', description: 'Protection in Adversity — Mitigates pest effects and nourishes crops through protective nutrition.', accent: '#EE4034', icon: ShieldCheck },
  { name: 'Microgea', tag: '11 PRODUCTS', description: 'Science Meets Innovation — Microorganisms, probiotics, prebiotics — bio protectors and activators.', accent: '#4CAF50', icon: Microscope },
];

export default function InterestSection() {
  const [activeTab, setActiveTab] = useState<TabId>('products');

  const getItems = () => {
    switch (activeTab) {
      case 'products':
        return cropIcons;
      case 'application':
        return growingMethods;
      case 'productLines':
        return productLines;
    }
  };

  const items = getItems();

  const getItemUrl = (item: (typeof items)[number]) => {
    if (activeTab === 'products') return `/products?category=${encodeURIComponent(item.name)}`;
    if (activeTab === 'productLines') return `/products?line=${encodeURIComponent(item.name)}`;
    return `/products?q=${encodeURIComponent(item.name)}`;
  };

  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-container mx-auto px-4 lg:px-6">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
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
          viewport={{ once: true, margin: "-100px" }}
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
            {activeTab === 'productLines' ? (
              <motion.div
                key={activeTab}
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, transition: { duration: 0.2 } }}
                className="flex gap-4 overflow-x-auto hide-scrollbar pb-4 justify-start md:justify-center"
              >
                {productLines.map((line) => {
                  const Icon = line.icon;
                  return (
                    <Link
                      key={line.name}
                      to={getItemUrl(line)}
                      className="flex-shrink-0 w-[120px] md:w-[140px] group cursor-pointer"
                    >
                      <motion.div
                        variants={fadeUpVariant}
                        className="w-full aspect-square rounded-xl border border-gray-200 bg-white flex flex-col items-center justify-center p-4 transition-all duration-300 group-hover:border-primary group-hover:shadow-card group-hover:-translate-y-1"
                      >
                        <div
                          className="w-16 h-16 rounded-full flex items-center justify-center text-white mb-3"
                          style={{ backgroundColor: line.accent }}
                        >
                          <Icon className="w-8 h-8" />
                        </div>
                        <span className="text-xs font-medium text-gray-700 text-center leading-tight">
                          {line.name}
                        </span>
                      </motion.div>
                    </Link>
                  );
                })}
              </motion.div>
            ) : (
              <motion.div
                key={activeTab}
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, transition: { duration: 0.2 } }}
                className="flex gap-4 overflow-x-auto hide-scrollbar pb-4 justify-start md:justify-center"
              >
                {items.map((item) => {
                  const Icon = item.icon as LucideIcon;
                  return (
                    <Link
                      key={item.name}
                      to={getItemUrl(item)}
                      className="flex-shrink-0 w-[120px] md:w-[140px] group cursor-pointer"
                    >
                      <motion.div
                        variants={fadeUpVariant}
                        className="w-full aspect-square rounded-xl border border-gray-200 bg-white flex flex-col items-center justify-center p-4 transition-all duration-300 group-hover:border-primary group-hover:shadow-card group-hover:-translate-y-1"
                      >
                        <div className="w-12 h-12 rounded-full flex items-center justify-center bg-primary text-white mb-2">
                          <Icon className="w-6 h-6" />
                        </div>
                        <span className="text-xs font-medium text-gray-700 text-center leading-tight">
                          {item.name}
                        </span>
                      </motion.div>
                    </Link>
                  );
                })}
              </motion.div>
            )}
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
