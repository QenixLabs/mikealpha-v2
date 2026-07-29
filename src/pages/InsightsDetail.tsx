import { Link, useLocation } from 'react-router';
import { motion } from 'framer-motion';
import { ChevronRight, ExternalLink, Play } from 'lucide-react';
import ImpactLayout from '@/components/ImpactLayout';
import {
  getInsightsArticleByPath,
  type InsightsArticle,
  type InsightsCard,
  type InsightsFaqGroup,
  type InsightsVideoGroup,
} from '@/data/insightsArticles';
import { staggerContainer, fadeUpVariant } from '@/lib/animations';
import { cn } from '@/lib/utils';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

function Breadcrumb({ article }: { article: InsightsArticle }) {
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

function Hero({ article }: { article: InsightsArticle }) {
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

function Intro({ article }: { article: InsightsArticle }) {
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

function CardGrid({ cards }: { cards: InsightsCard[] }) {
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
          {cards.map((card) => {
            const content = (
              <motion.div
                variants={fadeUpVariant}
                className="group bg-white border border-brand-border rounded-lg overflow-hidden hover:shadow-card-hover transition-all h-full flex flex-col"
              >
                {card.image ? (
                  <div className="h-48 overflow-hidden">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                ) : (
                  <div className="h-48 bg-navy/5 flex items-center justify-center">
                    <Play className="w-10 h-10 text-primary/40" />
                  </div>
                )}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-lg font-bold text-navy leading-snug mb-3">
                    {card.title}
                  </h3>
                  {card.description && (
                    <p className="text-sm text-brand-text-secondary leading-relaxed mb-4 flex-1">
                      {card.description}
                    </p>
                  )}
                  {card.link && (
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-primary mt-auto">
                      Explore <ExternalLink className="w-4 h-4" />
                    </span>
                  )}
                </div>
              </motion.div>
            );
            if (!card.link) return content;
            const isExternal = /^https?:\/\//i.test(card.link);
            return isExternal ? (
              <a
                key={card.title}
                href={card.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                {content}
              </a>
            ) : (
              <Link key={card.title} to={card.link} className="block">
                {content}
              </Link>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

function VideoEmbed({ src }: { src: string }) {
  return (
    <div className="aspect-video w-full rounded-xl overflow-hidden border border-brand-border shadow-card bg-black">
      <iframe
        src={src}
        title="Mike Alpha video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full"
      />
    </div>
  );
}

function VideoGroups({ groups }: { groups: InsightsVideoGroup[] }) {
  return (
    <section className="py-12 md:py-16">
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
              className="text-2xl md:text-3xl font-bold text-navy mb-4"
            >
              {group.title}
            </motion.h2>
            {group.description && (
              <motion.p
                variants={fadeUpVariant}
                className="text-brand-text-secondary leading-relaxed max-w-3xl mb-6"
              >
                {group.description}
              </motion.p>
            )}
            {group.iframes.length > 0 && (
              <motion.div
                variants={fadeUpVariant}
                className={cn(
                  'grid gap-6',
                  group.iframes.length === 1
                    ? 'grid-cols-1 max-w-3xl'
                    : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
                )}
              >
                {group.iframes.map((src) => (
                  <VideoEmbed key={src} src={src} />
                ))}
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function FAQGroups({ groups }: { groups: InsightsFaqGroup[] }) {
  return (
    <section className="py-12 md:py-16 bg-brand-background">
      <div className="max-w-container mx-auto px-4 lg:px-6 space-y-16">
        {groups.map((group) => (
          <motion.div
            key={group.category}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              variants={fadeUpVariant}
              className="text-2xl md:text-3xl font-bold text-navy mb-6"
            >
              {group.category}
            </motion.h2>
            <motion.div variants={fadeUpVariant}>
              <Accordion type="multiple" className="bg-white border border-brand-border rounded-lg px-4 md:px-6">
                {group.items.map((item, idx) => (
                  <AccordionItem key={idx} value={`${group.category}-${idx}`}>
                    <AccordionTrigger className="text-left text-base text-navy hover:no-underline">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent>
                      <div
                        className="prose prose-sm max-w-none text-brand-text-secondary"
                        dangerouslySetInnerHTML={{ __html: item.answer }}
                      />
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default function InsightsDetail() {
  const { pathname } = useLocation();
  const article = getInsightsArticleByPath(pathname);

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
      {article.videoGroups && article.videoGroups.length > 0 && (
        <VideoGroups groups={article.videoGroups} />
      )}
      {article.cards && article.cards.length > 0 && <CardGrid cards={article.cards} />}
      {article.faqGroups && article.faqGroups.length > 0 && (
        <FAQGroups groups={article.faqGroups} />
      )}
    </ImpactLayout>
  );
}
