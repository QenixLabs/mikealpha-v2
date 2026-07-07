import { Link, useNavigate } from 'react-router';
import { useState, useEffect, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronDown,
  Search,
  Menu,
  Mail,
  MapPin,
  Globe,
  X,
} from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { products } from '@/data/products';

const navItemsLeft = [
  { label: 'Crop Guide', href: '#crop-guide', hasDropdown: true },
  { label: 'Products', href: '/products', hasDropdown: true },
  { label: 'Growing Practice', href: '#growing-practice', hasDropdown: true },
];

const navItemsRight = [
  { label: 'About', href: '/about', hasDropdown: false },
  { label: 'Contact', href: '/contact', hasDropdown: false },
];

const dropdownData: Record<string, { title: string; items: string[] }> = {
  'Crop Guide': {
    title: 'Crop Categories',
    items: ['Foliar Solutions', 'NPK Fertilizers', 'Specialty Fertilizers', 'Biological Fertilizers', 'Biostimulant', 'Straight Fertilizers', 'Micronutrients', 'Adjuvants'],
  },
  'Products': {
    title: 'Product Lines',
    items: ['Vitagea', 'Pluvigea', 'Protega', 'Microgea'],
  },
  'Growing Practice': {
    title: 'Application Methods',
    items: ['Foliar Spray', 'Drip Fertigation', 'Soil Application', 'Seed Treatment'],
  },
};

function getDropdownUrl(label: string, item: string): string {
  switch (label) {
    case 'Crop Guide':
      return `/products?category=${encodeURIComponent(item)}`;
    case 'Products':
      return `/products?line=${encodeURIComponent(item)}`;
    case 'Growing Practice':
      return `/products?q=${encodeURIComponent(item)}`;
    default:
      return '#';
  }
}

