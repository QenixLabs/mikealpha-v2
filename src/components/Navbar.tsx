import { Link, useNavigate } from 'react-router';
import { useState, useEffect, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronDown,
  Search,
  Menu,
  X,
  Globe,
} from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { products } from '@/data/products';
import { cropGuides } from '@/data/cropGuides';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/context/LanguageContext';

const cropSlugMap = new Map(cropGuides.map((c) => [c.cropName, c.slug]));

const navTranslations: Record<string, string> = {
  'Crop Guide': 'फसल गाइड',
  'Products': 'उत्पाद',
  'Growing Practice': 'कृषि पद्धतियाँ',
  'Smart Farming': 'स्मार्ट फार्मिंग',
  'COMPASSion': 'कम्पाशन',
  'Precision IMPACT': 'प्रिसिजन इम्पैक्ट',
  'Corporate': 'कॉर्पोरेट',
  'Insights': 'इनसाइट्स',
};

const navItemsLeft = ['Crop Guide', 'Products', 'Growing Practice', 'Smart Farming'];
const navItemsRight = ['COMPASSion', 'Precision IMPACT', 'Corporate', 'Insights'];

type DropdownSection = {
  title?: string;
  items: string[];
};

const productUrlMap: Record<string, string> = {
  // Categories (numbered)
  '1. Water Soluble Fertilizer': '/products?category=1.+Water+Soluble+Fertilizer',
  '2. Biostimulant': '/products?category=2.+Biostimulant',
  '3. Foliar Fertilizer': '/products?category=3.+Foliar+Fertilizer',
  '4. Micronutrient': '/products?category=4.+Micronutrient',
  '5. Liquid Fertilizer': '/products?category=5.+Liquid+Fertilizer',
  '6. Biofertilizer nd Biopesticide': '/products?category=6.+Biofertilizer+nd+Biopesticide',
  '7. Controlled Release Fertilizer': '/products?category=7.+Controlled+Release+Fertilizer',

  // 1. Water Soluble Fertilizer
  'Mike Kaliphos': '/products/kaliphos',
  'Mike Specialone Complex': '/products/special-one',
  'Mike 19:19:19': '/products/19-19-19',
  '0:52:34': '/products/00-52-34',
  '00:52:34': '/products/00-52-34',
  '13:40:13': '/products/13-40-13',
  '0:0:50': '/products/00-00-50',
  '00:00:50': '/products/00-00-50',
  '12:61:0': '/products/12-61-00',
  '12:61:00': '/products/12-61-00',
  'Mike CN': '/products/cn-calcium-nitrate',
  'mike CN': '/products/cn-calcium-nitrate',
  'Mike Mag': '/products/mag',
  'MIKE Mag': '/products/mag',

  // 2. Biostimulant
  'Mike Biamic': '/products/biamic',
  'Mike biamic': '/products/biamic',
  'Mike Humus': '/products/humus',
  'Mike humus': '/products/humus',
  'Aminovit22': '/products/aminovit-22',
  'Aminovit 22': '/products/aminovit-22',

  // 3. Foliar Fertilizer
  'Mike Phoszinc': '/products/phoszinc',
  'Mike phoszinc': '/products/phoszinc',
  'Aminonitro': '/products/aminonitro',
  'Blackpot': '/products/blackpot',
  'Supercoctail': '/products/supercoctel',
  'Amino Kualium': '/products/kualium',
  'Amino kualium': '/products/kualium',

  // 4. Micronutrient
  'Mike Chelated Zinc': '/products/edta-zinc-12',
  'Mike chelated zinc': '/products/edta-zinc-12',
  'Chelated Fe': '/products/edta-ferrous-12',
  'Chelated Micronutrient': '/products/edta-micronutrient',
  'Chelated micronutrient': '/products/edta-micronutrient',
  'Chelated CA': '/products/ca-chelated-calcium',
  'Chelated Ca': '/products/ca-chelated-calcium',
  'Mike Boron': '/products/boron-20',
  'Mike boron': '/products/boron-20',
  'Mike Stick': '/products/stick',
  'Mike stick': '/products/stick',

  // 5. Liquid Fertilizer
  'Vitagea B': '/products/vitagea-b',
  'Vitagea b': '/products/vitagea-b',
  'Silikum': '/products/silikum',
  'Whitepot': '/products/whitepot-solution',
  'Aminocalcium': '/products/aminocalcium',

  // 6. Biofertilizer nd Biopesticide
  'Mike Vex': '/products/vex',
  'Mike vex': '/products/vex',
  'Monas': '/products/monas',
  'Nema': '/products/nema',
  'BVM': '/products/bvm',
  'NPK': '/products/npk-consortium',
  'Npk': '/products/npk-consortium',
  'PSB': '/products/psb',
  'Psb': '/products/psb',
  'ZSB': '/products/zsb',
  'Zsb': '/products/zsb',
  'KSB': '/products/ksb',
  'Ksb': '/products/ksb',
  'Sulpho': '/products/sulpho',
  'Rootx 4kg': '/products/root-x-4kg',
  'Root x 100gm': '/products/root-x-100gm',
  'Rootx 100gm': '/products/root-x-100gm',

  // 7. Controlled Release Fertilizer
  'Mike Fuerza Maxima with all grades': '/products/maxima-15-5-5',
  'Mike fuerza maxima with all grades': '/products/maxima-15-5-5',
  'Mike Fuerza Maxima (All Grades)': '/products/maxima-15-5-5',
  'Mike Fuerza Maxima': '/products/maxima-15-5-5',

  // General & Legacy
  Solar: '/solar',
  'Technical KNO3': '/technical-kno3',
  'Products Catalog': '/products',
  'SDS Request': '/products/sds-request',
  'Quality Assurance': '/quality-assurance',
};

