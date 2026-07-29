import { Link, useNavigate } from 'react-router';
import { useState, useEffect, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronDown,
  Search,
  Menu,
  Globe,
  X,
} from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { products } from '@/data/products';
import { cropGuides } from '@/data/cropGuides';
import { cn } from '@/lib/utils';

const cropSlugMap = new Map(cropGuides.map((c) => [c.cropName, c.slug]));

const navItemsLeft = ['Crop Guide', 'Products', 'Growing Practice', 'Smart Farming'];
const navItemsRight = ['COMPASSion', 'Precision IMPACT', 'Corporate', 'Insights'];

type DropdownSection = {
  title?: string;
  items: string[];
};

const productUrlMap: Record<string, string> = {
  'Potassium nitrate fertilizer products': '/products?q=Potassium+nitrate',
  'Water Soluble Fertilizers': '/products?category=Specialty+Fertilizers',
  Biostimulants: '/products?category=Biostimulant',
  Micronutrients: '/products?category=Micronutrients',
  'Controlled release fertilizers': '/products?category=Specialty+Fertilizers',
  'NPK granular fertilizer products': '/products?category=NPK+Fertilizers',
  Solar: '#',
  'Technical KNO3': '#',
  'Products Catalog': '/products',
  'SDS Request': '#',
  'Quality Assurance': '#',
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
      title: 'Plant Nutrition',
      items: [
        'Potassium nitrate fertilizer products',
        'Water Soluble Fertilizers',
        'Biostimulants',
        'Micronutrients',
        'Controlled release fertilizers',
        'NPK granular fertilizer products',
      ],
    },
    {
      title: 'Industrial',
      items: ['Solar', 'Technical KNO3', 'Products Catalog', 'SDS Request', 'Quality Assurance'],
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
        'MyMultifeed™',
        'Nitric Acid Calculator',
        'NutriNet™',
        'MultiMatch™',
        'Conversion Calculator',
        'Deficiency Pro',
      ],
    },
    {
      title: 'Mobile Apps',
      items: [
        'FertiMatch™',
        'FoliMatch™',
        'Croptune - Nitrogen leaves laboratory',
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
        'News & Events',
        'Mike Alpha Grows',
        'Mike Alpha Worldwide',
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

function getItemUrl(label: string, item: string): string {
  switch (label) {
    case 'Products':
      return productUrlMap[item] || `/products?line=${encodeURIComponent(item)}`;
    case 'Crop Guide': {
      const slug = cropSlugMap.get(item);
      return slug ? `/${slug}` : '#';
    }
    case 'Growing Practice':
      return `/growing-practice`;
    case 'Smart Farming':
      return `/smart-farming`;
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
        'R&D Innovative Center': '/haifas-rd-center',
        'Code of Conduct': '/haifas-values',
        'Core Values': '/core-values-1',
        'News & Events': '/news-events',
        'Mike Alpha Grows': '/haifa-grows',
        'Mike Alpha Worldwide': '/haifa-worldwide',
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
        'Mike Alpha Agriculture Videos': '/haifa-videos',
      };
      return insightsUrlMap[item] || `/insights`;
    }
    case 'COMPASSion':
      return `/compassion`;
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
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const layout = dropdownLayout[label] ?? 'columns';
  const sections = dropdownData[label] ?? [];

  return (
    <div
      className="relative"
      onMouseEnter={() => setActiveDropdown(label)}
      onMouseLeave={() => setActiveDropdown(null)}
    >
      <button
        className={cn(
          'h-12 flex items-center gap-1 text-xs font-medium border-b-2 transition-colors',
          isLeft
            ? activeDropdown === label
              ? 'text-primary border-primary'
              : 'text-primary border-transparent hover:border-primary'
            : activeDropdown === label
              ? 'text-primary border-green-600'
              : 'text-gray-700 border-transparent hover:text-primary hover:border-green-600'
        )}
      >
        {label}
        <ChevronDown
          className={cn(
            'w-4 h-4 transition-transform duration-200',
            activeDropdown === label && 'rotate-180'
          )}
        />
      </button>

      <AnimatePresence>
        {activeDropdown === label && layout === 'columns' && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className={cn(
              'absolute top-full left-1/2 -translate-x-1/2 bg-white shadow-dropdown rounded-b-lg border border-gray-100 z-50 py-5 px-6',
              sections.length > 1 ? 'min-w-[640px]' : 'min-w-[260px]'
            )}
          >
            <div
              className={cn(
                'grid gap-8',
                sections.length > 1 ? 'grid-cols-2' : 'grid-cols-1'
              )}
            >
              {sections.map((section, idx) => (
                <div key={idx}>
                  {section.title && (
                    <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                      {section.title}
                    </h4>
                  )}
                  <ul className="space-y-2">
                    {section.items.map((item) => (
                      <li key={item}>
                        <Link
                          to={getItemUrl(label, item)}
                          onClick={() => setActiveDropdown(null)}
                          className={cn(
                            'text-sm transition-colors block py-1',
                            isLeft
                              ? 'text-primary hover:text-primary/80'
                              : 'text-gray-600 hover:text-primary'
                          )}
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
  const [isSticky, setIsSticky] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [language, setLanguage] = useState('en');
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
    setIsSearchOpen(false);
    if (!q) return;
    navigate(`/products?q=${encodeURIComponent(q)}`);
  };

  const handleSuggestionClick = (slug: string) => {
    setSearchQuery('');
    setShowSuggestions(false);
    setIsSearchOpen(false);
    navigate(`/products/${slug}`);
  };

  useEffect(() => {
    const saved = localStorage.getItem('language');
    if (saved) setLanguage(saved);
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    localStorage.setItem('language', language);
  }, [language]);

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
        <div className="max-w-container mx-auto px-4 lg:px-6 h-14 lg:h-[72px] flex items-center justify-between relative">
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <button
                className="lg:hidden p-2 text-gray-700 hover:text-primary transition-colors"
                aria-label="Open menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[320px] p-0">
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
                      placeholder="Search products..."
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
                  {[...navItemsLeft, ...navItemsRight].map((label) =>
                    label === 'COMPASSion' ? (
                      <div key={label} className="border-b border-gray-50">
                        <Link
                          to="/compassion"
                          onClick={() => setMobileMenuOpen(false)}
                          className="block px-6 py-3 text-sm font-medium text-gray-700 hover:bg-primary-light hover:text-primary transition-colors"
                        >
                          {label}
                        </Link>
                      </div>
                    ) : (
                      <div key={label} className="border-b border-gray-50">
                        <button
                          onClick={() => toggleMobileSection(label)}
                          className="w-full flex items-center justify-between px-6 py-3 text-sm font-medium text-gray-700 hover:bg-primary-light hover:text-primary transition-colors"
                        >
                          {label}
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
                                {dropdownData[label]?.map((section, idx) => (
                                  <div key={idx}>
                                    {section.title && (
                                      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                                        {section.title}
                                      </p>
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
                    )
                  )}
                </div>

                <div className="p-4 border-t">
                  <p className="text-xs text-gray-400 mb-2">Language</p>
                  <div className="flex gap-2">
                    <button
                      onClick={() => {
                        setLanguage('en');
                        setMobileMenuOpen(false);
                      }}
                      className={cn(
                        'flex-1 px-3 py-2 text-sm rounded-md border transition-colors',
                        language === 'en'
                          ? 'border-primary bg-primary-light text-primary font-medium'
                          : 'border-gray-200 text-gray-700 hover:border-primary hover:text-primary'
                      )}
                    >
                      English
                    </button>
                    <button
                      onClick={() => {
                        setLanguage('hi');
                        setMobileMenuOpen(false);
                      }}
                      className={cn(
                        'flex-1 px-3 py-2 text-sm rounded-md border transition-colors',
                        language === 'hi'
                          ? 'border-primary bg-primary-light text-primary font-medium'
                          : 'border-gray-200 text-gray-700 hover:border-primary hover:text-primary'
                      )}
                    >
                      हिन्दी
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
              className="h-12 w-auto object-contain"
            />
          </a>

          <nav className="hidden lg:flex items-center gap-1 flex-shrink-0 z-50">
            {navItemsLeft.map((label) => (
              <NavItem key={label} label={label} isLeft />
            ))}
          </nav>

          <a
            href="/"
            className="hidden lg:block absolute left-1/2 -translate-x-1/2 z-40"
          >
            <img
              src="/images/logo.png"
              alt="Mike Alpha"
              className="h-16 w-auto object-contain"
            />
          </a>

          <nav className="hidden lg:flex items-center gap-1 flex-shrink-0 z-50">
            {navItemsRight.map((label) =>
              label === 'COMPASSion' ? (
                <Link
                  key={label}
                  to="/compassion"
                  className="h-12 flex items-center px-1 text-xs font-medium text-gray-700 border-b-2 border-transparent hover:text-primary hover:border-green-600 transition-colors"
                >
                  {label}
                </Link>
              ) : (
                <NavItem key={label} label={label} />
              )
            )}

            <div className="flex items-center gap-1 ml-1">
              <div ref={searchRef} className="relative flex items-center">
                <AnimatePresence>
                  {isSearchOpen && (
                    <motion.div
                      initial={{ width: 0, opacity: 0 }}
                      animate={{ width: 200, opacity: 1 }}
                      exit={{ width: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="relative"
                    >
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
                        className="h-9 w-full pl-4 pr-10 border border-gray-300 rounded-full text-sm focus:outline-none focus:border-primary"
                        autoFocus
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
                            View all results for “{searchQuery}”
                          </button>
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
                <button
                  onClick={() => {
                    setIsSearchOpen(!isSearchOpen);
                    if (isSearchOpen) {
                      setSearchQuery('');
                      setShowSuggestions(false);
                    }
                  }}
                  className="p-2 text-gray-500 hover:text-primary transition-colors"
                  aria-label="Toggle search"
                >
                  {isSearchOpen ? (
                    <X className="w-5 h-5" />
                  ) : (
                    <Search className="w-5 h-5" />
                  )}
                </button>
              </div>

              <div ref={langRef} className="relative">
                <button
                  onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                  className="flex items-center gap-1 px-3 py-2 text-sm text-gray-600 hover:text-primary transition-colors"
                >
                  <Globe className="w-4 h-4" />
                  <span>{language === 'hi' ? 'HI' : 'EN'}</span>
                  <ChevronDown
                    className={cn(
                      'w-3.5 h-3.5 transition-transform duration-200',
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
                      className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-dropdown border border-gray-100 py-1 min-w-[120px] z-50"
                    >
                      <button
                        onClick={() => {
                          setLanguage('en');
                          setLangDropdownOpen(false);
                        }}
                        className={cn(
                          'w-full text-left px-4 py-2 text-sm hover:bg-primary-light hover:text-primary transition-colors',
                          language === 'en'
                            ? 'text-primary font-medium'
                            : 'text-gray-700'
                        )}
                      >
                        English
                      </button>
                      <button
                        onClick={() => {
                          setLanguage('hi');
                          setLangDropdownOpen(false);
                        }}
                        className={cn(
                          'w-full text-left px-4 py-2 text-sm hover:bg-primary-light hover:text-primary transition-colors',
                          language === 'hi'
                            ? 'text-primary font-medium'
                            : 'text-gray-700'
                        )}
                      >
                        हिन्दी
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
