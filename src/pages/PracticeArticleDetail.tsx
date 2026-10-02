import { useParams, Link, useLocation } from 'react-router';
import { motion } from 'framer-motion';
import {
  ChevronRight,
  ChevronLeft,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  Info,
  Clock,
  ArrowRight,
  Sprout,
  ShieldCheck,
  Send,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/sections/Footer';
import FloatingActions from '@/components/FloatingActions';
import { getPracticeArticleBySlug } from '@/data/growingPracticeData';
import { staggerContainer, fadeUpVariant } from '@/lib/animations';

export default function PracticeArticleDetail() {
  const { slug } = useParams<{ slug: string }>();
  const location = useLocation();

  // Handle both params slug and direct path matches
  const currentPath = location.pathname.replace(/^\/+|\/+$/g, '');
  const article =
    (slug ? getPracticeArticleBySlug(slug) : undefined) ||
    getPracticeArticleBySlug(currentPath);

  if (!article) {
    return (
      <div className="min-h-screen bg-brand-background text-brand-text-primary">
        <Navbar />
        <main className="pt-36 pb-24 text-center max-w-container mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Practice Guide Not Found</h1>
          <p className="text-gray-600 mb-6">
            The growing practice guide you are looking for could not be located.
          </p>
          <Link
            to="/growing-practice"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
          >
            <ChevronLeft className="w-4 h-4" /> Return to Growing Practice Overview
          </Link>
        </main>
        <Footer />
        <FloatingActions />
      </div>
    );
  }

  const relatedArticles = article.relatedSlugs
    .map((s) => getPracticeArticleBySlug(s))
    .filter(Boolean);

  return (
    <div className="min-h-screen bg-brand-background text-brand-text-primary">
      <Navbar />

      <main className="pt-28 md:pt-32">
        {/* Hero Section */}
        <section className="relative bg-navy text-white py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src={article.heroImage}
              alt={article.title}
              className="w-full h-full object-cover opacity-25"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/95 to-primary/30" />
          </div>

          <div className="relative z-10 max-w-container mx-auto px-4 lg:px-6">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="max-w-3xl"
            >
              {/* Breadcrumb */}
              <motion.div
                variants={fadeUpVariant}
                className="flex flex-wrap items-center gap-2 text-white/70 text-xs md:text-sm mb-4"
              >
                <Link to="/" className="hover:text-primary transition-colors">
                  Home
                </Link>
                <ChevronRight className="w-3.5 h-3.5" />
                <Link to="/growing-practice" className="hover:text-primary transition-colors">
                  Growing Practice
                </Link>
                <ChevronRight className="w-3.5 h-3.5" />
                <span className="text-white font-medium truncate">{article.title}</span>
              </motion.div>

              {/* Tag / Category Badge */}
              <motion.div variants={fadeUpVariant} className="flex items-center gap-3 mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary/20 text-emerald-300 border border-primary/30">
                  <Sprout className="w-3.5 h-3.5" />
                  {article.categoryTitle} — India
                </span>
                <span className="inline-flex items-center gap-1 text-xs text-white/60">
                  <Clock className="w-3.5 h-3.5" />
                  {article.readTime}
                </span>
              </motion.div>

              <motion.h1
                variants={fadeUpVariant}
                className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4"
              >
                {article.title}
              </motion.h1>

              <motion.p
                variants={fadeUpVariant}
                className="text-white/80 text-base md:text-xl leading-relaxed mb-6"
              >
                {article.subtitle}
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Highlights Bar */}
        <section className="bg-white border-b border-gray-200 py-6 shadow-sm">
          <div className="max-w-container mx-auto px-4 lg:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {article.highlights.map((h, i) => (
                <div key={i} className="p-2">
                  <p className="text-2xl md:text-3xl font-extrabold text-primary">{h.value}</p>
                  <p className="text-xs font-bold text-gray-900 mt-1 uppercase tracking-wider">
                    {h.label}
                  </p>
                  <p className="text-xs text-gray-500 mt-0.5">{h.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Main Content Layout */}
        <section className="py-12 md:py-16">
          <div className="max-w-container mx-auto px-4 lg:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              {/* Quick Navigation Sticky Sidebar */}
              <aside className="lg:col-span-4 order-2 lg:order-1">
                <div className="sticky top-32 space-y-6">
                  {/* Table of Contents */}
                  <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                    <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">
                      On This Page
                    </h3>
                    <nav className="space-y-2">
                      <a
                        href="#overview"
                        className="block text-sm text-gray-700 hover:text-primary font-medium py-1 transition-colors"
                      >
                        • Agronomic Overview
                      </a>
                      {article.sections.map((s) => (
                        <a
                          key={s.id}
                          href={`#${s.id}`}
                          className="block text-sm text-gray-700 hover:text-primary font-medium py-1 transition-colors"
                        >
                          • {s.title}
                        </a>
                      ))}
                      <a
                        href="#recommended-products"
                        className="block text-sm text-gray-700 hover:text-primary font-medium py-1 transition-colors"
                      >
                        • Recommended Mike Alpha Products
                      </a>
                      <a
                        href="#best-practices"
                        className="block text-sm text-gray-700 hover:text-primary font-medium py-1 transition-colors"
                      >
                        • Best Practices for Indian Farms
                      </a>
                    </nav>
                  </div>

                  {/* Agronomic Help Callout */}
                  <div className="bg-emerald-50 rounded-2xl border border-emerald-200 p-6 shadow-sm">
                    <div className="flex items-center gap-2 text-primary font-bold text-sm mb-2">
                      <ShieldCheck className="w-5 h-5 text-primary" />
                      Agronomy Advisory — India
                    </div>
                    <p className="text-xs text-gray-700 leading-relaxed mb-4">
                      Need custom dosage charts, drip fertigation injection calculations, or soil test analysis for your farm?
                    </p>
                    <Link
                      to="/contact"
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-primary text-white text-xs font-semibold rounded-lg hover:bg-primary-dark transition-colors shadow-sm"
                    >
                      <Send className="w-3.5 h-3.5" /> Speak with an Agronomist
                    </Link>
                  </div>
                </div>
              </aside>

              {/* Main Reading Flow */}
              <article className="lg:col-span-8 order-1 lg:order-2 space-y-10">
                {/* Overview Box */}
                <div
                  id="overview"
                  className="scroll-mt-36 bg-white p-8 rounded-2xl border border-gray-200 shadow-sm leading-relaxed"
                >
                  <h2 className="text-2xl font-bold text-navy mb-4">Agronomic Overview</h2>
                  <p className="text-base text-gray-700 leading-relaxed">{article.overview}</p>
                </div>

                {/* Main Sections */}
                {article.sections.map((section) => (
                  <div
                    key={section.id}
                    id={section.id}
                    className="scroll-mt-36 bg-white p-8 rounded-2xl border border-gray-200 shadow-sm space-y-6"
                  >
                    <h2 className="text-2xl font-bold text-navy border-b border-gray-100 pb-3">
                      {section.title}
                    </h2>
                    <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                      {section.content}
                    </p>

                    {/* Subsections */}
                    {section.subsections && section.subsections.length > 0 && (
                      <div className="space-y-6 pt-2">
                        {section.subsections.map((sub, idx) => (
                          <div
                            key={idx}
                            className="bg-gray-50/80 p-5 rounded-xl border border-gray-100"
                          >
                            <h3 className="text-base font-bold text-gray-900 mb-2">
                              {sub.title}
                            </h3>
                            <p className="text-sm text-gray-600 leading-relaxed mb-3">
                              {sub.text}
                            </p>
                            {sub.bulletPoints && (
                              <ul className="space-y-1.5 pl-2">
                                {sub.bulletPoints.map((bp, bidx) => (
                                  <li
                                    key={bidx}
                                    className="flex items-start gap-2 text-xs md:text-sm text-gray-700"
                                  >
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                                    <span>{bp}</span>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Callout Box if present */}
                    {section.callout && (
                      <div
                        className={`p-4 rounded-xl border flex items-start gap-3 mt-4 ${
                          section.callout.type === 'warning'
                            ? 'bg-amber-50 border-amber-200 text-amber-900'
                            : section.callout.type === 'tip'
                              ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
                              : 'bg-blue-50 border-blue-200 text-blue-900'
                        }`}
                      >
                        {section.callout.type === 'warning' ? (
                          <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                        ) : section.callout.type === 'tip' ? (
                          <Lightbulb className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                        ) : (
                          <Info className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                        )}
                        <div>
                          <h4 className="text-xs font-bold uppercase tracking-wider mb-1">
                            {section.callout.title}
                          </h4>
                          <p className="text-xs md:text-sm leading-relaxed">
                            {section.callout.text}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}

                {/* Recommended Products */}
                <div
                  id="recommended-products"
                  className="scroll-mt-36 bg-white p-8 rounded-2xl border border-gray-200 shadow-sm"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-primary block">
                        Formulations Tailored to This Practice
                      </span>
                      <h2 className="text-2xl font-bold text-navy">
                        Recommended Mike Alpha Products
                      </h2>
                    </div>
                    <Link
                      to="/products"
                      className="text-xs font-semibold text-primary hover:underline hidden sm:inline-flex items-center gap-1"
                    >
                      View All Products <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {article.recommendedProducts.map((prod, idx) => (
                      <Link
                        key={idx}
                        to={`/products/${prod.slug}`}
                        className="group bg-gray-50 border border-gray-200 rounded-xl p-4 flex flex-col hover:border-primary hover:shadow-card transition-all"
                      >
                        <div className="aspect-[4/3] bg-white rounded-lg flex items-center justify-center p-3 mb-3 border border-gray-100">
                          <img
                            src={prod.image}
                            alt={prod.name}
                            className="max-h-24 max-w-full object-contain group-hover:scale-105 transition-transform"
                          />
                        </div>
                        <span className="inline-block px-2 py-0.5 text-[10px] font-semibold bg-emerald-100 text-emerald-800 rounded mb-1 self-start">
                          {prod.badge}
                        </span>
                        <h4 className="text-sm font-bold text-gray-900 group-hover:text-primary transition-colors mb-1 line-clamp-1">
                          {prod.name}
                        </h4>
                        <p className="text-xs text-gray-500 font-medium mb-2">{prod.formula}</p>
                        <p className="text-xs text-gray-600 line-clamp-2 mt-auto">{prod.role}</p>
                        <span className="mt-3 text-xs font-semibold text-primary inline-flex items-center gap-1">
                          Product Specifications →
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Best Practices Checklist */}
                <div
                  id="best-practices"
                  className="scroll-mt-36 bg-gradient-to-br from-emerald-900 to-navy text-white p-8 rounded-2xl shadow-md"
                >
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <CheckCircle2 className="w-6 h-6 text-emerald-400" />
                    Agronomic Best Practices for Indian Growers
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-white/90">
                    {article.bestPractices.map((bp, idx) => (
                      <div key={idx} className="flex items-start gap-3 bg-white/10 p-3.5 rounded-xl">
                        <span className="w-5 h-5 rounded-full bg-emerald-500 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                          {idx + 1}
                        </span>
                        <p className="text-xs leading-relaxed text-white/90">{bp}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Related Growing Practices */}
                {relatedArticles.length > 0 && (
                  <div className="pt-6 border-t border-gray-200">
                    <h3 className="text-xl font-bold text-navy mb-4">Related Growing Practices</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {relatedArticles.map((rel) => (
                        rel && (
                          <Link
                            key={rel.slug}
                            to={`/${rel.slug}`}
                            className="p-4 bg-white border border-gray-200 rounded-xl hover:border-primary transition-colors flex items-center justify-between group shadow-sm"
                          >
                            <div>
                              <span className="text-[10px] font-bold text-primary uppercase tracking-wider block">
                                {rel.categoryTitle}
                              </span>
                              <h4 className="text-sm font-bold text-gray-900 group-hover:text-primary transition-colors">
                                {rel.title}
                              </h4>
                            </div>
                            <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                          </Link>
                        )
                      ))}
                    </div>
                  </div>
                )}
              </article>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingActions />
    </div>
  );
}