export default function Navbar() {
  const navigate = useNavigate();
  const [isSticky, setIsSticky] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [language, setLanguage] = useState('en');
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const langRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 36);
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

  return (
    <header className="w-full">
      {/* Main Navigation */}
      <nav
        className={`w-full bg-white transition-all duration-300 z-50 ${
          isSticky
            ? 'fixed top-0 left-0 right-0 shadow-nav'
            : 'relative'
        }`}
        style={{ height: 64 }}
      >
        <div className="max-w-container mx-auto px-4 lg:px-6 h-full flex items-center justify-end lg:justify-center relative">
          {/* Desktop centered nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navItemsLeft.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.href.startsWith('/') ? (
                  <Link
                    to={item.href}
                    className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary transition-colors uppercase tracking-wide"
                  >
                    {item.label}
                    {item.hasDropdown && (
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === item.label ? 'rotate-180' : ''
                        }`}
                      />
                    )}
                  </Link>
                ) : (
                  <a
                    href={item.href}
                    className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary transition-colors uppercase tracking-wide"
                  >
                    {item.label}
                    {item.hasDropdown && (
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === item.label ? 'rotate-180' : ''
                        }`}
                      />
                    )}
                  </a>
                )}

                {/* Dropdown */}
                <AnimatePresence>
                  {item.hasDropdown && activeDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 bg-white shadow-dropdown rounded-lg py-4 px-5 min-w-[220px] z-50 border border-gray-100"
                    >
                      <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                        {dropdownData[item.label]?.title}
                      </h4>
                      <ul className="space-y-2">
                        {dropdownData[item.label]?.items.map((subItem) => (
                          <li key={subItem}>
                            <Link
                              to={getDropdownUrl(item.label, subItem)}
                              onClick={() => setActiveDropdown(null)}
                              className="text-sm text-gray-600 hover:text-primary transition-colors block py-1"
                            >
                              {subItem}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            {/* Logo */}
            <a href="/" className="flex items-center gap-2 px-4">
              <img src="/images/logo.png" alt="Mike Alpha" className="h-16 w-auto" />
            </a>

            {navItemsRight.map((item) =>
              item.href.startsWith('/') ? (
                <Link
                  key={item.label}
                  to={item.href}
                  className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary transition-colors uppercase tracking-wide"
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary transition-colors uppercase tracking-wide"
                >
                  {item.label}
                </a>
              )
            )}

            {/* Search */}
            <div ref={searchRef} className="relative flex items-center ml-2">
              <AnimatePresence>
                {isSearchOpen && (
                  <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: 260, opacity: 1 }}
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
                      placeholder="Search products..."
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
                            <img src={p.image} alt="" className="w-8 h-8 object-contain" />
                            <span className="flex-1 truncate">{p.name}</span>
                            <span className="text-xs text-gray-400">{p.category}</span>
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
              >
                {isSearchOpen ? <X className="w-5 h-5" /> : <Search className="w-5 h-5" />}
              </button>
            </div>

            {/* Language */}
            <div ref={langRef} className="relative ml-1">
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center gap-1 px-3 py-2 text-sm text-gray-600 hover:text-primary transition-colors"
              >
                <Globe className="w-4 h-4" />
                <span>{language === 'hi' ? 'HI' : 'EN'}</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    langDropdownOpen ? 'rotate-180' : ''
                  }`}
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
                      className={`w-full text-left px-4 py-2 text-sm hover:bg-primary-light hover:text-primary transition-colors ${
                        language === 'en'
                          ? 'text-primary font-medium'
                          : 'text-gray-700'
                      }`}
                    >
                      English
                    </button>
                    <button
                      onClick={() => {
                        setLanguage('hi');
                        setLangDropdownOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 text-sm hover:bg-primary-light hover:text-primary transition-colors ${
                        language === 'hi'
                          ? 'text-primary font-medium'
                          : 'text-gray-700'
                      }`}
                    >
                      हिन्दी
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile Logo */}
          <a href="/" className="flex lg:hidden items-center gap-2 absolute left-1/2 -translate-x-1/2 z-10">
            <img src="/images/logo.png" alt="Mike Alpha" className="h-16 w-auto" />
          </a>

          {/* Mobile Menu */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(true);
              }}
              className="p-2 text-gray-500"
            >
              <Search className="w-5 h-5" />
            </button>
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <button className="p-2 text-gray-700">
                  <Menu className="w-6 h-6" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[320px] p-0">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between p-4 border-b">
                    <span className="font-bold text-primary">Menu</span>
                  </div>

                  {/* Mobile search */}
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
                            <img src={p.image} alt="" className="w-7 h-7 object-contain" />
                            <span className="flex-1 truncate">{p.name}</span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="flex-1 overflow-auto py-4">
                    {[...navItemsLeft, ...navItemsRight].map((item) =>
                      item.href.startsWith('/') ? (
                        <Link
                          key={item.label}
                          to={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center justify-between px-6 py-3 text-sm font-medium text-gray-700 hover:bg-primary-light hover:text-primary transition-colors"
                        >
                          {item.label}
                          {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                        </Link>
                      ) : (
                        <a
                          key={item.label}
                          href={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center justify-between px-6 py-3 text-sm font-medium text-gray-700 hover:bg-primary-light hover:text-primary transition-colors"
                        >
                          {item.label}
                          {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                        </a>
                      )
                    )}
                    {/* Mobile dropdown links */}
                    <div className="mt-4 px-6 space-y-4">
                      {Object.entries(dropdownData).map(([label, { title, items }]) => (
                        <div key={label}>
                          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">{title}</p>
                          <ul className="space-y-1">
                            {items.map((subItem) => (
                              <li key={subItem}>
                                <Link
                                  to={getDropdownUrl(label, subItem)}
                                  onClick={() => setMobileMenuOpen(false)}
                                  className="text-sm text-gray-600 hover:text-primary block py-1"
                                >
                                  {subItem}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="p-4 border-t space-y-3">
                    <a href="#contact" className="flex items-center gap-2 text-sm text-gray-600">
                      <Mail className="w-4 h-4" /> Contact us
                    </a>
                    <a href="#distributor" className="flex items-center gap-2 text-sm text-gray-600">
                      <MapPin className="w-4 h-4" /> Find Distributor
                    </a>
                    <div className="pt-2 border-t border-gray-100">
                      <p className="text-xs text-gray-400 mb-2">Language</p>
                      <div className="flex gap-2">
                        <button
                          onClick={() => {
                            setLanguage('en');
                            setMobileMenuOpen(false);
                          }}
                          className={`flex-1 px-3 py-2 text-sm rounded-md border transition-colors ${
                            language === 'en'
                              ? 'border-primary bg-primary-light text-primary font-medium'
                              : 'border-gray-200 text-gray-700 hover:border-primary hover:text-primary'
                          }`}
                        >
                          English
                        </button>
                        <button
                          onClick={() => {
                            setLanguage('hi');
                            setMobileMenuOpen(false);
                          }}
                          className={`flex-1 px-3 py-2 text-sm rounded-md border transition-colors ${
                            language === 'hi'
                              ? 'border-primary bg-primary-light text-primary font-medium'
                              : 'border-gray-200 text-gray-700 hover:border-primary hover:text-primary'
                          }`}
                        >
                          हिन्दी
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
}