const dropdownData: Record<string, DropdownSection[]> = {
  'Crop Guide': [
    {
      title: 'Vegetables',
      items: [
        'Artichoke',
        'Broccoli',
        'Cabbage',
        'Carrot',
        'Cauliflower',
        'Cucumber',
        'Eggplant',
        'Garlic',
        'Lettuce',
        'Melon',
        'Onion',
        'Pepper',
        'Pumpkin',
        'Squash/Courgette',
        'Tomato',
        'Watermelon',
      ],
    },
    {
      title: 'Fruit Trees',
      items: [
        'Almond',
        'Apricot',
        'Apple',
        'Oil palm',
        'Olives',
        'Papaya',
        'Peach & Nectarine',
        'Pear',
        'Persimmon',
        'Guava',
        'Hazelnut',
        'Hop',
        'Longan',
        'Mango',
        'Avocado',
        'Banana',
        'Cherry',
        'Citrus',
        'Cocoa',
        'Coffee',
        'Durian',
        'Quince',
        'Vineyard/Grape',
      ],
    },
    {
      title: 'Soft Fruit',
      items: ['Blueberry', 'Raspberry', 'Strawberry'],
    },
    {
      title: 'Field Crops',
      items: [
        'Asparagus',
        'Barley',
        'Beans',
        'Chickpea',
        'Corn/Maize',
        'Cotton',
        'Clover',
        'Oil Seed',
        'Peas',
        'Pineapple',
        'Potato',
        'Rice',
        'Soybean',
        'Sugar Beet',
        'Sugar Cane',
        'Sunflower',
        'Tobacco',
        'Wheat',
      ],
    },
    {
      title: 'Herbs',
      items: ['Basil', 'Chives', 'Mint', 'Tarragon'],
    },
    {
      title: 'Ornamentals',
      items: [
        'Anthurium',
        'Dahlia',
        'Delphinium',
        'Gerbera',
        'Gladioli',
        'Gypsophila',
        'Lilium',
        'Limonium',
        'Tulips',
      ],
    },
    {
      title: 'Forestry',
      items: ['Eucalyptus', 'Pine', 'Teak', 'Poplar'],
    },
    {
      title: 'Turf',
      items: ['Lawn', 'Golf Course', 'Sports Field'],
    },
  ],
  'Products': [
    {
      items: [
        '1. Water Soluble Fertilizer',
        '2. Biostimulant',
        '3. Foliar Fertilizer',
        '4. Micronutrient',
        '5. Liquid Fertilizer',
        '6. Biofertilizer nd Biopesticide',
        '7. Controlled Release Fertilizer',
      ],
    },
  ],
  'Growing Practice': [
    {
      title: 'Fertilization Methods',
      items: [
        'Nutrigation™',
        'Center Pivot',
        'Foliar Fertilizer',
        'Soil Application',
        'CRF Application',
      ],
    },
    {
      title: 'Farming Methods',
      items: [
        'Hydroponic',
        'Fruit Trees',
        'Greenhouses',
        'Nurseries',
        'Center Pivot',
        'Open Field',
      ],
    },
  ],
  'Smart Farming': [
    {
      title: 'Web Apps',
      items: [
        'MikeMultifeed™',
        'MikeNutri™',
        'MikeMatch™',
        'Nitrotune',
      ],
    },
  ],
  'Precision IMPACT': [
    {
      items: [
        'ESG REPORT 2022-2023',
        'Strategy and 2030 goals',
        'Environment',
        'Social',
        'Governance',
        'Supplier Code of Conduct',
        'Safety',
        'Occupational Safety',
        'Sustainability',
        'We support the UN Global Compact',
      ],
    },
  ],
  'Corporate': [
    {
      items: [
        'About Us',
        'Leadership Team',
        'Condition of sales',
        'R&D Innovative Center',
        'Code of Conduct',
        'Core Values',
        'Mike Alpha Grows',
        'Operations',
      ],
    },
  ],
  'Insights': [
    {
      items: [
        'Blog',
        'Newsletters',
        'Podcasts',
        'Success Stories',
        'FAQ',
        'Mike Alpha Agriculture Videos',
      ],
    },
  ],
};

