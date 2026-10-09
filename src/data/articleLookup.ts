import { insightsArticles } from './insightsArticles';
import { corporateArticles } from './corporateArticles';
import { cropGuides } from './cropGuides';
import { recommendationArticles } from './recommendationArticles';

export type LookupArticle = {
  title: string;
  image?: string;
  description?: string;
  date?: string;
  content?: string;
  htmlContent?: string;
  sourceUrl?: string;
};

function slugFromUrl(url?: string): string | undefined {
  if (!url || !/^https?:\/\//i.test(url)) return undefined;
  try {
    return new URL(url).pathname.replace(/\/$/, '').split('/').pop();
  } catch {
    return undefined;
  }
}

export function findArticleBySlug(target: string): LookupArticle | undefined {
  if (!target) return undefined;
  const decodedTarget = decodeURIComponent(target);
  const encodedTarget = encodeURIComponent(target);

  // Haifa recommendation & crop guides details
  const rec = recommendationArticles[target] || 
              recommendationArticles[decodedTarget] || 
              recommendationArticles[encodedTarget];
  if (rec) {
    return {
      title: rec.title,
      image: rec.image,
      description: rec.description,
      htmlContent: rec.htmlContent,
      sourceUrl: rec.sourceUrl,
    };
  }

  // Insights cards (podcasts / success stories)
  for (const article of insightsArticles) {
    for (const card of article.cards || []) {
      if (slugFromUrl(card.link) === target) {
        return {
          title: card.title,
          image: card.image,
          description: card.description,
        };
      }
    }
  }

  // Corporate news cards and PDF links
  for (const article of corporateArticles) {
    for (const card of article.newsCards || []) {
      if (slugFromUrl(card.link) === target) {
        return {
          title: card.title,
          image: card.image,
          date: card.date,
          description: card.excerpt,
        };
      }
    }
    for (const section of article.sections || []) {
      for (const link of section.links || []) {
        if (slugFromUrl(link.url) === target) {
          return {
            title: link.label,
            content: link.label,
          };
        }
      }
    }
  }

  // Crop guide resources and sidebar links fallback
  for (const guide of cropGuides) {
    const links = [
      ...(guide.resources || []).map((r) => ({ text: r.text, href: r.href })),
      guide.recommendationsLink,
      guide.relatedTagsLink,
      guide.sourceLink,
    ].filter(Boolean) as { text: string; href: string }[];

    for (const link of links) {
      if (slugFromUrl(link.href) === target) {
        return {
          title: link.text,
          image: guide.bannerImage,
          description: link.text,
        };
      }
    }
  }

  return undefined;
}
