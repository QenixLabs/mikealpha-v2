import { ArrowRight, BookOpen, ExternalLink, Tag } from 'lucide-react';

export function RecommendationsCard({
  text,
  href,
}: {
  text?: string;
  href?: string;
}) {
  if (!text || !href) return null;

  return (
    <div className="bg-primary-light border border-primary/20 rounded-lg p-6">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
          <BookOpen className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-1">
            Recommendations
          </h4>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-base font-medium text-gray-800 hover:text-primary transition-colors"
          >
            {text}
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}

export function RelatedTagsLink({
  text,
  href,
}: {
  text?: string;
  href?: string;
}) {
  if (!text || !href) return null;

  return (
    <div className="flex items-center gap-3">
      <Tag className="w-5 h-5 text-primary" />
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm font-medium text-gray-700 hover:text-primary transition-colors"
      >
        {text}
      </a>
    </div>
  );
}

export function SourceLink({
  text,
  href,
}: {
  text?: string;
  href?: string;
}) {
  if (!text || !href) return null;

  return (
    <p className="text-sm text-gray-500">
      Source:{" "}
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary hover:underline inline-flex items-center gap-1"
      >
        {text}
        <ExternalLink className="w-3 h-3" />
      </a>
    </p>
  );
}
