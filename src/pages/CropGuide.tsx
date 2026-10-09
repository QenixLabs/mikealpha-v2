import { useState, useMemo, useEffect } from 'react';
import { useParams, Link, useSearchParams } from 'react-router';
import { motion } from 'framer-motion';
import {
  Award,
  FileText,
  BookOpen,
  Tag,
  ExternalLink,
  ChevronRight,
  Search,
  Sprout,
  ArrowRight,
  Layers,
  Sparkles,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/sections/Footer';
import FloatingActions from '@/components/FloatingActions';
import {
  cropGuides,
  getCropGuideBySlug,
  type CropResource,
} from '@/data/cropGuides';
import { toInternalArticleUrl } from '@/lib/utils';
import { staggerContainer, fadeUpVariant } from '@/lib/animations';

const iconMap = {
  recommendation: Award,
  pdf: FileText,
  article: BookOpen,
  tag: Tag,
};

function ResourceList({ resources }: { resources: CropResource[] }) {
  return (
    <div className="space-y-4">
      {resources.map((resource, idx) => {
        const Icon = iconMap[resource.icon];
        const internalUrl = toInternalArticleUrl(resource.href);
        const content = (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            className="flex items-start gap-4 p-4 bg-white border border-brand-border rounded-lg hover:shadow-card transition-shadow"
          >
            <div className="w-12 h-12 rounded-lg bg-primary-light flex items-center justify-center flex-shrink-0">
              <Icon className="w-6 h-6 text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <span className="group inline-flex items-center gap-2 text-base font-medium text-brand-text-primary hover:text-primary transition-colors">
                <span className="leading-snug">{resource.text}</span>
                <ExternalLink className="w-4 h-4 flex-shrink-0 opacity-60 group-hover:opacity-100 transition-opacity" />
              </span>
            </div>
          </motion.div>
        );

        return internalUrl ? (
          <Link key={idx} to={internalUrl} className="block">
            {content}
          </Link>
        ) : (
          <a
            key={idx}
            href={resource.href}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            {content}
          </a>
        );
      })}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Crop Catalog Component (Overview when visiting /crop-guide or searching)
// ---------------------------------------------------------------------------
function CropGuideCatalog({ missingSlug }: { missingSlug?: string }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryFromUrl = searchParams.get('category');
  const [selectedCategory, setSelectedCategory] = useState<string>(categoryFromUrl || 'All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    if (categoryFromUrl) {
      setSelectedCategory(categoryFromUrl);
    }
  }, [categoryFromUrl]);

  const handleCategorySelect = (cat: string) => {
    setSelectedCategory(cat);
    const next = new URLSearchParams(searchParams);
    if (cat === 'All') {
      next.delete('category');
    } else {
      next.set('category', cat);
    }
    setSearchParams(next, { replace: true });
  };

  const categories = useMemo(() => {
    const cats = ['All', 'Vegetables', 'Fruit Trees', 'Soft Fruit', 'Field Crops', 'Herbs', 'Ornamentals', 'Forestry', 'Turf'];
    return cats;
  }, []);

  const filteredCrops = useMemo(() => {
    return cropGuides.filter((crop) => {
      // Exclude generic placeholder entries from directory if specific ones exist
      if ((crop.cropName === 'Forestry' || crop.cropName === 'Turf') && selectedCategory !== 'All') {
        // Keep them visible in all or specific
      }

      const matchesCategory =
        selectedCategory === 'All' || crop.category.toLowerCase() === selectedCategory.toLowerCase();

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        crop.cropName.toLowerCase().includes(q) ||
        crop.category.toLowerCase().includes(q) ||
        crop.h2.toLowerCase().includes(q) ||
        crop.body.some((p) => p.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between">
      <Navbar />

      <main className="pt-24 pb-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-navy via-slate-900 to-navy text-white py-16 lg:py-20 px-4 lg:px-8 mb-12 shadow-inner">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(46,144,250,0.18),transparent_50%)] pointer-events-none" />
          <div className="max-w-container mx-auto relative z-10">
            {missingSlug && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 rounded-xl bg-amber-500/20 border border-amber-400/40 text-amber-200 text-sm max-w-2xl"
              >
                The requested crop guide <code className="bg-black/30 px-2 py-0.5 rounded font-mono text-white">/{missingSlug}</code> could not be found directly. Browse all 82 available crop guides below:
              </motion.div>
            )}

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/20 border border-primary/30 text-primary-light text-xs font-semibold uppercase tracking-wider mb-4">
              <Sprout className="w-4 h-4 text-primary" />
              Agronomic Knowledge Base
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 text-white">
              Crop Guides & Agricultural Nutrition
            </h1>
            <p className="text-slate-300 text-base md:text-lg max-w-3xl leading-relaxed mb-8">
              Explore scientifically proven fertilization schedules, growth stage nutrient demands,
              and foliar recommendations tailored for over 80 commercial crops.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl relative">
              <div className="relative flex items-center">
                <Search className="absolute left-4 w-5 h-5 text-slate-400 pointer-events-none" />
                <input
                  type="text"
                  placeholder="Search crop by name (e.g., Tomato, Eucalyptus, Lawn, Almond, Wheat)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-white text-slate-900 placeholder:text-slate-400 text-base shadow-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-4 text-xs bg-slate-200 hover:bg-slate-300 text-slate-700 px-2.5 py-1 rounded-md transition"
                  >
                    Clear
                  </button>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Categories & Grid */}
        <div className="max-w-container mx-auto px-4 lg:px-6">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
            {categories.map((cat) => {
              const count =
                cat === 'All'
                  ? cropGuides.length
                  : cropGuides.filter((c) => c.category.toLowerCase() === cat.toLowerCase()).length;
              const isActive = selectedCategory === cat;

              return (
                <button
                  key={cat}
                  onClick={() => handleCategorySelect(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all flex items-center gap-2 ${
                    isActive
                      ? 'bg-navy text-white shadow-md'
                      : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  <span>{cat}</span>
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full ${
                      isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Results Count */}
          <div className="flex items-center justify-between mb-6 text-sm text-slate-500">
            <span>
              Showing <strong className="text-slate-800">{filteredCrops.length}</strong> crop guides
              {selectedCategory !== 'All' ? ` in ${selectedCategory}` : ''}
              {searchQuery ? ` matching "${searchQuery}"` : ''}
            </span>
          </div>

          {/* Crop Cards Grid */}
          {filteredCrops.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
              <Layers className="w-12 h-12 text-slate-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-slate-800 mb-2">No crop guides found</h3>
              <p className="text-slate-500 max-w-md mx-auto mb-6">
                We couldn&apos;t find any crop matching your query. Try searching with a different keyword or reset filters.
              </p>
              <button
                onClick={() => {
                  handleCategorySelect('All');
                  setSearchQuery('');
                }}
                className="px-5 py-2.5 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary-dark transition shadow"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            >
              {filteredCrops.map((crop) => (
                <motion.div
                  key={crop.slug}
                  variants={fadeUpVariant}
                  className="group bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
                >
                  {/* Image Thumbnail */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                    <img
                      src={crop.bannerImage}
                      alt={crop.cropName}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-white/90 backdrop-blur-sm text-xs font-semibold text-navy shadow-sm">
                      {crop.category}
                    </span>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-navy group-hover:text-primary transition-colors mb-1.5">
                        {crop.cropName}
                      </h3>
                      <p className="text-xs text-slate-500 line-clamp-2 mb-3 leading-relaxed">
                        {crop.body[0] || crop.h2}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-xs font-medium text-primary flex items-center gap-1 group-hover:underline">
                        <span>Fertilization Guide</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </span>
                      <Link
                        to={`/${crop.slug}`}
                        className="stretched-link"
                        aria-label={`View ${crop.cropName} crop guide`}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </main>

      <Footer />
      <FloatingActions />
    </div>
  );
}

// ---------------------------------------------------------------------------
// Main Crop Guide Router/Component
// ---------------------------------------------------------------------------
export default function CropGuide() {
  const { slug, '*': splat } = useParams<{ slug?: string; '*': string }>();
  const rawPathSlug = slug || (splat ? `crop-guide/${splat}` : undefined);
  const pathSlug = rawPathSlug?.replace(/^\/+|\/+$/g, '');

  // If path is specifically /crop-guide with no sub-slug, display catalog
  if (!pathSlug || pathSlug === 'crop-guide') {
    return <CropGuideCatalog />;
  }

  const guide = getCropGuideBySlug(pathSlug);

  // If slug is not found in cropGuides, display catalog with warning banner
  if (!guide) {
    return <CropGuideCatalog missingSlug={pathSlug} />;
  }

  const intro = guide.intro ?? guide.body;
  const hasResources = guide.resources && guide.resources.length > 0;

  // Find other crops in the same category for recommendation carousel
  const siblingCrops = cropGuides
    .filter((c) => c.category === guide.category && c.slug !== guide.slug)
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Banner */}
      <section className="w-full px-4 lg:px-6 pt-4">
        <div className="max-w-container mx-auto">
          <div className="relative w-full h-[260px] md:h-[340px] lg:h-[400px] rounded-2xl overflow-hidden shadow-lg">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${guide.bannerImage})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/60 to-transparent" />
            <div className="relative z-10 h-full flex flex-col justify-end p-6 md:p-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-2xl"
              >
                <nav className="text-xs text-white/80 mb-3 flex flex-wrap items-center gap-1.5">
                  <Link to="/" className="hover:text-white transition">Home</Link>
                  <ChevronRight className="w-3 h-3 text-white/50" />
                  <Link to="/crop-guide" className="hover:text-white transition">Crop Guide</Link>
                  <ChevronRight className="w-3 h-3 text-white/50" />
                  <span className="text-white/70">{guide.category}</span>
                  <ChevronRight className="w-3 h-3 text-white/50" />
                  <span className="text-white font-medium">{guide.h1}</span>
                </nav>
                <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                  {guide.h1}
                </h1>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-container mx-auto px-4 lg:px-6 py-10 lg:py-14"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Left column */}
          <div className="lg:col-span-8">
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-semibold text-navy mb-4">
                {guide.h2}
              </h2>
              {guide.h3 && (
                <p className="text-lg text-brand-text-secondary leading-relaxed">
                  {guide.h3}
                </p>
              )}
            </div>

            <div className="prose prose-lg max-w-none text-brand-text-primary leading-relaxed mb-10">
              {intro.map((paragraph, idx) => (
                <p key={idx} className="mb-4 text-slate-700 leading-relaxed">
                  {paragraph.replace(/\nSource: Wikipedia/g, '').trim()}
                </p>
              ))}
            </div>

            {hasResources && (
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-navy mb-4">
                  Recommendations & resources
                </h3>
                <ResourceList resources={guide.resources!} />
              </div>
            )}

            {/* Sibling crops in the same category */}
            {siblingCrops.length > 0 && (
              <div className="mt-14 pt-8 border-t border-slate-200">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-navy">
                    More {guide.category} Guides
                  </h3>
                  <Link
                    to="/crop-guide"
                    className="text-sm font-semibold text-primary hover:underline inline-flex items-center gap-1"
                  >
                    <span>View all crops</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {siblingCrops.map((sibling) => (
                    <Link
                      key={sibling.slug}
                      to={`/${sibling.slug}`}
                      className="group flex items-center gap-3 p-3 rounded-xl border border-slate-200 hover:border-primary/40 hover:shadow-md transition bg-slate-50/50 hover:bg-white"
                    >
                      <img
                        src={sibling.bannerImage}
                        alt={sibling.cropName}
                        className="w-16 h-14 rounded-lg object-cover flex-shrink-0"
                      />
                      <div className="min-w-0 flex-1">
                        <h4 className="text-sm font-bold text-navy group-hover:text-primary transition-colors truncate">
                          {sibling.cropName}
                        </h4>
                        <p className="text-xs text-slate-500 truncate">
                          {sibling.h2}
                        </p>
                      </div>
                      <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-primary group-hover:translate-x-0.5 transition flex-shrink-0" />
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right column / sidebar */}
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-24 space-y-6">
              {guide.recommendationsLink && (
                <div className="bg-primary-light/60 border border-primary/20 rounded-xl p-6 shadow-sm">
                  <div className="flex items-center gap-2 mb-3">
                    <Sparkles className="w-4 h-4 text-primary" />
                    <h4 className="text-xs font-bold text-primary uppercase tracking-wider">
                      Agronomic Recommendation
                    </h4>
                  </div>
                  {(() => {
                    const internalUrl = toInternalArticleUrl(guide.recommendationsLink.href);
                    const content = (
                      <div className="flex items-start gap-3">
                        <div className="w-9 h-9 rounded-lg bg-primary text-white flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                          <Award className="w-5 h-5" />
                        </div>
                        <div className="flex-1">
                          <span className="text-sm font-semibold text-navy group-hover:text-primary transition-colors leading-snug block mb-1">
                            {guide.recommendationsLink.text}
                          </span>
                          <span className="text-xs text-primary font-medium inline-flex items-center gap-1">
                            <span>Read Full Protocol</span>
                            <ChevronRight className="w-3.5 h-3.5" />
                          </span>
                        </div>
                      </div>
                    );
                    return internalUrl ? (
                      <Link to={internalUrl} className="group block">
                        {content}
                      </Link>
                    ) : (
                      <a
                        href={guide.recommendationsLink.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block"
                      >
                        {content}
                      </a>
                    );
                  })()}
                </div>
              )}

              {/* Quick links & tags */}
              {(guide.relatedTagsLink || guide.sourceLink) && (
                <div className="bg-white border border-brand-border rounded-xl p-5 shadow-sm">
                  <h4 className="text-xs font-bold text-navy uppercase tracking-wider mb-4">
                    Additional Resources
                  </h4>
                  <div className="space-y-3">
                    {guide.relatedTagsLink && (
                      (() => {
                        const internalUrl = toInternalArticleUrl(guide.relatedTagsLink!.href);
                        const content = (
                          <span className="flex items-center gap-2.5 text-sm text-slate-700 hover:text-primary transition-colors">
                            <Tag className="w-4 h-4 text-primary flex-shrink-0" />
                            <span>{guide.relatedTagsLink.text}</span>
                          </span>
                        );
                        return internalUrl ? (
                          <Link to={internalUrl}>{content}</Link>
                        ) : (
                          <a
                            href={guide.relatedTagsLink.href}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {content}
                          </a>
                        );
                      })()
                    )}
                    {guide.sourceLink && (
                      (() => {
                        const internalUrl = toInternalArticleUrl(guide.sourceLink!.href);
                        const content = (
                          <span className="flex items-center gap-2.5 text-sm text-slate-700 hover:text-primary transition-colors">
                            <ExternalLink className="w-4 h-4 text-primary flex-shrink-0" />
                            <span>{guide.sourceLink.text}</span>
                          </span>
                        );
                        return internalUrl ? (
                          <Link to={internalUrl}>{content}</Link>
                        ) : (
                          <a
                            href={guide.sourceLink.href}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {content}
                          </a>
                        );
                      })()
                    )}
                  </div>
                </div>
              )}

              {/* Return to Catalog Button */}
              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
                <h4 className="text-sm font-bold text-navy mb-1.5">Need another crop?</h4>
                <p className="text-xs text-slate-500 mb-3">
                  Browse nutritional guidelines and fertilization programs for 82+ commercial crops.
                </p>
                <Link
                  to="/crop-guide"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-navy hover:bg-slate-800 text-white text-xs font-semibold shadow-sm transition"
                >
                  <Sprout className="w-4 h-4 text-primary-light" />
                  <span>Browse All Crop Guides</span>
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </motion.article>

      <Footer />
      <FloatingActions />
    </div>
  );
}