const dropdownLayout: Record<string, 'columns' | 'accordion'> = {
  'Crop Guide': 'accordion',
};

function getTopLevelUrl(label: string): string {
  switch (label) {
    case 'Crop Guide':
      return '/crop-guide';
    case 'Products':
      return '/products';
    case 'Growing Practice':
      return '/growing-practice';
    case 'Smart Farming':
      return '/smart-farming';
    case 'COMPASSion':
      return '/impact-innovation-compassion';
    case 'Precision IMPACT':
      return '/precision-impact';
    case 'Corporate':
      return '/corporate';
    case 'Insights':
      return '/insights';
    case 'Careers':
      return '/careers';
    case 'Distributors':
      return '/distributors';
    case 'About':
    case 'About Us':
      return '/about';
    case 'Contact':
    case 'Contact Us':
      return '/contact';
    default:
      return '#';
  }
}

function getSectionTitleLink(title?: string): string | undefined {
  if (!title) return undefined;
  if (/^\d+\./.test(title)) {
    return `/products?category=${encodeURIComponent(title)}`;
  }
  switch (title) {
    case 'Vegetables':
    case 'Fruit Trees':
    case 'Soft Fruit':
    case 'Field Crops':
    case 'Herbs':
    case 'Ornamentals':
    case 'Forestry':
    case 'Turf':
      return `/crop-guide?category=${encodeURIComponent(title)}`;
    case 'Fertilization Methods':
      return '/articles/fertilization-methods';
    case 'Farming Methods':
      return '/articles/farming-methods';
    case 'Plant Nutrition':
      return '/products';
    case 'Industrial':
      return '/products';
    case 'Web Apps':
      return '/smart-farming#web-apps';
    default:
      return undefined;
  }
}

