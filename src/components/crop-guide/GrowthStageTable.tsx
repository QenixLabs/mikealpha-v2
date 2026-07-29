import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Check } from 'lucide-react';
import type { GrowthStage } from '@/data/cropGuides';

export function GrowthStageTable({
  stages,
  caption,
}: {
  stages: GrowthStage[];
  caption?: string;
}) {
  const allProducts = Array.from(
    new Set(stages.flatMap((s) => s.products))
  );

  if (allProducts.length === 0) return null;

  return (
    <div className="overflow-x-auto rounded-lg border border-brand-border bg-white">
      <Table>
        {caption && <caption className="caption-top text-left px-4 pt-4 pb-2 text-sm font-semibold text-navy">{caption}</caption>}
        <TableHeader>
          <TableRow className="bg-brand-background-alt hover:bg-brand-background-alt">
            <TableHead className="text-navy font-semibold min-w-[180px]">Product</TableHead>
            {stages.map((stage) => (
              <TableHead
                key={stage.name}
                className="text-navy font-semibold text-center min-w-[120px]"
              >
                {stage.name}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {allProducts.map((product) => (
            <TableRow key={product} className="hover:bg-brand-background-alt/50">
              <TableCell className="font-medium text-brand-text-primary">
                {product}
              </TableCell>
              {stages.map((stage) => (
                <TableCell key={stage.name} className="text-center">
                  {stage.products.includes(product) ? (
                    <div className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary-light text-primary">
                      <Check className="w-4 h-4" />
                    </div>
                  ) : (
                    <span className="text-brand-text-muted">—</span>
                  )}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
