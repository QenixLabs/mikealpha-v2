import { cn } from '@/lib/utils';
import {
  Thermometer,
  Droplets,
  Leaf,
  Sun,
  AlertTriangle,
  Beaker,
  Sprout,
  Shovel,
  type LucideIcon,
} from 'lucide-react';
import type { CropHighlight } from '@/data/cropGuides';

const iconMap: Record<string, LucideIcon> = {
  temperature: Thermometer,
  calcium: Leaf,
  nitrate: Beaker,
  potassium: Droplets,
  magnesium: Sun,
  iron: Sun,
  ph: Beaker,
  salinity: AlertTriangle,
  water: Droplets,
  soil: Shovel,
  stress: AlertTriangle,
  growth: Sprout,
};

function getIcon(title: string): LucideIcon {
  const key = title.toLowerCase();
  for (const k in iconMap) {
    if (key.includes(k)) return iconMap[k];
  }
  return Sprout;
}

export function CropHighlights({
  highlights,
  className,
}: {
  highlights: CropHighlight[];
  className?: string;
}) {
  return (
    <div className={cn('grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4', className)}>
      {highlights.map((item, idx) => {
        const Icon = getIcon(item.title);
        return (
          <div
            key={idx}
            className="bg-white border border-brand-border rounded-lg p-5 shadow-card hover:shadow-card-hover transition-shadow"
          >
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center flex-shrink-0">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-navy mb-1">
                  {item.title}
                </h4>
                <p className="text-sm text-brand-text-secondary leading-relaxed">
                  {item.text}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