function getItemUrl(label: string, item: string): string {
  switch (label) {
    case 'Products':
      return productUrlMap[item] || `/products?line=${encodeURIComponent(item)}`;
    case 'Crop Guide': {
      const slug = cropSlugMap.get(item) || cropSlugMap.get(item.trim());
      return slug ? `/${slug}` : '/crop-guide';
    }
    case 'Growing Practice': {
      const practiceMap: Record<string, string> = {
        'Nutrigation™': '/nutrigation-fertigation',
        'Center Pivot': '/articles/intro-center-pivot',
        'Foliar Fertilizer': '/articles/foliar-fertilizer',
        'Soil Application': '/soil-application',
        'CRF Application': '/crf-application',
        Hydroponic: '/hydroponic-fertilizers',
        'Fruit Trees': '/fruit-trees-fertilizers',
        Greenhouses: '/greenhouses',
        Nurseries: '/nurseries',
        'Open Field': '/open-field',
      };
      return practiceMap[item] || '/growing-practice';
    }
    case 'Smart Farming': {
      const smartMap: Record<string, string> = {
        'MikeMultifeed™': '/smart-farming#mikemultifeed',
        'MikeNutri™': '/smart-farming#mikenutri',
        'MikeMatch™': '/smart-farming#mikematch',
        'Nitrotune': '/smart-farming#nitrotune',
        'Nitrotune™': '/smart-farming#nitrotune',
      };
      return smartMap[item] || '/smart-farming';
    }
    case 'Precision IMPACT': {
      const impactUrlMap: Record<string, string> = {
        'ESG REPORT 2022-2023': '/impact-innovation-compassion',
        'Strategy and 2030 goals': '/precision-impact/strategy',
        Environment: '/precision-impact/esg/environment',
        Social: '/precision-impact/esg/social',
        Governance: '/precision-impact/esg/governance',
        'Supplier Code of Conduct': '/precision-impact/esg/governance/code-of-conduct',
        Safety: '/safety-head-toe',
        'Occupational Safety': '/safety-head-toe',
        Sustainability: '/sustainable-development-goals-1',
        'We support the UN Global Compact': '/sustainable-development-goals-1',
      };
      return impactUrlMap[item] || `/precision-impact`;
    }
    case 'Corporate': {
      const corporateUrlMap: Record<string, string> = {
        'About Us': '/about-us-0',
        'Leadership Team': '/leadership-team',
        'Condition of sales': '/condition-sales',
        'R&D Innovative Center': '/mike-alpha-rd-center',
        'Code of Conduct': '/mike-alpha-values',
        'Core Values': '/core-values-1',
        'News & Events': '/news-events',
        'Mike Alpha Grows': '/mike-alpha-grows',
        'Operations': '/mike-alpha-worldwide',
        'Regional Operations (India)': '/mike-alpha-worldwide',
        'Regional Operations': '/mike-alpha-worldwide',
        'Mike Alpha Worldwide': '/mike-alpha-worldwide',
      };
      return corporateUrlMap[item] || `/corporate`;
    }
    case 'Insights': {
      const insightsUrlMap: Record<string, string> = {
        Blog: '/insights#blog',
        Newsletters: '/insights#newsletter',
        Podcasts: '/podcasts',
        'Success Stories': '/success-stories',
        FAQ: '/faq',
        'Mike Alpha Agriculture Videos': '/mike-alpha-videos',
      };
      return insightsUrlMap[item] || `/insights`;
    }
    case 'Careers':
      return `/careers`;
    default:
      return '#';
  }
}

