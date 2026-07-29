import { useState } from 'react';
import { Link, useLocation } from 'react-router';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import ImpactLayout from '@/components/ImpactLayout';
import {
  getImpactArticleByPath,
  type ImpactArticle,
  type ImpactSection,
  type ImpactStat,
  type ImpactTab,
} from '@/data/impactArticles';
import { staggerContainer, fadeUpVariant } from '@/lib/animations';
import { cn } from '@/lib/utils';

function Breadcrumb({ article }: { article: ImpactArticle }) {
  return (
    <motion.div
      variants={fadeUpVariant}
      className="flex flex-wrap items-center gap-2 text-sm text-white/80 mb-6"
    >
      {article.breadcrumb.map((crumb, idx) => (
        <span key={idx} className="flex items-center gap-2">
          {idx > 0 && <ChevronRight className="w-4 h-4" />}
          {crumb.to ? (
            <Link to={crumb.to} className="hover:text-primary transition-colors">
              {crumb.label}
            </Link>
          ) : (
            <span className="text-white">{crumb.label}</span>
          )}
        </span>
      ))}
    </motion.div>
  );
}

function Hero({ article }: { article: ImpactArticle }) {
  return (
    <section className="relative bg-navy text-white py-20 md:py-28 overflow-hidden">
      {article.heroImage && (
        <img
          src={article.heroImage}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-25"
        />
      )}
      <div className="absolute inset-0 bg-navy/70" />
      <div className="relative max-w-container mx-auto px-4 lg:px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Breadcrumb article={article} />
          {article.subtitle && (
            <motion.p
              variants={fadeUpVariant}
              className="text-primary font-semibold uppercase tracking-wider mb-3"
            >
              {article.subtitle}
            </motion.p>
          )}
          <motion.h1
            variants={fadeUpVariant}
            className="text-3xl md:text-4xl lg:text-5xl font-bold max-w-4xl leading-tight"
          >
            {article.title}
          </motion.h1>
        </motion.div>
      </div>
    </section>
  );
}

function Intro({ article }: { article: ImpactArticle }) {
  if (!article.intro) return null;
  return (
    <section className="py-12 md:py-16">
      <div className="max-w-container mx-auto px-4 lg:px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.p
            variants={fadeUpVariant}
            className="text-lg md:text-xl text-brand-text-primary leading-relaxed max-w-4xl"
          >
            {article.intro}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

function StatsSection({ stats }: { stats: ImpactStat[] }) {
  return (
    <section className="py-12 md:py-16 bg-brand-background">
      <div className="max-w-container mx-auto px-4 lg:px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeUpVariant}
              className="bg-white border border-brand-border rounded-lg p-6 text-center"
            >
              <p
                className="text-4xl md:text-5xl font-bold mb-2"
                style={{ color: stat.color || '#00854D' }}
              >
                {stat.value}
              </p>
              <p className="text-sm font-semibold text-navy uppercase tracking-wide">
                {stat.label}
              </p>
              {stat.sublabel && (
                <p className="text-xs text-brand-text-secondary mt-1">{stat.sublabel}</p>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Sections({ sections }: { sections: ImpactSection[] }) {
  return (
    <section className="py-12 md:py-16">
      <div className="max-w-container mx-auto px-4 lg:px-6 space-y-16">
        {sections.map((section, idx) => (
          <motion.div
            key={idx}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={cn(
              'grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center',
              idx % 2 === 1 && 'lg:flex-row-reverse'
            )}
          >
            <motion.div variants={fadeUpVariant} className={idx % 2 === 1 ? 'lg:order-2' : ''}>
              {section.title && (
                <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">
                  {section.title}
                </h2>
              )}
              <p className="text-brand-text-secondary leading-relaxed whitespace-pre-line">
                {section.content}
              </p>
            </motion.div>
            {section.image && (
              <motion.div
                variants={fadeUpVariant}
                className={cn(
                  'rounded-xl overflow-hidden border border-brand-border shadow-card',
                  idx % 2 === 1 ? 'lg:order-1' : ''
                )}
              >
                <img
                  src={section.image}
                  alt={section.imageAlt || section.title || ''}
                  className="w-full h-full object-cover min-h-[260px]"
                />
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function TabsSection({ tabs }: { tabs: ImpactTab[] }) {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id || '');
  const active = tabs.find((t) => t.id === activeTab) || tabs[0];

  return (
    <section className="py-12 md:py-16 bg-brand-background">
      <div className="max-w-container mx-auto px-4 lg:px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            variants={fadeUpVariant}
            className="flex flex-wrap gap-2 mb-8 border-b border-brand-border pb-4"
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  'px-5 py-2.5 rounded-full text-sm font-medium transition-all',
                  activeTab === tab.id
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-white text-brand-text-secondary border border-brand-border hover:border-primary hover:text-primary'
                )}
              >
                {tab.label}
              </button>
            ))}
          </motion.div>
          {active && (
            <motion.div
              key={active.id}
              variants={fadeUpVariant}
              initial="hidden"
              animate="visible"
              className="bg-white border border-brand-border rounded-xl p-6 md:p-8"
            >
              <h3 className="text-xl md:text-2xl font-bold text-navy mb-4">
                {active.label}
              </h3>
              <p className="text-brand-text-secondary leading-relaxed whitespace-pre-line">
                {active.content}
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}

function FooterText({ text }: { text: string }) {
  return (
    <section className="py-12 md:py-16">
      <div className="max-w-container mx-auto px-4 lg:px-6">
        <motion.p
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-sm text-brand-text-secondary leading-relaxed"
        >
          {text}
        </motion.p>
      </div>
    </section>
  );
}

export default function ImpactDetail() {
  const { pathname } = useLocation();
  const article = getImpactArticleByPath(pathname);

  if (!article) {
    return (
      <ImpactLayout>
        <div className="pt-32 pb-20 text-center">
          <h1 className="text-2xl font-bold text-navy">Page not found</h1>
        </div>
      </ImpactLayout>
    );
  }

  return (
    <ImpactLayout>
      <Hero article={article} />
      <Intro article={article} />
      {article.stats && article.stats.length > 0 && <StatsSection stats={article.stats} />}
      {article.sections && article.sections.length > 0 && <Sections sections={article.sections} />}
      {article.tabs && article.tabs.length > 0 && <TabsSection tabs={article.tabs} />}
      {article.footerText && <FooterText text={article.footerText} />}
    </ImpactLayout>
  );
}
