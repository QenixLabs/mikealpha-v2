import { useParams, Link } from 'react-router';
import { motion } from 'framer-motion';
import {
  Award,
  FileText,
  BookOpen,
  Tag,
  ExternalLink,
  Leaf,
  ChevronRight,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/sections/Footer';
import FloatingActions from '@/components/FloatingActions';
import { getCropGuideBySlug, type CropResource } from '@/data/cropGuides';
import { toInternalArticleUrl } from '@/lib/utils';

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

function NutriHaitechBadge() {
  return (
    <div className="inline-flex items-center gap-2 bg-white/95 backdrop-blur-sm rounded-lg px-4 py-2 shadow-card">
      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
        <Leaf className="w-4 h-4 text-white" />
      </div>
      <span className="text-sm font-bold text-navy tracking-wide">Nutri Haitech</span>
    </div>
  );
}

export default function CropGuide() {
  const { slug, '*': splat } = useParams<{ slug?: string; '*': string }>();
  const pathSlug = slug || (splat ? `crop-guide/${splat}` : undefined);
  const guide = pathSlug ? getCropGuideBySlug(pathSlug) : undefined;

  if (!guide) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <main className="pt-32 pb-20 text-center">
          <h1 className="text-3xl font-semibold text-gray-800 mb-4">Crop guide not found</h1>
          <Link to="/" className="text-primary hover:underline">Return home</Link>
        </main>
        <Footer />
        <FloatingActions />
      </div>
    );
  }

  const intro = guide.intro ?? guide.body;
  const hasResources = guide.resources && guide.resources.length > 0;

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Banner */}
      <section className="w-full px-4 lg:px-6 pt-4">
        <div className="max-w-container mx-auto">
          <div className="relative w-full h-[260px] md:h-[340px] lg:h-[400px] rounded-2xl overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${guide.bannerImage})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/60 to-transparent" />
            <div className="relative z-10 h-full flex flex-col justify-between p-6 md:p-10">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <NutriHaitechBadge />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="max-w-2xl"
              >
                <nav className="text-xs text-white/80 mb-3 flex flex-wrap items-center gap-1">
                  <Link to="/" className="hover:text-white">Home</Link>
                  <ChevronRight className="w-3 h-3" />
                  <Link to="/" className="hover:text-white">Crop Guide</Link>
                  <ChevronRight className="w-3 h-3" />
                  <span>{guide.category}</span>
                  <ChevronRight className="w-3 h-3" />
                  <span className="text-white">{guide.h1}</span>
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
                <p key={idx} className="mb-4">
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
          </div>

          {/* Right column / sidebar */}
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-24 space-y-6">
              {guide.recommendationsLink && (
                <div className="bg-primary-light border border-primary/20 rounded-lg p-5">
                  <h4 className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">
                    Recommendations
                  </h4>
                  {(() => {
                    const internalUrl = toInternalArticleUrl(guide.recommendationsLink.href);
                    const content = (
                      <span className="inline-flex items-start gap-2 text-sm font-medium text-gray-800 hover:text-primary transition-colors">
                        <Award className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>{guide.recommendationsLink.text}</span>
                      </span>
                    );
                    return internalUrl ? (
                      <Link to={internalUrl}>{content}</Link>
                    ) : (
                      <a
                        href={guide.recommendationsLink.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {content}
                      </a>
                    );
                  })()}
                </div>
              )}

              {(guide.relatedTagsLink || guide.sourceLink) && (
                <div className="bg-white border border-brand-border rounded-lg p-5 shadow-card">
                  <h4 className="text-sm font-semibold text-navy uppercase tracking-wider mb-4">
                    More information
                  </h4>
                  <div className="space-y-3">
                    {guide.relatedTagsLink && (
                      (() => {
                        const internalUrl = toInternalArticleUrl(guide.relatedTagsLink!.href);
                        const content = (
                          <span className="flex items-start gap-2 text-sm text-gray-700 hover:text-primary transition-colors">
                            <Tag className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
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
                          <span className="flex items-start gap-2 text-sm text-gray-700 hover:text-primary transition-colors">
                            <ExternalLink className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
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
            </div>
          </aside>
        </div>
      </motion.article>

      <Footer />
      <FloatingActions />
    </div>
  );
}