function AccordionDropdown({
  label,
  sections,
  onNavigate,
}: {
  label: string;
  sections: DropdownSection[];
  onNavigate: () => void;
}) {
  const [openSection, setOpenSection] = useState<number | null>(0);

  return (
    <div className="min-w-[520px] max-w-[640px]">
      {sections.map((section, idx) => (
        <div
          key={idx}
          className={cn(
            'border-b border-dotted border-gray-300 pb-3 mb-3 last:border-0 last:pb-0 last:mb-0'
          )}
        >
          <button
            onClick={() => setOpenSection(openSection === idx ? null : idx)}
            className="w-full flex items-center justify-between text-primary font-medium text-base py-1 hover:opacity-80 transition-opacity"
          >
            <span>{section.title}</span>
            <ChevronDown
              className={cn(
                'w-4 h-4 transition-transform duration-200',
                openSection === idx && 'rotate-180'
              )}
            />
          </button>
          <AnimatePresence>
            {openSection === idx && section.items.length > 0 && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <div className="grid grid-cols-2 gap-x-8 gap-y-1 pt-2">
                  {section.items.map((item) => (
                    <Link
                      key={item}
                      to={getItemUrl(label, item)}
                      onClick={onNavigate}
                      className="text-sm text-gray-700 hover:text-primary transition-colors py-1"
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

function NavItem({ label, isLeft }: { label: string; isLeft?: boolean }) {
  const { language } = useLanguage();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const layout = dropdownLayout[label] ?? 'columns';
  const sections = dropdownData[label] ?? [];
  const displayLabel = language === 'hi' && navTranslations[label] ? navTranslations[label] : label;

  return (
    <div
      className="relative h-full flex items-center"
      onMouseEnter={() => setActiveDropdown(label)}
      onMouseLeave={() => setActiveDropdown(null)}
    >
      <Link
        to={getTopLevelUrl(label)}
        onClick={() => setActiveDropdown(null)}
        className={cn(
          'h-full flex items-center gap-1 text-sm font-medium border-b-2 transition-colors px-2 py-1',
          activeDropdown === label
            ? 'text-navy border-navy'
            : 'text-navy border-transparent hover:border-navy'
        )}
      >
        {displayLabel}
        <ChevronDown
          className={cn(
            'w-4 h-4 transition-transform duration-200',
            activeDropdown === label && 'rotate-180'
          )}
        />
      </Link>

      <AnimatePresence>
        {activeDropdown === label && layout === 'columns' && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className={cn(
              'absolute top-full bg-white shadow-dropdown rounded-b-lg border border-gray-100 z-50 py-5 px-6 max-h-[85vh] overflow-y-auto',
              isLeft ? 'left-0' : 'right-0',
              label === 'Products'
                ? 'min-w-[320px]'
                : sections.length > 1
                  ? 'min-w-[620px]'
                  : 'min-w-[260px]'
            )}
          >
            <div
              className={cn(
                'grid gap-6',
                sections.length > 1 ? 'grid-cols-2' : 'grid-cols-1'
              )}
            >
              {sections.map((section, idx) => (
                <div key={idx}>
                  {section.title && (
                    <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                      {getSectionTitleLink(section.title) ? (
                        <Link
                          to={getSectionTitleLink(section.title)!}
                          onClick={() => setActiveDropdown(null)}
                          className="hover:text-primary transition-colors inline-flex items-center gap-1"
                        >
                          {section.title}
                          <span className="text-[10px]">→</span>
                        </Link>
                      ) : (
                        section.title
                      )}
                    </h4>
                  )}
                  <ul className="space-y-2">
                    {section.items.map((item) => (
                      <li key={item}>
                        <Link
                          to={getItemUrl(label, item)}
                          onClick={() => setActiveDropdown(null)}
                          className="text-sm text-gray-700 hover:text-primary transition-all block py-1.5 font-medium hover:translate-x-1 duration-150"
                        >
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {activeDropdown === label && layout === 'accordion' && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 bg-white shadow-dropdown rounded-b-lg border border-gray-100 z-50 py-5 px-6"
          >
            <AccordionDropdown
              label={label}
              sections={sections}
              onNavigate={() => setActiveDropdown(null)}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Navbar() {
  const navigate = useNavigate();
  const { language, setLanguage } = useLanguage();
  const [isSticky, setIsSticky] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [mobileOpenSections, setMobileOpenSections] = useState<
    Record<string, boolean>
  >({});
  const searchRef = useRef<HTMLDivElement>(null);
  const langRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const suggestions = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return [];
    return products
      .filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.productLine.toLowerCase().includes(q)
      )
      .slice(0, 6);
  }, [searchQuery]);

  const handleSearchSubmit = () => {
    const q = searchQuery.trim();
    setShowSuggestions(false);
    if (!q) return;
    navigate(`/products?q=${encodeURIComponent(q)}`);
  };

  const handleSuggestionClick = (slug: string) => {
    setSearchQuery('');
    setShowSuggestions(false);
    navigate(`/products/${slug}`);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setShowSuggestions(false);
      }
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleMobileSection = (label: string) => {
    setMobileOpenSections((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  return (
    <header
      className={cn(
        'w-full bg-white z-50 transition-all duration-300',
        isSticky
          ? 'fixed top-0 left-0 right-0 shadow-nav border-b border-gray-100'
          : 'relative'
      )}
    >
      <div className="border-b border-gray-100 relative">
        <div className="px-4 lg:px-8 h-14 lg:h-[90px] flex items-center justify-between lg:grid lg:grid-cols-[1fr_auto_1fr] lg:gap-4 relative">
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <button
                className="lg:hidden p-2 text-gray-700 hover:text-primary transition-colors"
                aria-label="Open menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[320px] p-0"
              onOpenAutoFocus={(e) => e.preventDefault()}
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-4 border-b">
                  <span className="font-bold text-primary">Menu</span>
                </div>

                <div className="p-4 border-b">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => {
                        setSearchQuery(e.target.value);
                        setShowSuggestions(true);
                      }}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          e.preventDefault();
                          setMobileMenuOpen(false);
                          handleSearchSubmit();
                        }
                      }}
                      placeholder={language === 'hi' ? 'उत्पाद खोजें...' : 'Search products...'}
                      className="h-10 w-full pl-9 pr-9 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-primary"
                    />
                    {searchQuery && (
                      <button
                        onClick={() => {
                          setSearchQuery('');
                          setShowSuggestions(false);
                        }}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        aria-label="Clear search"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                  {showSuggestions && suggestions.length > 0 && (
                    <div className="mt-2 bg-white rounded-lg border border-gray-100 shadow-dropdown py-1">
                      {suggestions.map((p) => (
                        <button
                          key={p.id}
                          onClick={() => {
                            setMobileMenuOpen(false);
                            handleSuggestionClick(p.slug);
                          }}
                          className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-primary-light hover:text-primary flex items-center gap-3"
                        >
                          <img
                            src={p.image}
                            alt=""
                            className="w-7 h-7 object-contain"
                          />
                          <span className="flex-1 truncate">{p.name}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <div className="flex-1 overflow-auto py-2">
                  {[...navItemsLeft, ...navItemsRight].map((label) => {
                    const displayLabel = language === 'hi' && navTranslations[label] ? navTranslations[label] : label;
                    return label === 'COMPASSion' ? (
                      <div key={label} className="border-b border-gray-50">
                        <Link
                          to="/impact-innovation-compassion"
                          onClick={() => setMobileMenuOpen(false)}
                          className="block px-6 py-3 text-sm font-medium text-navy hover:bg-gray-50 hover:text-navy transition-colors"
                        >
                          {displayLabel}
                        </Link>
                      </div>
                    ) : (
                      <div key={label} className="border-b border-gray-50">
                        <button
                          onClick={() => toggleMobileSection(label)}
                          className="w-full flex items-center justify-between px-6 py-3 text-sm font-medium text-navy hover:bg-gray-50 hover:text-navy transition-colors"
                        >
                          {displayLabel}
                          <ChevronDown
                            className={cn(
                              'w-4 h-4 transition-transform duration-200',
                              mobileOpenSections[label] && 'rotate-180'
                            )}
                          />
                        </button>
                        <AnimatePresence>
                          {mobileOpenSections[label] && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden"
                            >
                              <div className="px-6 pb-4 pt-1 space-y-4">
                                <div className="pb-2 border-b border-gray-100">
                                  <Link
                                    to={getTopLevelUrl(label)}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="text-xs font-bold text-primary hover:underline inline-flex items-center gap-1 uppercase tracking-wider"
                                  >
                                    View All {label} Overview →
                                  </Link>
                                </div>
                                {dropdownData[label]?.map((section, idx) => (
                                  <div key={idx}>
                                    {section.title && (
                                      getSectionTitleLink(section.title) ? (
                                        <Link
                                          to={getSectionTitleLink(section.title)!}
                                          onClick={() => setMobileMenuOpen(false)}
                                          className="text-xs font-semibold text-gray-500 hover:text-primary uppercase tracking-wider mb-2 block hover:underline"
                                        >
                                          {section.title} →
                                        </Link>
                                      ) : (
                                        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                                          {section.title}
                                        </p>
                                      )
                                    )}
                                    <ul className="space-y-1">
                                      {section.items.map((item) => (
                                        <li key={item}>
                                          <Link
                                            to={getItemUrl(label, item)}
                                            onClick={() =>
                                              setMobileMenuOpen(false)
                                            }
                                            className="text-sm text-gray-600 hover:text-primary block py-1"
                                          >
                                            {item}
                                          </Link>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>

                <div className="p-4 border-t">
                  <p className="text-xs text-gray-400 mb-2">{language === 'hi' ? 'भाषा (Language)' : 'Language'}</p>
                  <div className="flex gap-2">
                    <button
                      onClick={() => {
                        setLanguage('en');
                        setMobileMenuOpen(false);
                      }}
                      className={cn(
                        'flex-1 px-3 py-2 text-sm rounded-md border transition-colors flex items-center justify-center gap-1.5',
                        language === 'en'
                          ? 'border-primary bg-primary-light text-primary font-medium'
                          : 'border-gray-200 text-gray-700 hover:border-primary hover:text-primary'
                      )}
                    >
                      <span>English</span>
                      {language === 'en' && <span className="text-xs font-bold text-primary">✓</span>}
                    </button>
                    <button
                      onClick={() => {
                        setLanguage('hi');
                        setMobileMenuOpen(false);
                      }}
                      className={cn(
                        'flex-1 px-3 py-2 text-sm rounded-md border transition-colors flex items-center justify-center gap-1.5',
                        language === 'hi'
                          ? 'border-primary bg-primary-light text-primary font-medium'
                          : 'border-gray-200 text-gray-700 hover:border-primary hover:text-primary'
                      )}
                    >
                      <span>हिन्दी (Hindi)</span>
                      {language === 'hi' && <span className="text-xs font-bold text-primary">✓</span>}
                    </button>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>

          <a
            href="/"
            className="lg:hidden absolute left-1/2 -translate-x-1/2 z-40"
          >
            <img
              src="/images/logo.png"
              alt="Mike Alpha"
              className="h-14 w-auto object-contain"
            />
          </a>

          <nav className="hidden lg:flex items-center justify-start gap-1 z-50">
            {navItemsLeft.map((label) => (
              <NavItem key={label} label={label} isLeft />
            ))}
          </nav>

          <a
            href="/"
            className="hidden lg:flex items-center justify-center z-40"
          >
            <img
              src="/images/logo.png"
              alt="Mike Alpha"
              className="h-24 w-auto object-contain"
            />
          </a>

          <nav className="hidden lg:flex items-center justify-end gap-1 z-50">
            {navItemsRight.map((label) =>
              label === 'COMPASSion' ? (
                <Link
                  key={label}
                  to="/impact-innovation-compassion"
                  className="h-full flex items-center px-2 py-1 text-sm font-medium text-navy border-b-2 border-transparent hover:border-navy transition-colors"
                >
                  {language === 'hi' && navTranslations[label] ? navTranslations[label] : label}
                </Link>
              ) : (
                <NavItem key={label} label={label} />
              )
            )}

            <div className="flex items-center gap-1 ml-1">
              <div ref={searchRef} className="relative flex items-center">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setShowSuggestions(true);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      handleSearchSubmit();
                    }
                  }}
                  onFocus={() => setShowSuggestions(true)}
                  placeholder="Search..."
                  className="h-9 w-[180px] pl-4 pr-10 border border-gray-300 rounded-full text-sm focus:outline-none focus:border-primary"
                />
                <button
                  onClick={handleSearchSubmit}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-primary transition-colors"
                  aria-label="Search"
                >
                  <Search className="w-4 h-4" />
                </button>
                {showSuggestions && suggestions.length > 0 && (
                  <div className="absolute top-full right-0 mt-2 w-72 bg-white rounded-lg shadow-dropdown border border-gray-100 py-2 z-50">
                    {suggestions.map((p) => (
                      <button
                        key={p.id}
                        onClick={() => handleSuggestionClick(p.slug)}
                        className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-primary-light hover:text-primary flex items-center gap-3"
                      >
                        <img
                          src={p.image}
                          alt=""
                          className="w-8 h-8 object-contain"
                        />
                        <span className="flex-1 truncate">{p.name}</span>
                        <span className="text-xs text-gray-400">
                          {p.category}
                        </span>
                      </button>
                    ))}
                    <button
                      onClick={handleSearchSubmit}
                      className="w-full text-left px-4 py-2 text-xs font-medium text-primary hover:bg-primary-light border-t border-gray-100"
                    >
                      View all results for "{searchQuery}"
                    </button>
                  </div>
                )}
              </div>

              <div ref={langRef} className="relative">
                <button
                  onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                  className="flex items-center gap-1.5 px-3 py-2 text-sm text-gray-700 hover:text-primary transition-colors font-medium rounded-full hover:bg-gray-50"
                  aria-label="Change Language"
                >
                  <Globe className="w-4 h-4 text-gray-500" />
                  <span>{language === 'hi' ? 'हिन्दी' : 'English'}</span>
                  <ChevronDown
                    className={cn(
                      'w-3.5 h-3.5 text-gray-400 transition-transform duration-200',
                      langDropdownOpen && 'rotate-180'
                    )}
                  />
                </button>
                <AnimatePresence>
                  {langDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-dropdown border border-gray-100 py-1 min-w-[140px] z-50"
                    >
                      <button
                        onClick={() => {
                          setLanguage('en');
                          setLangDropdownOpen(false);
                        }}
                        className={cn(
                          'w-full text-left px-4 py-2 text-sm flex items-center justify-between hover:bg-primary-light hover:text-primary transition-colors',
                          language === 'en'
                            ? 'text-primary font-semibold bg-primary-light/50'
                            : 'text-gray-700'
                        )}
                      >
                        <span>English</span>
                        {language === 'en' && <span className="text-xs text-primary font-bold">✓</span>}
                      </button>
                      <button
                        onClick={() => {
                          setLanguage('hi');
                          setLangDropdownOpen(false);
                        }}
                        className={cn(
                          'w-full text-left px-4 py-2 text-sm flex items-center justify-between hover:bg-primary-light hover:text-primary transition-colors',
                          language === 'hi'
                            ? 'text-primary font-semibold bg-primary-light/50'
                            : 'text-gray-700'
                        )}
                      >
                        <span>हिन्दी (Hindi)</span>
                        {language === 'hi' && <span className="text-xs text-primary font-bold">✓</span>}
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
