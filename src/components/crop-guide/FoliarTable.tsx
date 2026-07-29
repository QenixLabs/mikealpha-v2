import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import type { FoliarProgram } from '@/data/cropGuides';

export function FoliarTable({
  programs,
  caption,
}: {
  programs: FoliarProgram[];
  caption?: string;
}) {
  if (programs.length === 0) return null;

  return (
    <div className="overflow-x-auto rounded-lg border border-brand-border bg-white">
      <Table>
        {caption && <caption className="caption-top text-left px-4 pt-4 pb-2 text-sm font-semibold text-navy">{caption}</caption>}
        <TableHeader>
          <TableRow className="bg-brand-background-alt hover:bg-brand-background-alt">
            <TableHead className="text-navy font-semibold">Growth stage</TableHead>
            <TableHead className="text-navy font-semibold">Product</TableHead>
            <TableHead className="text-navy font-semibold">Concentration</TableHead>
            <TableHead className="text-navy font-semibold">Spray volume</TableHead>
            <TableHead className="text-navy font-semibold">Max rate</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {programs.map((program, idx) => (
            <TableRow key={idx} className="hover:bg-brand-background-alt/50">
              <TableCell className="font-medium text-brand-text-primary">
                {program.stage}
              </TableCell>
              <TableCell>{program.product}</TableCell>
              <TableCell>{program.concentration || '—'}</TableCell>
              <TableCell>{program.sprayVolume || '—'}</TableCell>
              <TableCell>{program.maxRate || '—'}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
