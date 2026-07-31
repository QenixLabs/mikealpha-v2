import { Link, useLocation } from 'react-router';
import { motion } from 'framer-motion';
import { ChevronRight, ExternalLink, FileText, MapPin } from 'lucide-react';
import ImpactLayout from '@/components/ImpactLayout';
import {
  getCorporateArticleByPath,
  type CorporateArticle,
  type CorporateSection,
} from '@/data/corporateArticles';
import { staggerContainer, fadeUpVariant } from '@/lib/animations';
import { cn, toInternalArticleUrl } from '@/lib/utils';

function Breadcrumb({ article }: { article: CorporateArticle }) {
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

function Hero({ article }: { article: CorporateArticle }) {
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

function Intro({ article }: { article: CorporateArticle }) {
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

function SectionBlock({ section, index }: { section: CorporateSection; index: number }) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={cn(
        'grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start',
        index % 2 === 1 && 'lg:flex-row-reverse'
      )}
    >
      <motion.div variants={fadeUpVariant} className={index % 2 === 1 ? 'lg:order-2' : ''}>
        {section.title && (
          <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">{section.title}</h2>
        )}
        {section.content && (
          <p className="text-brand-text-secondary leading-relaxed whitespace-pre-line mb-4">
            {section.content}
          </p>
        )}
        {section.bullets && section.bullets.length > 0 && (
          <ul className="list-disc list-inside space-y-2 text-brand-text-secondary">
            {section.bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        )}
        {section.links && section.links.length > 0 && (
          <div className="space-y-3 mt-4">
            {section.links.map((link) => {
              const internalUrl = toInternalArticleUrl(link.url);
              return internalUrl ? (
                <Link
                  key={link.url}
                  to={internalUrl}
                  className="flex items-center gap-3 p-4 bg-white border border-brand-border rounded-lg hover:border-primary hover:shadow-card transition-all group"
                >
                  <FileText className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-navy font-medium group-hover:text-primary transition-colors">
                    {link.label}
                  </span>
                  <ExternalLink className="w-4 h-4 text-brand-text-secondary ml-auto" />
                </Link>
              ) : (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 bg-white border border-brand-border rounded-lg hover:border-primary hover:shadow-card transition-all group"
                >
                  <FileText className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-navy font-medium group-hover:text-primary transition-colors">
                    {link.label}
                  </span>
                  <ExternalLink className="w-4 h-4 text-brand-text-secondary ml-auto" />
                </a>
              );
            })}
          </div>
        )}
      </motion.div>
      {section.image && (
        <motion.div
          variants={fadeUpVariant}
          className={cn(
            'rounded-xl overflow-hidden border border-brand-border shadow-card',
            index % 2 === 1 ? 'lg:order-1' : ''
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
  );
}

function Sections({ sections }: { sections: CorporateSection[] }) {
  return (
    <section className="py-12 md:py-16 bg-brand-background">
      <div className="max-w-container mx-auto px-4 lg:px-6 space-y-16">
        {sections.map((section, idx) => (
          <SectionBlock key={idx} section={section} index={idx} />
        ))}
      </div>
    </section>
  );
}

function Initials({ name }: { name: string }) {
  const parts = name.split(' ').filter(Boolean);
  const initials = parts.slice(0, 2).map((p) => p[0]).join('').toUpperCase();
  return (
    <div className="w-20 h-20 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xl font-bold mb-4">
      {initials}
    </div>
  );
}

function LeaderCard({ leader }: { leader: { name: string; role: string; image?: string; link?: string } }) {
  const Card = (
    <div className="bg-white border border-brand-border rounded-xl p-6 text-center hover:shadow-card transition-shadow">
      {leader.image ? (
        <img
          src={leader.image}
          alt={leader.name}
          className="w-20 h-20 rounded-full object-cover mx-auto mb-4"
        />
      ) : (
        <Initials name={leader.name} />
      )}
      <h3 className="text-lg font-bold text-navy">{leader.name}</h3>
      <p className="text-sm text-brand-text-secondary mt-1">{leader.role}</p>
    </div>
  );

  if (leader.link) {
    const internalUrl = toInternalArticleUrl(leader.link);
    return internalUrl ? (
      <Link to={internalUrl} className="block">{Card}</Link>
    ) : (
      <a href={leader.link} target="_blank" rel="noopener noreferrer" className="block">
        {Card}
      </a>
    );
  }
  return Card;
}

function LeaderGroups({ groups }: { groups: CorporateArticle['leaderGroups'] }) {
  if (!groups) return null;
  return (
    <section className="py-12 md:py-16 bg-brand-background">
      <div className="max-w-container mx-auto px-4 lg:px-6 space-y-16">
        {groups.map((group) => (
          <motion.div
            key={group.title}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              variants={fadeUpVariant}
              className="text-2xl md:text-3xl font-bold text-navy mb-8"
            >
              {group.title}
            </motion.h2>
            <motion.div
              variants={fadeUpVariant}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {group.leaders.map((leader) => (
                <LeaderCard key={leader.name + leader.role} leader={leader} />
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function NewsCards({ cards }: { cards: CorporateArticle['newsCards'] }) {
  if (!cards) return null;
  return (
    <section className="py-12 md:py-16">
      <div className="max-w-container mx-auto px-4 lg:px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {cards.map((card) => (
            <motion.div
              key={card.title}
              variants={fadeUpVariant}
              className="group bg-white border border-brand-border rounded-lg overflow-hidden hover:shadow-card-hover transition-all"
            >
              {card.image && (
                <div className="h-48 overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              )}
              <div className="p-6">
                {card.date && (
                  <p className="text-xs text-brand-text-secondary mb-2">{card.date}</p>
                )}
                <h3 className="text-lg font-bold text-navy mb-3 leading-snug">{card.title}</h3>
                {card.link ? (
                  <Link
                    to={toInternalArticleUrl(card.link) || card.link}
                    className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                  >
                    Read more <ExternalLink className="w-4 h-4" />
                  </Link>
                ) : null}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function BranchRegions({ regions }: { regions: CorporateArticle['branchRegions'] }) {
  if (!regions) return null;
  return (
    <section className="py-12 md:py-16 bg-brand-background">
      <div className="max-w-container mx-auto px-4 lg:px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {regions.map((region) => (
            <motion.div
              key={region.region}
              variants={fadeUpVariant}
              className="bg-white border border-brand-border rounded-xl p-6"
            >
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-5 h-5 text-primary" />
                <h3 className="text-xl font-bold text-navy">{region.region}</h3>
              </div>
              <ul className="space-y-2">
                {region.items.map((item) => (
                  <li key={item.label} className="text-brand-text-secondary">
                    {item.url ? (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary transition-colors"
                      >
                        {item.label}
                      </a>
                    ) : (
                      item.label
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
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
          className="text-lg italic text-brand-text-secondary leading-relaxed border-l-4 border-primary pl-6"
        >
          {text}
        </motion.p>
      </div>
    </section>
  );
}

export default function CorporateDetail() {
  const { pathname } = useLocation();
  const article = getCorporateArticleByPath(pathname);

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
      {article.sections && article.sections.length > 0 && <Sections sections={article.sections} />}
      {article.leaderGroups && article.leaderGroups.length > 0 && <LeaderGroups groups={article.leaderGroups} />}
      {article.newsCards && article.newsCards.length > 0 && <NewsCards cards={article.newsCards} />}
      {article.branchRegions && article.branchRegions.length > 0 && <BranchRegions regions={article.branchRegions} />}
      {article.footerText && <FooterText text={article.footerText} />}
    </ImpactLayout>
  );
}
