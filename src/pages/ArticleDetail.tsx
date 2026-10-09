import { useParams, Link } from 'react-router';
import { motion } from 'framer-motion';
import { ChevronLeft, ExternalLink } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/sections/Footer';
import FloatingActions from '@/components/FloatingActions';
import { findArticleBySlug } from '@/data/articleLookup';
import { staggerContainer, fadeUpVariant } from '@/lib/animations';

export default function ArticleDetail() {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? findArticleBySlug(slug) : undefined;

  if (!article) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <main className="pt-32 pb-20 text-center">
          <div className="max-w-container mx-auto px-4">
            <h1 className="text-2xl font-bold text-navy mb-4">Article not found</h1>
            <Link
              to="/"
              className="inline-flex items-center gap-1 text-primary hover:underline"
            >
              <ChevronLeft className="w-4 h-4" /> Return home
            </Link>
          </div>
        </main>
        <Footer />
        <FloatingActions />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="pt-28 pb-20">
        <div className="max-w-container mx-auto px-4 lg:px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={fadeUpVariant} className="mb-8">
              <Link
                to="/"
                className="inline-flex items-center gap-1 text-sm text-brand-text-secondary hover:text-primary transition-colors"
              >
                <ChevronLeft className="w-4 h-4" /> Home
              </Link>
            </motion.div>

            {article.date && (
              <motion.p
                variants={fadeUpVariant}
                className="text-sm text-brand-text-secondary mb-3"
              >
                {article.date}
              </motion.p>
            )}

            <motion.h1
              variants={fadeUpVariant}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-8 leading-tight"
            >
              {article.title}
            </motion.h1>

            {article.image && (
              <motion.div
                variants={fadeUpVariant}
                className="rounded-2xl overflow-hidden border border-brand-border shadow-card mb-10"
              >
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-[300px] md:h-[420px] object-cover"
                />
              </motion.div>
            )}

            {article.htmlContent ? (
              <motion.div
                variants={fadeUpVariant}
                className="prose prose-lg max-w-none text-brand-text-primary leading-relaxed article-content"
                dangerouslySetInnerHTML={{ __html: article.htmlContent }}
              />
            ) : (article.description || article.content) ? (
              <motion.div
                variants={fadeUpVariant}
                className="prose prose-lg max-w-none text-brand-text-primary leading-relaxed"
              >
                {article.description && <p>{article.description}</p>}
                {article.content && <p>{article.content}</p>}
              </motion.div>
            ) : null}

            {article.sourceUrl && (
              <motion.div
                variants={fadeUpVariant}
                className="mt-12 pt-6 border-t border-gray-200 flex items-center justify-between flex-wrap gap-4"
              >
                <span className="text-sm text-gray-500">
                  Detailed agronomic recommendations provided by Haifa Group
                </span>
                <a
                  href={article.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
                >
                  View on Haifa Group <ExternalLink className="w-4 h-4" />
                </a>
              </motion.div>
            )}
          </motion.div>
        </div>
      </main>

      <Footer />
      <FloatingActions />
    </div>
  );
}
